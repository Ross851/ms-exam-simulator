/******************************************************************************
 * app.js - Improved Version
 * 
 * NOTE: If your existing file contains other logic, you might need to combine 
 * them carefully. Otherwise, feel free to overwrite with this if it covers 
 * everything you need.
 ******************************************************************************/

/***********************************
 * [Line 1-20] Global Variables 
 ***********************************/
let questions = [];          // Holds the array of question objects
let currentQuestionIndex = 0; // Tracks which question the user is on
let userAnswers = {};         // For storing user responses by question ID

/*************************************************
 * [Line 22-42] Load Questions from JSON or API
 *************************************************/
async function loadQuestions() {
  // Example: loading a local JSON file. Adjust path as needed.
  try {
    const response = await fetch('questions.json'); 
    questions = await response.json();

    // Start with the first question
    renderQuestion(questions[currentQuestionIndex]);
  } catch (error) {
    console.error('[Line 36] Failed to load questions:', error);
  }
}

/************************************************
 * [Line 44-90] Core Rendering Logic
 ************************************************/
function renderQuestion(question) {
  // Clear existing question display
  const container = document.getElementById('question-container');
  container.innerHTML = '';

  // Create question header
  const questionHeader = document.createElement('h2');
  questionHeader.innerText = `Question ${currentQuestionIndex + 1}:`;
  container.appendChild(questionHeader);

  // Create question text
  const questionText = document.createElement('p');
  questionText.innerText = question.text;
  container.appendChild(questionText);

  // Switch based on question type
  switch (question.type) {
    case 'multiplechoice':
      renderMultipleChoiceQuestion(question);
      break;
    case 'dragdrop':
      renderDragDropQuestion(question);
      break;
    default:
      console.warn('[Line 66] Unknown question type:', question.type);
      break;
  }

  // Optionally render hints / advanced metadata, if desired:
  // renderAdvancedMetadata(question);

  // Render "Next" and "Check Answer" buttons
  renderNavigationControls();
}

/*******************************************************
 * [Line 92-145] Multiple Choice Rendering & Handling
 *******************************************************/
function renderMultipleChoiceQuestion(question) {
  const container = document.getElementById('question-container');

  // Detect how many correct answers exist
  const correctCount = question.options.filter(opt => opt.isCorrect).length;

  // If the question allows multiple correct answers, show a note
  if (question.isMultipleChoice && correctCount > 1) {
    const note = document.createElement('p');
    note.id = 'multi-select-note';
    note.style.color = '#da3b01'; // Subtle highlight
    note.innerHTML = 'Select all that apply.';
    container.appendChild(note);
  }

  // Create option list (radio or checkbox)
  question.options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';

    // Determine input type (radio vs. checkbox) based on multiple correct answers
    let inputType = 'radio';
    if (question.isMultipleChoice && correctCount > 1) {
      inputType = 'checkbox';
    }

    const input = document.createElement('input');
    input.type = inputType;
    input.name = 'question_' + question.id; // Group name for the question
    input.value = option.letter;
    
    // Restore user's previous selection, if any
    if (userAnswers[question.id] && userAnswers[question.id].includes(option.letter)) {
      input.checked = true;
    }

    const label = document.createElement('label');
    label.innerText = `${option.letter}: ${option.text}`;
    label.style.marginLeft = '8px';

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    container.appendChild(optionDiv);
  });
}

/************************************************************
 * [Line 147-190] Drag-and-Drop Rendering & Handling
 * (Only invoked if question.type === 'dragdrop')
 ************************************************************/
function renderDragDropQuestion(question) {
  const container = document.getElementById('question-container');

  // Example instructions for drag/drop
  const instruction = document.createElement('p');
  instruction.innerText = 'Drag the items to the correct drop zones.';
  container.appendChild(instruction);

  // Check if question has the required data
  if (!question.draggableItems || !question.dropZones) {
    console.warn('[Line 160] Drag/drop question missing required fields.');
    return;
  }

  // Create a container for draggable items
  const dragContainer = document.createElement('div');
  dragContainer.className = 'drag-container';
  question.draggableItems.forEach((item, index) => {
    const draggable = document.createElement('div');
    draggable.className = 'draggable-item';
    draggable.draggable = true;
    draggable.innerText = item.label;
    draggable.addEventListener('dragstart', handleDragStart);
    dragContainer.appendChild(draggable);
  });
  container.appendChild(dragContainer);

  // Create drop zones
  question.dropZones.forEach((zone, i) => {
    const dropZone = document.createElement('div');
    dropZone.className = 'drop-zone';
    dropZone.dataset.zoneId = i;
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
    container.appendChild(dropZone);
  });
}

/***********************************
 * [Line 192-220] Drag Event Handlers
 ***********************************/
function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.innerText);
}

function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hover');
}

function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('hover');

  const droppedText = e.dataTransfer.getData('text/plain');
  e.currentTarget.innerText = droppedText; // Basic example of dropping text
}

/********************************************************
 * [Line 222-250] Optional: Advanced Metadata Rendering
 ********************************************************/
function renderAdvancedMetadata(question) {
  const container = document.getElementById('question-container');

  // Hints
  if (question.hints) {
    const hintDiv = document.createElement('div');
    hintDiv.className = 'hints-container';
    const title = document.createElement('h4');
    title.innerText = 'Hints:';
    hintDiv.appendChild(title);

    // Example: Show "easy" hints, but you can expand this logic
    const easyHint = document.createElement('p');
    easyHint.innerText = `Easy Hint: ${question.hints.easy.join(', ')}`;
    hintDiv.appendChild(easyHint);

    container.appendChild(hintDiv);
  }

  // Common Mistakes
  if (question.commonMistakes && question.commonMistakes.length > 0) {
    const mistakesDiv = document.createElement('div');
    mistakesDiv.className = 'mistakes-container';
    const mistakesTitle = document.createElement('h4');
    mistakesTitle.innerText = 'Common Mistakes:';
    mistakesDiv.appendChild(mistakesTitle);

    question.commonMistakes.forEach((mistake) => {
      const mistakeItem = document.createElement('p');
      mistakeItem.innerText = `- ${mistake}`;
      mistakesDiv.appendChild(mistakeItem);
    });
    container.appendChild(mistakesDiv);
  }

  // Similarly, you can display question.analysisHighlights, etc.
}

/*******************************************************
 * [Line 252-290] Navigation and Answer Checking
 *******************************************************/
function renderNavigationControls() {
  const container = document.getElementById('question-container');

  // Check Answer button
  const checkBtn = document.createElement('button');
  checkBtn.innerText = 'Check Answer';
  checkBtn.addEventListener('click', () => {
    checkAnswers(questions[currentQuestionIndex]);
  });
  container.appendChild(checkBtn);

  // Next button
  const nextBtn = document.createElement('button');
  nextBtn.innerText = 'Next';
  nextBtn.addEventListener('click', goToNextQuestion);
  container.appendChild(nextBtn);
}

function checkAnswers(question) {
  // For multiple choice
  if (question.type === 'multiplechoice') {
    const inputs = document.getElementsByName('question_' + question.id);
    const selectedValues = [];
    inputs.forEach(inp => {
      if (inp.checked) selectedValues.push(inp.value);
    });

    // Save user’s selection
    userAnswers[question.id] = selectedValues;

    // Compare sets of selected answers vs. correct answers
    const correctSet = new Set(question.correctAnswers);
    const selectedSet = new Set(selectedValues);

    if (setsAreEqual(correctSet, selectedSet)) {
      alert('Correct!');
    } else {
      alert('Incorrect. Correct answers are: ' + question.correctAnswers.join(', '));
    }
  }
  // For drag-drop
  else if (question.type === 'dragdrop') {
    // Here you’d compare the final drop layout with question’s correct mapping
    alert('Drag-and-drop checkAnswers not fully implemented yet.');
  }
}

// Helper function to compare sets
function setsAreEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const val of a) {
    if (!b.has(val)) return false;
  }
  return true;
}

function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuestion(questions[currentQuestionIndex]);
  } else {
    alert('You have reached the end of the exam simulator.');
  }
}

/*****************************************
 * [Line 320-End] Initial Load
 *****************************************/
window.addEventListener('load', () => {
  loadQuestions();
});