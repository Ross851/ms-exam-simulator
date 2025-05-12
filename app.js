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
},
{
"id": 2,
"topic": "Microsoft Dataverse",
"type": "singlechoice",
"difficultyLevel": "Easy",
"text": "What is the primary purpose of Microsoft Dataverse?",
"keyWords": ["Dataverse", "primary purpose", "database", "platform"],
"hints": {
"easy": ["Think about data storage in Power Platform", "Consider what unifies all Power Platform apps"],
"medium": ["What provides the common data layer?", "Think about business data management"],
"hard": ["Consider scalability and security needs", "Think about cross-app data sharing"]
},
"conceptsTested": ["Dataverse fundamentals", "Power Platform architecture", "data storage"],
"commonMistakes": [
"Confusing Dataverse with SQL Server",
"Not understanding it's more than just storage",
"Missing the platform integration aspect"
],
"analysisHighlights": {
"requirements": ["understand Dataverse purpose"],
"constraints": ["single choice answer"],
"technologies": ["Microsoft Dataverse", "Power Platform"]
},
"options": [
{
"letter": "A",
"text": "A reporting tool for Power BI",
"isCorrect": false,
"analysis": "Dataverse is not a reporting tool; it's a data platform that Power BI can connect to."
},
{
"letter": "B",
"text": "A cloud-based data platform that provides a unified and scalable data service",
"isCorrect": true,
"analysis": "Correct. Dataverse is the underlying data platform for Power Platform apps."
},
{
"letter": "C",
"text": "A workflow automation engine",
"isCorrect": false,
"analysis": "Workflow automation is handled by Power Automate, not Dataverse."
},
{
"letter": "D",
"text": "A user interface design tool",
"isCorrect": false,
"analysis": "UI design is done in Power Apps or other tools, not Dataverse."
}
],
"correctAnswers": ["B"],
"isMultipleChoice": false,
"detailedExplanation": "Microsoft Dataverse is a cloud-based data platform that provides unified, scalable data storage and management for Power Platform applications. It offers standardized data schemas, security, and business logic.",
"category": "Architect a solution",
"weight": 5.0,
"examReference": "Dataverse fundamentals",
"source": "Custom generated"
},
{
"id": 3,
"topic": "Power Automate",
"type": "multiplechoice",
"difficultyLevel": "Hard",
"text": "You need to implement error handling in a critical Power Automate cloud flow that processes financial transactions. Which error handling patterns should you implement? Select all that apply.",
"keyWords": ["error handling", "Power Automate", "financial", "patterns", "critical"],
"hints": {
"easy": ["Think about flow reliability", "Consider what happens when actions fail"],
"medium": ["Multiple patterns can work together", "Think about retry logic"],
"hard": ["Consider compensation transactions", "Think about notification strategies"]
},
"conceptsTested": ["error handling", "flow reliability", "best practices"],
"commonMistakes": [
"Only implementing try-catch without retry",
"Forgetting about notification mechanisms",
"Not considering compensation logic",
"Ignoring timeout configurations"
],
"analysisHighlights": {
"requirements": ["error handling", "financial transactions", "critical flow"],
"constraints": ["must be reliable", "handle failures gracefully"],
"technologies": ["Power Automate", "cloud flows", "error patterns"]
},
"options": [
{
"letter": "A",
"text": "Configure retry policies on critical actions",
"isCorrect": true,
"analysis": "Retry policies help handle transient failures automatically."
},
{
"letter": "B",
"text": "Implement try-catch-finally scope patterns",
"isCorrect": true,
"analysis": "Provides structured error handling and cleanup operations."
},
{
"letter": "C",
"text": "Add parallel branches for all actions",
"isCorrect": false,
"analysis": "Parallel branches don't provide error handling, they're for concurrent execution."
},
{
"letter": "D",
"text": "Configure run after settings for error conditions",
"isCorrect": true,
"analysis": "Allows specific actions to run when previous actions fail."
},
{
"letter": "E",
"text": "Implement notification actions for failures",
"isCorrect": true,
"analysis": "Critical for alerting administrators about flow failures."
}
],
"correctAnswers": ["A", "B", "D", "E"],
"isMultipleChoice": true,
"detailedExplanation": "For critical financial flows, implement multiple error handling layers: retry policies for transient failures, try-catch-finally for structured handling, run after settings for failure paths, and notifications for alerting. Avoid parallel branches as they're for concurrency, not error handling.",
"category": "Implement the solution",
"weight": 8.5,
"examReference": "Advanced flow patterns",
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
// Performance tracking
let performanceData = {
byTopic: {},
byCategory: {},
byDifficulty: {},
byConcept: {},
questionHistory: {}
};
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
// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
console.log(Loaded ${questions.length} questions);
// Load performance data
loadPerformanceData();

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
const setupForm = document.getElementById('setupForm');
if (setupForm) {
    setupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        startExam();
    });
}

const cancelSetup = document.getElementById('cancelSetup');
if (cancelSetup) {
    cancelSetup.addEventListener('click', function() {
        closeModal();
    });
}

const questionCount = document.getElementById('questionCount');
if (questionCount) {
    questionCount.addEventListener('change', function() {
        const customGroup = document.getElementById('customCountGroup');
        if (this.value === 'custom') {
            customGroup.style.display = 'block';
        } else {
            customGroup.style.display = 'none';
        }
    });
}
}
// Screen loaders
function loadHomeScreen() {
const weakAreas = getWeakAreas();
const recommendations = getPersonalizedRecommendations();
const main = document.getElementById('main');
main.innerHTML = `
    <div class="card">
        <h2>Welcome to MS Certification Exam Simulator</h2>
        <p>Practice for your Microsoft certification exam with our comprehensive question bank.</p>
    </div>
    
    ${weakAreas.length > 0 ? `
    <div class="card alert-warning">
        <h3>Areas Needing Practice</h3>
        <ul>
            ${weakAreas.map(area => `
                <li><strong>${area.name}</strong>: ${area.successRate}% success rate</li>
            `).join('')}
        </ul>
        <button class="btn btn-warning" onclick="startWeakAreaPractice()">
            Practice Weak Areas
        </button>
    </div>
    ` : ''}
    
    <div class="card">
        <h3>Exam Modes</h3>
        <button class="btn" onclick="openPracticeSetup()">
            Practice Mode
            <small style="display: block; font-weight: normal; margin-top: 4px;">
                Choose questions, get hints, immediate feedback
            </small>
        </button>
        <button class="btn btn-warning" onclick="startAdaptivePractice()">
            Adaptive Practice
            <small style="display: block; font-weight: normal; margin-top: 4px;">
                Focus on your weak areas automatically
            </small>
        </button>
        <button class="btn btn-secondary" onclick="openMockExamSetup()">
            Mock Exam Mode
            <small style="display: block; font-weight: normal; margin-top: 4px;">
                40-60 questions, timed, exam conditions
            </small>
        </button>
    </div>
    
    ${recommendations.length > 0 ? `
    <div class="card">
        <h3>Personalized Recommendations</h3>
        <ul>
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    </div>
    ` : ''}
    
    <div class="card">
        <h3>Quick Stats</h3>
        <p>Total Questions: ${questions.length}</p>
        <p>Questions Attempted: ${getAttemptedQuestionCount()}</p>
        <p>Overall Success Rate: ${getOverallSuccessRate()}%</p>
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
const weakAreas = getWeakAreas();
const strongAreas = getStrongAreas();
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
        <h3>Performance Analysis</h3>
        <div class="performance-grid">
            <div class="perf-section">
                <h4 class="text-danger">Weak Areas (< 70%)</h4>
                ${weakAreas.length > 0 ? `
                    <ul>
                        ${weakAreas.map(area => `
                            <li>
                                <strong>${area.name}</strong>: ${area.successRate}%
                                <small>(${area.correct}/${area.total})</small>
                            </li>
                        `).join('')}
                    </ul>
                ` : '<p>No weak areas identified yet</p>'}
            </div>
            
            <div class="perf-section">
                <h4 class="text-success">Strong Areas (> 80%)</h4>
                ${strongAreas.length > 0 ? `
                    <ul>
                        ${strongAreas.map(area => `
                            <li>
                                <strong>${area.name}</strong>: ${area.successRate}%
                                <small>(${area.correct}/${area.total})</small>
                            </li>
                        `).join('')}
                    </ul>
                ` : '<p>Keep practicing to identify strong areas</p>'}
            </div>
        </div>
    </div>
    
    <div class="card">
        <h3>Performance by Difficulty</h3>
        ${getDifficultyPerformance()}
    </div>
    
    <div class="card">
        <h3>Topic Performance</h3>
        ${getTopicPerformance()}
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
    
    <div class="card">
        <h3>Performance Summary</h3>
        <p>Overall Success Rate: ${getOverallSuccessRate()}%</p>
        <p>Questions Attempted: ${getAttemptedQuestionCount()}/${questions.length}</p>
        ${getPerformanceBasedSettings().suggestedDifficulty ? `
            <p>Suggested Difficulty: ${getPerformanceBasedSettings().suggestedDifficulty}</p>
        ` : ''}
    </div>
`;

// Add change listener
const themeSelect = document.getElementById('themeSelect');
if (themeSelect) {
    themeSelect.addEventListener('change', function() {
        document.body.dataset.theme = this.value;
    });
}
}
// Enhanced Performance Tracking Functions
function loadPerformanceData() {
try {
const saved = localStorage.getItem('performanceData');
if (saved) {
performanceData = JSON.parse(saved);
}
} catch (error) {
console.error('Error loading performance data:', error);
performanceData = {
byTopic: {},
byCategory: {},
byDifficulty: {},
byConcept: {},
questionHistory: {}
};
}
}
function savePerformanceData() {
try {
localStorage.setItem('performanceData', JSON.stringify(performanceData));
} catch (error) {
console.error('Error saving performance data:', error);
}
}
function updatePerformanceData(question, isCorrect) {
// Update by topic
if (!performanceData.byTopic[question.topic]) {
performanceData.byTopic[question.topic] = { correct: 0, total: 0 };
}
performanceData.byTopic[question.topic].total++;
if (isCorrect) performanceData.byTopic[question.topic].correct++;
// Update by category
if (!performanceData.byCategory[question.category]) {
    performanceData.byCategory[question.category] = { correct: 0, total: 0 };
}
performanceData.byCategory[question.category].total++;
if (isCorrect) performanceData.byCategory[question.category].correct++;

// Update by difficulty
if (!performanceData.byDifficulty[question.difficultyLevel]) {
    performanceData.byDifficulty[question.difficultyLevel] = { correct: 0, total: 0 };
}
performanceData.byDifficulty[question.difficultyLevel].total++;
if (isCorrect) performanceData.byDifficulty[question.difficultyLevel].correct++;

// Update by concepts
question.conceptsTested.forEach(concept => {
    if (!performanceData.byConcept[concept]) {
        performanceData.byConcept[concept] = { correct: 0, total: 0 };
    }
    performanceData.byConcept[concept].total++;
    if (isCorrect) performanceData.byConcept[concept].correct++;
});

// Update question history
if (!performanceData.questionHistory[question.id]) {
    performanceData.questionHistory[question.id] = { attempts: [], lastAttempt: null };
}
performanceData.questionHistory[question.id].attempts.push({
    date: new Date(),
    correct: isCorrect,
    timeSpent: Date.now() - startTime
});
performanceData.questionHistory[question.id].lastAttempt = new Date();

savePerformanceData();
}
function getWeakAreas() {
const weakAreas = [];
// Check topics
Object.entries(performanceData.byTopic).forEach(([topic, data]) => {
    if (data.total >= 3) {
        const successRate = Math.round((data.correct / data.total) * 100);
        if (successRate < 70) {
            weakAreas.push({
                type: 'topic',
                name: topic,
                successRate: successRate,
                correct: data.correct,
                total: data.total
            });
        }
    }
});

// Check concepts
Object.entries(performanceData.byConcept).forEach(([concept, data]) => {
    if (data.total >= 2) {
        const successRate = Math.round((data.correct / data.total) * 100);
        if (successRate < 70) {
            weakAreas.push({
                type: 'concept',
                name: concept,
                successRate: successRate,
                correct: data.correct,
                total: data.total
            });
        }
    }
});

return weakAreas.sort((a, b) => a.successRate - b.successRate);
}
function getStrongAreas() {
const strongAreas = [];
// Check topics
Object.entries(performanceData.byTopic).forEach(([topic, data]) => {
    if (data.total >= 3) {
        const successRate = Math.round((data.correct / data.total) * 100);
        if (successRate >= 80) {
            strongAreas.push({
                type: 'topic',
                name: topic,
                successRate: successRate,
                correct: data.correct,
                total: data.total
            });
        }
    }
});

// Check concepts
Object.entries(performanceData.byConcept).forEach(([concept, data]) => {
    if (data.total >= 2) {
        const successRate = Math.round((data.correct / data.total) * 100);
        if (successRate >= 80) {
            strongAreas.push({
                type: 'concept',
                name: concept,
                successRate: successRate,
                correct: data.correct,
                total: data.total
            });
        }
    }
});

return strongAreas.sort((a, b) => b.successRate - a.successRate);
}
function getPersonalizedRecommendations() {
const recommendations = [];
const weakAreas = getWeakAreas();
if (weakAreas.length > 0) {
    const worstArea = weakAreas[0];
    recommendations.push(`Focus on ${worstArea.name} - currently at ${worstArea.successRate}% success rate`);
}

// Check difficulty performance
const difficultyStats = performanceData.byDifficulty;
if (difficultyStats.Easy && difficultyStats.Easy.total > 5) {
    const easySuccess = (difficultyStats.Easy.correct / difficultyStats.Easy.total) * 100;
    if (easySuccess > 90 && (!difficultyStats.Medium || difficultyStats.Medium.total < 5)) {
        recommendations.push("Try more Medium difficulty questions - you've mastered Easy level");
    }
}

// Check for concepts that haven't been attempted
const attemptedConcepts = Object.keys(performanceData.byConcept);
const allConcepts = [...new Set(questions.flatMap(q => q.conceptsTested))];
const unattemptedConcepts = allConcepts.filter(c => !attemptedConcepts.includes(c));

if (unattemptedConcepts.length > 0) {
    recommendations.push(`Explore new concepts: ${unattemptedConcepts.slice(0, 3).join(', ')}`);
}

return recommendations;
}
function getAttemptedQuestionCount() {
return Object.keys(performanceData.questionHistory).length;
}
function getOverallSuccessRate() {
let totalCorrect = 0;
let totalAttempts = 0;
Object.values(performanceData.byTopic).forEach(data => {
    totalCorrect += data.correct;
    totalAttempts += data.total;
});

return totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
}
function getDifficultyPerformance() {
const difficulties = ['Easy', 'Medium', 'Hard'];
let html = '<div class="difficulty-stats">';
difficulties.forEach(difficulty => {
    const data = performanceData.byDifficulty[difficulty] || { correct: 0, total: 0 };
    const successRate = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    
    html += `
        <div class="diff-item">
            <h5>${difficulty}</h5>
            <p>${successRate}% (${data.correct}/${data.total})</p>
            <div class="mini-progress">
                <div class="mini-progress-fill ${successRate >= 70 ? 'success' : 'warning'}" 
                     style="width: ${successRate}%"></div>
            </div>
        </div>
    `;
});

html += '</div>';
return html;
}
function getTopicPerformance() {
const topics = Object.entries(performanceData.byTopic);
if (topics.length === 0) {
    return '<p>No topic data available yet</p>';
}

let html = '<div class="topic-stats">';

topics.forEach(([topic, data]) => {
    const successRate = Math.round((data.correct / data.total) * 100);
    let colorClass = '';
    if (successRate >= 80) colorClass = 'success';
    else if (successRate >= 70) colorClass = 'warning';
    else colorClass = 'danger';
    
    html += `
        <div class="topic-item">
            <h5>${topic}</h5>
            <p class="text-${colorClass}">${successRate}% (${data.correct}/${data.total})</p>
            <div class="mini-progress">
                <div class="mini-progress-fill ${colorClass}" style="width: ${successRate}%"></div>
            </div>
        </div>
    `;
});

html += '</div>';
return html;
}
// Modal functions
function openPracticeSetup() {
currentMode = 'practice';
const modalTitle = document.getElementById('modalTitle');
const questionCountGroup = document.getElementById('questionCountGroup');
if (modalTitle) modalTitle.textContent = 'Practice Setup';
if (questionCountGroup) questionCountGroup.style.display = 'block';

openModal();
}
function openMockExamSetup() {
currentMode = 'mock';
const modalTitle = document.getElementById('modalTitle');
const questionCountGroup = document.getElementById('questionCountGroup');
if (modalTitle) modalTitle.textContent = 'Mock Exam Setup';
if (questionCountGroup) questionCountGroup.style.display = 'none';

// Show mock exam details
const form = document.getElementById('setupForm');
if (form) {
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
}

openModal();
}
function openModal() {
const modal = document.getElementById('setupModal');
if (modal) modal.classList.add('active');
}
function closeModal() {
const modal = document.getElementById('setupModal');
if (modal) modal.classList.remove('active');
}
// Exam functions
function startExam() {
const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');
const categories = Array.from(checkboxes).map(cb => cb.value);
if (categories.length === 0) {
    alert('Please select at least one category');
    return;
}

if (currentMode === 'practice') {
    const countSelect = document.getElementById('questionCount');
    let count = parseInt(countSelect.value);
    
    if (countSelect.value === 'custom') {
        const customCount = document.getElementById('customCount');
        count = parseInt(customCount.value);
    }
    
    selectedQuestions = selectPracticeQuestions(categories, count);
} else {
    selectedQuestions = generateMockExam(categories);
}

if (selectedQuestions.length === 0) {
    alert('No questions available for selected categories. Please add more questions to the question bank.');
    return;
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
// For demo purposes with limited questions
if (questions.length < mockExamConfig.minQuestions) {
console.warn('Not enough questions for a full mock exam. Using available questions.');
return questions.filter(q => categories.includes(q.category));
}
const totalQuestions = Math.floor(Math.random() * 
    (mockExamConfig.maxQuestions - mockExamConfig.minQuestions + 1)) + 
    mockExamConfig.minQuestions;
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
    examQuestions.push(...shuffled.slice(0, Math.min(count, categoryQuestions.length)));
});

// Shuffle final exam
return examQuestions.sort(() => Math.random() - 0.5);
}
function showQuestion() {
const question = selectedQuestions[currentQuestion];
if (!question) {
console.error('No question found at index:', currentQuestion);
return;
}
const main = document.getElementById('main');
const isAnswered = userAnswers[question.id] !== undefined;

let html = `
    <div class="progress-bar">
        <div class="progress-fill" style="width: ${((currentQuestion + 1) / selectedQuestions.length) * 100}%"></div>
    </div>
    
    <div class="card">
        <p><strong>Question ${currentQuestion + 1} of ${selectedQuestions.length}</strong></p>
        <p><small>Category: ${question.category}</small></p>
        <p><small>Topic: ${question.topic} | Difficulty: ${question.difficultyLevel}</small></p>
    </div>
`;

if (currentMode === 'mock') {
    html += `<div class="timer" id="timer">Time Remaining: ${mockExamConfig.timeLimit}:00</div>`;
}

if (currentMode === 'adaptive') {
    const weakAreas = getWeakAreas();
    const isWeakArea = weakAreas.some(area => 
        (area.type === 'topic' && area.name === question.topic) ||
        (area.type === 'concept' && question.conceptsTested.includes(area.name))
    );
    
    if (isWeakArea) {
        html += `
            <div class="card alert-info">
                <small>This question targets one of your weak areas</small>
            </div>
        `;
    }
}

html += `
    <div class="question-container">
        <h3 class="question-text">${question.text}</h3>
`;

if (!isAnswered && currentMode !== 'mock' && !hintsUsed[question.id]) {
    const hintLevel = question.difficultyLevel.toLowerCase();
    html += `
        <button class="btn btn-secondary" onclick="showHint(${question.id}, '${hintLevel}')">
            Show Hint
        </button>
        <div class="hint-box" id="hint-${question.id}"></div>
    `;
} else if (hintsUsed[question.id] && !isAnswered) {
    const hintLevel = question.difficultyLevel.toLowerCase();
    let hintText = '';
    if (Array.isArray(question.hints[hintLevel])) {
        hintText = question.hints[hintLevel].join('<br>');
    } else {
        hintText = question.hints[hintLevel];
    }
    html += `
        <div class="hint-box visible" id="hint-${question.id}">
            <strong>Hint:</strong> ${hintText}
        </div>
    `;
}

html += '<div class="options-container">';
question.options.forEach((option, index) => {
    const inputType = question.isMultipleChoice ? 'checkbox' : 'radio';
    const isDisabled = isAnswered ? 'disabled' : '';
    const selectedClass = userAnswers[question.id] && (
        (Array.isArray(userAnswers[question.id]) && userAnswers[question.id].includes(option.letter)) ||
        userAnswers[question.id] === option.letter
    ) ? 'selected' : '';
    
    html += `
        <div class="option ${selectedClass}" onclick="${!isAnswered ? `selectOption(${index}, ${question.isMultipleChoice})` : ''}">
            <input type="${inputType}" 
                   name="question-${question.id}" 
                   value="${option.letter}"
                   id="option-${index}"
                   class="option-input"
                   ${isDisabled}>
            <label for="option-${index}" class="option-text">
                <span class="option-letter">${option.letter}.</span> ${option.text}
            </label>
        </div>
    `;
});
html += '</div>';

html += `
    </div>
    
    <div class="card">
`;

if (!isAnswered) {
    html += `
        <button class="btn" onclick="submitAnswer()">
            Submit Answer
        </button>
        ${currentQuestion > 0 && (currentMode === 'practice' || currentMode === 'adaptive') ? 
            '<button class="btn btn-secondary" onclick="previousQuestion()">Previous</button>' : ''}
        ${currentMode === 'practice' || currentMode === 'adaptive' ? 
            '<button class="btn btn-secondary" onclick="skipQuestion()">Skip Question</button>' : ''}
    `;
} else {
    html += `
        <button class="btn" onclick="nextQuestion()">Next Question</button>
        ${currentQuestion > 0 ? 
            '<button class="btn btn-secondary" onclick="previousQuestion()">Previous</button>' : ''}
    `;
}

html += `
    </div>
`;

main.innerHTML = html;

if (isAnswered) {
    showFeedback();
}
}
function selectOption(index, isMultiple) {
const option = document.getElementById(option-${index});
const optionDiv = option.parentElement;
if (!isMultiple) {
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
const hintBox = document.getElementById(hint-${questionId});
if (question && question.hints && question.hints[difficulty]) {
    hintsUsed[questionId] = true;
    
    let hintText = '';
    if (Array.isArray(question.hints[difficulty])) {
        hintText = question.hints[difficulty].join('<br>');
    } else {
        hintText = question.hints[difficulty];
    }
    
    hintBox.innerHTML = `<strong>Hint:</strong> ${hintText}`;
    hintBox.classList.add('visible');
}
}
function submitAnswer() {
const question = selectedQuestions[currentQuestion];
const selectedInputs = document.querySelectorAll(input[name="question-${question.id}"]:checked);
if (userAnswers[question.id] !== undefined) {
    alert('You have already answered this question');
    return;
}

if (selectedInputs.length === 0) {
    alert('Please select an answer');
    return;
}

const answers = Array.from(selectedInputs).map(input => input.value);
userAnswers[question.id] = question.isMultipleChoice ? answers : answers[0];

document.querySelectorAll('.option').forEach(option => {
    option.style.pointerEvents = 'none';
});
document.querySelectorAll('.option-input').forEach(input => {
    input.disabled = true;
});

const hintButton = document.querySelector('.btn-secondary');
if (hintButton && hintButton.textContent.includes('Hint')) {
    hintButton.style.display = 'none';
}

if (currentMode === 'practice' || currentMode === 'adaptive') {
    showFeedback();
} else {
    nextQuestion();
}
}
function showFeedback() {
const question = selectedQuestions[currentQuestion];
const userAnswer = userAnswers[question.id];
const correctAnswers = question.correctAnswers;
const isCorrect = checkAnswer(question, userAnswer);
updatePerformanceData(question, isCorrect);

question.options.forEach((option, index) => {
    const optionDiv = document.getElementById(`option-${index}`).parentElement;
    const isCorrectOption = correctAnswers.includes(option.letter);
    const isUserAnswer = (Array.isArray(userAnswer) && userAnswer.includes(option.letter)) ||
                       userAnswer === option.letter;
    
    if (isCorrectOption) {
        optionDiv.classList.add('correct');
        if (!optionDiv.querySelector('.feedback-icon')) {
            optionDiv.innerHTML += '<span class="feedback-icon correct-icon">✓</span>';
        }
    } else if (isUserAnswer) {
        optionDiv.classList.add('incorrect');
        if (!optionDiv.querySelector('.feedback-icon')) {
            optionDiv.innerHTML += '<span class="feedback-icon incorrect-icon">✗</span>';
        }
    }
});

if (!document.querySelector('.explanation-box')) {
    const main = document.getElementById('main');
    const isLastQuestion = currentQuestion === selectedQuestions.length - 1;
    
    const explanationHtml = `
        <div class="explanation-box visible">
            <h4>Explanation</h4>
            <p>${question.detailedExplanation}</p>
            
            <h5>Option Analysis:</h5>
            ${question.options.map(option => {
                const isCorrect = correctAnswers.includes(option.letter);
                const isUserAnswer = (Array.isArray(userAnswer) && userAnswer.includes(option.letter)) ||
                                   userAnswer === option.letter;
                let statusText = '';
                if (isCorrect) {
                    statusText = '<span class="status-correct">(Correct Answer)</span>';
                } else if (isUserAnswer) {
                    statusText = '<span class="status-incorrect">(Your Answer - Incorrect)</span>';
                }
                
                return `
                    <div class="option-analysis">
                        <p><strong class="${isCorrect ? 'text-success' : 'text-danger'}">${option.letter}. ${option.text} ${statusText}</strong></p>
                        <p>${option.analysis}</p>
                    </div>
                `;
            }).join('')}
            
            ${question.commonMistakes && question.commonMistakes.length > 0 ? `
                <div class="common-mistakes">
                    <h5>Common Mistakes to Avoid:</h5>
                    <ul>
                        ${question.commonMistakes.map(mistake => `<li>${mistake}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${hintsUsed[question.id] ? `
                <div class="hint-review">
                    <h5>Hint Used:</h5>
                    <p>${Array.isArray(question.hints[question.difficultyLevel.toLowerCase()]) ? 
                        question.hints[question.difficultyLevel.toLowerCase()].join('<br>') : 
                        question.hints[question.difficultyLevel.toLowerCase()]}</p>
                </div>
            ` : ''}
        </div>
        
        <div class="card">
            ${isLastQuestion ? 
                '<button class="btn btn-success" onclick="endExam()">Finish Exam</button>' :
                '<button class="btn" onclick="nextQuestion()">Next Question</button>'
            }
            <button class="btn btn-secondary" onclick="reviewQuestion()">Review Question</button>
        </div>
    `;
    
    main.innerHTML += explanationHtml;
    
    document.querySelector('.explanation-box').scrollIntoView({ behavior: 'smooth' });
}
}
function reviewQuestion() {
document.querySelector('.question-container').scrollIntoView({ behavior: 'smooth' });
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
function skipQuestion() {
nextQuestion();
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
const results = calculateResults();
saveResults(results);
showResults(results);
}
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
    
    if (currentMode === 'mock') {
        updatePerformanceData(question, isCorrect);
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
function showResults(results) {
const main = document.getElementById('main');
const weakAreas = getWeakAreas();
const recommendations = getPersonalizedRecommendations();

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
    
    ${weakAreas.length > 0 ? `
    <div class="card alert-warning">
        <h3>Areas for Improvement</h3>
        <ul>
            ${weakAreas.slice(0, 3).map(area => `
                <li><strong>${area.name}</strong>: ${area.successRate}% success rate</li>
            `).join('')}
        </ul>
    </div>
    ` : ''}
    
    ${recommendations.length > 0 ? `
    <div class="card">
        <h3>Next Steps</h3>
        <ul>
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    </div>
    ` : ''}
    
    <div class="card">
        <button class="btn" onclick="reviewAnswers()">
            Review Answers
        </button>
        ${weakAreas.length > 0 ? `
            <button class="btn btn-warning" onclick="startWeakAreaPractice()">
                Practice Weak Areas
            </button>
        ` : ''}
        <button class="btn btn-secondary" onclick="loadHomeScreen()">
            Back to Home
        </button>
    </div>
`;
}
function reviewAnswers() {
const main = document.getElementById('main');
let reviewHtml = '<h2>Answer Review</h2>';
selectedQuestions.forEach((question, index) => {
    const userAnswer = userAnswers[question.id];
    const isCorrect = checkAnswer(question, userAnswer);
    
    const weakAreas = getWeakAreas();
    const isWeakArea = weakAreas.some(area => 
        (area.type === 'topic' && area.name === question.topic) ||
        (area.type === 'concept' && question.conceptsTested.includes(area.name))
    );
    
    reviewHtml += `
        <div class="card">
            <h4>Question ${index + 1}: ${isCorrect ? '✓ Correct' : '✗ Incorrect'}</h4>
            ${isWeakArea ? '<span class="badge badge-warning">Weak Area</span>' : ''}
            <p><small>Topic: ${question.topic} | Difficulty: ${question.difficultyLevel}</small></p>
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
                
                <h5>Concepts Tested:</h5>
                <p>${question.conceptsTested.join(', ')}</p>
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
// Adaptive Practice Functions
function startWeakAreaPractice() {
const weakAreas = getWeakAreas();
if (weakAreas.length === 0) {
alert('No weak areas identified. Complete more questions to identify areas for improvement.');
return;
}
currentMode = 'adaptive';
selectedQuestions = selectWeakAreaQuestions(weakAreas);

if (selectedQuestions.length === 0) {
    alert('No questions available for your weak areas.');
    return;
}

currentQuestion = 0;
userAnswers = {};
hintsUsed = {};
startTime = Date.now();

showQuestion();
}
function startAdaptivePractice() {
currentMode = 'adaptive';
const weakAreas = getWeakAreas();
const strongAreas = getStrongAreas();
selectedQuestions = selectAdaptiveQuestions(weakAreas, strongAreas);

if (selectedQuestions.length === 0) {
    alert('Complete more questions to enable adaptive practice.');
    return;
}

currentQuestion = 0;
userAnswers = {};
hintsUsed = {};
startTime = Date.now();

showQuestion();
}
function selectWeakAreaQuestions(weakAreas) {
const questionSet = new Set();
weakAreas.forEach(area => {
    const relevantQuestions = questions.filter(q => {
        if (area.type === 'topic') {
            return q.topic === area.name;
        } else if (area.type === 'concept') {
            return q.conceptsTested.includes(area.name);
        }
        return false;
    });
    
    relevantQuestions.forEach(q => questionSet.add(q));
});

return Array.from(questionSet).sort(() => Math.random() - 0.5).slice(0, 20);
}
function selectAdaptiveQuestions(weakAreas, strongAreas) {
const questionPool = [];
weakAreas.forEach(area => {
    const relevantQuestions = questions.filter(q => {
        if (area.type === 'topic') {
            return q.topic === area.name;
        } else if (area.type === 'concept') {
            return q.conceptsTested.includes(area.name);
        }
        return false;
    });
    
    const weight = Math.ceil((100 - area.successRate) / 20);
    relevantQuestions.forEach(q => {
        for (let i = 0; i < weight; i++) {
            questionPool.push(q);
        }
    });
});

const attemptedQuestionIds = Object.keys(performanceData.questionHistory);
const unattemptedQuestions = questions.filter(q => !attemptedQuestionIds.includes(q.id.toString()));
unattemptedQuestions.slice(0, 5).forEach(q => questionPool.push(q));

const shuffled = questionPool.sort(() => Math.random() - 0.5);
const selected = [];
const selectedIds = new Set();

for (const q of shuffled) {
    if (!selectedIds.has(q.id)) {
        selected.push(q);
        selectedIds.add(q.id);
        if (selected.length >= 20) break;
    }
}

return selected;
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
function getRecentSessions() {
const storage = localStorage.getItem('examResults');
if (storage) {
try {
const results = JSON.parse(storage);
return results.slice(-5).reverse().map((r, index) =>                 <div class="session-item" onclick="viewSession(${results.length - 1 - index})">                     <span class="session-score ${r.passed ? 'pass' : 'fail'}">                         ${r.score}/1000                     </span>                     <strong>${r.mode === 'practice' ? 'Practice' : r.mode === 'adaptive' ? 'Adaptive' : 'Mock Exam'}</strong>                     <span class="session-date">${new Date(r.date).toLocaleDateString()}</span>                 </div>            ).join('');
} catch (error) {
console.error('Error loading recent sessions:', error);
return '<p>No recent sessions</p>';
}
}
return '<p>No recent sessions</p>';
}
function viewSession(index) {
const storage = localStorage.getItem('examResults');
if (storage) {
try {
const results = JSON.parse(storage);
const session = results[index];
if (session) {
showResults(session);
}
} catch (error) {
console.error('Error viewing session:', error);
}
}
}
function getProgress() {
const storage = localStorage.getItem('examResults');
if (storage) {
try {
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
    } catch (error) {
        console.error('Error getting progress:', error);
    }
}
return {
    attempted: 0,
    percentage: 0
};
}
function getCategoryPerformance() {
const storage = localStorage.getItem('examResults');
if (storage) {
try {
const results = JSON.parse(storage);
const categories = {};
        results.forEach(result => {
            if (result.categoryScores) {
                Object.entries(result.categoryScores).forEach(([category, scores]) => {
                    if (!categories[category]) {
                        categories[category] = { correct: 0, total: 0 };
                    }
                    categories[category].correct += scores.correct;
                    categories[category].total += scores.total;
                });
            }
        });
        
        return Object.entries(categories).map(([category, scores]) => `
            <div class="category-result">
                <h4>${category}</h4>
                <p>Overall: ${scores.correct} / ${scores.total} (${Math.round(scores.correct / scores.total * 100)}%)</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error getting category performance:', error);
        return '<p>No performance data available</p>';
    }
}
return '<p>No performance data available</p>';
}
function getSettings() {
const storage = localStorage.getItem('examSettings');
if (storage) {
try {
return JSON.parse(storage);
} catch (error) {
console.error('Error loading settings:', error);
}
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
try {
    localStorage.setItem('examSettings', JSON.stringify(settings));
    alert('Settings saved!');
} catch (error) {
    console.error('Error saving settings:', error);
    alert('Error saving settings. Please try again.');
}
}
function loadSettings() {
const settings = getSettings();
document.body.dataset.theme = settings.theme;
const performanceSettings = getPerformanceBasedSettings();
Object.assign(settings, performanceSettings);
}
function getPerformanceBasedSettings() {
const settings = {};
const overallSuccess = getOverallSuccessRate();
if (overallSuccess > 85) {
    settings.suggestedDifficulty = 'Hard';
} else if (overallSuccess > 70) {
    settings.suggestedDifficulty = 'Medium';
} else {
    settings.suggestedDifficulty = 'Easy';
}

return settings;
}
function saveResults(results) {
const storage = localStorage.getItem('examResults');
const allResults = storage ? JSON.parse(storage) : [];
allResults.push(results);
try {
    localStorage.setItem('examResults', JSON.stringify(allResults));
} catch (error) {
    console.error('Error saving results:', error);
    // If storage is full, remove oldest results
    if (error.name === 'QuotaExceededError') {
        allResults.shift(); // Remove oldest result
        try {
            localStorage.setItem('examResults', JSON.stringify(allResults));
        } catch (retryError) {
            console.error('Error saving results after cleanup:', retryError);
        }
    }
}
}
function resetProgress() {
if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
localStorage.removeItem('examProgress');
localStorage.removeItem('examResults');
localStorage.removeItem('examSettings');
localStorage.removeItem('performanceData');
location.reload();
}
}
// Global function exports
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
window.skipQuestion = skipQuestion;
window.viewSession = viewSession;
window.startWeakAreaPractice = startWeakAreaPractice;
window.startAdaptivePractice = startAdaptivePractice;
window.reviewQuestion = reviewQuestion;
window.endExam = endExam;
// Initialize app on load
console.log('Exam Simulator initialized successfully');
