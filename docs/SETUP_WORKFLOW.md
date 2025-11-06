# Email Notification Setup Workflow

Visual guide to the email notification setup process.

## 📊 Complete Setup Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    SETUP WORKFLOW                            │
└─────────────────────────────────────────────────────────────┘

Phase 1: Personal Testing (15 minutes)
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  1. Generate App Password                                   │
│     └─→ Gmail: myaccount.google.com/apppasswords           │
│     └─→ Outlook: account.microsoft.com/security            │
│                                                              │
│  2. Configure GitHub Secrets                                │
│     └─→ Settings → Secrets → Actions                        │
│     └─→ Add EMAIL_USERNAME (your.email@gmail.com)          │
│     └─→ Add EMAIL_PASSWORD (app password)                   │
│     └─→ Add EMAIL_TO (your.email@gmail.com)                │
│                                                              │
│  3. Test Workflow                                           │
│     └─→ Actions → Test Email Configuration                  │
│     └─→ Run workflow                                         │
│     └─→ Check your inbox                                    │
│                                                              │
│  ✅ Success: Email received                                 │
│     └─→ Proceed to Phase 2                                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

Phase 2: Staging (1-2 hours)
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  1. Obtain Production Credentials                           │
│     └─→ Contact IT: it@ancoris.com                         │
│     └─→ Request SMTP access                                 │
│     └─→ Get monitoring@ancoris.com credentials             │
│                                                              │
│  2. Update Secrets (Limited Recipients)                     │
│     └─→ EMAIL_USERNAME: monitoring@ancoris.com             │
│     └─→ EMAIL_PASSWORD: [production app password]          │
│     └─→ EMAIL_TO: you@ancoris.com,lead@ancoris.com        │
│                                                              │
│  3. Notify Staging Team                                     │
│     └─→ Send heads-up email                                 │
│     └─→ Set expectations                                     │
│                                                              │
│  4. Test with Staging Recipients                            │
│     └─→ Run test workflow                                    │
│     └─→ Verify delivery to 2-3 people                      │
│     └─→ Collect feedback                                    │
│                                                              │
│  ✅ Success: Team confirms receipt                          │
│     └─→ Proceed to Phase 3                                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

Phase 3: Production (30 minutes)
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  1. Pre-Deployment                                          │
│     └─→ Notify team 24 hours ahead                         │
│     └─→ Schedule deployment window                          │
│     └─→ Prepare rollback plan                              │
│                                                              │
│  2. Update Secrets (Full Recipients)                        │
│     └─→ EMAIL_TO: team@ancoris.com,it@ancoris.com         │
│     └─→ Verify all other secrets correct                   │
│                                                              │
│  3. Production Test                                         │
│     └─→ Run test workflow                                    │
│     └─→ Monitor execution                                    │
│     └─→ Verify team receives email                         │
│                                                              │
│  4. Post-Deployment                                         │
│     └─→ Confirm with team                                   │
│     └─→ Monitor for 24 hours                               │
│     └─→ Document completion                                 │
│                                                              │
│  ✅ Production Live!                                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Secret Configuration Flow

```
┌────────────────────────────────────────────────────────────────┐
│                    SECRET LIFECYCLE                             │
└────────────────────────────────────────────────────────────────┘

1. Generate App Password
   ┌─────────────────────────────────────┐
   │  Email Provider                     │
   │  (Gmail/Outlook/Corporate)          │
   │                                     │
   │  Enable 2FA → Generate App Password │
   └───────────────┬─────────────────────┘
                   │
                   ▼
2. Store in GitHub Secrets
   ┌─────────────────────────────────────┐
   │  GitHub Repository                  │
   │  Settings → Secrets → Actions       │
   │                                     │
   │  EMAIL_USERNAME: ●●●●●●●           │
   │  EMAIL_PASSWORD: ●●●●●●●           │
   │  EMAIL_TO: ●●●●●●●                 │
   └───────────────┬─────────────────────┘
                   │
                   ▼
3. Backup in Password Manager
   ┌─────────────────────────────────────┐
   │  Team Password Manager              │
   │  (1Password/LastPass/etc)           │
   │                                     │
   │  Store for disaster recovery        │
   └───────────────┬─────────────────────┘
                   │
                   ▼
4. Use in Workflows
   ┌─────────────────────────────────────┐
   │  GitHub Actions                     │
   │  test-email.yml                     │
   │                                     │
   │  env:                               │
   │    EMAIL_PASSWORD: ${{ secrets }}   │
   └───────────────┬─────────────────────┘
                   │
                   ▼
5. Rotate Every 90 Days
   ┌─────────────────────────────────────┐
   │  Scheduled Rotation                 │
   │                                     │
   │  Generate new → Test → Update       │
   │  → Revoke old                       │
   └─────────────────────────────────────┘
```

---

## 🎯 Decision Tree

```
Need to set up email notifications?
│
├─ First time setup?
│  │
│  ├─ YES → Read QUICK_START.md
│  │        └─ Personal email test (15 min)
│  │           └─ Success? → Production setup
│  │
│  └─ NO → Already configured
│
├─ Need to deploy to production?
│  │
│  ├─ YES → Read PRODUCTION_DEPLOYMENT.md
│  │        └─ Follow phased approach
│  │           └─ Test → Stage → Production
│  │
│  └─ NO → Maintaining existing setup
│
├─ Having issues?
│  │
│  ├─ Authentication error?
│  │  └─ Check app password
│  │     └─ Regenerate if needed
│  │
│  ├─ Email not received?
│  │  └─ Check spam folder
│  │     └─ Verify EMAIL_TO
│  │
│  └─ Other issue?
│     └─ See troubleshooting guide
│
├─ Security concern?
│  │
│  └─ Read SECURITY_BEST_PRACTICES.md
│     └─ Implement recommendations
│        └─ Rotate credentials
│
└─ Need specific provider setup?
   │
   └─ Read EMAIL_PROVIDER_EXAMPLES.md
      └─ Find your provider
         └─ Follow instructions
```

---

## 📈 Testing Progression

```
┌──────────────────────────────────────────────────────────┐
│                   TESTING STAGES                          │
└──────────────────────────────────────────────────────────┘

Stage 1: Local/Personal Testing
├─ Recipients: 1 (you)
├─ Email: Your personal email
├─ Duration: 15 minutes
├─ Goal: Verify basic functionality
└─ Risk: None (only affects you)

        │ Success? 
        ▼ YES

Stage 2: Limited Team Testing  
├─ Recipients: 2-3 team members
├─ Email: Production account
├─ Duration: 1-2 hours
├─ Goal: Test with real credentials
└─ Risk: Low (limited audience)

        │ Success?
        ▼ YES

Stage 3: Full Team Testing
├─ Recipients: All team (distribution lists)
├─ Email: Production account  
├─ Duration: 30 minutes
├─ Goal: Validate full deployment
└─ Risk: Medium (full team sees test)

        │ Success?
        ▼ YES

Stage 4: Production Monitoring
├─ Recipients: Full team
├─ Email: Production account
├─ Duration: Ongoing
├─ Goal: Live monitoring
└─ Risk: Normal operational risk

        │ Issues?
        ├─ YES → Troubleshoot & Fix
        │        └─ Review docs
        │           └─ Contact IT
        │
        └─ NO → Success! ✅
                └─ Monitor regularly
                   └─ Rotate credentials
```

---

## 🔐 Security Workflow

```
┌──────────────────────────────────────────────────────────┐
│               SECURITY BEST PRACTICES                     │
└──────────────────────────────────────────────────────────┘

Initial Setup
├─ [x] Enable 2FA on email account
├─ [x] Generate app password (not regular password)
├─ [x] Store in GitHub Secrets (encrypted)
├─ [x] Backup in password manager
└─ [x] Document in secure location

Ongoing Maintenance  
├─ [ ] Rotate every 90 days
├─ [ ] Audit access monthly
├─ [ ] Review recipient lists quarterly
├─ [ ] Monitor workflow logs
└─ [ ] Update documentation

Incident Response (if credentials exposed)
├─ 1. Immediately disable workflows
├─ 2. Rotate all credentials
├─ 3. Revoke old app passwords
├─ 4. Review recent activity
├─ 5. Notify security team
└─ 6. Document incident

Team Member Leaves
├─ 1. Remove repository access
├─ 2. Rotate all credentials
├─ 3. Update password manager access
├─ 4. Review recent activity
└─ 5. Document changes
```

---

## 📋 Configuration Matrix

```
┌────────────────────────────────────────────────────────────────┐
│              ENVIRONMENT CONFIGURATIONS                         │
└────────────────────────────────────────────────────────────────┘

DEVELOPMENT
┌─────────────────────────────────────────────────────────┐
│ EMAIL_USERNAME: your.personal@gmail.com                 │
│ EMAIL_PASSWORD: [your personal app password]            │
│ EMAIL_TO:       your.personal@gmail.com                 │
│                                                          │
│ Purpose: Initial testing and development                │
│ Duration: Until personal test succeeds                  │
│ Risk Level: None (only affects developer)               │
└─────────────────────────────────────────────────────────┘

STAGING
┌─────────────────────────────────────────────────────────┐
│ EMAIL_USERNAME: monitoring@ancoris.com                  │
│ EMAIL_PASSWORD: [production app password]               │
│ EMAIL_TO:       dev1@ancoris.com,dev2@ancoris.com      │
│                                                          │
│ Purpose: Test with production credentials               │
│ Duration: Until staging test succeeds                   │
│ Risk Level: Low (limited team exposure)                 │
└─────────────────────────────────────────────────────────┘

PRODUCTION
┌─────────────────────────────────────────────────────────┐
│ EMAIL_USERNAME: monitoring@ancoris.com                  │
│ EMAIL_PASSWORD: [production app password]               │
│ EMAIL_TO:       team@ancoris.com,it@ancoris.com        │
│                                                          │
│ Purpose: Live monitoring and alerts                     │
│ Duration: Ongoing (rotate every 90 days)                │
│ Risk Level: Normal (operational)                        │
└─────────────────────────────────────────────────────────┘
```

---

## 🚨 Troubleshooting Flow

```
┌────────────────────────────────────────────────────────────┐
│                 TROUBLESHOOTING GUIDE                       │
└────────────────────────────────────────────────────────────┘

Issue: Workflow fails
│
├─ Check workflow logs
│  └─ Actions → Latest run → View logs
│     │
│     ├─ Authentication error?
│     │  └─ Verify secrets are correct
│     │     └─ Regenerate app password
│     │
│     ├─ Connection timeout?
│     │  └─ Check SMTP server/port
│     │     └─ Try different port
│     │
│     └─ Other error?
│        └─ See detailed troubleshooting guide
│
├─ Email not received?
│  └─ Workflow succeeded but no email?
│     │
│     ├─ Check spam folder
│     ├─ Verify EMAIL_TO address
│     ├─ Wait 5-10 minutes
│     └─ Check email server logs
│
└─ Email formatting wrong?
   └─ Review email template
      └─ Test with different email client
         └─ Adjust HTML/plain text versions

Still having issues?
├─ Review GITHUB_SECRETS_SETUP.md
├─ Check provider-specific guide
├─ Contact IT support
└─ Open GitHub issue
```

---

## 📊 Success Metrics

```
┌────────────────────────────────────────────────────────────┐
│                   MEASURING SUCCESS                         │
└────────────────────────────────────────────────────────────┘

Technical Metrics
├─ Workflow Success Rate: >99%
├─ Email Delivery Time: <5 minutes  
├─ Failed Deliveries: 0 per week
└─ Spam Folder Rate: 0%

Team Metrics
├─ Team received test email: 100%
├─ Positive team feedback: >90%
├─ Alert fatigue: Minimal
└─ False positives: <5%

Process Metrics
├─ Setup time: <2 hours (complete)
├─ Time to first email: <15 minutes
├─ Documentation clarity: High
└─ Support requests: <5 per month

Security Metrics
├─ Credentials rotated: On schedule
├─ Security incidents: 0
├─ Access properly limited: Yes
└─ Audit trail: Complete
```

---

## 🎓 Learning Path

```
┌────────────────────────────────────────────────────────────┐
│                    LEARNING JOURNEY                         │
└────────────────────────────────────────────────────────────┘

Level 1: Beginner (Day 1)
├─ Read: QUICK_START.md (5 min)
├─ Do: Personal email test (15 min)
├─ Verify: Email received
└─ Result: Basic understanding

Level 2: Intermediate (Week 1)  
├─ Read: GITHUB_SECRETS_SETUP.md (30 min)
├─ Do: Production setup (2 hours)
├─ Verify: Team receives emails
└─ Result: Production deployment

Level 3: Advanced (Month 1)
├─ Read: SECURITY_BEST_PRACTICES.md (15 min)
├─ Read: PRODUCTION_DEPLOYMENT.md (20 min)
├─ Do: First credential rotation
└─ Result: Full operational knowledge

Level 4: Expert (Ongoing)
├─ Practice: Troubleshooting issues
├─ Optimize: Alert frequency and content
├─ Improve: Documentation and processes
└─ Result: Subject matter expert
```

---

## 📞 Support Flow

```
┌────────────────────────────────────────────────────────────┐
│                   GETTING HELP                              │
└────────────────────────────────────────────────────────────┘

Self-Service (Try first)
├─ 1. Check documentation
│     └─ GITHUB_SECRETS_SETUP.md
│        └─ Troubleshooting section
│
├─ 2. Review workflow logs
│     └─ Actions → Latest run
│        └─ Look for error messages
│
├─ 3. Run test workflow
│     └─ Validates configuration
│        └─ Shows detailed errors
│
└─ 4. Search docs
      └─ Use Ctrl+F in guides
         └─ Look for error message

Still need help?
│
├─ Technical Issues
│  └─ Contact: IT Support (it@ancoris.com)
│     └─ Include: Error logs, steps tried
│
├─ Security Questions  
│  └─ Contact: Security Team
│     └─ Include: Specific concern
│
└─ Documentation Issues
   └─ Open: GitHub issue
      └─ Include: What's unclear
```

---

## 📚 Quick Reference

```
╔═══════════════════════════════════════════════════════════╗
║              QUICK REFERENCE CARD                          ║
╠═══════════════════════════════════════════════════════════╣
║                                                            ║
║ Setup Time: 15 minutes (personal) → 2 hours (production) ║
║                                                            ║
║ Required Secrets:                                          ║
║   • EMAIL_USERNAME - Sender email                         ║
║   • EMAIL_PASSWORD - App password (not regular!)          ║
║   • EMAIL_TO - Recipients                                 ║
║                                                            ║
║ Where to Configure:                                        ║
║   Settings → Secrets and variables → Actions              ║
║                                                            ║
║ How to Test:                                               ║
║   Actions → Test Email Configuration → Run workflow       ║
║                                                            ║
║ Documentation:                                             ║
║   • Quick:    docs/QUICK_START.md                         ║
║   • Complete: GITHUB_SECRETS_SETUP.md                     ║
║   • Security: docs/SECURITY_BEST_PRACTICES.md             ║
║                                                            ║
║ Support:                                                   ║
║   • IT: it@ancoris.com                                    ║
║   • Docs: docs/README.md                                   ║
║                                                            ║
╚═══════════════════════════════════════════════════════════╝
```

---

**Next Step:** [QUICK_START.md](QUICK_START.md) | **Full Guide:** [GITHUB_SECRETS_SETUP.md](../GITHUB_SECRETS_SETUP.md)
