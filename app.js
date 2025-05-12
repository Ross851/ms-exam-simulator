// Global variables
let questions = [
 // Additional questions to add to your questions array in app.js
{
    "id": 2,
    "topic": "Power Platform",
    "type": "multiplechoice", 
    "difficultyLevel": "Easy",
    "text": "Which of the following are components of the Microsoft Power Platform? Select all that apply.",
    "keyWords": ["Power Platform", "components", "Microsoft"],
    "hints": {
        "easy": ["Think about the four main products in Power Platform", "Each product starts with 'Power'"],
        "medium": ["Consider business apps, automation, analytics, and virtual agents"],
        "hard": ["Power Apps, Power Automate, Power BI, and Power Virtual Agents"]
    },
    "conceptsTested": ["Power Platform", "platform components", "Microsoft ecosystem"],
    "options": [
        {
            "letter": "A",
            "text": "Power Apps",
            "isCorrect": true,
            "analysis": "Power Apps is the low-code application development platform in Power Platform."
        },
        {
            "letter": "B",
            "text": "Power Query",
            "isCorrect": false,
            "analysis": "Power Query is a data transformation tool within Power BI and Excel, not a standalone Power Platform component."
        },
        {
            "letter": "C",
            "text": "Power Automate",
            "isCorrect": true,
            "analysis": "Power Automate provides workflow automation capabilities across the platform."
        },
        {
            "letter": "D",
            "text": "Power BI",
            "isCorrect": true,
            "analysis": "Power BI is the business intelligence and analytics component."
        },
        {
            "letter": "E",
            "text": "Power Virtual Agents",
            "isCorrect": true,
            "analysis": "Power Virtual Agents enables creation of chatbots without coding."
        }
    ],
    "correctAnswers": ["A", "C", "D", "E"],
    "isMultipleChoice": true,
    "detailedExplanation": "The Microsoft Power Platform consists of four main components: Power Apps (for building apps), Power Automate (for automation), Power BI (for analytics), and Power Virtual Agents (for chatbots). Power Query is a feature within Power BI and Excel, not a standalone platform component.",
    "category": "Architect a solution",
    "weight": 5.0
},
{
    "id": 3,
    "topic": "Dataverse",
    "type": "singlechoice",
    "difficultyLevel": "Medium",
    "text": "A company needs to implement row-level security in their Dataverse environment. Which feature should they use to restrict data access based on user attributes?",
    "keyWords": ["row-level security", "Dataverse", "restrict", "data access", "user attributes"],
    "hints": {
        "easy": ["Think about security features in Dataverse", "Consider how to filter data by user"],
        "medium": ["This feature allows dynamic data filtering", "It's related to business units and teams"],
        "hard": ["Security roles define permissions, but this feature filters which records users can see"]
    },
    "conceptsTested": ["Dataverse security", "row-level security", "access control"],
    "commonMistakes": [
        "Confusing security roles with row-level security",
        "Not understanding the hierarchy of business units",
        "Overlooking the importance of owner-based security"
    ],
    "options": [
        {
            "letter": "A",
            "text": "Security Roles",
            "isCorrect": false,
            "analysis": "Security roles define what actions users can perform, not which specific records they can access."
        },
        {
            "letter": "B",
            "text": "Access Teams",
            "isCorrect": true,
            "analysis": "Access teams provide row-level security by dynamically controlling which records users can access based on team membership."
        },
        {
            "letter": "C",
            "text": "Column Security Profiles",
            "isCorrect": false,
            "analysis": "Column security profiles restrict access to specific fields, not entire rows."
        },
        {
            "letter": "D",
            "text": "Connection Roles",
            "isCorrect": false,
            "analysis": "Connection roles define relationships between records, not security access."
        }
    ],
    "correctAnswers": ["B"],
    "isMultipleChoice": false,
    "detailedExplanation": "Access Teams in Dataverse provide row-level security by allowing dynamic assignment of users to teams that have specific access rights to records. This is different from security roles (which define permissions) and column security (which restricts field access).",
    "category": "Architect a solution",
    "weight": 6.5
},
{
    "id": 4,
    "topic": "Power Automate",
    "type": "multiplechoice",
    "difficultyLevel": "Medium",
    "text": "Which triggers can initiate a Power Automate cloud flow? Select all that apply.",
    "keyWords": ["triggers", "Power Automate", "cloud flow", "initiate"],
    "hints": {
        "easy": ["Think about different ways to start a flow", "Consider both manual and automatic triggers"],
        "medium": ["Flows can start from user actions, schedules, or system events"],
        "hard": ["Consider SharePoint, Forms, email, and time-based triggers"]
    },
    "conceptsTested": ["Power Automate triggers", "flow initiation", "automation"],
    "options": [
        {
            "letter": "A",
            "text": "When a new email arrives",
            "isCorrect": true,
            "analysis": "Email triggers are common in Power Automate for inbox automation."
        },
        {
            "letter": "B",
            "text": "On a recurring schedule",
            "isCorrect": true,
            "analysis": "Recurrence triggers allow flows to run at specified intervals."
        },
        {
            "letter": "C",
            "text": "When a SharePoint item is created",
            "isCorrect": true,
            "analysis": "SharePoint triggers are widely used for document and list automation."
        },
        {
            "letter": "D",
            "text": "When a local file is modified",
            "isCorrect": false,
            "analysis": "Cloud flows cannot directly monitor local file systems; this requires desktop flows."
        },
        {
            "letter": "E",
            "text": "When a Microsoft Form is submitted",
            "isCorrect": true,
            "analysis": "Forms triggers enable automation of survey and form responses."
        }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "isMultipleChoice": true,
    "detailedExplanation": "Power Automate cloud flows can be triggered by various events including emails, schedules, SharePoint changes, and form submissions. Local file monitoring requires desktop flows as cloud flows cannot access local file systems directly.",
    "category": "Implement the solution",
    "weight": 5.5
},
{
    "id": 5,
    "topic": "Power Apps",
    "type": "singlechoice",
    "difficultyLevel": "Hard",
    "text": "A canvas app needs to display data from multiple SharePoint lists with complex relationships. What is the most efficient approach to minimize delegation warnings and improve performance?",
    "keyWords": ["canvas app", "SharePoint lists", "delegation", "performance", "relationships"],
    "hints": {
        "easy": ["Consider data source limitations", "Think about where to process data"],
        "medium": ["Delegation limits affect how much data can be processed", "Complex operations might need preprocessing"],
        "hard": ["SharePoint has delegation limitations", "Consider intermediate data processing"]
    },
    "conceptsTested": ["delegation", "performance optimization", "data sources", "SharePoint integration"],
    "commonMistakes": [
        "Ignoring delegation limits",
        "Using multiple nested ForAll loops",
        "Not considering data volume impacts",
        "Overusing complex formulas in galleries"
    ],
    "options": [
        {
            "letter": "A",
            "text": "Use multiple Lookup columns in SharePoint",
            "isCorrect": false,
            "analysis": "While Lookup columns can help, they don't solve delegation issues and can impact performance."
        },
        {
            "letter": "B",
            "text": "Create a Power Automate flow to combine data into a single list",
            "isCorrect": true,
            "analysis": "Pre-processing data with Power Automate avoids delegation issues and improves app performance by creating a denormalized data structure."
        },
        {
            "letter": "C",
            "text": "Use nested ForAll loops in the canvas app",
            "isCorrect": false,
            "analysis": "Nested ForAll loops are inefficient and can severely impact performance with large datasets."
        },
        {
            "letter": "D",
            "text": "Connect directly to all lists and use complex Filter formulas",
            "isCorrect": false,
            "analysis": "Complex Filter formulas often hit delegation limits and result in incomplete data retrieval."
        }
    ],
    "correctAnswers": ["B"],
    "isMultipleChoice": false,
    "detailedExplanation": "When dealing with complex SharePoint relationships and delegation limitations, the best approach is to use Power Automate to pre-process and combine data into a single, denormalized list. This eliminates delegation warnings and significantly improves app performance.",
    "category": "Architect a solution",
    "weight": 8.0
},
{
    "id": 6,
    "topic": "ALM",
    "type": "multiplechoice",
    "difficultyLevel": "Medium",
    "text": "What are the recommended practices for Application Lifecycle Management (ALM) in Power Platform? Select all that apply.",
    "keyWords": ["ALM", "Application Lifecycle Management", "Power Platform", "best practices"],
    "hints": {
        "easy": ["Think about source control and environments", "Consider how to move changes between development and production"],
        "medium": ["Solutions are key to ALM", "Environment strategy is important"],
        "hard": ["Consider managed vs unmanaged solutions", "Think about deployment pipelines"]
    },
    "conceptsTested": ["ALM", "solutions", "environments", "deployment"],
    "options": [
        {
            "letter": "A",
            "text": "Use separate environments for development, test, and production",
            "isCorrect": true,
            "analysis": "Environment separation is fundamental to proper ALM practices."
        },
        {
            "letter": "B",
            "text": "Always use unmanaged solutions in production",
            "isCorrect": false,
            "analysis": "Managed solutions should be used in production to prevent unwanted modifications."
        },
        {
            "letter": "C",
            "text": "Implement source control for solution files",
            "isCorrect": true,
            "analysis": "Source control enables version tracking and collaboration on Power Platform solutions."
        },
        {
            "letter": "D",
            "text": "Use solution segmentation for large projects",
            "isCorrect": true,
            "analysis": "Breaking large projects into multiple solutions improves manageability and deployment flexibility."
        },
        {
            "letter": "E",
            "text": "Deploy directly from development to production",
            "isCorrect": false,
            "analysis": "Skipping test environments increases risk and violates ALM best practices."
        }
    ],
    "correctAnswers": ["A", "C", "D"],
    "isMultipleChoice": true,
    "detailedExplanation": "Proper ALM in Power Platform requires separate environments, source control, and solution segmentation. Managed solutions should be used in production, and deployments should follow a development -> test -> production path.",
    "category": "Implement the solution",
    "weight": 7.0
},
{
    "id": 7,
    "topic": "Security",
    "type": "singlechoice",
    "difficultyLevel": "Hard",
    "text": "An organization needs to implement data loss prevention (DLP) policies across Power Platform. Which component should be configured to prevent sensitive data from being shared with external connectors?",
    "keyWords": ["DLP", "data loss prevention", "security", "external connectors", "sensitive data"],
    "hints": {
        "easy": ["DLP policies are configured at a specific level", "Think about governance and administration"],
        "medium": ["This is managed centrally, not at the app level", "Consider where policies would apply across all apps"],
        "hard": ["Think about the administrative hierarchy in Microsoft 365"]
    },
    "conceptsTested": ["DLP policies", "security governance", "connector management"],
    "commonMistakes": [
        "Configuring DLP at the app level",
        "Not understanding policy inheritance",
        "Overlooking connector classification"
    ],
    "options": [
        {
            "letter": "A",
            "text": "Individual app settings",
            "isCorrect": false,
            "analysis": "DLP policies cannot be effectively managed at the individual app level."
        },
        {
            "letter": "B",
            "text": "Power Platform admin center",
            "isCorrect": true,
            "analysis": "DLP policies are configured in the Power Platform admin center to apply across environments and apps."
        },
        {
            "letter": "C",
            "text": "Azure Active Directory",
            "isCorrect": false,
            "analysis": "While Azure AD handles authentication, DLP policies are managed in Power Platform admin center."
        },
        {
            "letter": "D",
            "text": "SharePoint admin center",
            "isCorrect": false,
            "analysis": "SharePoint DLP is separate from Power Platform DLP policies."
        }
    ],
    "correctAnswers": ["B"],
    "isMultipleChoice": false,
    "detailedExplanation": "Data Loss Prevention (DLP) policies for Power Platform are configured in the Power Platform admin center. These policies control which connectors can be used together and help prevent sensitive data from being shared with external services.",
    "category": "Perform solution envisioning and requirement analysis",
    "weight": 7.5
},
{
    "id": 8,
    "topic": "Power BI",
    "type": "multiplechoice",
    "difficultyLevel": "Medium",
    "text": "Which methods can be used to refresh Power BI datasets? Select all that apply.",
    "keyWords": ["Power BI", "datasets", "refresh", "data update"],
    "hints": {
        "easy": ["Think about manual and automatic options", "Consider both cloud and on-premises data"],
        "medium": ["Some methods require Premium capacity", "Gateways enable certain scenarios"],
        "hard": ["API calls, scheduled refresh, and streaming are all options"]
    },
    "conceptsTested": ["Power BI refresh", "data connectivity", "dataset management"],
    "options": [
        {
            "letter": "A",
            "text": "Scheduled refresh",
            "isCorrect": true,
            "analysis": "Scheduled refresh can be configured to update datasets automatically at specified times."
        },
        {
            "letter": "B",
            "text": "Manual refresh in Power BI Service",
            "isCorrect": true,
            "analysis": "Users can manually trigger dataset refreshes through the Power BI Service interface."
        },
        {
            "letter": "C",
            "text": "Push data via streaming dataset",
            "isCorrect": true,
            "analysis": "Streaming datasets allow real-time data updates through the Power BI REST API."
        },
        {
            "letter": "D",
            "text": "Direct modification of .pbix file",
            "isCorrect": false,
            "analysis": "Direct modification of .pbix files doesn't refresh the dataset in the service."
        },
        {
            "letter": "E",
            "text": "Power BI REST API",
            "isCorrect": true,
            "analysis": "The REST API can programmatically trigger dataset refreshes."
        }
    ],
    "correctAnswers": ["A", "B", "C", "E"],
    "isMultipleChoice": true,
    "detailedExplanation": "Power BI datasets can be refreshed through scheduled refresh, manual triggers, streaming data push, and REST API calls. Direct modification of .pbix files requires re-publishing and doesn't constitute a refresh method.",
    "category": "Implement the solution",
    "weight": 6.0
}
    // Add more questions here following the same structure
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
    console.log(`Loaded ${questions.length} questions`);
    
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
    const performanceTrends = getPerformanceTrends();
    
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

// Enhanced Performance Tracking Functions
function loadPerformanceData() {
    const saved = localStorage.getItem('performanceData');
    if (saved) {
        performanceData = JSON.parse(saved);
    }
}

function savePerformanceData() {
    localStorage.setItem('performanceData', JSON.stringify(performanceData));
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
        if (data.total >= 3) { // Only consider topics with at least 3 attempts
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
        if (data.total >= 2) { // Only consider concepts with at least 2 attempts
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
    
    // Sort by success rate (worst first)
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
    
    // Sort by success rate (best first)
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
    
    // Select questions based on performance
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
    
    // Add more questions from weak areas
    weakAreas.forEach(area => {
        const relevantQuestions = questions.filter(q => {
            if (area.type === 'topic') {
                return q.topic === area.name;
            } else if (area.type === 'concept') {
                return q.conceptsTested.includes(area.name);
            }
            return false;
        });
        
        // Add each weak area question multiple times based on how weak it is
        const weight = Math.ceil((100 - area.successRate) / 20);
        relevantQuestions.forEach(q => {
            for (let i = 0; i < weight; i++) {
                questionPool.push(q);
            }
        });
    });
    
    // Add some questions from areas not yet attempted
    const attemptedQuestionIds = Object.keys(performanceData.questionHistory);
    const unattemptedQuestions = questions.filter(q => !attemptedQuestionIds.includes(q.id.toString()));
    unattemptedQuestions.slice(0, 5).forEach(q => questionPool.push(q));
    
    // Shuffle and select up to 20 questions
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
    const totalQuestions = Math.floor(Math.random() * (mockExamConfig.maxQuestions - mockExamConfig.minQuestions + 1)) + mockExamConfig.minQuestions;
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
    
    // Show if this is a weak area question in adaptive mode
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
    
    // Only show hint button if not answered yet and not in mock mode
    if (!isAnswered && currentMode !== 'mock' && !hintsUsed[question.id]) {
        const hintLevel = question.difficultyLevel.toLowerCase();
        html += `
            <button class="btn btn-secondary" onclick="showHint(${question.id}, '${hintLevel}')">
                Show Hint
            </button>
            <div class="hint-box" id="hint-${question.id}"></div>
        `;
    } else if (hintsUsed[question.id] && !isAnswered) {
        // Show the hint if it was already used but question not answered
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
    
    // Show options
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
    
    // If already answered, show the feedback
    if (isAnswered) {
        showFeedback();
    }
    
    // Restore hint visibility if it was shown
    if (hintsUsed[question.id] && !isAnswered) {
        const hintBox = document.getElementById(`hint-${question.id}`);
        if (hintBox) {
            hintBox.classList.add('visible');
        }
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
    
    if (question && question.hints && question.hints[difficulty]) {
        hintsUsed[questionId] = true;
        
        // Check if hints[difficulty] is an array or string
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

// Add review question function
function reviewQuestion() {
    // Scroll back to the question
    document.querySelector('.question-container').scrollIntoView({ behavior: 'smooth' });
}

// Update submitAnswer to prevent multiple submissions
function submitAnswer() {
    const question = selectedQuestions[currentQuestion];
    const selectedInputs = document.querySelectorAll(`input[name="question-${question.id}"]:checked`);
    
    // Check if already answered
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
    
    // Disable all options after submitting
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    document.querySelectorAll('.option-input').forEach(input => {
        input.disabled = true;
    });
    
    // Hide hint button after submitting
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
    
    // Update performance data
    updatePerformanceData(question, isCorrect);
    
    // Mark options and add feedback
    question.options.forEach((option, index) => {
        const optionDiv = document.getElementById(`option-${index}`).parentElement;
        const isCorrectOption = correctAnswers.includes(option.letter);
        const isUserAnswer = (Array.isArray(userAnswer) && userAnswer.includes(option.letter)) ||
                           userAnswer === option.letter;
        
        if (isCorrectOption) {
            optionDiv.classList.add('correct');
            // Add checkmark for correct options
            if (!optionDiv.querySelector('.feedback-icon')) {
                optionDiv.innerHTML += '<span class="feedback-icon correct-icon">✓</span>';
            }
        } else if (isUserAnswer) {
            optionDiv.classList.add('incorrect');
            // Add X for incorrect user selections
            if (!optionDiv.querySelector('.feedback-icon')) {
                optionDiv.innerHTML += '<span class="feedback-icon incorrect-icon">✗</span>';
            }
        }
    });
    
    // Only show explanation once, and don't duplicate if it already exists
    if (!document.querySelector('.explanation-box')) {
        const main = document.getElementById('main');
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
                <button class="btn" onclick="nextQuestion()">Next Question</button>
                <button class="btn btn-secondary" onclick="reviewQuestion()">Review Question</button>
            </div>
        `;
        
        main.innerHTML += explanationHtml;
        
        // Scroll to explanation
        document.querySelector('.explanation-box').scrollIntoView({ behavior: 'smooth' });
    }
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
    const attemptedQuestions = [];
    
    selectedQuestions.forEach(question => {
        attemptedQuestions.push(question.id);
        const userAnswer = userAnswers[question.id];
        const isCorrect = checkAnswer(question, userAnswer);
        
        if (isCorrect) {
            correct++;
        }
        
        // Update performance data for mock exams
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
    
    // Get performance insights
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
        
        // Check if this is a weak area
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

// Add skip question function
function skipQuestion() {
    nextQuestion();
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
        const results = JSON.parse(storage);
        return results.slice(-5).reverse().map((r, index) => `
            <div class="session-item" onclick="viewSession(${results.length - 1 - index})">
                <span class="session-score ${r.passed ? 'pass' : 'fail'}">
                    ${r.score}/1000
                </span>
                <strong>${r.mode === 'practice' ? 'Practice' : r.mode === 'adaptive' ? 'Adaptive' : 'Mock Exam'}</strong>
                <span class="session-date">${new Date(r.date).toLocaleDateString()}</span>
            </div>
        `).join('');
    }
    return '<p>No recent sessions</p>';
}

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

function getCategoryPerformance() {
    const storage = localStorage.getItem('examResults');
    if (storage) {
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
    }
    return '<p>No performance data available</p>';
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
    
    // Apply performance-based defaults
    const performanceSettings = getPerformanceBasedSettings();
    Object.assign(settings, performanceSettings);
}

function getPerformanceBasedSettings() {
    const settings = {};
    const overallSuccess = getOverallSuccessRate();
    
    // Suggest difficulty based on performance
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
    localStorage.setItem('examResults', JSON.stringify(allResults));
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

// Get performance trends
function getPerformanceTrends() {
    const storage = localStorage.getItem('examResults');
    if (!storage) return [];
    
    const results = JSON.parse(storage);
    const recentResults = results.slice(-10); // Last 10 sessions
    
    const trends = [];
    recentResults.forEach((result, index) => {
        if (index > 0) {
            const prevScore = recentResults[index - 1].score;
            const currScore = result.score;
            const trend = currScore > prevScore ? 'up' : currScore < prevScore ? 'down' : 'stable';
            trends.push({ date: result.date, score: currScore, trend: trend });
        }
    });
    
    return trends;
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
window.skipQuestion = skipQuestion;
window.viewSession = viewSession;
window.startWeakAreaPractice = startWeakAreaPractice;
window.startAdaptivePractice = startAdaptivePractice;

// Load settings on initialization
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
    
    // Add change listeners
    document.getElementById('themeSelect').addEventListener('change', function() {
        document.body.dataset.theme = this.value;
    });
}
