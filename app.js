/******************************************************************************
 * app.js - Standalone Version
 * 
 * This version includes embedded questions and doesn't require fetching from a JSON file
 ******************************************************************************/

/***********************************
 * Global Variables 
 ***********************************/
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let startTime = null;        // For timing functionality
let questionStartTime = null; // Track time per question
let timerInterval = null;    // For updating the timer display

/*************************************************
 * Initialize Application
 *************************************************/
function initializeApp() {
  try {
    console.log('Initializing application...');
    
    // Set up embedded questions (no need to fetch external file)
    questions = getEmbeddedQuestions();
    
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Failed to load questions');
    }
    
    console.log(`Loaded ${questions.length} questions successfully`);
    
    // Set up event listeners
    setupEventListeners();
    
    // Start the timer
    startTime = Date.now();
    startTimer();
    
    // Render the first question
    renderQuestion(questions[currentQuestionIndex]);
    updateProgress();
    
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Failed to initialize the application:', error);
    showError('Failed to initialize the application. Please refresh and try again.');
  }
}

/*************************************************
 * Embedded Questions (no need for external JSON)
 *************************************************/
function getEmbeddedQuestions() {
  return [
  {
    "id": "q1",
    "type": "multiplechoice",
    "text": "A company uses two separate unlinked apps to manage sales leads: a Power Apps app and a third-party application. The client has the following requirements: • Manage all leads using the Power Apps app. • Create a lead in the Power Apps app when a user creates a lead in the third-party application. • Update leads in the Power Apps app when a user updates a lead in the third-party application. • Connect to the third-party application using an API. You need to recommend strategies to integrate the Power Apps app and the third-party application. Which three options can you use to achieve the goal?",
    "options": [
      { "letter": "A", "text": "Dual-write", "isCorrect": false },
      { "letter": "B", "text": "Custom connector", "isCorrect": true },
      { "letter": "C", "text": "Dataflow", "isCorrect": false },
      { "letter": "D", "text": "Power Automate cloud flow", "isCorrect": true },
      { "letter": "E", "text": "Dataverse connector", "isCorrect": true }
    ],
    "correctAnswers": ["B", "D", "E"],
    "hints": {
      "easy": ["Look for integration patterns", "Consider API connectivity options", "Think about what connects Power Platform to external systems"]
    }
  },
  {
    "id": "q2",
    "type": "dragdrop",
    "text": "You are designing a business continuity strategy for a client who has a Microsoft Power Platform solution. The client works with critical data where any data loss creates a high risk. You need to document the retry process for the stakeholders. Which four actions should you perform in sequence?",
    "draggableItems": [
      { "id": "item1", "label": "The application makes a service call to the datacenter." },
      { "id": "item2", "label": "The application receives an exception after attempting the service call." },
      { "id": "item3", "label": "The application automatically tries the call again." },
      { "id": "item4", "label": "If the second call is successful, the application continues normally." },
      { "id": "item5", "label": "The application logs an error and notifies an administrator." },
      { "id": "item6", "label": "The application retries three times with exponential backoff." },
      { "id": "item7", "label": "The user manually retries the operation." }
    ],
    "dropZones": [
      { "id": "zone1", "label": "Step 1", "correctItems": ["item1"] },
      { "id": "zone2", "label": "Step 2", "correctItems": ["item2"] },
      { "id": "zone3", "label": "Step 3", "correctItems": ["item3"] },
      { "id": "zone4", "label": "Step 4", "correctItems": ["item4"] }
    ],
    "hints": {
      "easy": ["Think about typical retry patterns", "Follow the error flow sequence", "What happens first in a service call?"]
    }
  },
  {
    "id": "q3",
    "type": "multiplechoice",
    "text": "A large company experiences high staff turnover rates. As a result, the company must add or remove multiple system user accounts daily. You need to recommend a security concept which will facilitate complex security profiles to entities for large groups of users across the Power Apps and Dynamics 365 applications. What should you recommend?",
    "options": [
      { "letter": "A", "text": "Hierarchy security", "isCorrect": false },
      { "letter": "B", "text": "Field-level security", "isCorrect": false },
      { "letter": "C", "text": "User access management", "isCorrect": false },
      { "letter": "D", "text": "Team privileges", "isCorrect": true }
    ],
    "correctAnswers": ["D"],
    "hints": {
      "easy": ["Think about group-based security", "Consider scalability for many users", "What reduces administrative overhead?"]
    }
  },
  {
    "id": "q4",
    "type": "multiplechoice",
    "text": "You are designing a Power Platform solution for a company that provides in-home appliance maintenance. When a customer schedules a service appointment, a dispatcher assigns one technician for a specific time and location. The solution must capture information about the technician assigned to each appointment and the list of tools that the technician must bring to the appointment. You need to recommend the data type for the captured information. Which data types should you use?",
    "options": [
      { "letter": "A", "text": "Technician assigned: Text, Tools to bring: Text", "isCorrect": false },
      { "letter": "B", "text": "Technician assigned: Lookup, Tools to bring: Text", "isCorrect": false },
      { "letter": "C", "text": "Technician assigned: Lookup, Tools to bring: Choices (multi-select option set)", "isCorrect": true },
      { "letter": "D", "text": "Technician assigned: Choices (multi-select option set), Tools to bring: Lookup", "isCorrect": false }
    ],
    "correctAnswers": ["C"],
    "hints": {
      "easy": ["Think about relationships between data", "Consider single vs multiple selections", "What data type links to other records?"]
    }
  },
  {
    "id": "q5",
    "type": "multiplechoice",
    "text": "An animal welfare organization wants to track the movement of wolf packs in a region. Cameras at specific locations capture images when motion is detected within the camera sensor range. Staff upload the images manually to a shared drive and then analyse the images. The organization wants to automate image capture and analysis. The organization has the following requirements: • Save captured images in an appropriate location. • Analyse saved images by using an image recognition process. • Display data in real-time dashboards. You need to recommend the correct technology for the requirements. What should you recommend?",
    "options": [
      { "letter": "A", "text": "Save images: Automated cloud flow, Analyze images: AI Builder", "isCorrect": true },
      { "letter": "B", "text": "Save images: Manual upload to SharePoint, Analyze images: Custom vision API with Azure Functions", "isCorrect": false },
      { "letter": "C", "text": "Save images: Desktop flow with Power Automate, Analyze images: Image recognition using desktop automation", "isCorrect": false },
      { "letter": "D", "text": "Save images: Custom connector, Analyze images: Custom vision API with Azure Functions", "isCorrect": false }
    ],
    "correctAnswers": ["A"],
    "hints": {
      "easy": ["Think about automation tools", "Consider AI capabilities in Power Platform", "What handles file operations?"]
    }
  },
  {
    "id": "q6",
    "type": "multiplechoice",
    "text": "You are designing a Power Platform solution. The company wants its development team to adopt the construction of repeatable components for its implementation team to reuse on different entities and forms. You need to recommend a technology that meets these requirements. Which technology would you recommend the developers adopt to assist the implementation team?",
    "options": [
      { "letter": "A", "text": "JavaScript", "isCorrect": false },
      { "letter": "B", "text": "Power Apps Component Framework control", "isCorrect": true },
      { "letter": "C", "text": "Web resource", "isCorrect": false },
      { "letter": "D", "text": "Canvas app", "isCorrect": false }
    ],
    "correctAnswers": ["B"],
    "hints": {
      "easy": ["Think about custom UI components", "Consider code-based solutions", "What allows reusability across forms?"]
    }
  },
  {
    "id": "q7",
    "type": "multiplechoice",
    "text": "A company uses manual processes to track interactions with customers. The company wants to use Power Platform to improve productivity. The company has the following requirements: • Provide customers with an online portal where they can submit and review cases. • Ensure that customers can chat online with a customer service representative at any time. • Route chats to customer service representatives based on skill and availability. You need to recommend a solution to the company. Which three components should you recommend?",
    "options": [
      { "letter": "A", "text": "Dynamics 365 Virtual Agents chatbots", "isCorrect": true },
      { "letter": "B", "text": "Customer self-service portal", "isCorrect": true },
      { "letter": "C", "text": "Dynamics 365 Field Service", "isCorrect": false },
      { "letter": "D", "text": "Business process flows", "isCorrect": false },
      { "letter": "E", "text": "Omnichannel for Customer Service", "isCorrect": true }
    ],
    "correctAnswers": ["A", "B", "E"],
    "hints": {
      "easy": ["Think about customer portals", "Consider chat solutions", "What handles skill-based routing?"]
    }
  },
  {
    "id": "q8",
    "type": "multiplechoice",
    "text": "A client uses Dynamics 365 Sales, Power BI datasets, and Power BI dataflows. The Dynamics 365 Sales implementation has security roles that restrict data export. You need to ensure that data has the same restrictions in Power BI as it does in Dynamics 365 Sales. You need to design the security to avoid sensitive data from being seen. Which two actions should you recommend?",
    "options": [
      { "letter": "A", "text": "Use Microsoft Dataverse restrictions before setting up the Power BI reports.", "isCorrect": true },
      { "letter": "B", "text": "Limit the role in Dynamics 365 Sales to only data allowed so it cannot be exported to Microsoft Excel.", "isCorrect": false },
      { "letter": "C", "text": "Limit the role and ensure that exporting to Microsoft Excel is not allowed in both Dynamics 365 Sales and Power BI.", "isCorrect": false },
      { "letter": "D", "text": "Share Power BI dashboards only with users who are supported to see this data.", "isCorrect": true }
    ],
    "correctAnswers": ["A", "D"],
    "hints": {
      "easy": ["Think about security inheritance", "Consider row-level security", "How does security flow from Dataverse?"]
    }
  },
  {
  "id": "q9",
  "type": "dragdrop",
  "text": "You need to determine which requirements are functional or non-functional. The customer provides the following requirements: • Customers need the ability to submit a case through an online portal. • Portal must handle 75 concurrent users submitting cases. • Service data must be retained for at least six years.",
  "draggableItems": [
    { "id": "item1", "label": "Functional" },
    { "id": "item2a", "label": "Non-functional" },
    { "id": "item2b", "label": "Non-functional" }
  ],
  "dropZones": [
    { "id": "zone1", "label": "Customers need the ability to submit a case through an online portal.", "correctItems": ["item1"] },
    { "id": "zone2", "label": "Portal must handle 75 concurrent users submitting cases.", "correctItems": ["item2a", "item2b"] },
    { "id": "zone3", "label": "Service data must be retained for at least six years.", "correctItems": ["item2a", "item2b"] }
  ],
  "hints": {
    "easy": ["Think about features vs constraints", "Consider what the system does vs how well it does it", "Performance is typically non-functional"]
  }
},
  {
    "id": "q10",
    "type": "multiplechoice",
    "text": "You are a Power Platform consultant for an internet support company. The company lacks a budget to buy third-party ISVs or add-ons. The company requires a new system that achieves the following: • All support issues must come in by email, need to be logged, and assigned to the support group. • Accounts must synchronise with the parent company Oracle database. • Reports must be sent to the executives on a weekly basis. • No custom code will be used in the system. You need to recommend the components that should be configured. Which two components should you recommend?",
    "options": [
      { "letter": "A", "text": "Power Virtual Agents", "isCorrect": false },
      { "letter": "B", "text": "Microsoft Dataverse", "isCorrect": true },
      { "letter": "C", "text": "server-side synchronisation", "isCorrect": true },
      { "letter": "D", "text": "Microsoft Customer Voice", "isCorrect": false }
    ],
    "correctAnswers": ["B", "C"],
    "hints": {
      "easy": ["Think about out-of-box capabilities", "Consider email integration options", "What handles data synchronization?"]
    }
  },{
  "id": "q11",
  "type": "dragdrop",
  "text": "You are performing a requirements analysis for a customer. You need to determine if the requirements are functional or non-functional.",
  "draggableItems": [
    { "id": "item1a", "label": "Functional" },
    { "id": "item1b", "label": "Functional" },
    { "id": "item2a", "label": "Non-functional" },
    { "id": "item2b", "label": "Non-functional" }
  ],
  "dropZones": [
    { "id": "zone1", "label": "Power Platform storage capacity must remain under 100 percent.", "correctItems": ["item2a", "item2b"] },
    { "id": "zone2", "label": "Customer service representatives must be sent an email when they are assigned a case.", "correctItems": ["item1a", "item1b"] },
    { "id": "zone3", "label": "Help desk technicians must be shown an error message when they try to delete a task row.", "correctItems": ["item1a", "item1b"] },
    { "id": "zone4", "label": "The plug-in pass rate must remain over 99 percent for the production environment.", "correctItems": ["item2a", "item2b"] }
  ],
  "hints": {
    "easy": ["Capacity and performance are qualities", "Actions and behaviors are functions", "Think about measurable constraints"]
  }
},
  {
    "id": "q12",
    "type": "multiplechoice",
    "text": "A company has a website that contains a form named Contact Us. Data from completed forms is saved to a shared document. An office administrator periodically reviews the document. The office administrator sends new submissions to another employee who creates contacts or updates existing contacts. You need to recommend a solution to automate the process. What should you recommend?",
    "options": [
      { "letter": "A", "text": "Excel Online Connector", "isCorrect": false },
      { "letter": "B", "text": "Dynamics 365 Customer Insights", "isCorrect": false },
      { "letter": "C", "text": "Dynamics 365 Customer Service", "isCorrect": true },
      { "letter": "D", "text": "Dynamics 365 Marketing", "isCorrect": false }
    ],
    "correctAnswers": ["C"],
    "hints": {
      "easy": ["Think about automating form processing", "Consider contact management systems", "What handles forms and contacts?"]
    }
  },
  {
    "id": "q13",
    "type": "multiplechoice",
    "text": "You need to design a Power Platform solution that meets the following requirements: • Capture data from a row during deletion to be used in an automated process. • Use AI to process forms and automate data entry from paper-based forms. Which requirements can be met by using out-of-the-box Power Platform components?",
    "options": [
      { "letter": "A", "text": "Capture data upon row deletion: Yes, Use AI to process forms: Yes", "isCorrect": true },
      { "letter": "B", "text": "Capture data upon row deletion: Yes, Use AI to process forms: No", "isCorrect": false },
      { "letter": "C", "text": "Capture data upon row deletion: No, Use AI to process forms: Yes", "isCorrect": false },
      { "letter": "D", "text": "Capture data upon row deletion: No, Use AI to process forms: No", "isCorrect": false }
    ],
    "correctAnswers": ["A"],
    "hints": {
      "easy": ["Think about Dataverse triggers", "Consider AI Builder capabilities", "What's available out-of-the-box?"]
    }
  },
  {
    "id": "q14",
    "type": "multiplechoice",
    "text": "A company has a custom web-based API that is hosted on Azure. You design a Microsoft Power Platform solution to provide the company additional capabilities. You need to integrate the Microsoft Power Platform solution with the API. What should you recommend?",
    "options": [
      { "letter": "A", "text": "Connection reference", "isCorrect": false },
      { "letter": "B", "text": "Custom connector", "isCorrect": true },
      { "letter": "C", "text": "Desktop flow", "isCorrect": false },
      { "letter": "D", "text": "Data gateway", "isCorrect": false }
    ],
    "correctAnswers": ["B"],
    "hints": {
      "easy": ["Think about API connectivity", "What enables custom integrations?", "Consider REST API connections"]
    }
  },
  {
    "id": "q15",
    "type": "multiplechoice",
    "text": "You are designing a self-service portal for a company. The portal must meet the following requirements: • Customers must be able to submit and review cases. • Customers must be able to chat with service representatives in near real time. • Allow service representatives to select cases from queues and use knowledge articles to resolve customer concerns. You need to recommend solutions for the company that do not require custom development. Which three apps or services should you recommend?",
    "options": [
      { "letter": "A", "text": "Dynamics 365 Field Service", "isCorrect": false },
      { "letter": "B", "text": "Dynamics 365 Customer Service", "isCorrect": true },
      { "letter": "C", "text": "Omnichannel for Customer Service", "isCorrect": true },
      { "letter": "D", "text": "Customer Insights", "isCorrect": false },
      { "letter": "E", "text": "Customer self-service portal", "isCorrect": true }
    ],
    "correctAnswers": ["B", "C", "E"],
    "hints": {
      "easy": ["Think about portal solutions", "Consider chat capabilities", "What manages cases and knowledge?"]
    }
  },
  {
    "id": "q16",
    "type": "multiplechoice",
    "text": "A multinational organisation uses a single Power Platform environment. The instance hosts multiple customisations for different users in different regions. Users in some regions complain about slow load time of the customisations. You need to architect a solution. What should you recommend for divisions that actively collaborate on customers?",
    "options": [
      { "letter": "A", "text": "Single instance; use Microsoft Azure Traffic Manager where needed", "isCorrect": false },
      { "letter": "B", "text": "Multi-tenant with one Power Platform environment in each region", "isCorrect": true },
      { "letter": "C", "text": "Multiple instances in different regions; Power BI for reporting", "isCorrect": false },
      { "letter": "D", "text": "Single multi-geo instance", "isCorrect": false }
    ],
    "correctAnswers": ["B"],
    "hints": {
      "easy": ["Think about geographical distribution", "Consider performance optimization", "What affects load times?"]
    }
  }
];
}

/************************************************
 * Core Rendering Logic
 ************************************************/
function renderQuestion(question) {
  if (!question) {
    showError('Question data is missing');
    return;
  }
  
  console.log(`Rendering question ${currentQuestionIndex + 1}: ${question.type}`);
  
  // Track time for analytics
  questionStartTime = Date.now();
  
  // Clear existing question display
  const container = document.getElementById('question-container');
  container.innerHTML = '';
  
  // Add ARIA label for screen readers
  container.setAttribute('aria-label', `Question ${currentQuestionIndex + 1} of ${questions.length}`);
  
  // Create question header with progress
  const header = createQuestionHeader();
  container.appendChild(header);
  
  // Create question text
  const questionText = document.createElement('p');
  questionText.className = 'question-text';
  questionText.id = 'question-text';
  questionText.innerText = question.text;
  container.appendChild(questionText);
  
  // Render question based on type
  switch (question.type) {
    case 'multiplechoice':
      renderMultipleChoiceQuestion(question);
      break;
    case 'dragdrop':
      renderDragDropQuestion(question);
      break;
    case 'code':
      renderCodeQuestion(question);
      break;
    default:
      console.warn('Unknown question type:', question.type);
      showError(`Unsupported question type: ${question.type}`);
      break;
  }
  
  // Show hints if available
  if (question.hints) {
    renderHints(question);
  }
  
  // Render navigation controls
  renderNavigationControls();
  
  // Update progress bar
  updateProgress();
  
  console.log(`Question ${currentQuestionIndex + 1} rendered successfully`);
}

/*******************************************************
 * Question Header with Progress
 *******************************************************/
function createQuestionHeader() {
  const headerDiv = document.createElement('div');
  headerDiv.className = 'question-header';
  
  const questionHeader = document.createElement('h2');
  questionHeader.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  headerDiv.appendChild(questionHeader);
  
  // Add timer
  const timer = document.createElement('div');
  timer.className = 'timer';
  timer.id = 'question-timer';
  timer.innerText = '00:00';
  headerDiv.appendChild(timer);
  
  return headerDiv;
}

/*******************************************************
 * Enhanced Multiple Choice with Accessibility
 *******************************************************/
function renderMultipleChoiceQuestion(question) {
  const container = document.getElementById('question-container');
  
  // Determine if multiple answers are allowed
  const correctAnswers = Array.isArray(question.correctAnswers) ? question.correctAnswers : [];
  const isMultiSelect = correctAnswers.length > 1;
  
  // Show instruction for multiple selection
  if (isMultiSelect) {
    const note = document.createElement('p');
    note.className = 'multi-select-note';
    note.setAttribute('role', 'note');
    note.innerText = 'Select all that apply.';
    container.appendChild(note);
  }
  
  // Create options container with proper ARIA roles
  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'options-container';
  optionsContainer.setAttribute('role', 'group');
  optionsContainer.setAttribute('aria-labelledby', 'question-text');
  
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    
    const inputType = isMultiSelect ? 'checkbox' : 'radio';
    const input = document.createElement('input');
    input.type = inputType;
    input.name = `question_${question.id}`;
    input.value = option.letter || String.fromCharCode(65 + index);
    input.id = `option_${question.id}_${index}`;
    
    // Restore previous selection
    const previousAnswers = userAnswers[question.id];
    if (previousAnswers && Array.isArray(previousAnswers) && 
        previousAnswers.includes(input.value)) {
      input.checked = true;
    }
    
    // Add event listener for immediate feedback (optional)
    input.addEventListener('change', () => {
      saveUserAnswer(question.id);
    });
    
    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.className = 'option-label';
    label.innerText = `${option.letter || String.fromCharCode(65 + index)}: ${option.text}`;
    
    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    optionsContainer.appendChild(optionDiv);
  });
  
  container.appendChild(optionsContainer);
}

/************************************************************
 * Enhanced Drag-and-Drop Implementation
 ************************************************************/
function renderDragDropQuestion(question) {
  console.log('Rendering drag and drop question...');
  const container = document.getElementById('question-container');
  
  // Validate drag-drop data
  if (!question.draggableItems || !question.dropZones) {
    showError('Invalid drag-and-drop question format');
    return;
  }
  
  // Instructions
  const instruction = document.createElement('p');
  instruction.className = 'drag-instruction';
  instruction.innerText = 'Drag the items to the correct drop zones.';
  instruction.setAttribute('role', 'note');
  container.appendChild(instruction);
  
  // Create wrapper for drag-drop interface
  const dragDropWrapper = document.createElement('div');
  dragDropWrapper.className = 'drag-drop-wrapper';
  dragDropWrapper.id = 'drag-drop-wrapper';
  
  // Draggable items container
  const dragContainer = document.createElement('div');
  dragContainer.className = 'drag-container';
  dragContainer.id = 'drag-source-container';
  dragContainer.setAttribute('role', 'list');
  dragContainer.setAttribute('aria-label', 'Draggable items');
  
  // Create and add all draggable items to the source container
  question.draggableItems.forEach((item, index) => {
    createDraggableItem(item, index, dragContainer);
  });
  
  // Drop zones container
  const dropContainer = document.createElement('div');
  dropContainer.className = 'drop-container';
  
  // Create all drop zones
  question.dropZones.forEach((zone, index) => {
    createDropZone(zone, index, dropContainer);
  });
  
  // Add containers to the wrapper
  dragDropWrapper.appendChild(dragContainer);
  dragDropWrapper.appendChild(dropContainer);
  container.appendChild(dragDropWrapper);
  
  // Add data to container for reference
  dragDropWrapper.dataset.questionId = question.id;
  
  // Initialize drag and drop functionality
  initDragAndDrop();
  
  // Restore previous state if exists
  restoreDragDropState(question.id);
  
  console.log('Drag and drop question rendered successfully');
}

/* Creates a draggable item element */
function createDraggableItem(item, index, container) {
  const draggable = document.createElement('div');
  draggable.className = 'draggable-item';
  draggable.id = `draggable-${item.id}`;
  draggable.draggable = true;
  draggable.dataset.itemId = item.id;
  draggable.dataset.originalIndex = index;
  draggable.dataset.itemLabel = item.label;
  draggable.innerText = item.label;
  
  // Accessibility attributes
  draggable.setAttribute('role', 'listitem');
  draggable.setAttribute('aria-grabbed', 'false');
  draggable.tabIndex = 0;
  
  // Add to container
  container.appendChild(draggable);
  
  return draggable;
}

/* Creates a drop zone element */
function createDropZone(zone, index, container) {
  const dropZone = document.createElement('div');
  dropZone.className = 'drop-zone';
  dropZone.id = `dropzone-${zone.id}`;
  dropZone.dataset.zoneId = zone.id;
  dropZone.dataset.zoneIndex = index;
  
  // Accessibility
  dropZone.setAttribute('role', 'region');
  dropZone.setAttribute('aria-label', zone.label || `Drop zone ${index + 1}`);
  dropZone.setAttribute('aria-dropeffect', 'move');
  
  // Add zone label
  const zoneLabel = document.createElement('div');
  zoneLabel.className = 'zone-label';
  zoneLabel.innerText = zone.label || `Zone ${index + 1}`;
  dropZone.appendChild(zoneLabel);
  
  // Content area where items will be dropped
  const zoneContent = document.createElement('div');
  zoneContent.className = 'zone-content';
  zoneContent.id = `zone-content-${zone.id}`;
  dropZone.appendChild(zoneContent);
  
  // Add to container
  container.appendChild(dropZone);
  
  return dropZone;
}

/* Initialize all drag and drop event listeners */
function initDragAndDrop() {
  console.log('Initializing drag and drop functionality...');
  
  // Get all draggable items
  const draggableItems = document.querySelectorAll('.draggable-item');
  console.log(`Found ${draggableItems.length} draggable items`);
  
  // Add event listeners to all draggable items
  draggableItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    
    // Keyboard accessibility
    item.addEventListener('keydown', handleKeyboardDrag);
  });
  
  // Get all drop zones
  const dropZones = document.querySelectorAll('.drop-zone');
  console.log(`Found ${dropZones.length} drop zones`);
  
  // Add event listeners to all drop zones
  dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
    zone.addEventListener('dragleave', handleDragLeave);
    zone.addEventListener('dragenter', handleDragEnter);
  });
  
  console.log('Drag and drop functionality initialized');
}

/***********************************
 * Improved Drag Event Handlers
 ***********************************/
let draggedElement = null;
let currentDropZone = null;

function handleDragStart(e) {
  console.log('Drag started');
  
  // Set the dragged element
  draggedElement = e.target;
  
  // Add visual feedback class
  e.target.classList.add('dragging');
  e.target.setAttribute('aria-grabbed', 'true');
  
  // Set data for cross-browser compatibility
  // The text/plain format works in all browsers
  e.dataTransfer.setData('text/plain', e.target.dataset.itemId);
  
  // Set allowed effect
  e.dataTransfer.effectAllowed = 'move';
  
  // For Firefox, which requires data to be set
  if (!e.dataTransfer.getData('text/plain')) {
    e.dataTransfer.setData('text/plain', e.target.dataset.itemId);
  }
}

function handleDragEnd(e) {
  console.log('Drag ended');
  
  // Remove dragging class
  e.target.classList.remove('dragging');
  e.target.setAttribute('aria-grabbed', 'false');
  
  // Reset all drop zone hover states
  document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.classList.remove('drag-over');
  });
  
  // Reset state
  draggedElement = null;
  currentDropZone = null;
}

function handleDragEnter(e) {
  e.preventDefault();
  // Add hover class for visual feedback
  if (e.currentTarget.classList.contains('drop-zone')) {
    e.currentTarget.classList.add('drag-over');
  }
}

function handleDragOver(e) {
  // Prevent default to allow drop
  e.preventDefault();
  
  // Set the effect based on whether we can drop here
  e.dataTransfer.dropEffect = 'move';
  
  // Add visual feedback
  if (e.currentTarget.classList.contains('drop-zone')) {
    // Make sure we're not already 'over' this zone (prevents flicker)
    if (currentDropZone !== e.currentTarget) {
      // Remove class from previous zone
      if (currentDropZone) {
        currentDropZone.classList.remove('drag-over');
      }
      
      // Add class to current zone
      e.currentTarget.classList.add('drag-over');
      currentDropZone = e.currentTarget;
    }
  }
  
  return false;
}

function handleDragLeave(e) {
  // Remove drag-over class, but only if leaving the drop zone
  // and not entering a child element
  if (!e.currentTarget.contains(e.relatedTarget)) {
    e.currentTarget.classList.remove('drag-over');
    if (currentDropZone === e.currentTarget) {
      currentDropZone = null;
    }
  }
}

function handleDrop(e) {
  console.log('Drop event triggered');
  
  // Prevent the browser default behavior
  e.preventDefault();
  e.stopPropagation();
  
  // Remove hover styling
  e.currentTarget.classList.remove('drag-over');
  
  // Make sure we have a valid drop zone
  if (!e.currentTarget.classList.contains('drop-zone')) {
    console.warn('Drop target is not a valid drop zone');
    return false;
  }
  
  // Get the item ID from the dataTransfer
  let itemId;
  try {
    itemId = e.dataTransfer.getData('text/plain');
    console.log(`Item ID from dataTransfer: ${itemId}`);
  } catch (error) {
    console.error('Error getting data from dataTransfer', error);
    
    // Try to use the draggedElement as fallback
    if (draggedElement) {
      itemId = draggedElement.dataset.itemId;
      console.log(`Using fallback item ID from draggedElement: ${itemId}`);
    } else {
      console.error('No item ID available - cannot complete drop');
      return false;
    }
  }
  
  // If we still don't have an itemId, exit
  if (!itemId) {
    console.warn('No item ID found - cannot complete drop');
    return false;
  }
  
  // Find the original item (might be hidden)
  const originalItem = document.querySelector(`.draggable-item[data-item-id="${itemId}"]`);
  if (!originalItem) {
    console.warn(`Original item with ID ${itemId} not found`);
    return false;
  }
  
  // Get the drop zone and its content area
  const dropZone = e.currentTarget;
  const zoneContent = dropZone.querySelector('.zone-content');
  const zoneId = dropZone.dataset.zoneId;
  
  console.log(`Dropping item ${itemId} into zone ${zoneId}`);
  
  // Create a new element for the dropped item
  const droppedItem = document.createElement('div');
  droppedItem.className = 'dropped-item';
  droppedItem.dataset.itemId = itemId;
  droppedItem.dataset.originalIndex = originalItem.dataset.originalIndex;
  droppedItem.innerText = originalItem.dataset.itemLabel || originalItem.innerText;
  
  // Add remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-item';
  removeBtn.innerText = '×';
  removeBtn.setAttribute('aria-label', 'Remove item');
  removeBtn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    console.log(`Removing item ${itemId} from zone ${zoneId}`);
    
    // Find and show the original item
    const originalItem = document.querySelector(`.draggable-item[data-item-id="${itemId}"]`);
    if (originalItem) {
      originalItem.style.display = '';
    }
    
    // Remove the dropped item
    droppedItem.remove();
    
    // Update state
    saveDragDropState();
  });
  
  // Add the remove button to the dropped item
  droppedItem.appendChild(removeBtn);
  
  // Add the item to the drop zone
  zoneContent.appendChild(droppedItem);
  
  // Hide the original item
  originalItem.style.display = 'none';
  
  // Save the new state
  saveDragDropState();
  
  console.log('Drop completed successfully');
  
  return false;
}

/***********************************
 * Keyboard Accessibility for Drag/Drop
 ***********************************/
function handleKeyboardDrag(e) {
  // Respond to Enter or Space key
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    console.log('Keyboard drag initiated');
    
    const item = e.target;
    const itemId = item.dataset.itemId;
    
    // Get all drop zones
    const dropZones = document.querySelectorAll('.drop-zone');
    if (!dropZones.length) return;
    
    // Create modal for keyboard users
    const modal = document.createElement('div');
    modal.className = 'keyboard-dnd-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'keyboard-dnd-title');
    
    // Style the modal
    Object.assign(modal.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: '1000',
      maxWidth: '90%',
      width: '400px'
    });
    
    // Modal title
    const title = document.createElement('h3');
    title.id = 'keyboard-dnd-title';
    title.innerText = `Move "${item.innerText}" to:`;
    title.style.marginBottom = '15px';
    modal.appendChild(title);
    
    // Create list of drop zones
    const list = document.createElement('ul');
    list.style.listStyle = 'none';
    list.style.padding = '0';
    list.style.margin = '0 0 15px 0';
    
    // Add each drop zone as an option
    dropZones.forEach((zone, index) => {
      const listItem = document.createElement('li');
      listItem.style.marginBottom = '8px';
      
      const button = document.createElement('button');
      button.innerText = zone.querySelector('.zone-label').innerText;
      button.style.display = 'block';
      button.style.width = '100%';
      button.style.padding = '10px';
      button.style.textAlign = 'left';
      button.style.cursor = 'pointer';
      button.style.backgroundColor = '#f0f0f0';
      button.style.border = '1px solid #ddd';
      button.style.borderRadius = '4px';
      
      // When clicked, simulate drag and drop
      button.addEventListener('click', () => {
        console.log(`Keyboard drop: moving ${itemId} to ${zone.dataset.zoneId}`);
        
        // Remove the modal
        document.body.removeChild(modal);
        
        // Get zone info
        const zoneId = zone.dataset.zoneId;
        const zoneContent = zone.querySelector('.zone-content');
        
        // Create the dropped item
        const droppedItem = document.createElement('div');
        droppedItem.className = 'dropped-item';
        droppedItem.dataset.itemId = itemId;
        droppedItem.dataset.originalIndex = item.dataset.originalIndex;
        droppedItem.innerText = item.innerText;
        
        // Add remove button
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-item';
        removeBtn.innerText = '×';
        removeBtn.setAttribute('aria-label', 'Remove item');
        removeBtn.addEventListener('click', (evt) => {
          evt.stopPropagation();
          console.log(`Removing item ${itemId} from zone ${zoneId}`);
          
          // Show the original item
          item.style.display = '';
          
          // Remove from drop zone
          droppedItem.remove();
          
          // Update state
          saveDragDropState();
        });
        
        // Add the button to the item
        droppedItem.appendChild(removeBtn);
        
        // Add to drop zone
        zoneContent.appendChild(droppedItem);
        
        // Hide original
        item.style.display = 'none';
        
        // Update state
        saveDragDropState();
      });
      
      listItem.appendChild(button);
      list.appendChild(listItem);
    });
    
    // Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.style.display = 'block';
    cancelButton.style.width = '100%';
    cancelButton.style.padding = '10px';
    cancelButton.style.backgroundColor = '#f8f9fa';
    cancelButton.style.border = '1px solid #ddd';
    cancelButton.style.borderRadius = '4px';
    cancelButton.style.cursor = 'pointer';
    
    cancelButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    modal.appendChild(list);
    modal.appendChild(cancelButton);
    document.body.appendChild(modal);
    
    // Focus first button for keyboard users
    const firstButton = list.querySelector('button');
    if (firstButton) {
      firstButton.focus();
    }
    
    // Handle escape key
    modal.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        document.body.removeChild(modal);
      }
    });
  }
}

/***********************************
 * Save/Restore Drag-Drop State
 ***********************************/
function saveDragDropState() {
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.type !== 'dragdrop') return;
  
  console.log('Saving drag-drop state...');
  
  // Get the drag-drop wrapper
  const wrapper = document.getElementById('drag-drop-wrapper');
  if (!wrapper) {
    console.warn('No drag-drop wrapper found');
    return;
  }
  
  // Initialize state object
  const dragDropState = {};
  
  // Get all drop zones
  const dropZones = wrapper.querySelectorAll('.drop-zone');
  
  // For each drop zone, store the items it contains
  dropZones.forEach(zone => {
    const zoneId = zone.dataset.zoneId;
    const droppedItems = zone.querySelectorAll('.dropped-item');
    
    // Create array of items in this zone, preserving their order
    dragDropState[zoneId] = Array.from(droppedItems).map(item => ({
      id: item.dataset.itemId,
      text: item.innerText.replace('×', '').trim(),
      originalIndex: parseInt(item.dataset.originalIndex || '0')
    }));
  });
  
  // Save to user answers
  userAnswers[currentQuestion.id] = dragDropState;
  
  console.log('Drag-drop state saved:', dragDropState);
}

function restoreDragDropState(questionId) {
  const savedState = userAnswers[questionId];
  if (!savedState) {
    console.log('No saved state to restore for this question');
    return;
  }
  
  console.log('Restoring drag-drop state:', savedState);
  
  // Process each zone in the saved state
  Object.entries(savedState).forEach(([zoneId, items]) => {
    // Find the drop zone
    const dropZone = document.querySelector(`.drop-zone[data-zone-id="${zoneId}"]`);
    if (!dropZone) {
      console.warn(`Drop zone with ID ${zoneId} not found`);
      return;
    }
    
    const zoneContent = dropZone.querySelector('.zone-content');
    
    // Process each item that should be in this zone
    items.forEach(item => {
      // Find the original draggable item
      const originalItem = document.querySelector(`.draggable-item[data-item-id="${item.id}"]`);
      if (!originalItem) {
        console.warn(`Original item with ID ${item.id} not found`);
        return;
      }
      
      console.log(`Restoring item ${item.id} to zone ${zoneId}`);
      
      // Create a dropped item clone
      const droppedItem = document.createElement('div');
      droppedItem.className = 'dropped-item';
      droppedItem.dataset.itemId = item.id;
      droppedItem.dataset.originalIndex = originalItem.dataset.originalIndex;
      droppedItem.innerText = item.text;
      
      // Add remove button
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-item';
      removeBtn.innerText = '×';
      removeBtn.setAttribute('aria-label', 'Remove item');
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log(`Removing item ${item.id} from zone ${zoneId}`);
        
        // Show the original item
        originalItem.style.display = '';
        
        // Remove from drop zone
        droppedItem.remove();
        
        // Update state
        saveDragDropState();
      });
      
      // Add button to item
      droppedItem.appendChild(removeBtn);
      
      // Add to zone
      zoneContent.appendChild(droppedItem);
      
      // Hide original
      originalItem.style.display = 'none';
    });
  });
  
  console.log('State restoration complete');
}

/********************************************
 * Code Question Type
 ********************************************/
function renderCodeQuestion(question) {
  const container = document.getElementById('question-container');
  
  // Create code editor container
  const codeEditor = document.createElement('div');
  codeEditor.className = 'code-editor';
  
  // Editor header with language info
  const editorHeader = document.createElement('div');
  editorHeader.className = 'code-editor-header';
  editorHeader.innerHTML = `<span>${question.language || 'Code'}</span>`;
  
  // Editor textarea
  const textarea = document.createElement('textarea');
  textarea.className = 'code-textarea';
  textarea.id = `code-editor-${question.id}`;
  textarea.placeholder = 'Write your code here...';
  textarea.setAttribute('aria-label', 'Code editor');
  textarea.spellcheck = false;
  
  // If there's starter code, add it
  if (question.starterCode) {
    textarea.value = question.starterCode;
  }
  
  // If there's a previous answer, restore it
  if (userAnswers[question.id] && userAnswers[question.id].code) {
    textarea.value = userAnswers[question.id].code;
  }
  
  // Add event listener to save code as typed
  textarea.addEventListener('input', () => {
    saveCodeAnswer(question.id, textarea.value);
  });
  
  // Assemble code editor
  codeEditor.appendChild(editorHeader);
  codeEditor.appendChild(textarea);
  container.appendChild(codeEditor);
}

/********************************************************
 * Answer Checking and Validation
 ********************************************************/
function checkAnswers(question) {
  console.log(`Checking answers for question ${question.id} (${question.type})`);
  
  let isCorrect = false;
  let feedback = '';
  
  switch (question.type) {
    case 'multiplechoice':
      const mcResult = checkMultipleChoiceAnswer(question);
      isCorrect = mcResult.isCorrect;
      feedback = mcResult.feedback;
      break;
      
    case 'dragdrop':
      const ddResult = checkDragDropAnswer(question);
      isCorrect = ddResult.isCorrect;
      feedback = ddResult.feedback;
      break;
      
    case 'code':
      const codeResult = checkCodeAnswer(question);
      isCorrect = codeResult.isCorrect;
      feedback = codeResult.feedback;
      break;
      
    default:
      feedback = 'Unable to check this question type.';
  }
  
  showFeedback(isCorrect, feedback);
  
  // Save result in the appropriate format based on question type
  if (question.type === 'multiplechoice') {
    // For multiple choice, we keep the array of selected answers as is
    const selected = userAnswers[question.id] || [];
    userAnswers[question.id] = {
      selected: selected,
      isCorrect: isCorrect,
      checkedAt: Date.now()
    };
  } else {
    // For other question types, add properties to existing object
    if (!userAnswers[question.id]) {
      userAnswers[question.id] = {};
    }
    
    userAnswers[question.id].isCorrect = isCorrect;
    userAnswers[question.id].checkedAt = Date.now();
  }
  
  console.log(`Answer check complete: ${isCorrect ? 'Correct' : 'Incorrect'}`);
}

function checkMultipleChoiceAnswer(question) {
  const inputs = document.querySelectorAll(`input[name="question_${question.id}"]:checked`);
  const selectedValues = Array.from(inputs).map(input => input.value);
  
  console.log(`Selected values: ${selectedValues.join(', ')}`);
  console.log(`Correct answers: ${question.correctAnswers.join(', ')}`);
  
  // Save user selection
  userAnswers[question.id] = selectedValues;
  
  // Check if the selected values match the correct answers
  const correctSet = new Set(question.correctAnswers);
  const selectedSet = new Set(selectedValues);
  
  // Sets are equal if they have the same size and all elements in A are in B
  const isCorrect = correctSet.size === selectedSet.size && 
                    [...correctSet].every(value => selectedSet.has(value));
  
  let feedback = '';
  if (isCorrect) {
    feedback = 'Correct! Well done.';
  } else {
    // Format feedback based on multiple choice or single choice
    if (correctSet.size > 1) {
      feedback = `Incorrect. The correct answers are: ${Array.from(correctSet).join(', ')}`;
    } else {
      feedback = `Incorrect. The correct answer is: ${Array.from(correctSet).join('')}`;
    }
  }
  
  return { isCorrect, feedback };
}

function checkDragDropAnswer(question) {
  console.log('Checking drag-drop answer...');
  
  // Get the current state
  const currentState = {};
  
  // Get all drop zones
  const dropZones = document.querySelectorAll('.drop-zone');
  dropZones.forEach(zone => {
    const zoneId = zone.dataset.zoneId;
    const droppedItems = zone.querySelectorAll('.dropped-item');
    currentState[zoneId] = Array.from(droppedItems).map(item => item.dataset.itemId);
  });
  
  console.log('Current drag-drop state for checking:', currentState);
  
  // Check against correct items
  let isCorrect = true;
  let feedback = '';
  let incorrectPlacements = [];
  
  // Check each zone
  question.dropZones.forEach(zone => {
    const zoneId = zone.id;
    
    // Get the correct items for this zone
    const correctItems = new Set(zone.correctItems || []);
    
    // Get the items the user placed in this zone
    const userItems = new Set(currentState[zoneId] || []);
    
    console.log(`Zone ${zoneId} - Correct items: ${[...correctItems].join(', ')}`);
    console.log(`Zone ${zoneId} - User items: ${[...userItems].join(', ')}`);
    
    // Get zone name for feedback
    const zoneName = zone.label || zoneId;
    
    // Check if all required items are in the zone
    const missingItems = [...correctItems].filter(item => !userItems.has(item));
    
    // Check if there are any incorrect items in the zone
    const extraItems = [...userItems].filter(item => !correctItems.has(item));
    
    if (missingItems.length > 0 || extraItems.length > 0) {
      isCorrect = false;
      
      // Get item labels for better feedback
      const getItemLabel = (itemId) => {
        const item = question.draggableItems.find(i => i.id === itemId);
        return item ? item.label : itemId;
      };
      
      // Generate feedback
      const missingLabels = missingItems.map(getItemLabel);
      const extraLabels = extraItems.map(getItemLabel);
      
      if (missingLabels.length > 0) {
        incorrectPlacements.push(`${zoneName} is missing: ${missingLabels.join(', ')}`);
      }
      
      if (extraLabels.length > 0) {
        incorrectPlacements.push(`${zoneName} has incorrect items: ${extraLabels.join(', ')}`);
      }
    }
  });
  
  // Generate overall feedback
  if (isCorrect) {
    feedback = 'Correct! All items are in their proper places.';
  } else {
    feedback = 'Incorrect placement. ' + incorrectPlacements.join('. ');
  }
  
  console.log(`Drag-drop check result: ${isCorrect ? 'Correct' : 'Incorrect'}`);
  
  return { isCorrect, feedback };
}

function checkCodeAnswer(question) {
  // Get the user's code
  const textarea = document.getElementById(`code-editor-${question.id}`);
  const userCode = textarea.value;
  
  console.log('Checking code answer...');
  console.log('User code:', userCode);
  console.log('Solution:', question.solution);
  
  // Save the code
  saveCodeAnswer(question.id, userCode);
  
  // Simple check for demo purposes
  // In a real implementation, you'd run tests on the code
  
  const strippedUserCode = userCode.replace(/\s+/g, '').toLowerCase();
  const strippedSolution = (question.solution || '').replace(/\s+/g, '').toLowerCase();
  
  let isCorrect = false;
  let feedback = '';
  
  if (strippedUserCode === strippedSolution) {
    isCorrect = true;
    feedback = 'Your solution is correct!';
  } else if (question.language === 'PowerShell' && 
            strippedUserCode.includes('get-service') && 
            strippedUserCode.includes('running')) {
    // Partial credit for PowerShell question
    isCorrect = true;
    feedback = 'Your solution works! There are multiple ways to filter for running services in PowerShell.';
  } else if (strippedUserCode.includes('reduce')) {
    // Partial credit for using reduce
    isCorrect = false;
    feedback = 'Your solution uses the right approach with reduce(), but has some issues. Try again.';
  } else if (strippedUserCode.includes('for') || strippedUserCode.includes('while')) {
    // Using loops
    isCorrect = false;
    feedback = 'Your solution uses loops which works, but consider using array methods for a more elegant solution.';
  } else {
    isCorrect = false;
    feedback = 'Your solution is not correct. Try again.';
  }
  
  console.log(`Code check result: ${isCorrect ? 'Correct' : 'Incorrect'}`);
  
  return { isCorrect, feedback };
}

function saveCodeAnswer(questionId, code) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = {};
  }
  userAnswers[questionId].code = code;
  
  console.log(`Code answer saved for question ${questionId}`);
}

/*******************************************************
 * Navigation and Progress
 *******************************************************/
function renderNavigationControls() {
  const container = document.getElementById('question-container');
  
  const navDiv = document.createElement('div');
  navDiv.className = 'navigation-controls';
  
  // Previous button
  if (currentQuestionIndex > 0) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-button prev-button';
    prevBtn.innerText = 'Previous';
    prevBtn.addEventListener('click', goToPreviousQuestion);
    navDiv.appendChild(prevBtn);
  }
  
  // Check Answer button
  const checkBtn = document.createElement('button');
  checkBtn.className = 'nav-button check-button';
  checkBtn.innerText = 'Check Answer';
  checkBtn.addEventListener('click', () => {
    checkAnswers(questions[currentQuestionIndex]);
  });
  navDiv.appendChild(checkBtn);
  
  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'nav-button next-button';
  nextBtn.innerText = currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish';
  nextBtn.addEventListener('click', goToNextQuestion);
  navDiv.appendChild(nextBtn);
  
  container.appendChild(navDiv);
}

function goToNextQuestion() {
  console.log('Moving to next question...');
  
  // Save answer if not already saved
  const currentQuestion = questions[currentQuestionIndex];
  saveUserAnswer(currentQuestion.id);
  
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion(questions[currentQuestionIndex]);
  } else {
    showCompletionScreen();
  }
}

function goToPreviousQuestion() {
  console.log('Moving to previous question...');
  
  if (currentQuestionIndex > 0) {
    // Save current answer before navigating
    const currentQuestion = questions[currentQuestionIndex];
    saveUserAnswer(currentQuestion.id);
    
    currentQuestionIndex--;
    renderQuestion(questions[currentQuestionIndex]);
  }
}

function updateProgress() {
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    
    console.log(`Progress updated: ${progress.toFixed(0)}%`);
  }
}

/*******************************************************
 * Utility Functions
 *******************************************************/
function saveUserAnswer(questionId) {
  const question = questions.find(q => q.id === questionId);
  if (!question) {
    console.warn(`Question with ID ${questionId} not found`);
    return;
  }
  
  console.log(`Saving user answer for question ${questionId} (${question.type})`);
  
  if (question.type === 'multiplechoice') {
    const inputs = document.querySelectorAll(`input[name="question_${questionId}"]:checked`);
    const selectedValues = Array.from(inputs).map(input => input.value);
    
    console.log(`Selected values: ${selectedValues.join(', ')}`);
    
    // Only update selected answers, not the entire object if it exists
    if (typeof userAnswers[questionId] === 'object' && !Array.isArray(userAnswers[questionId])) {
      userAnswers[questionId].selected = selectedValues;
    } else {
      userAnswers[questionId] = selectedValues;
    }
  } else if (question.type === 'dragdrop') {
    saveDragDropState();
  } else if (question.type === 'code') {
    const textarea = document.getElementById(`code-editor-${questionId}`);
    if (textarea) {
      saveCodeAnswer(questionId, textarea.value);
    }
  }
}

function showFeedback(isCorrect, message) {
  console.log(`Showing feedback: ${isCorrect ? 'Correct' : 'Incorrect'} - ${message}`);
  
  // Remove any existing feedback
  const existingFeedback = document.querySelector('.feedback');
  if (existingFeedback) {
    existingFeedback.remove();
  }
  
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  feedbackDiv.innerText = message;
  feedbackDiv.setAttribute('role', 'alert');
  
  const container = document.getElementById('question-container');
  container.appendChild(feedbackDiv);
  
  // Scroll to the feedback
  feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showError(message) {
  console.error(`Error: ${message}`);
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.setAttribute('role', 'alert');
  errorDiv.innerText = message;
  
  const container = document.getElementById('question-container');
  container.innerHTML = '';
  container.appendChild(errorDiv);
}

function startTimer() {
  clearInterval(timerInterval);
  
  const updateTimer = () => {
    const timerElement = document.getElementById('question-timer');
    if (!timerElement) return;
    
    const now = Date.now();
    const elapsedMs = now - startTime;
    const minutes = Math.floor(elapsedMs / 60000);
    const seconds = Math.floor((elapsedMs % 60000) / 1000);
    
    timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Update immediately and then every second
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
  
  console.log('Timer started');
}

function showCompletionScreen() {
  console.log('Showing completion screen');
  
  // Hide question container and show summary
  document.getElementById('question-container').style.display = 'none';
  const summaryContainer = document.getElementById('summary-container');
  summaryContainer.style.display = 'block';
  summaryContainer.innerHTML = '';
  
  const completionDiv = document.createElement('div');
  completionDiv.className = 'completion-screen';
  
  const heading = document.createElement('h2');
  heading.innerText = 'Exam Complete!';
  completionDiv.appendChild(heading);
  
  // Calculate results
  const totalQuestions = questions.length;
  let answeredQuestions = 0;
  let correctAnswers = 0;
  
  // Count answers and correct answers
  questions.forEach(question => {
    const answer = userAnswers[question.id];
    
    // Skip if no answer at all
    if (!answer) return;
    
    answeredQuestions++;
    
    // Check if correct based on question type
    let isCorrect = false;
    
    if (typeof answer === 'object' && 'isCorrect' in answer) {
      isCorrect = answer.isCorrect;
    } else if (typeof answer === 'object' && 'selected' in answer) {
      isCorrect = answer.isCorrect;
    } else if (Array.isArray(answer) && question.correctAnswers) {
      // Multiple choice answers stored as array
      const correctSet = new Set(question.correctAnswers);
      const selectedSet = new Set(answer);
      
      isCorrect = correctSet.size === selectedSet.size && 
                [...correctSet].every(value => selectedSet.has(value));
    }
    
    if (isCorrect) {
      correctAnswers++;
    }
  });
  
  // Calculate score
  const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  
  console.log(`Final score: ${score}% (${correctAnswers}/${totalQuestions})`);
  
  const resultsDiv = document.createElement('div');
  resultsDiv.className = 'results-summary';
  resultsDiv.innerHTML = `
    <p>Total Questions: ${totalQuestions}</p>
    <p>Questions Answered: ${answeredQuestions}</p>
    <p>Correct Answers: ${correctAnswers}</p>
    <p>Your Score: ${score}%</p>
    <p>Time Taken: ${document.getElementById('question-timer').innerText}</p>
  `;
  
  completionDiv.appendChild(resultsDiv);
  
  // Show questions answered incorrectly
  const incorrectQuestions = [];
  
  questions.forEach(question => {
    const answer = userAnswers[question.id];
    
    // Skip if not answered
    if (!answer) return;
    
    let isCorrect = false;
    
    // Check if answer is correct based on question type
    if (typeof answer === 'object' && 'isCorrect' in answer) {
      isCorrect = answer.isCorrect;
    } else if (Array.isArray(answer) && question.correctAnswers) {
      const correctSet = new Set(question.correctAnswers);
      const selectedSet = new Set(answer);
      
      isCorrect = correctSet.size === selectedSet.size && 
                 [...correctSet].every(value => selectedSet.has(value));
    }
    
    if (!isCorrect) {
      incorrectQuestions.push({
        id: question.id,
        text: question.text,
        type: question.type
      });
    }
  });
  
  if (incorrectQuestions.length > 0) {
    console.log(`${incorrectQuestions.length} questions to review`);
    
    const mistakesDiv = document.createElement('div');
    mistakesDiv.className = 'mistakes-container';
    mistakesDiv.innerHTML = '<h4>Questions to Review:</h4>';
    
    const mistakesList = document.createElement('ul');
    
    incorrectQuestions.forEach(q => {
      const item = document.createElement('li');
      item.innerText = q.text;
      mistakesList.appendChild(item);
    });
    
    mistakesDiv.appendChild(mistakesList);
    completionDiv.appendChild(mistakesDiv);
  }
  
  // Restart button
  const restartBtn = document.createElement('button');
  restartBtn.className = 'restart-button';
  restartBtn.innerText = 'Restart Exam';
  restartBtn.addEventListener('click', () => {
    // Reset the state
    currentQuestionIndex = 0;
    userAnswers = {};
    startTime = Date.now();
    
    console.log('Restarting exam...');
    
    // Hide summary and show questions
    document.getElementById('summary-container').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    
    // Restart the exam
    renderQuestion(questions[currentQuestionIndex]);
    updateProgress();
    startTimer();
  });
  
  completionDiv.appendChild(restartBtn);
  summaryContainer.appendChild(completionDiv);
  
  // Stop the timer
  clearInterval(timerInterval);
}

function renderHints(question) {
  if (!question.hints) return;
  
  const container = document.getElementById('question-container');
  const hintsDiv = document.createElement('div');
  hintsDiv.className = 'hints-container';
  
  const hintsBtn = document.createElement('button');
  hintsBtn.className = 'hints-toggle';
  hintsBtn.innerText = 'Show Hints';
  hintsBtn.addEventListener('click', () => {
    const hintsContent = hintsDiv.querySelector('.hints-content');
    if (hintsContent.style.display === 'none') {
      hintsContent.style.display = 'block';
      hintsBtn.innerText = 'Hide Hints';
    } else {
      hintsContent.style.display = 'none';
      hintsBtn.innerText = 'Show Hints';
    }
  });
  
  const hintsContent = document.createElement('div');
  hintsContent.className = 'hints-content';
  hintsContent.style.display = 'none';
  
  // Add easy hints
  if (question.hints.easy && question.hints.easy.length) {
    const easyHint = document.createElement('p');
    easyHint.className = 'hint-level easy';
    easyHint.innerText = `💡 ${question.hints.easy[0]}`;
    hintsContent.appendChild(easyHint);
  }
  
  hintsDiv.appendChild(hintsBtn);
  hintsDiv.appendChild(hintsContent);
  container.appendChild(hintsDiv);
}

/*******************************************************
 * Event Listeners and Initialization
 *******************************************************/
function setupEventListeners() {
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    // Only process if no modals are open and not in a text input
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
      return;
    }
    
    if (e.key === 'ArrowRight' && currentQuestionIndex < questions.length - 1) {
      goToNextQuestion();
    } else if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
      goToPreviousQuestion();
    }
  });
  
  console.log('Event listeners set up');
}

/*****************************************
 * Initial Load
 *****************************************/
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded - initializing application');
  initializeApp();
});
