# Quick Start Guide - Email Notifications Setup

Get email notifications running in 15 minutes or less!

## 🚀 5-Minute Setup (Personal Email)

Perfect for initial testing with your personal Gmail or Outlook account.

### Step 1: Get Your App Password (3 minutes)

**For Gmail:**
1. Go to https://myaccount.google.com/apppasswords
2. Click "Generate" 
3. Select "Mail" and "Other (Custom name)"
4. Copy the 16-character password
5. Done! ✅

**For Outlook:**
1. Go to https://account.microsoft.com/security
2. Enable "Two-step verification" if not already enabled
3. Find "App passwords" and click "Create a new app password"
4. Copy the password
5. Done! ✅

### Step 2: Add Secrets to GitHub (2 minutes)

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

```
Name: EMAIL_USERNAME
Value: your.email@gmail.com (your email address)

Name: EMAIL_PASSWORD  
Value: [paste the 16-char app password from step 1]

Name: EMAIL_TO
Value: your.email@gmail.com (send test to yourself)
```

### Step 3: Test It! (1 minute)

1. Go to **Actions** tab
2. Click **Test Email Configuration**
3. Click **Run workflow** → **Run workflow**
4. Wait 2-3 minutes
5. Check your email! 📧

### ✅ Success!

If you got the test email, you're done! 

**Next Steps:**
- Move to production setup (see below)
- Configure team notifications
- Enable monitoring workflows

---

## 📋 10-Minute Setup (Team Email)

Ready to set up team notifications with your company email.

### Prerequisites

- [ ] Personal email test completed successfully
- [ ] Company email account or service account
- [ ] Team distribution list (e.g., team@ancoris.com)
- [ ] IT approval (if required)

### Step 1: Get Production Credentials (5 minutes)

**Option A: Use Company Email Provider**

If using Gmail/Outlook for business:
- Same process as personal setup
- May need IT approval first
- Generate app password for your company account

**Option B: Request from IT**

Email your IT department:

```
To: it@ancoris.com
Subject: SMTP Access for GitHub Actions

Hi IT,

I need SMTP credentials for our GitHub Actions monitoring system.

Need:
- SMTP server and port
- Username and password (app password preferred)
- Approved sender address (monitoring@ancoris.com suggested)

Purpose: Automated monitoring alerts for MS Exam Simulator
Frequency: Variable (alerts as needed)

Thanks!
```

### Step 2: Update GitHub Secrets (2 minutes)

Go to Settings → Secrets and variables → Actions

**Update EMAIL_USERNAME:**
1. Click on EMAIL_USERNAME
2. Click "Update secret"
3. Enter: monitoring@ancoris.com (or your company email)
4. Click "Update secret"

**Update EMAIL_PASSWORD:**
1. Click on EMAIL_PASSWORD
2. Click "Update secret"
3. Enter: [production app password]
4. Click "Update secret"

**Update EMAIL_TO:**
1. Click on EMAIL_TO
2. Click "Update secret"
3. Enter: team@ancoris.com,it@ancoris.com (your distribution lists)
4. Click "Update secret"

### Step 3: Notify Team (1 minute)

Quick email to the team:

```
To: team@ancoris.com
Subject: Testing Monitoring Email - Expect Test Email

Hi Team,

Testing our new monitoring system. You'll receive ONE test email
from monitoring@ancoris.com in the next 5 minutes.

Please let me know if you don't receive it!

Thanks!
```

### Step 4: Run Production Test (2 minutes)

1. Go to **Actions** tab
2. Click **Test Email Configuration**
3. Click **Run workflow** → **Run workflow**
4. Monitor workflow (watch for green checkmark)
5. Ask team to confirm receipt

### ✅ Production Ready!

If team received the email, you're done!

---

## ⚡ Common Scenarios

### Scenario: Using Gmail

```yaml
EMAIL_USERNAME: your.email@gmail.com
EMAIL_PASSWORD: [16-char app password from myaccount.google.com/apppasswords]
EMAIL_TO: recipient@example.com

Setup time: 5 minutes
Requirements: 2FA enabled
App password: https://myaccount.google.com/apppasswords
```

### Scenario: Using Outlook

```yaml
EMAIL_USERNAME: your.email@outlook.com
EMAIL_PASSWORD: [app password from account.microsoft.com/security]
EMAIL_TO: recipient@example.com

Setup time: 5 minutes
Requirements: 2-step verification
App password: https://account.microsoft.com/security
```

### Scenario: Using Corporate Email (Ancoris)

```yaml
EMAIL_USERNAME: monitoring@ancoris.com
EMAIL_PASSWORD: [from IT department]
EMAIL_TO: team@ancoris.com,it@ancoris.com

Setup time: 1 hour (waiting for IT)
Requirements: IT approval
Contact: it@ancoris.com
```

### Scenario: Multiple Recipients

```yaml
EMAIL_USERNAME: alerts@company.com
EMAIL_PASSWORD: [app password]
EMAIL_TO: admin@company.com,team@company.com,alerts@company.com

Note: Separate emails with commas, no spaces
Maximum: Unlimited (but check email provider limits)
Best practice: Use distribution lists instead
```

---

## 🔧 Quick Troubleshooting

### Problem: "Authentication Failed"

**Quick Fix:**
1. Verify you're using app password (not regular password)
2. Regenerate app password
3. Update EMAIL_PASSWORD secret
4. Try again

### Problem: "No Email Received"

**Quick Fix:**
1. Check spam folder
2. Wait 5 minutes (sometimes delayed)
3. Verify EMAIL_TO has correct address
4. Check workflow logs for errors

### Problem: "Email Goes to Spam"

**Quick Fix:**
1. Have recipients mark as "Not Spam"
2. Add sender to contacts
3. Use professional email content
4. Contact IT about SPF/DKIM records

---

## 📚 What's Next?

### Immediate

- ✅ Test email configuration working
- ⏭️ Update to production credentials
- ⏭️ Configure monitoring workflows
- ⏭️ Set up escalation procedures

### This Week

- 📖 Read full setup guide: [GITHUB_SECRETS_SETUP.md](../GITHUB_SECRETS_SETUP.md)
- 🔒 Review security practices: [SECURITY_BEST_PRACTICES.md](SECURITY_BEST_PRACTICES.md)
- 🚀 Plan production deployment: [PRODUCTION_DEPLOYMENT.md](PRODUCTION_DEPLOYMENT.md)

### This Month

- 🔄 Set up credential rotation schedule
- 📊 Configure monitoring dashboards
- 👥 Train team on alert procedures
- 📝 Document operational runbooks

---

## 🆘 Need Help?

### Quick Links

- **Full Setup Guide:** [GITHUB_SECRETS_SETUP.md](../GITHUB_SECRETS_SETUP.md)
- **Email Examples:** [EMAIL_PROVIDER_EXAMPLES.md](EMAIL_PROVIDER_EXAMPLES.md)
- **Security Guide:** [SECURITY_BEST_PRACTICES.md](SECURITY_BEST_PRACTICES.md)
- **Troubleshooting:** See "Common Email Delivery Issues" in main guide

### Support Contacts

- **IT Support:** it@ancoris.com (for corporate email issues)
- **Team Lead:** [team-lead@ancoris.com]
- **Documentation:** All guides in `/docs` folder

### Self-Service

1. **Test Workflow:** `.github/workflows/test-email.yml`
2. **Check Logs:** Actions tab → Latest workflow run → View logs
3. **Verify Secrets:** Settings → Secrets and variables → Actions

---

## 🎯 Success Checklist

Mark off each item as you complete it:

### Testing Phase
- [ ] App password generated
- [ ] Three secrets added to GitHub
- [ ] Test workflow run successfully
- [ ] Test email received in inbox (not spam)
- [ ] Email formatting looks correct

### Production Phase
- [ ] Production credentials obtained
- [ ] Secrets updated to production values
- [ ] Team notified of testing
- [ ] Production test run successfully
- [ ] Team confirmed email receipt

### Operational
- [ ] Documentation reviewed
- [ ] Team trained on procedures
- [ ] Monitoring configured
- [ ] Rotation schedule documented
- [ ] Emergency contacts identified

---

## 💡 Pro Tips

**Tip 1: Test First**
Always test with your personal email before using team email. Saves time and avoids spam.

**Tip 2: Use Distribution Lists**
Instead of individual emails, use team@company.com. Easier to manage.

**Tip 3: Document Everything**
Keep notes of what works. Future you (and your team) will thank you.

**Tip 4: Set Reminders**
Calendar reminder for credential rotation every 90 days.

**Tip 5: Keep It Simple**
Start basic, add complexity later. Get it working first!

---

## 📅 15-Minute Quick Start Timeline

```
Minute 0-3:   Generate app password
Minute 3-5:   Add secrets to GitHub  
Minute 5-7:   Run test workflow
Minute 7-10:  Check email and verify
Minute 10-15: Review documentation and plan next steps
```

**Total Time: 15 minutes to working email notifications!**

---

## ❓ FAQ

**Q: Can I use my regular email password?**  
A: No! Always use app passwords. They're more secure and required by Gmail/Outlook.

**Q: How many recipients can I have?**  
A: Technically unlimited, but check your email provider's limits. Better to use distribution lists.

**Q: How often should I rotate credentials?**  
A: Every 90 days for production, or immediately if someone leaves the team.

**Q: What if IT says no to SMTP access?**  
A: Ask about SMTP relay or alternative email methods. Escalate if needed for business requirements.

**Q: Can I test without spamming my team?**  
A: Yes! Test with your personal email first, then limited team, then full production.

**Q: What happens if secrets are exposed?**  
A: Immediately rotate credentials, revoke old passwords, and review the security guide.

---

**Ready to start? Follow Step 1 above! ⬆️**

Need the detailed version? See [GITHUB_SECRETS_SETUP.md](../GITHUB_SECRETS_SETUP.md)
