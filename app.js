// Global variables
let questions = [
  {
    "id": 1,
    "topic": "Power Apps",
    "type": "multiplechoice",
    "difficultyLevel": "Medium",
    "text": "A company uses two separate unlinked apps to manage sales leads: a Power Apps app and a third-party application. The client has the following requirements: • Manage all leads using the Power Apps app. • Create a lead in the Power Apps app when a user creates a lead in the third-party application. • Update leads in the Power Apps app when a user updates a lead in the third-party application. • Connect to the third-party application using an API. You need to recommend strategies to integrate the Power Apps app and the third-party application. Which three options can you use to achieve the goal? NOTE: Each correct selection is worth one point.",
    "keyWords": ["two separate", "unlinked apps", "third-party", "API", "create", "update", "integrate", "real-time"],
    "hints": {
      "easy": ["Look for integration patterns", "Consider API connectivity options", "Think about what connects Power Platform to external systems"],
      "medium": ["Think about real-time synchronization", "Consider orchestration tools", "What enables custom API connections?"],
      "hard": ["Evaluate authentication methods", "Consider error handling patterns", "Think about scalability for API calls"]
    },
    "conceptsTested": ["integration", "API connectivity", "data synchronization", "workflow automation", "custom connectors"],
    "commonMistakes": [
      "Choosing Dual-write for non-D365 F&O scenarios",
      "Selecting batch processing (Dataflow) for real-time requirements",
      "Forgetting about authentication and security",
      "Not considering error handling and retries"
    ],
    "analysisHighlights": {
      "requirements": ["manage all leads", "create leads automatically", "update leads automatically", "API connection"],
      "constraints": ["third-party API", "separate unlinked apps", "real-time synchronization"],
      "technologies": ["Power Apps", "Custom connector", "Power Automate", "Dataverse"]
    },
    "options": [
      {
        "letter": "A",
        "text": "Dual-write",
        "isCorrect": false,
        "analysis": "Dual-write is specific to Dynamics 365 Finance and Operations integration, not suitable for generic third-party APIs."
      },
      {
        "letter": "B",
        "text": "Custom connector",
        "isCorrect": true,
        "analysis": "A custom connector enables secure communication with a third-party API from Power Automate or Power Apps."
      },
      {
        "letter": "C",
        "text": "Dataflow",
        "isCorrect": false,
        "analysis": "Dataflows are for periodic data import/export, not real-time lead syncing."
      },
      {
        "letter": "D",
        "text": "Power Automate cloud flow",
        "isCorrect": true,
        "analysis": "Cloud flows can be triggered based on third-party system changes and automate lead creation/update processes."
      },
      {
        "letter": "E",
        "text": "Dataverse connector",
        "isCorrect": true,
        "analysis": "Allows flows or apps to interact with Dataverse, enabling create/update of lead records."
      }
    ],
    "correctAnswers": ["B", "D", "E"],
    "isMultipleChoice": true,
    "detailedExplanation": "Combining a custom connector (to reach the external API), Power Automate (for orchestration), and the Dataverse connector (to interact with Power Apps lead data) provides a complete solution for near real-time integration.",
    "category": "Perform solution envisioning and requirement analysis",
    "weight": 7.9,
    "examReference": "Design strategies for app integration",
    "source": "Custom generated"
  }
];

let currentMode = null;
let currentQuestion = 0;
let selectedQuestions = [];
let userAnswers = {};
let examTimer = null;
let startTime = null;
let hintsUsed = {};

// Mock exam configuration
const mockExamConfig = {
    minQuestions: 40,
    maxQuestions: 60,
    categoryWeights: {
        'Perform solution envisioning and requirement analysis': { min: 0.45, max: 0.50 },
        'Architect a solution': { min: 0.35, max: 0.40 },
        'Implement the solution': { min: 0.15, max: 0.20 }
    },
    timeLimit: 90 // minutes
};

// Initialize the app - COMPLETELY REMOVED JSON LOADING
document.addEventListener('DOMContentLoaded', function() {
    console.log(`Loaded ${questions.length} questions`);
    
    // Initialize the app
    initializeEventListeners();
    loadSettings();
    loadHomeScreen();
});

// Initialize event listeners
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', function() {
            const screen = this.dataset.screen;
            document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            switch(screen) {
                case 'home':
                    loadHomeScreen();
                    break;
                case 'progress':
                    loadProgressScreen();
                    break;
                case 'settings':
                    loadSettingsScreen();
                    break;
            }
        });
    });
    
    // Setup form
    document.getElementById('setupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        startExam();
    });
    
    document.getElementById('cancelSetup').addEventListener('click', function() {
        closeModal();
    });
    
    document.getElementById('questionCount').addEventListener('change', function() {
        const customGroup = document.getElementById('customCountGroup');
        if (this.value === 'custom') {
            customGroup.style.display = 'block';
        } else {
            customGroup.style.display = 'none';
        }
    });
}

// Screen loaders
function loadHomeScreen() {
    const main = document.getElementById('main');
    main.innerHTML = `
        <div class="card">
            <h2>Welcome to MS Certification Exam Simulator</h2>
            <p>Practice for your Microsoft certification exam with our comprehensive question bank.</p>
        </div>
        
        <div class="card">
            <h3>Exam Modes</h3>
            <button class="btn" onclick="openPracticeSetup()">
                Practice Mode
                <small style="display: block; font-weight: normal; margin-top: 4px;">
                    Choose questions, get hints, immediate feedback
                </small>
            </button>
            <button class="btn btn-secondary" onclick="openMockExamSetup()">
                Mock Exam Mode
                <small style="display: block; font-weight: normal; margin-top: 4px;">
                    40-60 questions, timed, exam conditions
                </small>
            </button>
        </div>
        
        <div class="card">
            <h3>Quick Stats</h3>
            <p>Total Questions: ${questions.length}</p>
            <p>Categories:</p>
            <ul style="margin-left: 20px;">
                <li>Solution Envisioning: ${getCategoryCount('Perform solution envisioning and requirement analysis')} questions</li>
                <li>Architect Solution: ${getCategoryCount('Architect a solution')} questions</li>
                <li>Implement Solution: ${getCategoryCount('Implement the solution')} questions</li>
            </ul>
        </div>
    `;
}

function loadProgressScreen() {
    const progress = getProgress();
    const main = document.getElementById('main');
    
    main.innerHTML = `
        <div class="card">
            <h2>Your Progress</h2>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress.percentage}%"></div>
            </div>
            <p>Questions Attempted: ${progress.attempted} / ${questions.length}</p>
        </div>
        
        <div class="card">
            <h3>Recent Sessions</h3>
            ${getRecentSessions()}
        </div>
        
        <div class="card">
            <h3>Category Performance</h3>
            ${getCategoryPerformance()}
        </div>
    `;
}

function loadSettingsScreen() {
    const settings = getSettings();
    const main = document.getElementById('main');
    
    main.innerHTML = `
        <div class="card">
            <h2>Settings</h2>
            
            <div class="form-group">
                <label class="form-label">Theme</label>
                <select class="form-select" id="themeSelect">
                    <option value="light" ${settings.theme === 'light' ? 'selected' : ''}>Light</option>
                    <option value="dark" ${settings.theme === 'dark' ? 'selected' : ''}>Dark</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">Default Question Count</label>
                <select class="form-select" id="defaultCount">
                    <option value="10" ${settings.defaultCount === 10 ? 'selected' : ''}>10</option>
                    <option value="20" ${settings.defaultCount === 20 ? 'selected' : ''}>20</option>
                    <option value="30" ${settings.defaultCount === 30 ? 'selected' : ''}>30</option>
                    <option value="50" ${settings.defaultCount === 50 ? 'selected' : ''}>50</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="checkbox-label">
                    <input type="checkbox" id="soundEffects" ${settings.soundEffects ? 'checked' : ''}>
                    Sound Effects
                </label>
            </div>
            
            <button class="btn" onclick="saveSettings()">Save Settings</button>
            <button class="btn btn-danger" onclick="resetProgress()">Reset All Progress</button>
        </div>
    `;
    
    // Add change listeners
    document.getElementById('themeSelect').addEventListener('change', function() {
        document.body.dataset.theme = this.value;
    });
}

// Modal functions
function openPracticeSetup() {
    currentMode = 'practice';
    document.getElementById('modalTitle').textContent = 'Practice Setup';
    document.getElementById('questionCountGroup').style.display = 'block';
    openModal();
}

function openMockExamSetup() {
    currentMode = 'mock';
    document.getElementById('modalTitle').textContent = 'Mock Exam Setup';
    document.getElementById('questionCountGroup').style.display = 'none';
    
    // Show mock exam details
    const form = document.getElementById('setupForm');
    let mockInfo = form.querySelector('.mock-info');
    if (mockInfo) {
        mockInfo.remove();
    }
    
    mockInfo = document.createElement('div');
    mockInfo.className = 'card mock-info';
    mockInfo.innerHTML = `
        <h4>Mock Exam Details</h4>
        <p>• Random ${mockExamConfig.minQuestions}-${mockExamConfig.maxQuestions} questions</p>
        <p>• ${mockExamConfig.timeLimit} minute time limit</p>
        <p>• Proper category distribution</p>
        <p>• No hints or immediate feedback</p>
        <p>• Results only at the end</p>
    `;
    
    form.insertBefore(mockInfo, form.firstChild);
    openModal();
}

function openModal() {
    document.getElementById('setupModal').classList.add('active');
}

function closeModal() {
    document.getElementById('setupModal').classList.remove('active');
}

// Exam functions
function startExam() {
    const categories = Array.from(document.querySelectorAll('.checkbox-label input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    
    if (categories.length === 0) {
        alert('Please select at least one category');
        return;
    }
    
    if (currentMode === 'practice') {
        const countSelect = document.getElementById('questionCount');
        let count = parseInt(countSelect.value);
        
        if (countSelect.value === 'custom') {
            count = parseInt(document.getElementById('customCount').value);
        }
        
        selectedQuestions = selectPracticeQuestions(categories, count);
    } else {
        selectedQuestions = generateMockExam(categories);
    }
    
    currentQuestion = 0;
    userAnswers = {};
    hintsUsed = {};
    startTime = Date.now();
    
    closeModal();
    showQuestion();
    
    if (currentMode === 'mock') {
        startTimer();
    }
}

function selectPracticeQuestions(categories, count) {
    const filtered = questions.filter(q => categories.includes(q.category));
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, filtered.length));
}

function generateMockExam(categories) {
    const totalQuestions = Math.floor(Math.random() * 21) + mockExamConfig.minQuestions;
    const examQuestions = [];
    
    // Calculate category distributions
    const distributions = {};
    let remaining = totalQuestions;
    
    Object.keys(mockExamConfig.categoryWeights).forEach((category, index, array) => {
        if (categories.includes(category)) {
            const weight = mockExamConfig.categoryWeights[category];
            const min = Math.floor(totalQuestions * weight.min);
            const max = Math.ceil(totalQuestions * weight.max);
            const count = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (index === array.length - 1) {
                distributions[category] = remaining;
            } else {
                distributions[category] = Math.min(count, remaining);
                remaining -= distributions[category];
            }
        }
    });
    
    // Select questions for each category
    Object.entries(distributions).forEach(([category, count]) => {
        const categoryQuestions = questions.filter(q => q.category === category);
        const shuffled = categoryQuestions.sort(() => Math.random() - 0.5);
        examQuestions.push(...shuffled.slice(0, count));
    });
    
    // Shuffle final exam
    return examQuestions.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const question = selectedQuestions[currentQuestion];
    const main = document.getElementById('main');
    
    let html = `
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${((currentQuestion + 1) / selectedQuestions.length) * 100}%"></div>
        </div>
        
        <div class="card">
            <p><strong>Question ${currentQuestion + 1} of ${selectedQuestions.length}</strong></p>
            <p><small>Category: ${question.category}</small></p>
        </div>
    `;
    
    if (currentMode === 'mock') {
        html += `<div class="timer" id="timer">Time Remaining: ${mockExamConfig.timeLimit}:00</div>`;
    }
    
    html += `
        <div class="question-container">
            <h3 class="question-text">${question.text}</h3>
    `;
    
    if (currentMode === 'practice' && !hintsUsed[question.id]) {
        html += `
            <button class="btn btn-secondary" onclick="showHint(${question.id}, '${question.difficultyLevel}')">
                Show Hint
            </button>
            <div class="hint-box" id="hint-${question.id}"></div>
        `;
    }
    
    // Show options with improved layout
    if (question.type === 'multiplechoice') {
        html += '<div class="options-container">';
        question.options.forEach((option, index) => {
            const inputType = question.isMultipleChoice ? 'checkbox' : 'radio';
            html += `
                <div class="option" onclick="selectOption(${index}, ${question.isMultipleChoice})">
                    <input type="${inputType}" 
                           name="question-${question.id}" 
                           value="${option.letter}"
                           id="option-${index}"
                           class="option-input">
                    <label for="option-${index}" class="option-text">
                        <span class="option-letter">${option.letter}.</span> ${option.text}
                    </label>
                </div>
            `;
        });
        html += '</div>';
    }
    
    html += `
        </div>
        
        <div class="card">
            <button class="btn" onclick="submitAnswer()">
                ${currentMode === 'practice' ? 'Submit Answer' : 'Next Question'}
            </button>
            ${currentQuestion > 0 && currentMode === 'practice' ? 
                '<button class="btn btn-secondary" onclick="previousQuestion()">Previous</button>' : ''}
            ${currentMode === 'practice' ? 
                '<button class="btn btn-secondary" onclick="skipQuestion()">Skip Question</button>' : ''}
        </div>
    `;
    
    main.innerHTML = html;
    
    // Restore previous answers if any
    if (userAnswers[question.id]) {
        const answers = Array.isArray(userAnswers[question.id]) ? 
            userAnswers[question.id] : [userAnswers[question.id]];
        
        answers.forEach(answer => {
            const option = question.options.find(o => o.letter === answer);
            const index = question.options.indexOf(option);
            if (index !== -1) {
                document.getElementById(`option-${index}`).checked = true;
                document.getElementById(`option-${index}`).parentElement.classList.add('selected');
            }
        });
    }
}

function selectOption(index, isMultiple) {
    const option = document.getElementById(`option-${index}`);
    const optionDiv = option.parentElement;
    
    if (!isMultiple) {
        // Clear other selections for single choice
        document.querySelectorAll('.option').forEach(el => {
            el.classList.remove('selected');
            el.querySelector('input').checked = false;
        });
    }
    
    option.checked = !option.checked;
    optionDiv.classList.toggle('selected', option.checked);
}

function showHint(questionId, difficulty) {
    const question = selectedQuestions.find(q => q.id === questionId);
    const hintBox = document.getElementById(`hint-${questionId}`);
    
    hintsUsed[questionId] = true;
    hintBox.innerHTML = `<strong>Hint:</strong> ${question.hints[difficulty]}`;
    hintBox.classList.add('visible');
}

function submitAnswer() {
    const question = selectedQuestions[currentQuestion];
    const selectedInputs = document.querySelectorAll(`input[name="question-${question.id}"]:checked`);
    
    if (selectedInputs.length === 0) {
        alert('Please select an answer');
        return;
    }
    
    const answers = Array.from(selectedInputs).map(input => input.value);
    userAnswers[question.id] = question.isMultipleChoice ? answers : answers[0];
    
    if (currentMode === 'practice') {
        showFeedback();
    } else {
        nextQuestion();
    }
}

function showFeedback() {
    const question = selectedQuestions[currentQuestion];
    const userAnswer = userAnswers[question.id];
    const correctAnswers = question.correctAnswers;
    
    // Mark options
    question.options.forEach((option, index) => {
        const optionDiv = document.getElementById(`option-${index}`).parentElement;
        
        if (correctAnswers.includes(option.letter)) {
            optionDiv.classList.add('correct');
        } else if ((Array.isArray(userAnswer) && userAnswer.includes(option.letter)) ||
                   userAnswer === option.letter) {
            optionDiv.classList.add('incorrect');
        }
    });
    
    // Show explanation
    const main = document.getElementById('main');
    main.innerHTML += `
        <div class="explanation-box">
            <h4>Explanation</h4>
            <p>${question.detailedExplanation}</p>
            ${question.options.map(option => `
                <p><strong>${option.letter}:</strong> ${option.analysis}</p>
            `).join('')}
        </div>
        
        <div class="card">
            <button class="btn" onclick="nextQuestion()">Next Question</button>
        </div>
    `;
}

function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        endExam();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function startTimer() {
    const endTime = Date.now() + (mockExamConfig.timeLimit * 60 * 1000);
    
    examTimer = setInterval(() => {
        const remaining = endTime - Date.now();
        
        if (remaining <= 0) {
            clearInterval(examTimer);
            endExam();
        } else {
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            const timerEl = document.getElementById('timer');
            
            if (timerEl) {
                timerEl.textContent = `Time Remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                if (minutes < 15) {
                    timerEl.classList.add('warning');
                }
                if (minutes < 5) {
                    timerEl.classList.add('danger');
                }
            }
        }
    }, 1000);
}

function endExam() {
    if (examTimer) {
        clearInterval(examTimer);
    }
    
    // Calculate results
    const results = calculateResults();
    saveResults(results);
    showResults(results);
}

function calculateResults() {
    let correct = 0;
    let categoryScores = {};
    
    selectedQuestions.forEach(question => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = checkAnswer(question, userAnswer);
        
        if (isCorrect) {
            correct++;
        }
        
        if (!categoryScores[question.category]) {
            categoryScores[question.category] = {
                correct: 0,
                total: 0,
                questions: []
            };
        }
        
        categoryScores[question.category].total++;
        if (isCorrect) {
            categoryScores[question.category].correct++;
        }
        categoryScores[question.category].questions.push({
            question: question,
            userAnswer: userAnswer,
            isCorrect: isCorrect
        });
    });
    
    const score = Math.round((correct / selectedQuestions.length) * 1000);
    const passed = score >= 700;
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    
    return {
        score: score,
        passed: passed,
        correct: correct,
        total: selectedQuestions.length,
        categoryScores: categoryScores,
        timeTaken: timeTaken,
        mode: currentMode,
        date: new Date()
    };
}

function checkAnswer(question, userAnswer) {
    if (!userAnswer) return false;
    
    if (question.isMultipleChoice) {
        const userAnswerArray = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
        return userAnswerArray.length === question.correctAnswers.length &&
               userAnswerArray.every(ans => question.correctAnswers.includes(ans));
    } else {
        return userAnswer === question.correctAnswers[0];
    }
}

// Add skip question function
function skipQuestion() {
    nextQuestion();
}

// Update results display
function showResults(results) {
    const main = document.getElementById('main');
    
    main.innerHTML = `
        <div class="results-container">
            <h2>Exam Results</h2>
            <div class="score-display ${results.passed ? 'pass' : 'fail'}">
                ${results.score} / 1000
            </div>
            <p class="${results.passed ? 'pass' : 'fail'}">
                ${results.passed ? 'PASSED' : 'FAILED'}
            </p>
            <p>Correct Answers: ${results.correct} / ${results.total}</p>
            <p>Time Taken: ${formatTime(results.timeTaken)}</p>
        </div>
        
        <div class="card">
            <h3>Category Breakdown</h3>
            <div class="category-results">
                ${Object.entries(results.categoryScores).map(([category, scores]) => `
                    <div class="category-result">
                        <h4>${category}</h4>
                        <p>Score: ${scores.correct} / ${scores.total} (${Math.round(scores.correct / scores.total * 100)}%)</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="card">
            <button class="btn" onclick="reviewAnswers()">
                Review Answers
            </button>
            <button class="btn btn-secondary" onclick="loadHomeScreen()">
                Back to Home
            </button>
        </div>
    `;
}

// Improve review answers function
function reviewAnswers() {
    const main = document.getElementById('main');
    let reviewHtml = '<h2>Answer Review</h2>';
    
    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = checkAnswer(question, userAnswer);
        
        reviewHtml += `
            <div class="card">
                <h4>Question ${index + 1}: ${isCorrect ? '✓ Correct' : '✗ Incorrect'}</h4>
                <p class="question-text">${question.text}</p>
                <div class="options-container">
        `;
        
        question.options.forEach(option => {
            const isUserAnswer = userAnswer && (
                (Array.isArray(userAnswer) && userAnswer.includes(option.letter)) ||
                userAnswer === option.letter
            );
            const isCorrectOption = question.correctAnswers.includes(option.letter);
            
            let optionClass = 'option';
            if (isCorrectOption) optionClass += ' correct';
            else if (isUserAnswer) optionClass += ' incorrect';
            
            reviewHtml += `
                <div class="${optionClass}">
                    <span class="option-letter">${option.letter}.</span>
                    <span>${option.text}</span>
                    ${isCorrectOption ? ' ✓' : ''}
                    ${isUserAnswer && !isCorrectOption ? ' (Your answer)' : ''}
                </div>
            `;
        });
        
        reviewHtml += `
                </div>
                <div class="explanation-box">
                    <h5>Explanation:</h5>
                    <p>${question.detailedExplanation}</p>
                </div>
            </div>
        `;
    });
    
    reviewHtml += `
        <div class="card">
            <button class="btn" onclick="loadHomeScreen()">Back to Home</button>
        </div>
    `;
    
    main.innerHTML = reviewHtml;
}

// Improve recent sessions display
function getRecentSessions() {
    const storage = localStorage.getItem('examResults');
    if (storage) {
        const results = JSON.parse(storage);
        return results.slice(-5).reverse().map((r, index) => `
            <div class="session-item" onclick="viewSession(${results.length - 1 - index})">
                <span class="session-score ${r.passed ? 'pass' : 'fail'}">
                    ${r.score}/1000
                </span>
                <strong>${r.mode === 'practice' ? 'Practice' : 'Mock Exam'}</strong>
                <span class="session-date">${new Date(r.date).toLocaleDateString()}</span>
            </div>
        `).join('');
    }
    return '<p>No recent sessions</p>';
}

// Add view session function
function viewSession(index) {
    const storage = localStorage.getItem('examResults');
    if (storage) {
        const results = JSON.parse(storage);
        const session = results[index];
        if (session) {
            showResults(session);
        }
    }
}

// Update progress tracking
function getProgress() {
    const storage = localStorage.getItem('examResults');
    if (storage) {
        const results = JSON.parse(storage);
        const totalQuestions = questions.length;
        const attemptedQuestions = new Set();
        
        results.forEach(result => {
            if (result.attemptedQuestions) {
                result.attemptedQuestions.forEach(qId => attemptedQuestions.add(qId));
            }
        });
        
        return {
            attempted: attemptedQuestions.size,
            percentage: Math.round((attemptedQuestions.size / totalQuestions) * 100)
        };
    }
    return {
        attempted: 0,
        percentage: 0
    };
}

// Update calculate results to track attempted questions
function calculateResults() {
    let correct = 0;
    let categoryScores = {};
    const attemptedQuestions = [];
    
    selectedQuestions.forEach(question => {
        attemptedQuestions.push(question.id);
        const userAnswer = userAnswers[question.id];
        const isCorrect = checkAnswer(question, userAnswer);
        
        if (isCorrect) {
            correct++;
        }
        
        if (!categoryScores[question.category]) {
            categoryScores[question.category] = {
                correct: 0,
                total: 0,
                questions: []
            };
        }
        
        categoryScores[question.category].total++;
        if (isCorrect) {
            categoryScores[question.category].correct++;
        }
        categoryScores[question.category].questions.push({
            question: question,
            userAnswer: userAnswer,
            isCorrect: isCorrect
        });
    });
    
    const score = Math.round((correct / selectedQuestions.length) * 1000);
    const passed = score >= 700;
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    
    return {
        score: score,
        passed: passed,
        correct: correct,
        total: selectedQuestions.length,
        categoryScores: categoryScores,
        timeTaken: timeTaken,
        mode: currentMode,
        date: new Date(),
        attemptedQuestions: attemptedQuestions
    };
}

// Utility functions
function getCategoryCount(category) {
    return questions.filter(q => q.category === category).length;
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

// Add to global functions
window.skipQuestion = skipQuestion;
window.viewSession = viewSession;

function getCategoryPerformance() {
    // Implement category performance tracking
    return '<p>Performance tracking coming soon</p>';
}

function getSettings() {
    const storage = localStorage.getItem('examSettings');
    if (storage) {
        return JSON.parse(storage);
    }
    return {
        theme: 'light',
        defaultCount: 20,
        soundEffects: false
    };
}

function saveSettings() {
    const settings = {
        theme: document.getElementById('themeSelect').value,
        defaultCount: parseInt(document.getElementById('defaultCount').value),
        soundEffects: document.getElementById('soundEffects').checked
    };
    
    localStorage.setItem('examSettings', JSON.stringify(settings));
    alert('Settings saved!');
}

function loadSettings() {
    const settings = getSettings();
    document.body.dataset.theme = settings.theme;
}

function saveResults(results) {
    const storage = localStorage.getItem('examResults');
    const allResults = storage ? JSON.parse(storage) : [];
    allResults.push(results);
    localStorage.setItem('examResults', JSON.stringify(allResults));
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('examProgress');
        localStorage.removeItem('examResults');
        localStorage.removeItem('examSettings');
        alert('All progress has been reset');
        loadHomeScreen();
    }
}

function showError(message) {
    const main = document.getElementById('main');
    main.innerHTML = `
        <div class="error-message">
            <h3>Error</h3>
            <p>${message}</p>
        </div>
    `;
}

// Global functions (to be accessible from HTML)
window.openPracticeSetup = openPracticeSetup;
window.openMockExamSetup = openMockExamSetup;
window.showHint = showHint;
window.selectOption = selectOption;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.reviewAnswers = reviewAnswers;
window.loadHomeScreen = loadHomeScreen;
window.saveSettings = saveSettings;
window.resetProgress = resetProgress;
