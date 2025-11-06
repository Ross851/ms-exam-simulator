# Security Best Practices for GitHub Secrets

This document outlines security best practices for managing email credentials and GitHub Secrets in the MS Exam Simulator monitoring system.

## Table of Contents

1. [Core Security Principles](#core-security-principles)
2. [Credential Management](#credential-management)
3. [Access Control](#access-control)
4. [Rotation and Maintenance](#rotation-and-maintenance)
5. [Incident Response](#incident-response)
6. [Compliance and Auditing](#compliance-and-auditing)
7. [Security Checklist](#security-checklist)

---

## Core Security Principles

### Never Commit Passwords to Code

**❌ WRONG - Hardcoded Credentials:**

```python
# NEVER DO THIS - Exposed in repository history forever
EMAIL_PASSWORD = "mypassword123"
SMTP_USER = "admin@company.com"
```

```yaml
# NEVER DO THIS - Exposed in config files
email:
  username: admin@company.com
  password: supersecret123
```

```javascript
// NEVER DO THIS - Visible to anyone viewing code
const smtpConfig = {
  auth: {
    user: 'admin@company.com',
    pass: 'password123'
  }
};
```

**✅ CORRECT - Using Environment Variables and Secrets:**

```python
# Good - use environment variables
import os
email_password = os.environ.get('EMAIL_PASSWORD')
smtp_user = os.environ.get('EMAIL_USERNAME')

if not email_password:
    raise ValueError("EMAIL_PASSWORD environment variable not set")
```

```yaml
# Good - use GitHub Secrets
- name: Send Email
  env:
    EMAIL_PASSWORD: ${{ secrets.EMAIL_PASSWORD }}
    EMAIL_USERNAME: ${{ secrets.EMAIL_USERNAME }}
```

```javascript
// Good - read from environment
const smtpConfig = {
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
};
```

### Defense in Depth

Implement multiple layers of security:

1. **Secret Storage:** Use GitHub Secrets (encrypted at rest)
2. **Credential Type:** Use app passwords (limited scope)
3. **Access Control:** Limit who can edit secrets
4. **Rotation:** Regularly change credentials
5. **Monitoring:** Audit access and usage
6. **Least Privilege:** Only grant necessary permissions

---

## Credential Management

### Use App Passwords Instead of Regular Passwords

| Credential Type | Security | Revocability | Scope | Recommendation |
|----------------|----------|--------------|-------|----------------|
| Regular Password | ❌ Low | ❌ Revokes all access | All services | ❌ Never use |
| App Password | ✅ High | ✅ Independent revocation | Email only | ✅ Always use |
| OAuth Token | ✅ Very High | ✅ Can be revoked | Limited scope | ✅ Best option |

### App Password Benefits

1. **Independent Revocation:**
   - Revoke app password without changing main password
   - Doesn't affect other services
   - Can revoke immediately if compromised

2. **Limited Scope:**
   - App passwords typically have restricted permissions
   - Usually limited to specific service (e.g., SMTP only)
   - Cannot access account settings or other services

3. **Better Audit Trail:**
   - Can name app passwords for identification
   - Easier to track which service uses which credential
   - Can see last used date

4. **No Multi-Factor Impact:**
   - Bypasses 2FA requirements for automated systems
   - Main account still protected by 2FA
   - App password works independently

### Creating Secure App Passwords

**Gmail:**
```
1. Enable 2FA: https://myaccount.google.com/security
2. Visit: https://myaccount.google.com/apppasswords
3. Name: "MS Exam Simulator - GitHub Actions"
4. Copy 16-character password immediately
5. Store in password manager
6. Use in GitHub Secrets
```

**Outlook:**
```
1. Enable 2-step: https://account.microsoft.com/security
2. Click "App passwords"
3. Click "Create a new app password"
4. Copy password immediately
5. Store securely
6. Use in GitHub Secrets
```

### Password Storage

**✅ Approved Storage Methods:**

1. **GitHub Secrets** (for active use)
   - Encrypted at rest
   - Only accessible to workflows
   - Cannot be retrieved once set

2. **Team Password Manager** (for backup)
   - 1Password for Teams
   - LastPass Business
   - Bitwarden
   - Keeper Security

3. **Corporate Password Vault** (if available)
   - Company-approved solution
   - Centrally managed
   - Audit trail included

**❌ Never Store Passwords In:**

- Plain text files
- Spreadsheets
- Email
- Chat messages
- Code comments
- Documentation
- Wiki pages
- Issue trackers
- Sticky notes

---

## Access Control

### Repository Access Levels

| Role | Can View Secrets | Can Edit Secrets | Can Use Secrets | Recommendation |
|------|-----------------|-----------------|-----------------|----------------|
| Admin | ❌ No (values hidden) | ✅ Yes | ✅ Yes | 2-3 people max |
| Write | ❌ No | ❌ No | ✅ Yes | Most team members |
| Read | ❌ No | ❌ No | ❌ No | External reviewers |

### Principle of Least Privilege

**Only admins should manage secrets:**

```yaml
Repository Admins (can manage secrets):
  - Team Lead
  - Technical Lead
  - DevOps Engineer (if applicable)

Write Access (can trigger workflows):
  - All team members
  - Can use secrets in workflows
  - Cannot view or modify secrets

Read Access (view only):
  - External reviewers
  - Auditors
  - Stakeholders
```

### Managing Team Access

**Adding Admin Access:**
```
1. Go to repository Settings
2. Click "Collaborators and teams"
3. Add user with "Admin" role
4. Document in team roster
```

**Removing Access (Offboarding):**
```
When team member leaves:
1. Remove from repository collaborators
2. Rotate all secrets immediately
3. Update password manager access
4. Document in offboarding checklist
5. Review recent workflow runs
```

### Organization-Level Secrets

For multiple repositories:

```yaml
Organization Secrets:
  Scope: All repos or selected repos
  Use Case: Shared credentials across projects
  Security: Higher risk if organization compromised
  Recommendation: Use sparingly

Repository Secrets:
  Scope: Single repository only
  Use Case: Project-specific credentials
  Security: Lower blast radius
  Recommendation: Preferred for most cases
```

---

## Rotation and Maintenance

### Credential Rotation Schedule

| Credential Type | Rotation Frequency | Trigger Events |
|----------------|-------------------|----------------|
| Production Secrets | Every 90 days | Scheduled maintenance |
| Development Secrets | Every 180 days | As needed |
| After Team Change | Immediately | Team member leaves |
| After Exposure | Immediately | Credential compromised |
| After Security Incident | Immediately | Any security breach |

### Rotation Process

**Step 1: Pre-Rotation (1 week before)**

```markdown
Rotation Preparation Checklist:
- [ ] Schedule rotation in team calendar
- [ ] Notify team of upcoming rotation
- [ ] Generate new app passwords
- [ ] Test new credentials in dev/staging
- [ ] Document new credentials in password manager
- [ ] Prepare rollback plan
```

**Step 2: Rotation Day**

```bash
# Process for zero-downtime rotation

1. Create temporary test secrets:
   - EMAIL_USERNAME_NEW
   - EMAIL_PASSWORD_NEW
   - EMAIL_TO_NEW

2. Test with validation workflow:
   - Modify test-email.yml to use _NEW secrets
   - Run workflow
   - Verify email delivery

3. Update production secrets:
   - Update EMAIL_USERNAME (if changed)
   - Update EMAIL_PASSWORD (always)
   - Update EMAIL_TO (if needed)

4. Run validation:
   - Test with production workflow
   - Verify no errors
   - Check email delivery

5. Cleanup:
   - Delete _NEW secrets
   - Revert test-email.yml if modified
```

**Step 3: Post-Rotation (within 24 hours)**

```markdown
Post-Rotation Checklist:
- [ ] Revoke old app passwords
- [ ] Verify workflows running successfully
- [ ] Monitor for any issues
- [ ] Update rotation log
- [ ] Document any issues encountered
```

### Rotation Log Template

Keep a log of credential rotations:

```yaml
Credential Rotation Log:

Date: 2025-11-06
Rotated By: John Doe
Secrets Updated:
  - EMAIL_PASSWORD
Reason: Quarterly rotation
Previous Password Revoked: Yes
Verification: test-email.yml passed
Issues: None
Next Rotation: 2026-02-06
```

### Automated Rotation (Advanced)

For organizations with automation:

```yaml
# Example: Automated secret rotation workflow
name: Rotate Secrets

on:
  schedule:
    # Run quarterly
    - cron: '0 0 1 */3 *'
  workflow_dispatch:

jobs:
  rotate:
    runs-on: ubuntu-latest
    steps:
      - name: Notify Team
        # Send notification
      
      - name: Generate New Credentials
        # Use provider API to generate new app password
      
      - name: Update Secrets
        # Use GitHub API to update secrets
        
      - name: Test New Credentials
        # Run validation workflow
      
      - name: Revoke Old Credentials
        # Use provider API to revoke
```

---

## Incident Response

### Types of Security Incidents

1. **Credential Exposure**
   - Accidentally committed to code
   - Shared via insecure channel
   - Discovered in logs

2. **Unauthorized Access**
   - Unknown person has repository access
   - Suspicious workflow runs
   - Unexpected emails sent

3. **Compromise Indicators**
   - Failed authentication attempts
   - Emails sent to unknown recipients
   - Workflow modifications

### Incident Response Procedure

**Phase 1: Immediate Response (0-1 hour)**

```markdown
IMMEDIATE ACTIONS:
1. [ ] STOP - Don't panic, document everything
2. [ ] DISABLE affected workflows immediately
3. [ ] ROTATE all potentially exposed credentials
4. [ ] REVOKE old app passwords
5. [ ] CHECK recent workflow runs for unauthorized activity
6. [ ] NOTIFY team lead and IT security
```

**Phase 2: Investigation (1-24 hours)**

```markdown
INVESTIGATION CHECKLIST:
1. [ ] Identify what was exposed
   - Which credentials?
   - How were they exposed?
   - Who had access?
   - When did exposure occur?

2. [ ] Determine scope:
   - Review Git history
   - Check workflow logs
   - Review access logs (if available)
   - Check email server logs

3. [ ] Assess impact:
   - Were credentials used?
   - Were unauthorized emails sent?
   - Was data accessed?
   - Who was affected?

4. [ ] Document findings:
   - Timeline of events
   - Evidence collected
   - Actions taken
   - People notified
```

**Phase 3: Remediation (1-7 days)**

```markdown
REMEDIATION STEPS:
1. [ ] Implement fixes:
   - Update code to remove exposure
   - Add pre-commit hooks
   - Update documentation
   - Additional training if needed

2. [ ] Verify security:
   - Scan repository for other secrets
   - Review all workflow files
   - Audit access controls
   - Test security measures

3. [ ] Monitor:
   - Watch for suspicious activity
   - Monitor email logs
   - Review workflow runs
   - Check for anomalies

4. [ ] Document:
   - Incident report
   - Lessons learned
   - Prevention measures
   - Updated procedures
```

**Phase 4: Post-Incident (7+ days)**

```markdown
POST-INCIDENT REVIEW:
1. [ ] Conduct retrospective:
   - What happened?
   - Why did it happen?
   - How can we prevent it?
   - What worked well?

2. [ ] Implement improvements:
   - Update security procedures
   - Add additional controls
   - Enhance monitoring
   - Improve training

3. [ ] Update documentation:
   - Security best practices
   - Incident response plan
   - Team training materials
   - Onboarding procedures

4. [ ] Share learnings:
   - Team meeting
   - Documentation update
   - Training session
   - Process improvements
```

### Incident Report Template

```markdown
# Security Incident Report

## Incident Details
- **Date:** 2025-11-06
- **Time:** 14:30 UTC
- **Severity:** [High/Medium/Low]
- **Status:** [Resolved/In Progress]

## Summary
[Brief description of what happened]

## Timeline
- 14:00 - Incident discovered
- 14:05 - Credentials rotated
- 14:10 - Team notified
- 14:30 - Investigation complete
- 15:00 - Remediation complete

## Impact
- **Credentials exposed:** EMAIL_PASSWORD
- **Duration:** 2 hours
- **Affected systems:** GitHub Actions
- **Data accessed:** None confirmed

## Root Cause
[What caused the incident]

## Response Actions
1. Immediately rotated all secrets
2. Revoked old app passwords
3. Reviewed workflow logs
4. No unauthorized activity detected

## Prevention Measures
1. Added pre-commit hooks
2. Updated security training
3. Enhanced monitoring
4. Documented procedures

## Lessons Learned
- [What went well]
- [What could improve]
- [Action items]

## Sign-off
- **Reported by:** John Doe
- **Reviewed by:** Jane Smith
- **Approved by:** IT Security Team
```

---

## Compliance and Auditing

### Audit Trail

Track all secret-related activities:

```yaml
Secret Change Log:
  Format:
    Date: YYYY-MM-DD
    Time: HH:MM UTC
    User: username
    Action: created/updated/deleted
    Secret: SECRET_NAME
    Reason: Why changed
    Verified: Who verified
    
  Example:
    Date: 2025-11-06
    Time: 14:30 UTC
    User: john.doe
    Action: updated
    Secret: EMAIL_PASSWORD
    Reason: Quarterly rotation
    Verified: jane.smith
```

### Compliance Requirements

**For Organizations:**

1. **Access Logging:**
   - Who accessed secrets
   - When secrets were accessed
   - What actions were taken
   - Maintain for 1 year minimum

2. **Retention:**
   - Keep audit logs for required period
   - Backup logs securely
   - Regular review of logs

3. **Documentation:**
   - Security policies documented
   - Procedures up-to-date
   - Training records maintained
   - Incident reports filed

### Regular Security Reviews

**Monthly:**
```markdown
- [ ] Review access logs
- [ ] Check for suspicious activity
- [ ] Verify team member access is current
- [ ] Test backup procedures
```

**Quarterly:**
```markdown
- [ ] Rotate production credentials
- [ ] Review and update documentation
- [ ] Conduct security training
- [ ] Test incident response plan
- [ ] Audit secret usage
```

**Annually:**
```markdown
- [ ] Comprehensive security audit
- [ ] Review and update security policies
- [ ] Penetration testing (if applicable)
- [ ] Compliance assessment
- [ ] Update disaster recovery plan
```

---

## Security Checklist

### Initial Setup Security

```markdown
- [ ] Use app passwords, not regular passwords
- [ ] Enable 2-factor authentication on email accounts
- [ ] Store backup credentials in password manager
- [ ] Document all secret names and purposes
- [ ] Limit admin access to 2-3 people
- [ ] Test credentials before production use
- [ ] Verify secrets are not in code or git history
- [ ] Configure proper secret names (no typos)
- [ ] Document rotation schedule
- [ ] Set up monitoring and alerts
```

### Ongoing Security

```markdown
- [ ] Rotate credentials every 90 days
- [ ] Review access permissions quarterly
- [ ] Monitor workflow logs for anomalies
- [ ] Keep documentation up-to-date
- [ ] Conduct security training for new team members
- [ ] Test incident response procedures
- [ ] Backup critical secrets to password manager
- [ ] Audit secret usage monthly
- [ ] Remove access when team members leave
- [ ] Update secrets after security incidents
```

### Pre-Production Checklist

```markdown
- [ ] All secrets tested in development
- [ ] Team notified of production deployment
- [ ] Backup credentials stored securely
- [ ] Rollback plan documented
- [ ] Monitoring configured
- [ ] Escalation procedures defined
- [ ] Security review completed
- [ ] Compliance requirements met
- [ ] Documentation updated
- [ ] Team trained on procedures
```

---

## Additional Resources

### Tools

**Secret Scanning:**
- GitHub Secret Scanning (built-in)
- git-secrets: https://github.com/awslabs/git-secrets
- TruffleHog: https://github.com/trufflesecurity/trufflehog

**Password Managers:**
- 1Password: https://1password.com
- LastPass: https://lastpass.com
- Bitwarden: https://bitwarden.com

**Security Scanners:**
- GitGuardian: https://www.gitguardian.com
- GitLeaks: https://github.com/zricethezav/gitleaks

### Documentation

- **GitHub Security:** https://docs.github.com/en/code-security
- **OWASP Guidelines:** https://owasp.org/www-project-top-ten/
- **NIST Cybersecurity:** https://www.nist.gov/cyberframework

### Training

- GitHub Security Lab: https://securitylab.github.com
- SANS Security Training: https://www.sans.org
- Cybersecurity Courses: Coursera, Udemy, etc.

---

## Contact

**Security Questions:**
- IT Security Team: it@ancoris.com
- Team Lead: [team-lead@ancoris.com]
- Documentation: GITHUB_SECRETS_SETUP.md

**Report Security Issue:**
```
Subject: SECURITY: [Brief Description]
Priority: High
To: it@ancoris.com
CC: team-lead@ancoris.com

Include:
- What was discovered
- Potential impact
- Steps taken so far
- Assistance needed
```

---

**Document Version:** 1.0  
**Last Updated:** 2025-11-06  
**Next Review:** 2026-02-06
