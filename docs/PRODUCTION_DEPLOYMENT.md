# Production Deployment Guide

Complete guide for deploying email notifications to production for the MS Exam Simulator monitoring system.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deployment Phases](#deployment-phases)
3. [Team Notification Setup](#team-notification-setup)
4. [Monitoring and Validation](#monitoring-and-validation)
5. [Rollback Procedures](#rollback-procedures)
6. [Post-Deployment](#post-deployment)

---

## Pre-Deployment Checklist

Complete all items before deploying to production:

### Phase 1: Testing Complete

```markdown
- [ ] Personal email test passed successfully
- [ ] Test workflow (test-email.yml) runs without errors
- [ ] Email delivery confirmed (inbox, not spam)
- [ ] Email formatting verified (HTML and plain text)
- [ ] All three secrets tested (EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_TO)
- [ ] Workflow logs reviewed (no warnings or errors)
- [ ] Documentation reviewed and understood
```

### Phase 2: Production Credentials

```markdown
- [ ] Production email account identified
- [ ] Production credentials obtained from IT (if needed)
- [ ] App password generated (not regular password)
- [ ] Credentials backed up in password manager
- [ ] Service account created (if using dedicated account)
- [ ] SMTP settings documented
- [ ] Credentials tested locally (optional but recommended)
```

### Phase 3: Recipients Configuration

```markdown
- [ ] Primary recipient list identified (e.g., team@ancoris.com)
- [ ] Escalation contacts identified (e.g., it@ancoris.com)
- [ ] Distribution lists verified and active
- [ ] Team members confirmed subscribed to lists
- [ ] Recipient email addresses validated (no typos)
- [ ] Spam folder checks coordinated with team
```

### Phase 4: Documentation and Planning

```markdown
- [ ] Deployment date scheduled
- [ ] Team notified of deployment schedule
- [ ] Rollback plan documented
- [ ] Success criteria defined
- [ ] Escalation contacts documented
- [ ] Deployment runbook prepared
- [ ] Post-deployment monitoring plan created
```

### Phase 5: Security Review

```markdown
- [ ] App passwords used (not regular passwords)
- [ ] 2-Factor authentication enabled on email accounts
- [ ] Credentials not in code or documentation
- [ ] Access controls reviewed
- [ ] Only necessary people have admin access
- [ ] Rotation schedule documented
- [ ] Incident response plan reviewed
```

### Phase 6: Technical Readiness

```markdown
- [ ] GitHub Secrets placeholders ready
- [ ] Workflow files reviewed and tested
- [ ] Error handling verified
- [ ] Logging and monitoring configured
- [ ] Rate limits understood
- [ ] SMTP settings verified
- [ ] Email templates finalized
```

---

## Deployment Phases

### Phase 1: Staging Deployment (Recommended)

Test with limited team before full production.

#### Step 1: Configure Staging Secrets

```bash
# Use limited test group
EMAIL_USERNAME: monitoring@ancoris.com (or test account)
EMAIL_PASSWORD: [production credentials but staging environment]
EMAIL_TO: your.name@ancoris.com,team-lead@ancoris.com
```

#### Step 2: Notify Staging Team

```
To: your.name@ancoris.com, team-lead@ancoris.com
Subject: Staging Test - Email Notifications

Hi Team,

We're testing the production email configuration in staging.
You should receive test emails over the next hour.

Expected:
- 1-2 test emails from monitoring@ancoris.com
- Emails should arrive within 5 minutes
- Should NOT go to spam

Please:
- Confirm receipt
- Check spam folder if not received
- Reply with any formatting issues
- Note any unexpected behavior

Timeline: Testing for 1 hour starting now

Thanks!
```

#### Step 3: Run Staging Tests

```bash
1. Update secrets to staging configuration
2. Run test-email.yml workflow
3. Wait for email delivery (5 minutes)
4. Collect feedback from staging team
5. Fix any issues identified
6. Re-test if changes made
7. Document results
```

#### Step 4: Staging Validation

```markdown
Staging Success Criteria:
- [ ] All staging recipients received email
- [ ] Email arrived within 5 minutes
- [ ] Email not in spam folder
- [ ] Subject line correct
- [ ] Email body formatted correctly
- [ ] Sender address correct
- [ ] No workflow errors
- [ ] No warnings in logs
- [ ] Team feedback positive
```

### Phase 2: Production Deployment

Full production deployment to all recipients.

#### Step 1: Pre-Deployment Notification

Send 24 hours before deployment:

```
To: team@ancoris.com
Subject: Upcoming Deployment - Monitoring Email System

Team,

Tomorrow we'll be deploying the MS Exam Simulator monitoring system.

What to expect:
- Date: [Tomorrow's date]
- Time: [Specific time]
- Duration: ~30 minutes
- Impact: You'll receive 1 test email

Action needed:
- Check your inbox around [time]
- Verify email not in spam
- Reply-all if you DON'T receive the email
- Report any issues immediately

The email will come from: monitoring@ancoris.com
Subject line: "Test Email - MS Exam Simulator Monitoring"

After this test, the monitoring system will be live and will send
alerts as needed (estimated frequency: [X per week]).

Questions? Reply to this email.

Thanks!
[Your name]
```

#### Step 2: Update Production Secrets

**Navigate to GitHub Repository:**
1. Go to Settings → Secrets and variables → Actions
2. Update each secret:

```yaml
EMAIL_USERNAME:
  Old: [staging or test email]
  New: monitoring@ancoris.com
  
EMAIL_PASSWORD:
  Old: [test app password]
  New: [production app password]
  
EMAIL_TO:
  Old: [limited recipients]
  New: team@ancoris.com,it@ancoris.com
```

**How to Update:**
```
For each secret:
1. Click secret name
2. Click "Update secret"
3. Enter new value
4. Click "Update secret"
5. Verify "Updated" timestamp changes
```

#### Step 3: Production Test

```bash
1. Go to Actions tab
2. Select "Test Email Configuration" workflow
3. Click "Run workflow"
4. Select branch: main
5. Click green "Run workflow" button
6. Monitor workflow execution (2-3 minutes)
7. Check for green checkmark (success)
8. Review logs for any warnings
```

#### Step 4: Verify Delivery

```markdown
Verification Checklist (5-10 minutes after send):
- [ ] Workflow completed successfully
- [ ] No errors in workflow logs
- [ ] Test email received by team@ancoris.com members
- [ ] Test email received by it@ancoris.com members
- [ ] Email not in spam folders
- [ ] Email formatting correct
- [ ] Sender address shows monitoring@ancoris.com
- [ ] Subject line appropriate
- [ ] Links in email work (if any)
```

#### Step 5: Post-Deployment Notification

Send after successful test:

```
To: team@ancoris.com
Subject: Deployment Complete - Monitoring System Live

Team,

The monitoring email system deployment is complete.

Test Results:
✅ Test email sent successfully
✅ Delivered to all recipients
✅ No errors detected

The system is now LIVE and will send alerts for:
- [List alert types]
- [Expected frequency]
- [Escalation procedures]

Email details:
- From: monitoring@ancoris.com
- To: team@ancoris.com, it@ancoris.com
- Subject format: [Example subject line]

What to do if you receive an alert:
1. [First step]
2. [Second step]
3. [Escalation if needed]

Questions or issues? Contact: [Your contact info]

Thanks for your patience during deployment!
```

---

## Team Notification Setup

### Distribution Lists Configuration

#### Primary Team List

```yaml
Purpose: Regular monitoring alerts and notifications
Address: team@ancoris.com
Members: 
  - All team members who need alerts
  - Should include developers, QA, devops
  - Exclude people who don't need technical alerts
Management: 
  - Maintained by: HR or team lead
  - Review frequency: Quarterly
  - Update process: Contact [person/team]
```

#### IT Support List

```yaml
Purpose: Technical escalations and critical issues
Address: it@ancoris.com
Members:
  - IT support team
  - DevOps engineers
  - System administrators
Management:
  - Maintained by: IT department
  - 24/7 monitoring: Yes/No
  - Escalation SLA: [X hours]
```

#### Management List (Optional)

```yaml
Purpose: Critical alerts requiring management attention
Address: management@ancoris.com
Members:
  - Engineering manager
  - Product manager
  - Technical director
Management:
  - Use sparingly for critical issues only
  - Document escalation criteria
  - Review quarterly
```

### Email Tiers Configuration

Configure different recipient lists based on severity:

#### Tier 1: Informational

```yaml
Recipients: team@ancoris.com
Frequency: Regular (daily/weekly)
Examples:
  - Successful backups
  - Regular status reports
  - Non-critical updates
Response Required: No immediate action
```

#### Tier 2: Warning

```yaml
Recipients: team@ancoris.com
Frequency: As needed
Examples:
  - Performance degradation
  - Approaching limits
  - Configuration issues
Response Required: Investigate within business hours
```

#### Tier 3: Critical

```yaml
Recipients: team@ancoris.com,it@ancoris.com
Frequency: Rare (immediate alerts)
Examples:
  - Service outages
  - Security incidents
  - Data loss events
Response Required: Immediate action
```

#### Tier 4: Emergency

```yaml
Recipients: team@ancoris.com,it@ancoris.com,management@ancoris.com
Frequency: Very rare (emergency only)
Examples:
  - Complete system failure
  - Major security breach
  - Data corruption
Response Required: All-hands response
```

### Monitoring Email Account Setup

If using dedicated monitoring account (recommended):

#### Account Details

```yaml
Email: monitoring@ancoris.com
Display Name: "MS Exam Simulator Monitor"
Purpose: Automated system notifications
Type: Service account (not personal)
```

#### Configuration Steps

1. **Create Account:**
   ```
   - Contact IT: it@ancoris.com
   - Request new service account
   - Purpose: GitHub Actions monitoring
   - Access needed: SMTP send only
   ```

2. **Configure Account:**
   ```
   - Enable app password support
   - Generate app password for GitHub
   - Configure email signature (optional)
   - Set up auto-reply (optional)
   - Disable inbox (send-only account)
   ```

3. **Access Management:**
   ```
   - Primary owner: Team lead
   - Backup access: DevOps lead, Senior developer
   - Store credentials in: Team password manager
   - Document: Team wiki, onboarding docs
   ```

4. **Email Signature (Optional):**
   ```
   ---
   MS Exam Simulator Monitoring System
   Automated notification - do not reply
   
   Questions? Contact: team@ancoris.com
   Documentation: [link to docs]
   ```

---

## Monitoring and Validation

### Week 1: Close Monitoring

First week after deployment - daily checks:

```markdown
Daily Checklist:
- [ ] Check workflow runs in GitHub Actions
- [ ] Verify emails delivered successfully
- [ ] Review workflow logs for errors/warnings
- [ ] Confirm no emails in spam folders
- [ ] Monitor for team feedback
- [ ] Check email delivery time (should be <5 minutes)
- [ ] Verify correct recipients receiving emails
- [ ] Document any issues
```

### Week 2-4: Regular Monitoring

After first week - every 2-3 days:

```markdown
Regular Monitoring:
- [ ] Review workflow execution history
- [ ] Check for any failed runs
- [ ] Verify email delivery rates
- [ ] Monitor spam folder reports
- [ ] Collect team feedback
- [ ] Adjust frequency if needed
- [ ] Document any patterns
```

### Ongoing: Monthly Review

Monthly monitoring activities:

```markdown
Monthly Review Checklist:
- [ ] Review all workflow runs for the month
- [ ] Calculate success rate
- [ ] Review email delivery metrics
- [ ] Check recipient list is current
- [ ] Verify no team members have left
- [ ] Review alert frequency and appropriateness
- [ ] Collect team feedback on alerts
- [ ] Update documentation if needed
- [ ] Plan credential rotation (if due)
```

### Key Metrics to Track

```yaml
Metrics Dashboard:
  Workflow Success Rate:
    Target: >99%
    Alert if: <95%
    
  Email Delivery Time:
    Target: <5 minutes
    Alert if: >10 minutes
    
  Spam Folder Rate:
    Target: 0%
    Alert if: >5%
    
  Failed Deliveries:
    Target: 0
    Alert if: >1 per week
    
  Response Time (critical alerts):
    Target: <30 minutes
    Alert if: >1 hour
```

---

## Rollback Procedures

### When to Rollback

Trigger rollback if:
- Email delivery fails consistently
- Workflow errors persist
- Emails going to spam for majority of users
- Authentication failures
- Team reports major issues
- Security incident detected

### Rollback Steps

#### Quick Rollback (Emergency)

```bash
# If immediate stop needed (5 minutes)

1. Disable Workflows:
   - Go to Actions tab
   - Click on workflow name
   - Click "..." menu
   - Select "Disable workflow"

2. Notify Team:
   Subject: Monitoring System Temporarily Disabled
   Body: "Experiencing technical issues. System disabled 
          while we investigate. Will update shortly."

3. Investigate:
   - Review workflow logs
   - Check GitHub status
   - Verify secrets configuration
   - Test with personal email
```

#### Full Rollback to Previous Configuration

```bash
# If need to restore previous working config (15-30 minutes)

1. Document Current State:
   - Screenshot current secrets
   - Export workflow logs
   - Note what's not working

2. Restore Previous Secrets:
   - Update EMAIL_USERNAME to previous value
   - Update EMAIL_PASSWORD to previous value  
   - Update EMAIL_TO to previous value
   - Verify updates saved

3. Test Rollback:
   - Run test-email.yml workflow
   - Verify email delivered to previous recipients
   - Check logs for errors

4. Re-enable Workflows:
   - Enable any disabled workflows
   - Monitor for successful execution

5. Notify Team:
   Subject: Monitoring System Restored
   Body: "System rolled back to previous configuration.
          Investigating issues before re-attempting deployment."

6. Root Cause Analysis:
   - What went wrong?
   - Why did it go wrong?
   - How to prevent?
   - When to retry deployment?
```

### Rollback Validation

```markdown
Verify Rollback Successful:
- [ ] Previous secrets restored
- [ ] Workflows running successfully
- [ ] Emails delivering to expected recipients
- [ ] No errors in logs
- [ ] Team notified of rollback
- [ ] System stable for 24 hours
- [ ] Root cause identified
```

---

## Post-Deployment

### First 24 Hours

```markdown
Immediate Post-Deployment (0-24 hours):
- [ ] Monitor all workflow runs
- [ ] Verify all emails delivered
- [ ] Collect immediate feedback
- [ ] Fix any critical issues
- [ ] Document any problems
- [ ] Update team with status
```

### First Week

```markdown
Week 1 Activities:
- [ ] Daily monitoring of workflows
- [ ] Daily email delivery verification
- [ ] Collect team feedback
- [ ] Adjust frequency if needed
- [ ] Fix formatting issues
- [ ] Update documentation
- [ ] Plan improvements
```

### First Month

```markdown
Month 1 Activities:
- [ ] Weekly review of metrics
- [ ] Analyze alert patterns
- [ ] Optimize alert frequency
- [ ] Refine email content
- [ ] Update recipient lists
- [ ] Review security posture
- [ ] Document lessons learned
- [ ] Plan next improvements
```

### Success Criteria

```yaml
Deployment Successful When:
  Email Delivery:
    - >99% success rate
    - <5 minute delivery time
    - 0% spam folder rate
  
  Team Satisfaction:
    - Positive feedback from team
    - Appropriate alert frequency
    - Clear, actionable emails
    - No false positives
  
  Technical:
    - No workflow failures
    - No authentication errors
    - Proper logging
    - Good performance
  
  Process:
    - Documentation complete
    - Team trained
    - Runbooks updated
    - Monitoring in place
```

### Documentation Updates

After deployment, update:

```markdown
Documents to Update:
- [ ] GITHUB_SECRETS_SETUP.md (with production details)
- [ ] Team wiki (operational procedures)
- [ ] Runbooks (troubleshooting steps)
- [ ] Onboarding docs (for new team members)
- [ ] Architecture diagrams (system overview)
- [ ] Contact lists (escalation procedures)
- [ ] Deployment log (record of deployment)
```

### Knowledge Transfer

Ensure team knowledge:

```markdown
Training and Handoff:
- [ ] Conduct team training session
- [ ] Document operational procedures
- [ ] Create quick reference guide
- [ ] Identify backup admins
- [ ] Share password manager access
- [ ] Review escalation procedures
- [ ] Test rollback with team
- [ ] Create FAQ based on questions
```

### Continuous Improvement

Plan for ongoing improvements:

```markdown
Improvement Backlog:
- [ ] Automated monitoring dashboards
- [ ] Enhanced email templates
- [ ] Better error handling
- [ ] Automated secret rotation
- [ ] Integration with incident management
- [ ] Custom alerting rules
- [ ] Performance optimization
- [ ] Additional metrics
```

---

## Deployment Runbook Template

Use this template for actual deployments:

```markdown
# Deployment Runbook: Email Notifications Production

## Deployment Details
- **Date:** YYYY-MM-DD
- **Time:** HH:MM UTC
- **Deployed by:** [Your name]
- **Approved by:** [Approver name]
- **Version:** 1.0

## Pre-Deployment
- [ ] All pre-deployment checklist items completed
- [ ] Team notified 24 hours in advance
- [ ] Staging tests passed
- [ ] Rollback plan ready
- [ ] Production credentials obtained
- [ ] Backup taken of current configuration

## Deployment Steps
1. [ ] Update EMAIL_USERNAME secret
2. [ ] Update EMAIL_PASSWORD secret
3. [ ] Update EMAIL_TO secret
4. [ ] Verify secrets saved correctly
5. [ ] Run test-email.yml workflow
6. [ ] Monitor workflow execution
7. [ ] Verify email delivery
8. [ ] Check team received emails

## Validation
- [ ] Workflow completed successfully: ✅/❌
- [ ] Email delivered: ✅/❌
- [ ] Team confirmed receipt: ✅/❌
- [ ] No errors in logs: ✅/❌
- [ ] Email not in spam: ✅/❌
- [ ] Formatting correct: ✅/❌

## Issues Encountered
[Document any issues and resolutions]

## Rollback (if needed)
- [ ] Rollback initiated at: [time]
- [ ] Previous secrets restored
- [ ] System validated
- [ ] Team notified
- [ ] Rollback complete at: [time]

## Post-Deployment
- [ ] Team notified of completion
- [ ] Documentation updated
- [ ] Monitoring activated
- [ ] Next review scheduled
- [ ] Deployment report created

## Sign-off
- **Deployed by:** [Name] - [Date/Time]
- **Validated by:** [Name] - [Date/Time]
- **Approved by:** [Name] - [Date/Time]
```

---

## Contact and Support

### During Deployment

```yaml
Primary Contact: [Your name]
  Email: your.name@ancoris.com
  Phone: [if urgent]
  Available: [Deployment time window]

Backup Contact: [Backup name]
  Email: backup@ancoris.com
  Available: [Times]

IT Support: it@ancoris.com
  For: Technical issues
  Response time: [X hours]
```

### After Deployment

```yaml
Questions: team@ancoris.com
Issues: it@ancoris.com
Documentation: GITHUB_SECRETS_SETUP.md
Monitoring: [Dashboard URL if exists]
```

---

**Document Version:** 1.0  
**Last Updated:** 2025-11-06  
**Next Review:** After first production deployment
