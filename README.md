# MS Exam Simulator

Microsoft Certification exam simulator and practice tool.

## Overview

This application helps users prepare for Microsoft certification exams by providing:
- Practice questions from various Microsoft certification exams
- Interactive exam simulation
- Progress tracking
- Performance analytics

## 📧 Email Notifications Setup

This repository includes comprehensive documentation for setting up email notifications through GitHub Actions.

### Quick Start

Get email notifications working in 15 minutes:

1. **Generate App Password**
   - Gmail: https://myaccount.google.com/apppasswords
   - Outlook: https://account.microsoft.com/security

2. **Add GitHub Secrets**
   - Go to Settings → Secrets and variables → Actions
   - Add: `EMAIL_USERNAME`, `EMAIL_PASSWORD`, `EMAIL_TO`

3. **Test**
   - Go to Actions → Test Email Configuration → Run workflow
   - Check your email!

📚 **Full Documentation:** [GITHUB_SECRETS_SETUP.md](GITHUB_SECRETS_SETUP.md)  
🚀 **Quick Guide:** [docs/QUICK_START.md](docs/QUICK_START.md)

### Documentation

| Document | Purpose |
|----------|---------|
| [GITHUB_SECRETS_SETUP.md](GITHUB_SECRETS_SETUP.md) | Complete setup guide |
| [docs/QUICK_START.md](docs/QUICK_START.md) | 15-minute setup |
| [docs/EMAIL_PROVIDER_EXAMPLES.md](docs/EMAIL_PROVIDER_EXAMPLES.md) | Provider configurations |
| [docs/SECURITY_BEST_PRACTICES.md](docs/SECURITY_BEST_PRACTICES.md) | Security guidelines |
| [docs/PRODUCTION_DEPLOYMENT.md](docs/PRODUCTION_DEPLOYMENT.md) | Deployment procedures |

## Features

- Interactive question interface
- Multiple choice and multi-select questions
- Progress tracking
- Performance analytics
- Question explanations and learning objectives

## Getting Started

### Running Locally

1. Clone the repository
   ```bash
   git clone https://github.com/Ross851/ms-exam-simulator.git
   cd ms-exam-simulator
   ```

2. Open `index.html` in your browser
   ```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
   ```

3. Start practicing!

### Using the Application

1. Questions are loaded automatically
2. Select your answer(s)
3. Click "Submit" to check your answer
4. Review explanations and learning objectives
5. Navigate between questions
6. Track your progress

## Project Structure

```
ms-exam-simulator/
├── index.html              # Main application interface
├── index1.html             # Alternative interface
├── app.js                  # Application logic
├── questions.js            # Question data structure
├── questions.json          # Question bank
├── styles.css              # Styling
├── .github/
│   └── workflows/
│       └── test-email.yml  # Email testing workflow
├── docs/
│   ├── README.md                      # Documentation index
│   ├── QUICK_START.md                 # Quick setup guide
│   ├── EMAIL_PROVIDER_EXAMPLES.md     # Email configurations
│   ├── SECURITY_BEST_PRACTICES.md     # Security guidelines
│   ├── PRODUCTION_DEPLOYMENT.md       # Deployment guide
│   └── examples/
│       ├── .env.example               # Environment template
│       └── secrets-template.yml       # Secrets template
├── GITHUB_SECRETS_SETUP.md # Complete setup documentation
└── README.md               # This file
```

## Email Notification System

The repository includes a comprehensive email notification system for monitoring and alerts:

### Features

- **GitHub Secrets Integration** - Secure credential storage
- **Multiple Email Providers** - Gmail, Outlook, Office365, custom SMTP
- **Test Workflow** - Validate configuration before production
- **Comprehensive Documentation** - Step-by-step guides for every scenario
- **Security Best Practices** - Credential management and rotation
- **Production Deployment** - Phased rollout procedures

### Setup Process

```
1. Personal Testing → 2. Staging → 3. Production
   (5 minutes)         (1 hour)     (Deploy)
```

See [GITHUB_SECRETS_SETUP.md](GITHUB_SECRETS_SETUP.md) for complete details.

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Security

### Reporting Security Issues

If you discover a security vulnerability:

1. **Do NOT** open a public issue
2. Email: it@ancoris.com (or repository owner)
3. Include details of the vulnerability
4. Allow time for patching before disclosure

### Best Practices

- Never commit credentials to code
- Use app passwords, not regular passwords
- Enable 2-factor authentication
- Rotate credentials every 90 days
- Review access permissions regularly

See [docs/SECURITY_BEST_PRACTICES.md](docs/SECURITY_BEST_PRACTICES.md) for complete guidelines.

## License

[License information to be added]

## Support

### Documentation

- **Setup Guide:** [GITHUB_SECRETS_SETUP.md](GITHUB_SECRETS_SETUP.md)
- **Quick Start:** [docs/QUICK_START.md](docs/QUICK_START.md)
- **All Docs:** [docs/README.md](docs/README.md)

### Contact

- **Issues:** Open a GitHub issue
- **Email:** it@ancoris.com (for Ancoris team)
- **Documentation:** See `docs/` folder

## Acknowledgments

- Microsoft for certification programs
- Contributors to the question bank
- Open source community

---

**Get Started:** [QUICK_START.md](docs/QUICK_START.md) | **Full Setup:** [GITHUB_SECRETS_SETUP.md](GITHUB_SECRETS_SETUP.md)
