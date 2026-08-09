# GitHub Secrets Configuration Guide

This comprehensive guide will walk you through setting up email notifications using GitHub Secrets for the MS Exam Simulator monitoring system.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Setup Documentation](#setup-documentation)
3. [Email Provider Configurations](#email-provider-configurations)
4. [Test System Setup](#test-system-setup)
5. [Secret Management](#secret-management)
6. [Validation Workflow](#validation-workflow)
7. [Security Best Practices](#security-best-practices)
8. [Production Deployment](#production-deployment)
9. [Troubleshooting](#troubleshooting)

---

## Quick Start

**Required Secrets:**
- `EMAIL_USERNAME` - Your email address for sending notifications
- `EMAIL_PASSWORD` - App password or authentication token
- `EMAIL_TO` - Recipient email address(es) for notifications

**Estimated Setup Time:** 15-20 minutes

---

## Setup Documentation

### Step 1: Navigate to Repository Secrets

1. Go to your GitHub repository: `https://github.com/[username]/ms-exam-simulator`
2. Click on **Settings** tab (top navigation bar)
3. In the left sidebar, expand **Secrets and variables**
4. Click on **Actions**

![Navigate to Settings > Secrets and variables > Actions](docs/images/github-secrets-navigation.png)

### Step 2: Add Required Secrets

For each secret, follow these steps:

#### Adding EMAIL_USERNAME

1. Click the **New repository secret** button
2. In the **Name** field, enter: `EMAIL_USERNAME`
3. In the **Secret** field, enter your email address (e.g., `monitoring@example.com`)
4. Click **Add secret**

**Screenshot Reference:**
```
┌─────────────────────────────────────┐
│ Name: EMAIL_USERNAME                │
│                                     │
│ Secret: monitoring@example.com      │
│                                     │
│         [Add secret]                │
└─────────────────────────────────────┘
```

#### Adding EMAIL_PASSWORD

1. Click **New repository secret** again
2. In the **Name** field, enter: `EMAIL_PASSWORD`
3. In the **Secret** field, enter your app password (see provider-specific instructions below)
4. Click **Add secret**

⚠️ **Important:** Never use your regular email password. Always use app-specific passwords.

#### Adding EMAIL_TO

1. Click **New repository secret** again
2. In the **Name** field, enter: `EMAIL_TO`
3. In the **Secret** field, enter recipient email(s):
   - Single recipient: `admin@example.com`
   - Multiple recipients: `admin@example.com,team@example.com`
4. Click **Add secret**

### Step 3: Validation Checklist

After adding all secrets, verify your configuration:

- [ ] All three secrets (EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_TO) are listed
- [ ] Secret names are exactly as specified (case-sensitive)
- [ ] No typos in secret names
- [ ] Secrets show "Updated" timestamp
- [ ] No special characters in secret names (use underscore only)

**How to verify:**
```
Go to: Settings > Secrets and variables > Actions
Expected view:
┌──────────────────┬─────────────────┐
│ Name             │ Updated         │
├──────────────────┼─────────────────┤
│ EMAIL_PASSWORD   │ now             │
│ EMAIL_TO         │ now             │
│ EMAIL_USERNAME   │ now             │
└──────────────────┴─────────────────┘
```

---

## Email Provider Configurations

### Gmail Configuration

Gmail requires app passwords for external applications.

#### Prerequisites
- Gmail account
- 2-Factor Authentication enabled

#### Step-by-Step Setup

1. **Enable 2-Factor Authentication** (if not already enabled):
   - Go to https://myaccount.google.com/security
   - Find "2-Step Verification"
   - Follow prompts to enable

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Or: Google Account > Security > 2-Step Verification > App passwords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Enter name: "MS Exam Simulator Monitor"
   - Click **Generate**

3. **Copy App Password**:
   - Google will display a 16-character password
   - Example format: `abcd efgh ijkl mnop`
   - Copy this password (spaces don't matter)

4. **Configure Secrets**:
   ```
   EMAIL_USERNAME: your-email@gmail.com
   EMAIL_PASSWORD: abcdefghijklmnop (16-char app password)
   EMAIL_TO: recipient@example.com
   ```

5. **SMTP Settings** (if needed for reference):
   ```
   SMTP Server: smtp.gmail.com
   Port: 587 (TLS) or 465 (SSL)
   Authentication: Required
   ```

#### Troubleshooting Gmail
- If "App passwords" option is missing, enable 2FA first
- Remove spaces from app password when entering as secret
- Ensure "Less secure app access" is NOT needed (app passwords bypass this)

---

### Outlook/Office365 Configuration

Outlook and Office365 support app passwords for organizational accounts.

#### For Personal Microsoft Accounts (@outlook.com, @hotmail.com)

1. **Enable 2-Step Verification**:
   - Go to https://account.microsoft.com/security
   - Select "Advanced security options"
   - Turn on "Two-step verification"

2. **Create App Password**:
   - In same security settings page
   - Under "App passwords" section
   - Click "Create a new app password"
   - Copy the generated password

3. **Configure Secrets**:
   ```
   EMAIL_USERNAME: your-email@outlook.com
   EMAIL_PASSWORD: (generated app password)
   EMAIL_TO: recipient@example.com
   ```

4. **SMTP Settings**:
   ```
   SMTP Server: smtp-mail.outlook.com (or smtp.office365.com)
   Port: 587 (TLS)
   Authentication: Required
   ```

#### For Office365 Business Accounts

1. **Check with IT Department**:
   - Some organizations disable app passwords
   - May require OAuth2 authentication instead
   - Request SMTP relay permissions if needed

2. **Alternative: SMTP Relay** (if app passwords disabled):
   - Use organization's SMTP relay server
   - Get relay server address from IT
   - May require IP whitelisting

3. **Configure Secrets**:
   ```
   EMAIL_USERNAME: your-email@company.com
   EMAIL_PASSWORD: (app password or regular password if permitted)
   EMAIL_TO: recipient@company.com
   ```

---

### Corporate Email Server Configuration

For organizations using custom email servers (Exchange, etc.).

#### Information Needed from IT Department

Request the following information:

1. **SMTP Server Details**:
   - Server hostname/IP: `smtp.company.com`
   - Port: Usually 587, 465, or 25
   - Encryption: TLS/SSL/STARTTLS
   - Authentication method: Username/Password, OAuth2, etc.

2. **Authentication Credentials**:
   - Username format: `user@domain.com` or `DOMAIN\username`
   - Password or app token
   - Any special authentication requirements

3. **Network Requirements**:
   - IP whitelisting needed?
   - VPN requirements?
   - Firewall rules?

#### Configuration Template

```
EMAIL_USERNAME: [username from IT]
EMAIL_PASSWORD: [password/token from IT]
EMAIL_TO: [approved recipient addresses]

SMTP Details (for reference):
Server: [smtp.company.com]
Port: [587]
Security: [TLS]
```

#### Sample IT Request Email

```
Subject: SMTP Access for GitHub Actions Monitoring

Hi IT Team,

I need to configure email notifications for our MS Exam Simulator 
monitoring system running on GitHub Actions.

Could you please provide:
1. SMTP server hostname and port
2. Authentication credentials (app password preferred)
3. Any IP whitelisting or security requirements
4. Approved sender and recipient addresses

The system will send automated monitoring alerts and needs to 
send emails from our domain.

Thank you!
```

---

### Ancoris.com Email Setup

Specific configuration for Ancoris corporate email.

#### Standard Ancoris SMTP Configuration

1. **Contact IT**: it@ancoris.com
   - Request SMTP access for monitoring system
   - Specify this is for GitHub Actions automation
   - Request app password or service account

2. **Typical Configuration**:
   ```
   EMAIL_USERNAME: monitoring@ancoris.com
   EMAIL_PASSWORD: [provided by IT]
   EMAIL_TO: team@ancoris.com,it@ancoris.com
   
   SMTP Server: [provided by IT team]
   Port: [typically 587]
   ```

3. **Service Account Option**:
   - Request dedicated service account: `github-monitor@ancoris.com`
   - Avoids using personal credentials
   - Better for team access management

4. **Recipient Configuration**:
   - Primary: `team@ancoris.com` (team distribution list)
   - Escalation: `it@ancoris.com` (IT support)
   - Format: `team@ancoris.com,it@ancoris.com`

---

## Test System Setup

### Phase 1: Personal Email Testing

Start with personal email for initial testing to avoid spamming team.

#### Step 1: Configure Test Secrets

1. Use your personal Gmail/Outlook account
2. Set up secrets with personal addresses:
   ```
   EMAIL_USERNAME: your.personal@gmail.com
   EMAIL_PASSWORD: [your app password]
   EMAIL_TO: your.personal@gmail.com
   ```

#### Step 2: Run Validation Workflow

1. Go to **Actions** tab in GitHub
2. Select **Test Email Configuration** workflow
3. Click **Run workflow**
4. Check your personal email for test message

#### Step 3: Verify Delivery

- [ ] Email received within 5 minutes
- [ ] Sender shows correct address
- [ ] Subject line is correct
- [ ] Email body renders properly
- [ ] No errors in workflow logs

### Phase 2: Production Team Email

Once personal testing succeeds, switch to production configuration.

#### Step 1: Update Secrets

1. Go to Settings > Secrets and variables > Actions
2. Update each secret (click secret name, then "Update")
3. Replace with production values:
   ```
   EMAIL_USERNAME: monitoring@ancoris.com
   EMAIL_PASSWORD: [production app password]
   EMAIL_TO: team@ancoris.com,it@ancoris.com
   ```

#### Step 2: Notify Team

Send heads-up to team:
```
Subject: Testing Monitoring Email System

Team,

I'm about to test our new monitoring email system. 
You may receive a test email from monitoring@ancoris.com.

Expected: One test email in the next 5 minutes
If you receive multiple emails or errors, please let me know.

Thanks!
```

#### Step 3: Production Test

1. Run **Test Email Configuration** workflow
2. Verify team receives email
3. Check workflow logs for any warnings
4. Document any issues

### Example Secret Values

#### Development/Testing

```yaml
# For initial testing with personal email
EMAIL_USERNAME: "john.doe@gmail.com"
EMAIL_PASSWORD: "abcd efgh ijkl mnop"  # 16-char Gmail app password
EMAIL_TO: "john.doe@gmail.com"
```

#### Staging

```yaml
# For team testing before production
EMAIL_USERNAME: "test-monitor@ancoris.com"
EMAIL_PASSWORD: "[test account app password]"
EMAIL_TO: "john.doe@ancoris.com,jane.smith@ancoris.com"
```

#### Production

```yaml
# For live monitoring system
EMAIL_USERNAME: "monitoring@ancoris.com"
EMAIL_PASSWORD: "[production app password]"
EMAIL_TO: "team@ancoris.com,it@ancoris.com"
```

### Safe Testing Practices

1. **Start Small**: Test with personal email first
2. **Notify Team**: Always inform team before production tests
3. **Limit Frequency**: Don't run tests repeatedly (avoid spam)
4. **Check Logs**: Review workflow logs before declaring success
5. **Verify Receipts**: Confirm email delivery with recipients
6. **Document**: Keep notes of what works and what doesn't

---

## Secret Management

### Secure Naming Conventions

Follow these naming patterns for clarity and consistency:

#### Primary Secrets
```
EMAIL_USERNAME      # Email sender address
EMAIL_PASSWORD      # App password/token
EMAIL_TO            # Primary recipient(s)
```

#### Environment-Specific Secrets (if needed)
```
DEV_EMAIL_USERNAME
DEV_EMAIL_PASSWORD
DEV_EMAIL_TO

PROD_EMAIL_USERNAME
PROD_EMAIL_PASSWORD
PROD_EMAIL_TO
```

#### Additional Notification Secrets
```
EMAIL_TO_ALERTS     # For critical alerts
EMAIL_TO_REPORTS    # For regular reports
EMAIL_CC            # CC recipients
EMAIL_BCC           # BCC recipients
```

### Updating Secrets

To update a secret without breaking workflows:

1. **Test New Credentials First**:
   - Create temporary test secrets: `EMAIL_USERNAME_NEW`
   - Test with validation workflow
   - Confirm working before replacing old secrets

2. **Update Procedure**:
   - Go to Settings > Secrets and variables > Actions
   - Click on secret name
   - Click **Update secret**
   - Enter new value
   - Click **Update secret**

3. **Zero-Downtime Update**:
   - Keep old secret active
   - Add new secret with `_NEW` suffix
   - Update workflow to use new secret
   - Test thoroughly
   - Remove old secret

4. **Rollback Plan**:
   - Document old values in secure location (password manager)
   - Keep old credentials active during transition
   - Can quickly revert if issues arise

### Backup/Recovery Procedures

#### Preventive Measures

1. **Document Credentials Securely**:
   - Use team password manager (1Password, LastPass, etc.)
   - Store app passwords in shared vault
   - Include setup instructions

2. **Multiple Administrators**:
   - Grant repository admin access to 2+ team members
   - Ensure multiple people can update secrets
   - Document who has access

3. **Service Accounts**:
   - Use dedicated service account emails
   - Store credentials in company password manager
   - Not tied to individual employee

#### Recovery Steps

If secrets are lost:

1. **Regenerate App Passwords**:
   - For Gmail: https://myaccount.google.com/apppasswords
   - For Outlook: Account security settings
   - For corporate: Contact IT department

2. **Update GitHub Secrets**:
   - Add new app password to secrets
   - Test immediately with validation workflow

3. **Document Incident**:
   - Record when and why credentials were regenerated
   - Update password manager
   - Review security practices

### Team Access Management

#### Repository Permissions

Control who can modify secrets:

1. **Admin Role** (Can manage secrets):
   - Repository owner
   - Organization admins
   - Collaborators with admin access

2. **Write Role** (Cannot see/edit secrets):
   - Can trigger workflows that use secrets
   - Cannot view secret values
   - Cannot modify secret configuration

3. **Read Role** (Limited access):
   - Can view workflow runs
   - Cannot trigger workflows
   - Cannot access secrets

#### Best Practices

1. **Limit Admin Access**: Only 2-3 people need secret management
2. **Use Teams**: In organizations, use team-based permissions
3. **Audit Regularly**: Review who has admin access quarterly
4. **Offboarding**: Remove access when team members leave
5. **Service Accounts**: Prefer shared accounts over personal

#### Audit Trail

GitHub automatically logs:
- When secrets are created
- When secrets are updated
- Who made the changes
- Timestamp of changes

To view audit log (Organization only):
1. Go to Organization Settings
2. Click "Audit log"
3. Filter by "secret" events

---

## Validation Workflow

### Test Email Workflow

A dedicated workflow for testing email configuration without running full monitoring.

#### Workflow File: `.github/workflows/test-email.yml`

See the complete workflow file in the repository.

#### Running the Test

1. **Navigate to Actions**:
   - Go to repository
   - Click **Actions** tab
   - Find **Test Email Configuration** workflow

2. **Manual Trigger**:
   - Click **Run workflow** dropdown
   - Select branch (usually `main`)
   - Click green **Run workflow** button

3. **Monitor Execution**:
   - Watch workflow run appear in list
   - Click on run to see details
   - View "Send Test Email" step output

4. **Check Results**:
   - ✅ Green checkmark: Email sent successfully
   - ❌ Red X: Configuration error (see logs)
   - Email should arrive within 1-5 minutes

### Connection Testing

Test SMTP connection without sending email:

```bash
# Using Python (if Python available locally)
python3 << 'EOF'
import smtplib
from email.mime.text import MIMEText

smtp_server = "smtp.gmail.com"
smtp_port = 587
username = "your-email@gmail.com"
password = "your-app-password"

try:
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(username, password)
    print("✅ SMTP connection successful!")
    server.quit()
except Exception as e:
    print(f"❌ Connection failed: {e}")
EOF
```

### Validation Checklist

After running test workflow:

- [ ] Workflow completes without errors
- [ ] Test email received at EMAIL_TO address(es)
- [ ] Email sender matches EMAIL_USERNAME
- [ ] Subject line is appropriate
- [ ] Email body is well-formatted
- [ ] Links in email work (if any)
- [ ] No security warnings from email provider
- [ ] Delivery time under 5 minutes
- [ ] Workflow logs show no warnings

---

## Security Best Practices

### Never Commit Passwords to Code

❌ **NEVER DO THIS:**

```python
# Bad - exposed in code
smtp_password = "mypassword123"

# Bad - exposed in config file
EMAIL_PASSWORD="supersecret" 
```

✅ **ALWAYS DO THIS:**

```python
# Good - use environment variables
import os
smtp_password = os.environ.get('EMAIL_PASSWORD')

# Good - use GitHub secrets
password: ${{ secrets.EMAIL_PASSWORD }}
```

### Use App Passwords Instead of Regular Passwords

| Provider | Regular Password | App Password |
|----------|-----------------|--------------|
| Gmail    | ❌ Not supported for external apps | ✅ Use app passwords |
| Outlook  | ⚠️ Works but insecure | ✅ Use app passwords |
| Corporate | ⚠️ May work but risky | ✅ Request from IT |

**Benefits of App Passwords:**
- Can be revoked independently
- Limited scope (email only)
- Doesn't expose main account
- Easier to rotate
- Better audit trail

### Rotate Credentials Periodically

Create a rotation schedule:

```yaml
Rotation Schedule:
  - Every 90 days: Production secrets
  - Every 180 days: Development secrets
  - Immediately: If team member leaves
  - Immediately: If credentials potentially exposed
```

**Rotation Process:**

1. **Week Before**:
   - Schedule rotation in team calendar
   - Generate new app passwords
   - Test new credentials in dev

2. **Rotation Day**:
   - Update secrets in GitHub
   - Run validation workflow
   - Monitor for issues

3. **Week After**:
   - Revoke old app passwords
   - Update password manager
   - Document rotation completion

### Limit Secret Access

Principle of Least Privilege:

1. **Repository Access**:
   - Only admins can manage secrets
   - Limit admin access to essential personnel
   - Use read/write roles for others

2. **Secret Scope**:
   - Use repository secrets for single repo
   - Use organization secrets for shared secrets
   - Use environment secrets for deployment stages

3. **Recipient Lists**:
   - Only include necessary recipients in EMAIL_TO
   - Use distribution lists instead of individual addresses
   - Review recipient list quarterly

### Audit Trail for Secret Changes

Enable and monitor:

1. **GitHub Audit Log** (for Organizations):
   - Review secret access monthly
   - Look for unexpected changes
   - Investigate unauthorized access attempts

2. **Manual Logging**:
   ```
   Secret Change Log:
   Date: 2025-11-06
   Changed By: john.doe
   Secret: EMAIL_PASSWORD
   Reason: Quarterly rotation
   Verified By: jane.smith
   ```

3. **Notification System**:
   - Set up GitHub notifications for repo changes
   - Alert team when secrets are modified
   - Require approval for secret changes (if possible)

### Additional Security Measures

1. **Two-Factor Authentication**:
   - Enable 2FA on GitHub accounts
   - Enable 2FA on email accounts
   - Use hardware keys if available

2. **Secure Communication**:
   - Never share secrets via email/chat
   - Use password manager sharing
   - Communicate verbally if necessary

3. **Incident Response**:
   ```
   If credentials are compromised:
   1. Immediately revoke/change passwords
   2. Update GitHub secrets
   3. Review recent workflow runs
   4. Check email logs for unauthorized sends
   5. Notify security team
   6. Document incident
   ```

---

## Production Deployment

### Pre-Deployment Checklist

Before moving to production:

- [ ] Personal email test completed successfully
- [ ] Test workflow runs without errors
- [ ] Team has been notified of upcoming deployment
- [ ] Production credentials obtained from IT
- [ ] Production recipients identified and confirmed
- [ ] Rollback plan documented
- [ ] Escalation contacts identified
- [ ] Monitoring email account created (if needed)

### Step 1: Obtain Production Credentials

#### Option A: Create Monitoring Service Account

1. Contact IT: it@ancoris.com
2. Request new service account:
   ```
   Email: monitoring@ancoris.com (or similar)
   Purpose: Automated GitHub monitoring alerts
   Access: SMTP send only
   ```
3. Store credentials in team password manager
4. Document account purpose and ownership

#### Option B: Use Existing Account

1. Use approved existing account
2. Generate new app password for this purpose
3. Label app password: "GitHub Monitoring"
4. Store in password manager

### Step 2: Configure Production Secrets

1. **Update EMAIL_USERNAME**:
   ```
   Value: monitoring@ancoris.com
   ```

2. **Update EMAIL_PASSWORD**:
   ```
   Value: [production app password from IT]
   ```

3. **Update EMAIL_TO**:
   ```
   Primary recipients: team@ancoris.com
   Escalation contacts: it@ancoris.com
   Format: team@ancoris.com,it@ancoris.com
   ```

### Step 3: Team Notification Setup

Configure distribution lists:

#### Primary Team Distribution List

- **Address**: team@ancoris.com
- **Purpose**: Regular monitoring alerts
- **Members**: All team members who need alerts
- **Management**: Maintained by HR/IT

#### IT Support Distribution List

- **Address**: it@ancoris.com
- **Purpose**: Technical escalations, critical alerts
- **Members**: IT support team
- **Management**: Maintained by IT department

#### Escalation Email Configuration

For critical issues, configure multi-tier notifications:

```yaml
Level 1 - Info: team@ancoris.com
Level 2 - Warning: team@ancoris.com,team-leads@ancoris.com
Level 3 - Critical: team@ancoris.com,it@ancoris.com,management@ancoris.com
```

### Step 4: Monitoring Email Account Setup

If creating dedicated monitoring account:

1. **Account Setup**:
   - Email: monitoring@ancoris.com
   - Display Name: "MS Exam Simulator Monitor"
   - Auto-reply: Off
   - Signature: Include contact info for questions

2. **Access Control**:
   - Primary owner: Team lead
   - Backup access: 2+ team members
   - Password stored in team vault
   - Document access in team wiki

3. **Email Rules**:
   - Keep sent items for 90 days
   - Auto-file sent emails to "Monitoring" folder
   - Forward bounces to IT

### Step 5: Production Testing

1. **Pre-Notification**:
   ```
   To: team@ancoris.com
   Subject: Production Monitoring Test - Expect Test Email
   
   Team,
   
   We're about to test the production monitoring email system.
   You should receive ONE test email from monitoring@ancoris.com
   in the next 5 minutes.
   
   Please reply-all if:
   - You DON'T receive the email
   - The email goes to spam
   - The email appears incorrectly formatted
   
   Thanks!
   ```

2. **Run Test Workflow**:
   - Go to Actions > Test Email Configuration
   - Click Run workflow
   - Monitor execution

3. **Verify Success**:
   - Check workflow completed (green checkmark)
   - Confirm team received email
   - Check spam folders if not received
   - Review email formatting and links

4. **Post-Test Verification**:
   ```
   To: team@ancoris.com
   Subject: Monitoring Test Complete
   
   Test completed successfully. The monitoring system is now live.
   
   You'll receive alerts for:
   - System errors
   - Performance issues  
   - Configuration changes
   
   Expected frequency: [X alerts per week]
   
   If you receive unexpected emails, contact: [your name]
   ```

### Step 6: Enable Production Workflows

1. Update workflow schedules (if applicable)
2. Enable monitoring workflows
3. Document production deployment date
4. Update team documentation

### Post-Deployment Monitoring

#### Week 1: Close Monitoring

- [ ] Check email delivery daily
- [ ] Monitor workflow execution logs
- [ ] Collect team feedback
- [ ] Fix any formatting issues
- [ ] Adjust frequency if needed

#### Week 2-4: Regular Monitoring

- [ ] Check email delivery every 2-3 days
- [ ] Review workflow logs weekly
- [ ] Ensure no emails going to spam
- [ ] Confirm appropriate alert frequency

#### Ongoing

- [ ] Monthly review of email logs
- [ ] Quarterly review of recipients list
- [ ] Rotate credentials every 90 days
- [ ] Update documentation as needed

### Rollback Procedure

If production deployment has issues:

1. **Immediate**:
   - Disable affected workflows
   - Revert to previous secrets (if needed)
   - Notify team of issue

2. **Investigation**:
   - Review workflow logs
   - Check email server logs (if accessible)
   - Test with personal email again
   - Identify root cause

3. **Resolution**:
   - Fix identified issues
   - Test in development
   - Re-deploy to production
   - Document incident

---

## Troubleshooting

### Common Email Delivery Issues

#### Issue: "Authentication Failed"

**Symptoms:**
- Workflow fails with authentication error
- Error message: "535 Authentication failed"

**Solutions:**

1. **Check Credentials**:
   - Verify EMAIL_USERNAME is correct email address
   - Verify EMAIL_PASSWORD is app password, not regular password
   - Check for typos in secret values

2. **Gmail Specific**:
   - Ensure 2FA is enabled
   - Regenerate app password
   - Remove spaces from app password
   - Try different app password

3. **Outlook Specific**:
   - Verify 2-step verification is enabled
   - Use smtp-mail.outlook.com (not smtp.office365.com)
   - Try regenerating app password

4. **Corporate Email**:
   - Contact IT department
   - Verify SMTP access is enabled
   - Check if IP whitelisting is required
   - Confirm credentials format (user@domain vs DOMAIN\user)

---

#### Issue: "Connection Timeout"

**Symptoms:**
- Workflow hangs at email step
- Eventually fails with timeout error

**Solutions:**

1. **Check SMTP Settings**:
   ```
   Gmail: smtp.gmail.com:587
   Outlook: smtp-mail.outlook.com:587
   Office365: smtp.office365.com:587
   ```

2. **Verify Port**:
   - Try port 587 (TLS)
   - Try port 465 (SSL)
   - Port 25 often blocked by GitHub

3. **Network Issues**:
   - GitHub Actions may have connectivity issues
   - Try running workflow again
   - Check GitHub status page

---

#### Issue: "Email Goes to Spam"

**Symptoms:**
- Email sent successfully
- Recipients don't see email
- Found in spam folder

**Solutions:**

1. **Email Content**:
   - Avoid spam trigger words (FREE, URGENT, etc.)
   - Include proper subject line
   - Use plain text or simple HTML
   - Include unsubscribe option (if applicable)

2. **Sender Reputation**:
   - Use established email account (not brand new)
   - Send consistent volume
   - Don't send too frequently

3. **Technical Settings**:
   - Verify SPF records (IT department)
   - Check DKIM settings
   - Configure DMARC policy
   - Use proper from address

4. **Recipient Action**:
   - Have recipients mark as "Not Spam"
   - Add sender to contacts
   - Create inbox rule to move to inbox

---

#### Issue: "Rate Limiting / Too Many Emails"

**Symptoms:**
- First few emails send fine
- Later emails fail
- Error: "Too many requests" or rate limit

**Solutions:**

1. **Gmail Limits**:
   - Free account: 500 emails/day
   - G Suite: 2,000 emails/day
   - Add delays between sends

2. **Outlook Limits**:
   - Personal: 300 emails/day
   - Business: Higher (varies)

3. **Reduce Frequency**:
   - Batch notifications
   - Send digest emails instead of individual
   - Adjust workflow schedule

---

#### Issue: "Recipient Not Receiving Emails"

**Symptoms:**
- Workflow succeeds
- Some recipients receive, others don't
- No error in logs

**Solutions:**

1. **Check Email Addresses**:
   - Verify spelling in EMAIL_TO secret
   - Check for extra spaces
   - Ensure correct domain

2. **Multiple Recipients**:
   - Format: `email1@domain.com,email2@domain.com`
   - No spaces after commas
   - Test with single recipient first

3. **Email Filters**:
   - Check recipient's email rules
   - Verify not being auto-deleted
   - Check all folders (Archive, etc.)

---

### Diagnostic Commands

#### Test SMTP Connection Locally

```bash
# Using openssl
openssl s_client -starttls smtp -connect smtp.gmail.com:587

# Expected output should include "250" status codes
# Type "QUIT" to exit
```

#### Test Email Sending with Python

```python
import smtplib
from email.mime.text import MIMEText

def test_email():
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    username = "your-email@gmail.com"
    password = "your-app-password"
    
    msg = MIMEText("Test email body")
    msg['Subject'] = "Test Email"
    msg['From'] = username
    msg['To'] = "recipient@example.com"
    
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.set_debuglevel(1)  # Verbose output
        server.starttls()
        server.login(username, password)
        server.send_message(msg)
        server.quit()
        print("✅ Email sent successfully!")
    except Exception as e:
        print(f"❌ Error: {e}")

test_email()
```

#### Check GitHub Workflow Logs

```bash
# Using GitHub CLI (if available)
gh run list --workflow=test-email.yml
gh run view [run-id] --log
```

---

### Getting Help

#### Internal Support

1. **Team Lead**: [team-lead@ancoris.com]
2. **IT Support**: it@ancoris.com
3. **Documentation**: This file

#### External Resources

1. **Gmail Help**:
   - App Passwords: https://support.google.com/accounts/answer/185833
   - SMTP Settings: https://support.google.com/mail/answer/7126229

2. **Outlook Help**:
   - App Passwords: https://support.microsoft.com/account-billing/
   - SMTP Settings: https://support.microsoft.com/office/pop-imap-and-smtp-settings

3. **GitHub Actions**:
   - Documentation: https://docs.github.com/actions
   - Secrets: https://docs.github.com/actions/security-guides/encrypted-secrets

4. **Community**:
   - Stack Overflow: [github-actions] + [email] tags
   - GitHub Community: https://github.community

---

## Appendix

### Quick Reference Card

```
╔═══════════════════════════════════════════════════════╗
║         GITHUB SECRETS QUICK REFERENCE                 ║
╠═══════════════════════════════════════════════════════╣
║                                                        ║
║ Required Secrets:                                      ║
║   • EMAIL_USERNAME - Sender email address             ║
║   • EMAIL_PASSWORD - App password (never regular)     ║
║   • EMAIL_TO - Recipient address(es)                  ║
║                                                        ║
║ Common SMTP Settings:                                  ║
║   Gmail:   smtp.gmail.com:587                         ║
║   Outlook: smtp-mail.outlook.com:587                  ║
║                                                        ║
║ Test Workflow:                                         ║
║   Actions > Test Email Configuration > Run workflow   ║
║                                                        ║
║ Get Help:                                              ║
║   • IT Support: it@ancoris.com                        ║
║   • This guide: GITHUB_SECRETS_SETUP.md               ║
║                                                        ║
╚═══════════════════════════════════════════════════════╝
```

### Glossary

- **App Password**: Application-specific password with limited scope
- **SMTP**: Simple Mail Transfer Protocol (email sending protocol)
- **TLS/SSL**: Encryption protocols for secure email
- **GitHub Secret**: Encrypted environment variable in GitHub
- **Repository**: Git project stored on GitHub
- **Workflow**: Automated process defined in GitHub Actions
- **Distribution List**: Group email address that forwards to multiple recipients

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-11-06 | Initial | Complete setup documentation |

---

**Need Help?** Contact it@ancoris.com or refer to the troubleshooting section above.
