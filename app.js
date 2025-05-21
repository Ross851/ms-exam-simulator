/******************************************************************************
 * app.js - Enhanced Version with Additional Features
 * 
 * Improved drag-and-drop functionality with fixes for:
 * - Drag and drop reliability
 * - Correct ordering of items
 * - State management for drag and drop
 * - Cross-browser compatibility
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
async function initializeApp() {
  try {
    await loadQuestions();
    setupEventListeners();
    startTime = Date.now();
    startTimer();
  } catch (error) {
    showError('Failed to initialize the application. Please refresh and try again.');
    console.error('Initialization error:', error);
  }
}

/*************************************************
 * Load Questions from JSON
 *************************************************/
async function loadQuestions() {
  try {
    // For testing purposes, if no questions.json exists, we'll create some sample questions
    let response;
    try {
      response = await fetch('questions.json');
    } catch (error) {
      // If fetch fails, use sample questions
      questions = getSampleQuestions();
      renderQuestion(questions[currentQuestionIndex]);
      updateProgress();
      return;
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    questions = await response.json();
    
    // Validate questions structure
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error('Invalid questions format');
    }
    
    // Start with the first question
    renderQuestion(questions[currentQuestionIndex]);
    updateProgress();
  } catch (error) {
    console.error('Failed to load questions:', error);
    // Fallback to sample questions
    questions = getSampleQuestions();
    renderQuestion(questions[currentQuestionIndex]);
    updateProgress();
  }
}

/*************************************************
 * Sample Questions for Testing
 *************************************************/
function getSampleQuestions() {
  return [
    {
      id: "q1",
      type: "multiplechoice",
      text: "Which of the following is a valid Microsoft Azure service?",
      options: [
        { letter: "A", text: "Azure Virtual Desktop", isCorrect: true },
        { letter: "B", text: "Azure Cloud Office", isCorrect: false },
        { letter: "C", text: "Microsoft Web Server", isCorrect: false },
        { letter: "D", text: "Azure Document DB", isCorrect: false }
      ],
      correctAnswers: ["A"],
      hints: {
        easy: ["Think about desktop virtualization services offered by Microsoft."]
      }
    },
    {
      id: "q2",
      type: "multiplechoice",
      text: "Which of the following are valid Microsoft 365 applications? (Select all that apply)",
      options: [
        { letter: "A", text: "Word", isCorrect: true },
        { letter: "B", text: "Photoshop", isCorrect: false },
        { letter: "C", text: "Excel", isCorrect: true },
        { letter: "D", text: "PowerPoint", isCorrect: true },
        { letter: "E", text: "Illustrator", isCorrect: false }
      ],
      correctAnswers: ["A", "C", "D"],
      hints: {
        easy: ["Consider which applications are developed by Microsoft rather than other companies."]
      }
    },
    {
      id: "q3",
      type: "dragdrop",
      text: "Match each Microsoft product with its correct category.",
      draggableItems: [
        { id: "item1", label: "Exchange" },
        { id: "item2", label: "OneDrive" },
        { id: "item3", label: "Azure DevOps" },
        { id: "item4", label: "Teams" },
        { id: "item5", label: "SharePoint" },
        { id: "item6", label: "Power BI" }
      ],
      dropZones: [
        { id: "zone1", label: "Communication", correctItems: ["item1", "item4"] },
        { id: "zone2", label: "Storage & Collaboration", correctItems: ["item2", "item5"] },
        { id: "zone3", label: "Development & Analytics", correctItems: ["item3", "item6"] }
      ],
      hints: {
        easy: ["Think about the primary function of each service in an organization."]
      }
    },
    {
      id: "q4",
      type: "code",
      text: "Write a PowerShell command that lists all running services on a Windows system.",
      language: "PowerShell",
      starterCode: "# Write your PowerShell command below\n\n",
      solution: "Get-Service | Where-Object {$_.Status -eq \"Running\"}",
      hints: {
        easy: ["Use the Get-Service cmdlet and filter the results."]
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
 * Enhanced Drag-and-Drop Implementation - FIXED VERSION
 ************************************************************/
function renderDragDropQuestion(question) {
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
  // Get all draggable items
  const draggableItems = document.querySelectorAll('.draggable-item');
  
  // Add event listeners to all draggable items
  draggableItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    
    // Keyboard accessibility
    item.addEventListener('keydown', handleKeyboardDrag);
  });
  
  // Get all drop zones
  const dropZones = document.querySelectorAll('.drop-zone');
  
  // Add event listeners to all drop zones
  dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
    zone.addEventListener('dragleave', handleDragLeave);
    zone.addEventListener('dragenter', handleDragEnter);
  });
}

/***********************************
 * Improved Drag Event Handlers
 ***********************************/
let draggedElement = null;
let currentDropZone = null;

function handleDragStart(e) {
  // Set the dragged element
  draggedElement = e.target;
  
  // Add visual feedback class
  e.target.classList.add('dragging');
  e.target.setAttribute('aria-grabbed', 'true');
  
  // Set data for cross-browser compatibility
  // The text/plain format works in all browsers
  e.dataTransfer.setData('text/plain', e.target.dataset.itemId);
  
  // The text/html format works in most modern browsers and provides more data
  e.dataTransfer.setData('text/html', e.target.outerHTML);
  
  // Set allowed effect
  e.dataTransfer.effectAllowed = 'move';
  
  // For Firefox, which requires data to be set
  if (!e.dataTransfer.getData('text/plain')) {
    e.dataTransfer.setData('text/plain', e.target.dataset.itemId);
  }
  
  // Create a custom drag image for better user experience
  try {
    // Some browsers might not support this
    const clone = e.target.cloneNode(true);
    clone.style.opacity = '0.8';
    clone.style.position = 'absolute';
    clone.style.top = '-1000px';
    document.body.appendChild(clone);
    e.dataTransfer.setDragImage(clone, 0, 0);
    
    // Remove the clone after a short delay
    setTimeout(() => {
      document.body.removeChild(clone);
    }, 0);
  } catch (error) {
    console.warn('Custom drag image not supported in this browser');
  }
}

function handleDragEnd(e) {
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
  // Prevent the browser default behavior
  e.preventDefault();
  e.stopPropagation();
  
  // Remove hover styling
  e.currentTarget.classList.remove('drag-over');
  
  // Make sure we have a valid drop zone
  if (!e.currentTarget.classList.contains('drop-zone')) {
    return false;
  }
  
  // Get the item ID from the dataTransfer
  let itemId;
  try {
    itemId = e.dataTransfer.getData('text/plain');
  } catch (error) {
    console.error('Error getting data from dataTransfer', error);
    return false;
  }
  
  // If we don't have an itemId or draggedElement, exit
  if (!itemId && !draggedElement) {
    console.warn('No item ID found in dataTransfer and no draggedElement');
    return false;
  }
  
  // Use the draggedElement as backup if dataTransfer fails
  if (!itemId && draggedElement) {
    itemId = draggedElement.dataset.itemId;
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
  
  return false;
}

/***********************************
 * Keyboard Accessibility for Drag/Drop
 ***********************************/
function handleKeyboardDrag(e) {
  // Respond to Enter or Space key
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    
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
 * Improved Save/Restore Drag-Drop State
 ***********************************/
function saveDragDropState() {
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.type !== 'dragdrop') return;
  
  // Get the drag-drop wrapper
  const wrapper = document.getElementById('drag-drop-wrapper');
  if (!wrapper) return;
  
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
  
  // Debug
  console.log('Saved drag-drop state:', dragDropState);
}

function restoreDragDropState(questionId) {
  const savedState = userAnswers[questionId];
  if (!savedState) return;
  
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
}

function checkMultipleChoiceAnswer(question) {
  const inputs = document.querySelectorAll(`input[name="question_${question.id}"]:checked`);
  const selectedValues = Array.from(inputs).map(input => input.value);
  
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
  
  return { isCorrect, feedback };
}

function checkCodeAnswer(question) {
  // Get the user's code
  const textarea = document.getElementById(`code-editor-${question.id}`);
  const userCode = textarea.value;
  
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
  
  return { isCorrect, feedback };
}

function saveCodeAnswer(questionId, code) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = {};
  }
  userAnswers[questionId].code = code;
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
  }
}

/*******************************************************
 * Utility Functions
 *******************************************************/
function saveUserAnswer(questionId) {
  const question = questions.find(q => q.id === questionId);
  if (!question) return;
  
  if (question.type === 'multiplechoice') {
    const inputs = document.querySelectorAll(`input[name="question_${questionId}"]:checked`);
    const selectedValues = Array.from(inputs).map(input => input.value);
    
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
}

function showCompletionScreen() {
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
}

/*****************************************
 * Initial Load
 *****************************************/
window.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});