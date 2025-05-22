// Enhanced Power Platform Question Set with Complete Metadata
const enhancedQuestionSet = [
    {
      id: 1,
      topic: "Power Apps",
      type: "multiplechoice",
      difficultyLevel: "Medium",
      text: "A company uses two separate unlinked apps to manage sales leads: a Power Apps app and a third-party application. The client has the following requirements: • Manage all leads using the Power Apps app. • Create a lead in the Power Apps app when a user creates a lead in the third-party application. • Update leads in the Power Apps app when a user updates a lead in the third-party application. • Connect to the third-party application using an API. You need to recommend strategies to integrate the Power Apps app and the third-party application. Which three options can you use to achieve the goal? NOTE: Each correct selection is worth one point.",
      keyWords: ["two separate", "unlinked apps", "third-party", "API", "create", "update", "integrate", "real-time"],
      hints: {
        easy: ["Look for integration patterns", "Consider API connectivity options", "Think about what connects Power Platform to external systems"],
        medium: ["Think about real-time synchronization", "Consider orchestration tools", "What enables custom API connections?"],
        hard: ["Evaluate authentication methods", "Consider error handling patterns", "Think about scalability for API calls"]
      },
      conceptsTested: ["integration", "API connectivity", "data synchronization", "workflow automation", "custom connectors"],
      commonMistakes: [
        "Choosing Dual-write for non-D365 F&O scenarios",
        "Selecting batch processing (Dataflow) for real-time requirements",
        "Forgetting about authentication and security",
        "Not considering error handling and retries"
      ],
      analysisHighlights: {
        requirements: ["manage all leads", "create leads automatically", "update leads automatically", "API connection"],
        constraints: ["third-party API", "separate unlinked apps", "real-time synchronization"],
        technologies: ["Power Apps", "Custom connector", "Power Automate", "Dataverse"]
      },
      options: [
        { letter: "A", text: "Dual-write", isCorrect: false, analysis: "Dual-write is specific to Dynamics 365 Finance and Operations integration, not suitable for generic third-party APIs." },
        { letter: "B", text: "Custom connector", isCorrect: true, analysis: "A custom connector enables secure communication with a third-party API from Power Automate or Power Apps." },
        { letter: "C", text: "Dataflow", isCorrect: false, analysis: "Dataflows are for periodic data import/export, not real-time lead syncing." },
        { letter: "D", text: "Power Automate cloud flow", isCorrect: true, analysis: "Cloud flows can be triggered based on third-party system changes and automate lead creation/update processes." },
        { letter: "E", text: "Dataverse connector", isCorrect: true, analysis: "Allows flows or apps to interact with Dataverse, enabling create/update of lead records." }
      ],
      correctAnswers: ["B", "D", "E"],
      isMultipleChoice: true,
      detailedExplanation: "Combining a custom connector (to reach the external API), Power Automate (for orchestration), and the Dataverse connector (to interact with Power Apps lead data) provides a complete solution for near real-time integration.",
      category: "Perform solution envisioning and requirement analysis",
      weight: 7.9,
      examReference: "Design strategies for app integration",
      source: "Custom generated"
    },
    {
      id: 2,
      topic: "General",
      type: "dragdrop",
      difficultyLevel: "Easy",
      text: "DRAG DROP - You are designing a business continuity strategy for a client who has a Microsoft Power Platform solution. The client works with critical data where any data loss creates a high risk. You need to document the retry process for the stakeholders. Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
      keyWords: ["business continuity", "retry", "sequence", "data loss", "service call", "exception", "automatically"],
      hints: {
        easy: ["Think about typical retry patterns", "Follow the error flow sequence", "What happens first in a service call?"],
        medium: ["Consider automatic retry mechanisms", "Think about success scenarios", "What triggers a retry?"],
        hard: ["Evaluate exponential backoff strategies", "Consider circuit breaker patterns", "Think about retry limits"]
      },
      conceptsTested: ["error handling", "retry patterns", "business continuity", "resilience", "automatic recovery"],
      commonMistakes: [
        "Including manual retry steps in automatic flows",
        "Missing the success path continuation",
        "Adding complex retry logic too early",
        "Confusing automatic vs manual retry"
      ],
      analysisHighlights: {
        requirements: ["business continuity", "handle failures", "automatic retry", "document process"],
        constraints: ["critical data", "high risk", "automatic process"],
        patterns: ["retry pattern", "exception handling", "resilience pattern"]
      },
      requirements: [
        {
          text: "The application makes a service call to the datacenter.",
          correctAnswer: "Step 1",
          explanation: "First step in any service interaction"
        },
        {
          text: "The application receives an exception after attempting the service call.",
          correctAnswer: "Step 2", 
          explanation: "Error condition triggers the retry logic"
        },
        {
          text: "The application automatically tries the call again.",
          correctAnswer: "Step 3",
          explanation: "Automatic retry is the resilience pattern"
        },
        {
          text: "If the second call is successful, the application continues normally.",
          correctAnswer: "Step 4",
          explanation: "Success path completes the pattern"
        }
      ],
      correctAnswers: [
        "The application makes a service call to the datacenter.",
        "The application receives an exception after attempting the service call.",
        "The application automatically tries the call again.",
        "If the second call is successful, the application continues normally."
      ],
      isMultipleChoice: false,
      detailedExplanation: "A typical retry pattern is: invoke the call, catch the error, retry automatically, and continue if successful. This basic pattern handles transient failures without manual intervention.",
      category: "Architect a solution",
      weight: 6.8,
      examReference: "Design strategies for business continuity",
      source: "Custom generated"
    },
    {
      id: 3,
      topic: "Power Apps",
      type: "multiplechoice",
      difficultyLevel: "Easy",
      text: "A large company experiences high staff turnover rates. As a result, the company must add or remove multiple system user accounts daily. You need to recommend a security concept which will facilitate complex security profiles to entities for large groups of users across the Power Apps and Dynamics 365 applications. What should you recommend?",
      keyWords: ["high staff turnover", "multiple", "daily", "security", "large groups", "complex security profiles"],
      hints: {
        easy: ["Think about group-based security", "Consider scalability for many users", "What reduces administrative overhead?"],
        medium: ["How can you manage many users efficiently?", "Think about inheritance of permissions", "Consider team-based approaches"],
        hard: ["Evaluate role-based vs team-based security", "Consider security inheritance patterns", "Think about maintenance overhead"]
      },
      conceptsTested: ["security management", "scalability", "team-based security", "user management", "administrative efficiency"],
      commonMistakes: [
        "Choosing individual user management for high-volume scenarios",
        "Selecting field-level security for broad access control",
        "Confusing hierarchy security with team security",
        "Not considering maintenance overhead"
      ],
      analysisHighlights: {
        requirements: ["handle high turnover", "manage multiple users daily", "complex security profiles", "cross-application"],
        constraints: ["large groups", "frequent changes", "administrative efficiency"],
        patterns: ["team-based security", "role inheritance", "group management"]
      },
      options: [
        { letter: "A", text: "Hierarchy security", isCorrect: false, analysis: "Hierarchy security works by managerial layers, not ideal for quickly assigning complex privileges." },
        { letter: "B", text: "Field-level security", isCorrect: false, analysis: "Field-level security only restricts certain fields, not entire entity-level privileges for large groups." },
        { letter: "C", text: "User access management", isCorrect: false, analysis: "Generic phrase that does not map directly to a recommended approach in Power Apps/Dynamics 365." },
        { letter: "D", text: "Team privileges", isCorrect: true, analysis: "Team-based security allows assigning roles to a team, simplifying user access management for large user groups." }
      ],
      correctAnswers: ["D"],
      isMultipleChoice: false,
      detailedExplanation: "Team privileges streamline security for large groups and reduce overhead when staff join or leave. Teams make it easier to manage roles for multiple users - membership changes but team privileges remain consistent.",
      category: "Architect a solution",
      weight: 6.8,
      examReference: "Design strategies for security",
      source: "Custom generated"
    },
    {
      id: 4,
      topic: "General",
      type: "specialdragdrop",
      difficultyLevel: "Easy",
      text: "DRAG DROP - You need to recommend methods for assigning security to each group of users. The customer provides the following requirements: • Customers need the ability to submit a case through an online portal. • Portal must handle 75 concurrent users submitting cases. • Service data must be retained for at least six years. You need to determine which requirements are functional or non-functional. Which requirements are functional or non-functional? To answer, drag the appropriate types to the correct requirements. Each type may be used once, more than once, or not at all. NOTE: Each correct selection is worth one point.",
      keyWords: ["functional", "non-functional", "submit case", "75 concurrent", "retained", "six years", "portal"],
      hints: {
        easy: ["Think about features vs constraints", "Consider what the system does vs how well it does it", "Performance is typically non-functional"],
        medium: ["Functional = what the system does", "Non-functional = how the system performs", "Consider scalability and retention as qualities"],
        hard: ["Evaluate architectural qualities", "Consider ISO 25010 categories", "Think about measurable constraints"]
      },
      conceptsTested: ["requirements analysis", "functional requirements", "non-functional requirements", "system qualities", "constraints"],
      commonMistakes: [
        "Confusing features with performance",
        "Treating all numbers as non-functional", 
        "Not recognizing retention as non-functional",
        "Missing the scalability aspect"
      ],
      analysisHighlights: {
        requirements: ["case submission capability", "concurrent user handling", "data retention period"],
        patterns: ["functional = capabilities", "non-functional = qualities", "performance metrics"],
        categories: ["functionality", "performance", "compliance"]
      },
      options: [
        {
          source: {
            requirement: "Customers need the ability to submit a case through an online portal.",
            choices: ["Functional", "Non-functional"]
          }
        },
        {
          source: {
            requirement: "Portal must handle 75 concurrent users submitting cases.",
            choices: ["Functional", "Non-functional"]
          }
        },
        {
          source: {
            requirement: "Service data must be retained for at least six years.",
            choices: ["Functional", "Non-functional"]
          }
        }
      ],
      correctAnswers: [
        "Customers need the ability to submit a case through an online portal: Functional",
        "Portal must handle 75 concurrent users submitting cases: Non-functional",
        "Service data must be retained for at least six years: Non-functional"
      ],
      isMultipleChoice: true,
      detailedExplanation: "Functional requirements describe features or behaviors (submitting cases), while non-functional cover performance (concurrent users), scalability, and retention mandates (six years).",
      category: "Perform solution envisioning and requirement analysis",
      weight: 7.9,
      examReference: "Identify functional and non-functional requirements",
      source: "Custom generated"
    },
    {
      id: 5,
      topic: "Administration",
      type: "requirementtype",
      difficultyLevel: "Medium",
      text: "DRAG DROP - You are performing a requirements analysis for a customer. The customer provides the following requirements: • Power Platform storage capacity must remain under 100 percent. • Customer service representatives must be sent an email when they are assigned a case. • Help desk technicians must be shown an error message when they try to delete a task row. • The plug-in pass rate must remain over 99 percent for the production environment. You need determine if the requirements are functional or non-functional. Which requirement type should you use? To answer, drag the appropriate requirement types to the correct requirements. Each requirement type may be used once, more than once, or not at all. NOTE: Each correct selection is worth one point.",
      keyWords: ["storage capacity", "100 percent", "email", "assigned", "error message", "delete", "pass rate", "99 percent"],
      hints: {
        easy: ["Capacity and performance are qualities", "Actions and behaviors are functions", "Think about measurable constraints"],
        medium: ["What describes system behavior vs system quality?", "Consider performance metrics", "Email notifications are features"],
        hard: ["Evaluate SLA requirements", "Consider monitoring implications", "Think about architectural qualities"]
      },
      conceptsTested: ["requirements classification", "functional vs non-functional", "system qualities", "behaviors vs constraints"],
      commonMistakes: [
        "Treating all percentages as functional",
        "Confusing notifications with performance",
        "Not recognizing capacity as non-functional",
        "Missing the behavioral aspects"
      ],
      analysisHighlights: {
        functional: ["send email", "show error message"],
        nonFunctional: ["storage capacity", "pass rate"],
        patterns: ["actions = functional", "constraints = non-functional", "metrics = non-functional"]
      },
      requirements: [
        {
          text: "Power Platform storage capacity must remain under 100 percent.",
          correctAnswer: "Non-functional",
          explanation: "Storage capacity constraints are performance/resource limitations"
        },
        {
          text: "Customer service representatives must be sent an email when they are assigned a case.",
          correctAnswer: "Functional",
          explanation: "Email notification is a specific behavior/function the system performs"
        },
        {
          text: "Help desk technicians must be shown an error message when they try to delete a task row.",
          correctAnswer: "Functional", 
          explanation: "Showing error messages is a specific system behavior/function"
        },
        {
          text: "The plug-in pass rate must remain over 99 percent for the production environment.",
          correctAnswer: "Non-functional",
          explanation: "Pass rate metrics are reliability/performance quality attributes"
        }
      ],
      correctAnswers: ["Non-functional", "Functional", "Functional", "Non-functional"],
      isMultipleChoice: true,
      detailedExplanation: "Functional covers behaviors and actions (email notifications, error messages), non-functional includes performance, capacity, or success rate constraints (storage limits, pass rates).",
      category: "Perform solution envisioning and requirement analysis",
      weight: 7.9,
      examReference: "Identify functional and non-functional requirements",
      source: "Custom generated"
    }
];

export default enhancedQuestionSet;