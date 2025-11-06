# Microsoft Exam Simulator

A comprehensive exam preparation tool designed for Microsoft Power Platform certifications. This interactive web application helps users practice and analyze certification exam questions with detailed explanations, hints, and performance tracking.

## Features

### 📚 Question Analysis Tool
- **Interactive Question Interface**: Practice with realistic exam-style questions
- **Multiple Question Types**: Support for multiple-choice, drag-drop, and other question formats
- **Detailed Explanations**: Comprehensive analysis for each answer option
- **Smart Hints System**: Progressive hints (easy, medium, hard) to guide learning
- **Performance Tracking**: Monitor your progress and identify areas for improvement

### 🎯 Key Capabilities
- **Topic-Based Organization**: Questions organized by Power Platform topics (Power Apps, Power Automate, Power BI, etc.)
- **Difficulty Levels**: Questions categorized by difficulty (Easy, Medium, Hard)
- **Keyword Highlighting**: Important terms and concepts highlighted for quick reference
- **Common Mistakes**: Learn from typical errors candidates make
- **Concept Testing**: Understand which concepts are being tested in each question
- **Exam References**: Links to relevant Microsoft documentation and learning paths

### ⏱️ Practice Features
- **Timer Functionality**: Track time spent on each question
- **Progress Tracking**: Visual progress indicators
- **Answer Review**: Review and change answers before submission
- **Score Analysis**: Detailed scoring with explanations

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No server or build tools required - runs entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ross851/ms-exam-simulator.git
cd ms-exam-simulator
```

2. Open the application:
```bash
# Option 1: Open index.html directly in your browser
open index.html

# Option 2: Use a simple HTTP server (recommended)
python -m http.server 8000
# Then navigate to http://localhost:8000
```

### Usage

1. **Start Practice**: Open `index.html` in your browser
2. **Select Answers**: Click on answer options to select them
3. **Use Hints**: Click the hint buttons if you need guidance
4. **Review Analysis**: Read detailed explanations for each option
5. **Track Progress**: Monitor your score and time spent

## File Structure

```
ms-exam-simulator/
├── index.html                          # Main React-based question analyzer
├── index1.html                         # Alternative exam interface
├── Microsoft Certification Question Builde.html  # Question builder tool
├── app.js                              # Core application logic (standalone version)
├── questions.js                        # Enhanced question set with metadata
├── questions.json                      # Question data in JSON format
└── styles.css                          # Styling for the application
```

## Question Format

Questions include comprehensive metadata:
- **Topic**: Power Platform component (Power Apps, Power Automate, etc.)
- **Type**: Question format (multiple choice, drag-drop, etc.)
- **Difficulty Level**: Easy, Medium, or Hard
- **Keywords**: Important terms to focus on
- **Hints**: Multi-level guidance system
- **Concepts Tested**: Learning objectives covered
- **Common Mistakes**: Typical errors to avoid
- **Detailed Explanations**: In-depth analysis of correct and incorrect answers

## Technologies Used

- **HTML5/CSS3**: Structure and styling
- **JavaScript (ES6+)**: Core functionality
- **React**: UI components (loaded via CDN)
- **Tailwind CSS**: Utility-first styling framework (loaded via CDN)
- **Babel Standalone**: JSX transformation (loaded via CDN)

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

### Areas for Contribution
- Adding new questions and question sets
- Improving UI/UX
- Adding new features (e.g., study notes, bookmarks, flashcards)
- Bug fixes and performance improvements
- Documentation improvements

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Microsoft Learn for certification content and learning paths
- Power Platform community for feedback and contributions
- All contributors who help improve this tool

## Disclaimer

This is an unofficial exam preparation tool created by the community. It is not affiliated with or endorsed by Microsoft Corporation. All Microsoft product names, logos, and trademarks are property of Microsoft Corporation.

## Support

For questions, issues, or feature requests, please open an issue on the GitHub repository.

## Roadmap

- [ ] Add more question sets for different certifications
- [ ] Implement user accounts and progress saving
- [ ] Add performance analytics and weak area identification
- [ ] Create mobile-responsive design improvements
- [ ] Add study mode with spaced repetition
- [ ] Implement question bookmarking and notes
- [ ] Add exam simulation mode with real timing constraints
