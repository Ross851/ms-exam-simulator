# Email Provider Configuration Examples

This document provides detailed examples for configuring different email providers with GitHub Secrets for the MS Exam Simulator monitoring system.

## Table of Contents

- [Gmail Configuration](#gmail-configuration)
- [Outlook Personal Configuration](#outlook-personal-configuration)
- [Office 365 Business Configuration](#office-365-business-configuration)
- [Yahoo Mail Configuration](#yahoo-mail-configuration)
- [Custom SMTP Configuration](#custom-smtp-configuration)
- [Ancoris Corporate Email](#ancoris-corporate-email)

---

## Gmail Configuration

### Prerequisites
- Gmail account (personal or G Suite)
- 2-Factor Authentication enabled

### Step-by-Step Setup

#### 1. Enable 2-Factor Authentication

1. Visit: https://myaccount.google.com/security
2. Scroll to "Signing in to Google"
3. Click "2-Step Verification"
4. Follow prompts to set up (SMS, authenticator app, or security key)

#### 2. Generate App Password

1. Visit: https://myaccount.google.com/apppasswords
2. You may need to sign in again
3. Select "Mail" from the app dropdown
4. Select "Other (Custom name)" from device dropdown
5. Enter name: "MS Exam Simulator" or "GitHub Actions"
6. Click "Generate"
7. Copy the 16-character password (spaces are optional)

Example app password format: `abcd efgh ijkl mnop`

#### 3. Configure GitHub Secrets

```yaml
# Secret Configuration
EMAIL_USERNAME: your.email@gmail.com
EMAIL_PASSWORD: abcdefghijklmnop  # 16 chars, no spaces
EMAIL_TO: recipient@example.com

# Multiple recipients (comma-separated, no spaces)
EMAIL_TO: admin@example.com,team@example.com,alerts@example.com
```

#### 4. SMTP Configuration Reference

```yaml
SMTP Server: smtp.gmail.com
Port: 587 (TLS - recommended)
Alternative Port: 465 (SSL)
Authentication: Required
Connection Security: STARTTLS (port 587) or SSL/TLS (port 465)
```

### Testing Gmail Configuration

Test script to verify connection:

```python
import smtplib
from email.mime.text import MIMEText

# Configuration
smtp_server = "smtp.gmail.com"
smtp_port = 587
username = "your.email@gmail.com"
app_password = "abcdefghijklmnop"

# Create test message
msg = MIMEText("Test email from Python")
msg['Subject'] = "Gmail SMTP Test"
msg['From'] = username
msg['To'] = "recipient@example.com"

# Send email
try:
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(username, app_password)
    server.send_message(msg)
    server.quit()
    print("✅ Email sent successfully!")
except Exception as e:
    print(f"❌ Error: {e}")
```

### Common Gmail Issues

**Issue: "App passwords" option not available**
- Solution: Enable 2-Factor Authentication first
- 2FA is required for app passwords

**Issue: "Username and Password not accepted"**
- Solution: Ensure you're using app password, not regular password
- Remove any spaces from the app password
- Regenerate app password if needed

**Issue: "Less secure app access" message**
- Solution: Ignore this - app passwords don't require "less secure" access
- This setting only applies to regular passwords

**Issue: Rate limiting**
- Gmail free: 500 emails/day
- G Suite: 2,000 emails/day
- Solution: Batch notifications or reduce frequency

---

## Outlook Personal Configuration

### Prerequisites
- Outlook.com, Hotmail.com, or Live.com account
- Two-step verification enabled

### Step-by-Step Setup

#### 1. Enable Two-Step Verification

1. Visit: https://account.microsoft.com/security
2. Click "Advanced security options"
3. Under "Two-step verification", click "Turn on"
4. Choose verification method (app, SMS, or email)
5. Follow prompts to complete setup

#### 2. Create App Password

1. Return to: https://account.microsoft.com/security
2. Scroll to "App passwords" section
3. Click "Create a new app password"
4. A password will be displayed (16 characters)
5. Copy this password immediately (cannot view again)

#### 3. Configure GitHub Secrets

```yaml
EMAIL_USERNAME: your.email@outlook.com
EMAIL_PASSWORD: (16-character app password from step 2)
EMAIL_TO: recipient@example.com
```

#### 4. SMTP Configuration Reference

```yaml
SMTP Server: smtp-mail.outlook.com (recommended)
Alternative: smtp.office365.com
Port: 587 (TLS - recommended)
Alternative Port: 25 (may be blocked)
Authentication: Required
Connection Security: STARTTLS
```

### Testing Outlook Configuration

```python
import smtplib
from email.mime.text import MIMEText

# Configuration
smtp_server = "smtp-mail.outlook.com"
smtp_port = 587
username = "your.email@outlook.com"
app_password = "your-app-password"

msg = MIMEText("Test email from Python")
msg['Subject'] = "Outlook SMTP Test"
msg['From'] = username
msg['To'] = "recipient@example.com"

try:
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(username, app_password)
    server.send_message(msg)
    server.quit()
    print("✅ Email sent successfully!")
except Exception as e:
    print(f"❌ Error: {e}")
```

### Common Outlook Issues

**Issue: "App passwords" not visible**
- Solution: Enable two-step verification first
- Refresh security page after enabling

**Issue: Connection timeout**
- Try smtp-mail.outlook.com instead of smtp.office365.com
- Ensure using port 587, not 465

**Issue: "Something went wrong" error**
- Regenerate app password
- Wait 5-10 minutes after creating app password
- Try again

---

## Office 365 Business Configuration

### Prerequisites
- Office 365 business/enterprise account
- Administrator approval may be required
- SMTP authentication must be enabled (check with IT)

### Important Notes

⚠️ Many organizations disable SMTP authentication for security
- Check with IT department first
- May require using Exchange Web Services (EWS) instead
- Some orgs use SMTP relay instead

### Option 1: SMTP Authentication (if enabled)

#### Configure GitHub Secrets

```yaml
EMAIL_USERNAME: your.email@company.com
EMAIL_PASSWORD: (your Office 365 password or app password)
EMAIL_TO: recipient@company.com
```

#### SMTP Configuration

```yaml
SMTP Server: smtp.office365.com
Port: 587
Authentication: Required
Connection Security: STARTTLS
```

### Option 2: SMTP Relay (recommended for organizations)

Contact IT department to set up SMTP relay:

```yaml
SMTP Relay Server: company-relay.mail.protection.outlook.com
Port: 25 or 587
Authentication: May not be required
IP Restrictions: GitHub Actions IPs may need whitelisting
```

### Option 3: Service Account

Request dedicated service account from IT:

```yaml
Service Account Email: monitoring@company.com
Purpose: GitHub Actions automated emails
Access: SMTP send only
Authentication: App password or service account password
```

### Testing Office 365 Configuration

```python
import smtplib
from email.mime.text import MIMEText

# Configuration
smtp_server = "smtp.office365.com"
smtp_port = 587
username = "your.email@company.com"
password = "your-password"

msg = MIMEText("Test email from Python")
msg['Subject'] = "Office 365 SMTP Test"
msg['From'] = username
msg['To'] = "recipient@company.com"

try:
    server = smtplib.SMTP(smtp_server, smtp_port, timeout=30)
    server.starttls()
    server.login(username, password)
    server.send_message(msg)
    server.quit()
    print("✅ Email sent successfully!")
except Exception as e:
    print(f"❌ Error: {e}")
```

### Common Office 365 Issues

**Issue: "Authentication failed"**
- Check if SMTP authentication is enabled (contact IT)
- Verify account has permission to send via SMTP
- May need modern authentication enabled

**Issue: "5.7.57 SMTP; Client was not authenticated"**
- SMTP AUTH is disabled by admin
- Solution: Use SMTP relay or request SMTP AUTH enablement

**Issue: Security policies blocking**
- Organization may block external SMTP
- Solution: Request exception for GitHub Actions IP ranges
- Alternative: Use internal SMTP relay

---

## Yahoo Mail Configuration

### Prerequisites
- Yahoo Mail account
- Two-step verification enabled

### Step-by-Step Setup

#### 1. Enable Two-Step Verification

1. Visit: https://login.yahoo.com/account/security
2. Click "Two-step verification"
3. Follow prompts to enable (SMS or authenticator app)

#### 2. Generate App Password

1. Visit: https://login.yahoo.com/account/security
2. Click "Generate app password"
3. Select "Other App"
4. Enter name: "GitHub Actions"
5. Click "Generate"
6. Copy the password (no spaces needed)

#### 3. Configure GitHub Secrets

```yaml
EMAIL_USERNAME: your.email@yahoo.com
EMAIL_PASSWORD: (app password from step 2)
EMAIL_TO: recipient@example.com
```

#### 4. SMTP Configuration

```yaml
SMTP Server: smtp.mail.yahoo.com
Port: 587 (TLS) or 465 (SSL)
Authentication: Required
Connection Security: STARTTLS (587) or SSL/TLS (465)
```

---

## Custom SMTP Configuration

For custom mail servers or less common providers.

### Information Needed

Collect this information from your email provider or IT department:

```yaml
SMTP Server Hostname: smtp.example.com
Port: 587 (or 465, 25)
Encryption: TLS, SSL, or None
Authentication: Username/Password, OAuth, or None
Username Format: email@domain or just username
```

### Generic Configuration Template

```yaml
# GitHub Secrets
EMAIL_USERNAME: [your username or email]
EMAIL_PASSWORD: [your password or token]
EMAIL_TO: [recipient email]

# SMTP Details (for code/reference)
SMTP_SERVER: smtp.example.com
SMTP_PORT: 587
SMTP_SECURITY: TLS  # or SSL, STARTTLS, None
```

### Custom SMTP Code Example

```python
import smtplib
from email.mime.text import MIMEText

# Custom configuration
smtp_server = "smtp.example.com"
smtp_port = 587
use_tls = True
use_ssl = False
username = "your-username"
password = "your-password"

msg = MIMEText("Test email")
msg['Subject'] = "Test"
msg['From'] = username
msg['To'] = "recipient@example.com"

try:
    if use_ssl:
        # Use SSL from the start (port 465 typically)
        server = smtplib.SMTP_SSL(smtp_server, smtp_port)
    else:
        # Use regular connection, upgrade to TLS if needed
        server = smtplib.SMTP(smtp_server, smtp_port)
        if use_tls:
            server.starttls()
    
    # Authenticate if required
    if username and password:
        server.login(username, password)
    
    server.send_message(msg)
    server.quit()
    print("✅ Email sent!")
except Exception as e:
    print(f"❌ Error: {e}")
```

### Common Custom SMTP Settings

**Port Usage:**
- Port 25: Unencrypted (often blocked)
- Port 465: SSL/TLS from start
- Port 587: STARTTLS (upgrade to TLS)
- Port 2525: Alternative submission port

**Authentication Types:**
- PLAIN: Username and password in plain text (with TLS)
- LOGIN: Base64 encoded username/password
- CRAM-MD5: Challenge-response
- OAuth2: Token-based (modern, more secure)

---

## Ancoris Corporate Email

Specific configuration for Ancoris.com email system.

### Contact Information

**IT Support:**
- Email: it@ancoris.com
- Subject: "SMTP Access for GitHub Actions"

### Request Template

```
Subject: SMTP Access for GitHub Actions Monitoring

Hi IT Team,

I need to configure email notifications for our MS Exam Simulator 
monitoring system that runs on GitHub Actions.

Project: ms-exam-simulator
Purpose: Automated monitoring alerts and notifications
Frequency: Variable (alerts when issues detected)

Could you please provide:

1. SMTP Server Details:
   - Hostname/IP
   - Port number
   - Encryption type (TLS/SSL)

2. Authentication:
   - Should I use my personal account or request service account?
   - How do I obtain app password or credentials?
   - Any special authentication requirements?

3. Security/Network:
   - Do GitHub Actions IPs need whitelisting?
   - Any firewall rules needed?
   - SPF/DKIM configuration needed?

4. Approved Recipients:
   - Can I send to: team@ancoris.com, it@ancoris.com?
   - Any restrictions on recipient addresses?
   - Distribution list recommendations?

5. Best Practices:
   - Should I use a dedicated monitoring account?
   - Recommended "From" address?
   - Any rate limits or sending restrictions?

Timeline: Would like to set this up this week if possible.

Let me know if you need any additional information.

Thanks!
```

### Typical Ancoris Configuration

Once provided by IT, configuration might look like:

```yaml
# GitHub Secrets
EMAIL_USERNAME: monitoring@ancoris.com  # or your email
EMAIL_PASSWORD: [provided by IT]
EMAIL_TO: team@ancoris.com,it@ancoris.com

# SMTP Settings (reference)
SMTP Server: [provided by IT]
Port: 587 (typical)
Encryption: TLS
Authentication: Required
```

### Recommended Recipients

**Development/Testing:**
```yaml
EMAIL_TO: your.name@ancoris.com
```

**Production - Team Alerts:**
```yaml
EMAIL_TO: team@ancoris.com
```

**Production - IT Escalation:**
```yaml
EMAIL_TO: team@ancoris.com,it@ancoris.com
```

**Production - Management Alerts:**
```yaml
EMAIL_TO: team@ancoris.com,it@ancoris.com,management@ancoris.com
```

### Service Account Setup

Request dedicated account for better management:

**Proposed Account:**
- Email: github-monitor@ancoris.com (or similar)
- Display Name: "MS Exam Simulator Monitor"
- Purpose: Automated GitHub Actions notifications
- Access: Send-only, no inbox needed
- Management: Shared team credentials in password manager

**Benefits:**
- Not tied to individual employee
- Clear sender identification
- Easier to manage and rotate credentials
- Better audit trail
- Continues working if team members leave

### Ancoris-Specific Considerations

1. **Email Policies:**
   - Check if external SMTP is allowed
   - Verify GitHub Actions can send email
   - Understand any rate limits

2. **Security Requirements:**
   - May require VPN or IP whitelisting
   - Could need security team approval
   - Possible DLP (Data Loss Prevention) policies

3. **Distribution Lists:**
   - Use existing team distribution lists
   - Request new list if needed: monitoring-alerts@ancoris.com
   - Ensure lists are maintained and up-to-date

4. **Escalation Path:**
   - Level 1: Team list (team@ancoris.com)
   - Level 2: IT support (it@ancoris.com)
   - Level 3: Management (if critical)

---

## Comparison Table

| Provider | SMTP Server | Port | 2FA Required | App Password | Rate Limit |
|----------|-------------|------|--------------|--------------|------------|
| Gmail | smtp.gmail.com | 587 | Yes | Yes | 500/day (free)<br>2000/day (paid) |
| Outlook | smtp-mail.outlook.com | 587 | Yes | Yes | 300/day |
| Office 365 | smtp.office365.com | 587 | Org policy | Maybe | Varies |
| Yahoo | smtp.mail.yahoo.com | 587 | Yes | Yes | Varies |
| Custom | [varies] | 587/465 | [varies] | [varies] | [varies] |

---

## Quick Start Checklist

Use this checklist regardless of provider:

- [ ] Identify email provider
- [ ] Enable 2-Factor Authentication (if required)
- [ ] Generate app password (not regular password)
- [ ] Test credentials locally (optional but recommended)
- [ ] Add EMAIL_USERNAME secret to GitHub
- [ ] Add EMAIL_PASSWORD secret to GitHub
- [ ] Add EMAIL_TO secret to GitHub
- [ ] Run test-email.yml workflow
- [ ] Verify email received
- [ ] Check spam folder if not received
- [ ] Verify email formatting
- [ ] Update to production credentials (if using test)
- [ ] Document configuration in team wiki

---

## Additional Resources

### Official Documentation

- **Gmail SMTP:** https://support.google.com/mail/answer/7126229
- **Outlook SMTP:** https://support.microsoft.com/office/pop-imap-and-smtp-settings
- **Office 365:** https://docs.microsoft.com/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365
- **GitHub Secrets:** https://docs.github.com/actions/security-guides/encrypted-secrets

### Testing Tools

- **SMTP Test Tool:** https://www.smtper.net/
- **Email Header Analyzer:** https://mxtoolbox.com/EmailHeaders.aspx
- **SPF Record Check:** https://mxtoolbox.com/spf.aspx

### Security Resources

- **Password Manager:** Use 1Password, LastPass, or similar
- **2FA Apps:** Google Authenticator, Authy, Microsoft Authenticator
- **Security Keys:** YubiKey, Google Titan

---

## Need Help?

1. **Check troubleshooting:** GITHUB_SECRETS_SETUP.md
2. **Test workflow:** Run `.github/workflows/test-email.yml`
3. **Contact IT:** For corporate email issues
4. **Review logs:** Check GitHub Actions workflow logs
5. **Provider support:** Contact email provider if authentication issues

---

**Document Version:** 1.0  
**Last Updated:** 2025-11-06  
**Maintainer:** MS Exam Simulator Team
