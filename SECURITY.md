# Security & Privacy Policy

**Last Updated**: January 2024

## Overview

At AltruisticXAI, privacy and security are not afterthoughts—they're core to our mission. This document outlines our commitment to protecting your data and maintaining your trust.

## Core Principles

### 1. Privacy by Default
Your reflections are private by default. No data leaves your device unless you explicitly choose cloud processing mode.

### 2. User Control
You own your data. You decide what to keep, what to delete, and what to share.

### 3. Transparency
We clearly explain what data we collect, why, and how it's used.

### 4. Minimalism
We only collect data that's essential for the service to function.

### 5. Security First
We implement industry-standard security practices to protect your information.

## Data Collection & Usage

### What We Collect

#### When Using Local Mode
- **Nothing sent to servers**
- Reflections stored only in your browser
- No tracking, no analytics, no server logs

#### When Using Cloud Mode
- **Reflection text** (temporarily, for AI processing)
- **Processing metadata** (timestamp, processing time)
- **No personally identifiable information** unless you explicitly provide it

#### Always Collected (Minimal)
- **Technical logs** (error reports, performance metrics)
- **Anonymous usage statistics** (optional, can be disabled)

### What We Don't Collect
- ❌ Personal identifying information (name, email) without account creation
- ❌ Location data
- ❌ Browser fingerprints
- ❌ Tracking cookies
- ❌ Third-party tracking
- ❌ Social media data

### How We Use Data

#### Your Reflections
- **Local Mode**: Never leave your device
- **Cloud Mode**: Processed temporarily, then deleted
- **Never**: Used for training AI without explicit consent
- **Never**: Sold or shared with third parties

#### Anonymous Data (With Consent)
If you opt in, anonymized data may be used to:
- Improve AI models
- Understand common ethical dilemmas
- Enhance reflection scripts
- Research ethical decision-making patterns

**Anonymization Process:**
- Remove all personal identifiers
- Aggregate with other users' data
- Randomize timestamps
- Generalize context

## Data Storage

### Browser Storage
- **Local Storage**: User preferences, settings
- **IndexedDB**: Reflection history
- **Session Storage**: Temporary session data

### Server Storage (When Using Cloud Mode)
- **Temporary**: Request data held only during processing
- **Encrypted**: All data encrypted in transit (TLS 1.3)
- **Logs**: Minimal technical logs, retained for 30 days
- **No Long-term Storage**: Reflections not persisted on servers

### Future Database Storage (With Accounts)
When user accounts are implemented:
- **Encrypted at Rest**: AES-256 encryption
- **Access Control**: Strict permission management
- **Backup**: Encrypted backups with retention policy
- **Geographic**: Data stored in user's region when possible

## Data Security

### Technical Measures

#### Transport Security
- HTTPS/TLS 1.3 for all connections
- Certificate pinning
- HSTS (HTTP Strict Transport Security)

#### Application Security
- Content Security Policy (CSP)
- XSS (Cross-Site Scripting) protection
- CSRF (Cross-Site Request Forgery) protection
- Input sanitization and validation
- SQL injection prevention (future backend)

#### Access Control (Future)
- Multi-factor authentication (MFA)
- Role-based access control (RBAC)
- API key rotation
- Session management with secure tokens

### Organizational Measures
- Security awareness training for team
- Code review process
- Regular security audits
- Incident response plan
- Vendor security assessment

### Vulnerability Management
- Regular security testing
- Dependency scanning
- Penetration testing (planned annually)
- Bug bounty program (future)

## Data Retention

### Your Reflections
- **Local Storage**: Kept until you delete them
- **Cloud Processing**: Deleted immediately after processing
- **Backups**: Not included in backups (local storage only)

### Technical Logs
- **Error Logs**: 30 days
- **Access Logs**: 7 days
- **Analytics**: 90 days (aggregated)

### Account Data (Future)
- **Active Accounts**: Retained while account is active
- **Deleted Accounts**: Permanently deleted within 30 days
- **Backup**: Removed from backups within 90 days

## Your Rights

### Access
- View all your data through the Privacy modal
- Export your data in JSON format
- Request a copy of data we hold (when accounts are implemented)

### Correction
- Edit your reflections anytime
- Update your preferences
- Correct your profile information (future)

### Deletion
- Delete individual reflections
- Delete all reflections with one click
- Request account deletion (future)
- Right to be forgotten

### Portability
- Export your data in machine-readable format
- Transfer to other services
- No lock-in

### Objection
- Opt out of anonymous data sharing
- Disable analytics
- Control processing modes

## Cookies & Tracking

### What We Use
- **Essential Cookies**: Session management, preferences
- **No Tracking Cookies**: No advertising or analytics cookies
- **No Third-Party Cookies**: No external trackers

### Your Control
- Browser settings to block cookies
- Privacy modal to control preferences
- No impact on core functionality if cookies disabled

## Third-Party Services

### Current
- **None**: No third-party services in MVP

### Future
When integrations are implemented:
- **Slack**: Only with explicit authorization
- **Notion**: Only data you choose to export
- **LLM Providers**: Temporary processing only
- **CDN**: Static assets only (no personal data)

### Due Diligence
We carefully vet third-party services for:
- Privacy practices
- Security standards
- Data handling policies
- Compliance certifications

## Compliance

### GDPR (General Data Protection Regulation)
- ✅ Lawful basis for processing
- ✅ Data minimization
- ✅ Purpose limitation
- ✅ Storage limitation
- ✅ Integrity and confidentiality
- ✅ Accountability

### CCPA (California Consumer Privacy Act)
- ✅ Right to know
- ✅ Right to delete
- ✅ Right to opt-out
- ✅ Non-discrimination

### HIPAA (For Healthcare Use)
- ⚠️ AltruisticXAI is not currently HIPAA compliant
- Do not enter protected health information (PHI)
- Healthcare version planned for future

## Data Breach Response

### Our Commitment
In the unlikely event of a data breach:
1. **Immediate Action**: Contain and resolve the breach
2. **Assessment**: Determine scope and impact
3. **Notification**: Inform affected users within 72 hours
4. **Transparency**: Provide clear information about the breach
5. **Remediation**: Implement measures to prevent recurrence

### Your Protection
- Encrypted data is unusable even if accessed
- No passwords stored (future: hashed with bcrypt)
- Regular security audits reduce risk

## Children's Privacy

AltruisticXAI is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has provided data, please contact us immediately.

For users 13-17: Parental consent recommended but not required for this general-purpose reflection tool.

## Changes to This Policy

### Notification
We will notify users of significant changes through:
- In-app notification
- Email (if account exists)
- GitHub repository update
- Website announcement

### Your Choice
Continued use after notification constitutes acceptance. If you disagree, you can:
- Export your data
- Delete your account
- Stop using the service

## International Users

### Data Transfers
- Currently: No international transfers (local processing)
- Future: Data stored in your region when possible
- EU users: GDPR compliance maintained
- UK users: UK GDPR compliance
- Other regions: Appropriate safeguards

### Regional Compliance
We adapt our practices to comply with regional laws:
- EU: GDPR
- California: CCPA
- Brazil: LGPD
- Others: Best practices

## Open Source Transparency

### Code Audits
Our code is open source, allowing:
- Public security audits
- Community scrutiny
- Transparency verification
- Independent security research

### Security Contributions
We welcome security researchers to:
- Review our code
- Report vulnerabilities responsibly
- Suggest improvements
- Contribute security enhancements

## Contact

### Privacy Questions
For privacy-related questions or requests:
- Email: privacy@altruisticxai.com (future)
- GitHub: Open an issue with "privacy" label
- Response time: Within 48 hours

### Security Issues
For security vulnerabilities:
- Email: security@altruisticxai.com (future)
- GitHub: Use "security" label (for non-critical issues)
- Response time: Within 24 hours for critical issues

### Data Requests
To exercise your data rights:
- Use the Privacy modal in the app
- Email: data@altruisticxai.com (future)
- Response time: Within 30 days (GDPR requirement)

## Accountability

### Data Protection Officer (Future)
When required by regulation, we will appoint a DPO:
- Oversee data protection strategy
- Monitor compliance
- Handle data subject requests
- Liaison with regulatory authorities

### Regular Reviews
We conduct quarterly reviews of:
- Privacy practices
- Security measures
- Data processing activities
- Compliance status

## Your Trust

Your trust is our most valuable asset. We're committed to:
- Honest communication
- Proactive security
- Continuous improvement
- Ethical practices

If we ever fall short, please hold us accountable.

---

**Questions?** See [FAQ.md](./FAQ.md) or contact us through GitHub.

**Legal Disclaimer**: This policy outlines our practices but does not constitute legal advice. For specific legal concerns, please consult an attorney.

---

*This policy is part of our commitment to ethical AI and human-centered design.*
