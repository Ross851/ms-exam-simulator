# Contributing to Microsoft Exam Simulator

Thank you for your interest in contributing to the Microsoft Exam Simulator! This document provides guidelines and instructions for contributing to this project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Question Contribution Guidelines](#question-contribution-guidelines)
- [Submitting Changes](#submitting-changes)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs
- Check if the bug has already been reported in the [Issues](https://github.com/Ross851/ms-exam-simulator/issues)
- If not, create a new issue with a clear title and description
- Include steps to reproduce the bug
- Include screenshots if applicable
- Mention your browser and operating system

### Suggesting Enhancements
- Check if the enhancement has already been suggested
- Create a new issue with the "enhancement" label
- Provide a clear description of the feature and its benefits
- Include mockups or examples if possible

### Adding Questions
See the [Question Contribution Guidelines](#question-contribution-guidelines) section below.

### Improving Documentation
- Fix typos or clarify existing documentation
- Add missing documentation
- Improve code comments
- Update README with new features

### Code Contributions
- Fix bugs
- Implement new features
- Improve performance
- Enhance UI/UX

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/ms-exam-simulator.git
   cd ms-exam-simulator
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/bug-description
   ```

## Development Workflow

1. Make your changes in your feature branch
2. Test your changes thoroughly:
   - Open `index.html` in multiple browsers
   - Test all affected functionality
   - Ensure no console errors
3. Commit your changes with clear, descriptive commit messages
4. Push to your fork
5. Submit a pull request

## Style Guidelines

### JavaScript
- Use ES6+ features where appropriate
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use consistent indentation (2 spaces)

### HTML
- Use semantic HTML5 elements
- Ensure accessibility (ARIA labels, alt text, etc.)
- Keep markup clean and well-formatted
- Use consistent indentation (2 spaces)

### CSS
- Use Tailwind CSS utility classes when possible
- Keep custom CSS minimal
- Use meaningful class names
- Maintain consistent formatting

## Question Contribution Guidelines

When adding new questions, follow this structure:

```javascript
{
  id: unique_number,
  topic: "Power Apps|Power Automate|Power BI|General|etc.",
  type: "multiplechoice|dragdrop|hotspot|etc.",
  difficultyLevel: "Easy|Medium|Hard",
  text: "Clear, complete question text",
  keyWords: ["relevant", "keywords", "from", "question"],
  hints: {
    easy: ["Beginner-friendly hint"],
    medium: ["More specific hint"],
    hard: ["Advanced hint"]
  },
  conceptsTested: ["concept1", "concept2"],
  commonMistakes: [
    "Description of common mistake 1",
    "Description of common mistake 2"
  ],
  analysisHighlights: {
    requirements: ["requirement1", "requirement2"],
    constraints: ["constraint1", "constraint2"],
    technologies: ["tech1", "tech2"]
  },
  options: [
    { 
      letter: "A", 
      text: "Option text", 
      isCorrect: true/false, 
      analysis: "Detailed explanation" 
    }
    // ... more options
  ],
  correctAnswers: ["A", "B"], // Array for multiple correct answers
  isMultipleChoice: true/false,
  detailedExplanation: "Comprehensive explanation of the correct answer",
  category: "Exam objective category",
  weight: percentage_value,
  examReference: "Reference to exam objectives",
  source: "Source of the question"
}
```

### Question Quality Guidelines
- **Accuracy**: Ensure questions reflect current Microsoft documentation
- **Clarity**: Write clear, unambiguous questions
- **Explanations**: Provide detailed explanations for all options
- **Relevance**: Align with actual exam objectives
- **Difficulty**: Accurately assess and mark difficulty level
- **Keywords**: Include relevant keywords from the question
- **Hints**: Provide progressive hints that guide learning
- **Common Mistakes**: Document typical errors candidates make

## Submitting Changes

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Brief description of changes"
   ```

2. **Write a good commit message**:
   - Use the present tense ("Add feature" not "Added feature")
   - Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
   - Limit the first line to 72 characters
   - Reference issues and pull requests when relevant

3. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**:
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template with:
     - Description of changes
     - Related issue numbers
     - Testing performed
     - Screenshots (if UI changes)

## Pull Request Review Process

- Maintainers will review your PR
- Address any requested changes
- Once approved, your PR will be merged
- Your contribution will be acknowledged in the project

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Reach out to the maintainers

## Recognition

Contributors will be recognized in:
- The project README
- Release notes
- The GitHub contributors page

Thank you for contributing to the Microsoft Exam Simulator! 🎉
