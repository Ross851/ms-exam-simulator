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
        "topic": "General",
        "type": "dragdrop",
        "difficultyLevel": "Easy",
        "text": "DRAG DROP - You are designing a business continuity strategy for a client who has a Microsoft Power Platform solution. The client works with critical data where any data loss creates a high risk. You need to document the retry process for the stakeholders. Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
        "keyWords": ["business continuity", "retry", "sequence", "data loss", "service call", "exception", "automatically"],
        "hints": {
            "easy": ["Think about typical retry patterns", "Follow the error flow sequence", "What happens first in a service call?"],
            "medium": ["Consider automatic retry mechanisms", "Think about success scenarios", "What triggers a retry?"],
            "hard": ["Evaluate exponential backoff strategies", "Consider circuit breaker patterns", "Think about retry limits"]
        },
        "conceptsTested": ["error handling", "retry patterns", "business continuity", "resilience", "automatic recovery"],
        "commonMistakes": [
            "Including manual retry steps in automatic flows",
            "Missing the success path continuation",
            "Adding complex retry logic too early",
            "Confusing automatic vs manual retry"
        ],
        "analysisHighlights": {
            "requirements": ["business continuity", "handle failures", "automatic retry", "document process"],
            "constraints": ["critical data", "high risk", "automatic process"],
            "patterns": ["retry pattern", "exception handling", "resilience pattern"]
        },
        "options": [
            { "source": "The application makes a service call to the datacenter.", "order": 1 },
            { "source": "The application receives an exception after attempting the service call.", "order": 2 },
            { "source": "The application automatically tries the call again.", "order": 3 },
            { "source": "If the second call is successful, the application continues normally.", "order": 4 },
            { "source": "The application logs an error and notifies an administrator.", "order": null },
            { "source": "The application retries three times with exponential backoff.", "order": null },
            { "source": "The user manually retries the operation.", "order": null }
        ],
        "correctAnswers": [
            "The application makes a service call to the datacenter.",
            "The application receives an exception after attempting the service call.",
            "The application automatically tries the call again.",
            "If the second call is successful, the application continues normally."
        ],
        "isMultipleChoice": false,
        "detailedExplanation": "A typical retry pattern is: invoke the call, catch the error, retry automatically, and continue if successful. This basic pattern handles transient failures without manual intervention.",
        "category": "Architect a solution",
        "weight": 6.8,
        "examReference": "Design strategies for business continuity",
        "source": "Custom generated"
    },
    {
        "id": 3,
        "topic": "Power Apps",
        "type": "multiplechoice",
        "difficultyLevel": "Easy",
        "text": "A large company experiences high staff turnover rates. As a result, the company must add or remove multiple system user accounts daily. You need to recommend a security concept which will facilitate complex security profiles to entities for large groups of users across the Power Apps and Dynamics 365 applications. What should you recommend?",
        "keyWords": ["high staff turnover", "multiple", "daily", "security", "large groups", "complex security profiles"],
        "hints": {
            "easy": ["Think about group-based security", "Consider scalability for many users", "What reduces administrative overhead?"],
            "medium": ["How can you manage many users efficiently?", "Think about inheritance of permissions", "Consider team-based approaches"],
            "hard": ["Evaluate role-based vs team-based security", "Consider security inheritance patterns", "Think about maintenance overhead"]
        },
        "conceptsTested": ["security management", "scalability", "team-based security", "user management", "administrative efficiency"],
        "commonMistakes": [
            "Choosing individual user management for high-volume scenarios",
            "Selecting field-level security for broad access control",
            "Confusing hierarchy security with team security",
            "Not considering maintenance overhead"
        ],
        "analysisHighlights": {
            "requirements": ["handle high turnover", "manage multiple users daily", "complex security profiles", "cross-application"],
            "constraints": ["large groups", "frequent changes", "administrative efficiency"],
            "patterns": ["team-based security", "role inheritance", "group management"]
        },
        "options": [
            { "letter": "A", "text": "Hierarchy security", "isCorrect": false, "analysis": "Hierarchy security works by managerial layers, not ideal for quickly assigning complex privileges." },
            { "letter": "B", "text": "Field-level security", "isCorrect": false, "analysis": "Field-level security only restricts certain fields, not entire entity-level privileges for large groups." },
            { "letter": "C", "text": "User access management", "isCorrect": false, "analysis": "Generic phrase that does not map directly to a recommended approach in Power Apps/Dynamics 365." },
            { "letter": "D", "text": "Team privileges", "isCorrect": true, "analysis": "Team-based security allows assigning roles to a team, simplifying user access management for large user groups." }
        ],
        "correctAnswers": ["D"],
        "isMultipleChoice": false,
        "detailedExplanation": "Team privileges streamline security for large groups and reduce overhead when staff join or leave. Teams make it easier to manage roles for multiple users - membership changes but team privileges remain consistent.",
        "category": "Architect a solution",
        "weight": 6.8,
        "examReference": "Design strategies for security",
        "source": "Custom generated"
    },
    {
        "id": 4,
        "topic": "General",
        "type": "hotspot",
        "difficultyLevel": "Easy",
        "text": "HOTSPOT - You are designing a Power Platform solution for a company that provides in-home appliance maintenance. When a customer schedules a service appointment, a dispatcher assigns one technician for a specific time and location. The solution must capture information about the technician assigned to each appointment and the list of tools that the technician must bring to the appointment. You need to recommend the data type for the captured information. Which data type should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
        "keyWords": ["technician assigned", "tools", "data type", "one technician", "list of tools", "appointment"],
        "hints": {
            "easy": ["Think about relationships between data", "Consider single vs multiple selections", "What data type links to other records?"],
            "medium": ["How do you reference a user record?", "What allows multiple selections from a list?", "Consider predefined vs dynamic lists"],
            "hard": ["Evaluate lookup vs choice performance", "Consider data normalization", "Think about reporting requirements"]
        },
        "conceptsTested": ["data modeling", "field types", "relationships", "Dataverse schema", "data types"],
        "commonMistakes": [
            "Using text fields for relationships",
            "Choosing single-select for multiple items",
            "Not understanding lookup relationships",
            "Confusing choices with lookups"
        ],
        "analysisHighlights": {
            "requirements": ["single technician per appointment", "multiple tools per appointment", "capture assignments"],
            "constraints": ["one technician", "list of tools", "predefined options"],
            "patterns": ["1:N relationships", "multi-select options", "lookup fields"]
        },
        "options": {
            "areas": [
                {
                    "name": "Technician assigned",
                    "options": ["Text", "Lookup", "Choices (multi-select option set)", "Number"],
                    "correctAnswer": "Lookup"
                },
                {
                    "name": "Tools to bring",
                    "options": ["Text", "Lookup", "Choices (multi-select option set)", "Boolean"],
                    "correctAnswer": "Choices (multi-select option set)"
                }
            ]
        },
        "correctAnswers": ["Technician assigned: Lookup", "Tools to bring: Choices (multi-select option set)"],
        "isMultipleChoice": false,
        "detailedExplanation": "Use a Lookup to reference a single technician record. A multi-select Choices field is suitable for listing multiple required tools. Lookup fields relate to another entity (e.g. Users), while multi-select Choices let you choose multiple items from a predefined list.",
        "category": "Architect a solution",
        "weight": 6.8,
        "examReference": "Design strategies for data models",
        "source": "Custom generated"
    },
    {
        "id": 5,
        "topic": "Power Automate",
        "type": "hotspot",
        "difficultyLevel": "Medium",
        "text": "HOTSPOT - An animal welfare organization wants to track the movement of wolf packs in a region. Cameras at specific locations capture images when motion is detected within the camera sensor range. Staff upload the images manually to a shared drive and then analyse the images. The organization wants to automate image capture and analysis. The organization has the following requirements: • Save captured images in an appropriate location. • Analyse saved images by using an image recognition process. • Display data in real-time dashboards. You need to recommend the correct technology for the requirements. What should you recommend? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
        "keyWords": ["automate", "images", "AI", "image recognition", "real-time", "dashboards", "save", "analyse"],
        "hints": {
            "easy": ["Think about automation tools", "Consider AI capabilities in Power Platform", "What handles file operations?"],
            "medium": ["What can process images automatically?", "Consider trigger-based automation", "Think about AI Builder capabilities"],
            "hard": ["Evaluate computer vision options", "Consider processing performance", "Think about real-time data flow"]
        },
        "conceptsTested": ["AI Builder", "automation", "image processing", "real-time processing", "cloud flows"],
        "commonMistakes": [
            "Using manual processes for automation requirements",
            "Forgetting about AI Builder for image analysis",
            "Choosing desktop flows for cloud scenarios",
            "Not considering real-time requirements"
        ],
        "analysisHighlights": {
            "requirements": ["automate image capture", "analyze images", "real-time dashboards", "image recognition"],
            "constraints": ["motion-triggered capture", "automated analysis", "real-time display"],
            "technologies": ["Power Automate", "AI Builder", "cloud storage"]
        },
        "options": {
            "areas": [
                {
                    "name": "Save captured images in an appropriate location",
                    "options": ["Automated cloud flow", "Manual upload to SharePoint", "Desktop flow with Power Automate", "Custom connector"],
                    "correctAnswer": "Automated cloud flow"
                },
                {
                    "name": "Analyse saved images by using an image recognition process",
                    "options": ["AI Builder", "Custom vision API with Azure Functions", "Automated cloud flow + AI Builder", "Image recognition using desktop automation"],
                    "correctAnswer": "Automated cloud flow + AI Builder"
                }
            ]
        },
        "correctAnswers": [
            "Save captured images in an appropriate location: Automated cloud flow",
            "Analyse saved images by using an image recognition process: Automated cloud flow + AI Builder"
        ],
        "isMultipleChoice": false,
        "detailedExplanation": "An automated cloud flow can detect newly uploaded images and store them. AI Builder can then process images for recognition or object detection. Together, Power Automate (for automation) and AI Builder (for image analysis) meet the requirement of automating image capture/analysis and feeding results into real-time dashboards.",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Recommend AI Builder capabilities based on business requirements",
        "source": "Custom generated"
    },
    {
        "id": 6,
        "topic": "General",
        "type": "multiplechoice",
        "difficultyLevel": "Medium",
        "text": "You are designing a Power Platform solution. The company wants its development team to adopt the construction of repeatable components for its implementation team to reuse on different entities and forms. You need to recommend a technology that meets these requirements. Which technology would you recommend the developers adopt to assist the implementation team?",
        "keyWords": ["repeatable components", "reuse", "different entities", "forms", "development team", "implementation team"],
        "hints": {
            "easy": ["Think about custom UI components", "Consider code-based solutions", "What allows reusability across forms?"],
            "medium": ["What framework enables custom controls?", "Think about component reusability", "Consider model-driven app components"],
            "hard": ["Evaluate PCF vs web resources", "Consider maintenance and deployment", "Think about TypeScript/React components"]
        },
        "conceptsTested": ["Power Apps Component Framework", "reusability", "custom controls", "development patterns", "component architecture"],
        "commonMistakes": [
            "Choosing JavaScript for full component reusability",
            "Selecting canvas apps for model-driven components",
            "Using web resources instead of PCF",
            "Not considering cross-entity reusability"
        ],
        "analysisHighlights": {
            "requirements": ["repeatable components", "reuse across entities", "reuse across forms", "development team adoption"],
            "constraints": ["implementation team usage", "different entities", "maintainability"],
            "technologies": ["PCF", "model-driven apps", "custom controls"]
        },
        "options": [
            { "letter": "A", "text": "JavaScript", "isCorrect": false, "analysis": "While you can script form logic with JavaScript, it doesn't provide fully reusable UI components." },
            { "letter": "B", "text": "Power Apps Component Framework control", "isCorrect": true, "analysis": "PCF controls enable developers to build custom, reusable controls for model-driven apps." },
            { "letter": "C", "text": "Web resource", "isCorrect": false, "analysis": "A web resource is a more traditional approach, but lacks the integrated reusability of a PCF control." },
            { "letter": "D", "text": "Canvas app", "isCorrect": false, "analysis": "A canvas app is a complete app, not a component framework for forms in model-driven apps." }
        ],
        "correctAnswers": ["B"],
        "isMultipleChoice": false,
        "detailedExplanation": "PCF controls are specifically designed for repeatable, code-based custom UI components across forms. Power Apps Component Framework meets the requirement for consistent, reusable components.",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Identify opportunities for components and templates",
        "source": "Custom generated"
    },
    {
        "id": 7,
        "topic": "Power Pages",
        "type": "multiplechoice",
        "difficultyLevel": "Medium",
        "text": "A company uses manual processes to track interactions with customers. The company wants to use Power Platform to improve productivity. The company has the following requirements: • Provide customers with an online portal where they can submit and review cases. • Ensure that customers can chat online with a customer service representative at any time. • Route chats to customer service representatives based on skill and availability. You need to recommend a solution to the company. Which three components should you recommend? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
        "keyWords": ["online portal", "submit cases", "review cases", "chat online", "any time", "route chats", "skill", "availability"],
        "hints": {
            "easy": ["Think about customer portals", "Consider chat solutions", "What handles skill-based routing?"],
            "medium": ["What provides 24/7 chat coverage?", "Think about omnichannel capabilities", "Consider self-service options"],
            "hard": ["Evaluate chatbot vs live agent strategies", "Consider queue management", "Think about skills-based routing algorithms"]
        },
        "conceptsTested": ["customer portals", "omnichannel", "chatbots", "skill-based routing", "case management"],
        "commonMistakes": [
            "Forgetting about automated chat for 24/7 coverage",
            "Not including omnichannel for routing",
            "Choosing Field Service for case management",
            "Missing the portal requirement"
        ],
        "analysisHighlights": {
            "requirements": ["online portal", "case submission/review", "24/7 chat", "skill-based routing"],
            "constraints": ["customer self-service", "any time availability", "representative skills"],
            "technologies": ["Power Pages", "Virtual Agents", "Omnichannel"]
        },
        "options": [
            { "letter": "A", "text": "Dynamics 365 Virtual Agents chatbots", "isCorrect": true, "analysis": "Enables chat automation, but Omnichannel is needed for skill-based routing to live agents." },
            { "letter": "B", "text": "Customer self-service portal", "isCorrect": true, "analysis": "Portal for customers to submit and review cases themselves." },
            { "letter": "C", "text": "Dynamics 365 Field Service", "isCorrect": false, "analysis": "Focused on onsite scheduling/dispatch, not standard case mgmt or chat." },
            { "letter": "D", "text": "Business process flows", "isCorrect": false, "analysis": "BPFs guide internal processes, but they don't directly address real-time chat or portals." },
            { "letter": "E", "text": "Omnichannel for Customer Service", "isCorrect": true, "analysis": "Handles live chat, skill-based routing, queueing for human agents." }
        ],
        "correctAnswers": ["A", "B", "E"],
        "isMultipleChoice": true,
        "detailedExplanation": "Virtual Agents (A) handle automated chat for 24/7 coverage. The portal (B) allows case submission and review. Omnichannel (E) provides live chat with skill-based routing.",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Identify opportunities to implement Power Pages",
        "source": "Custom generated"
    },
    {
        "id": 8,
        "topic": "Power BI",
        "type": "multiplechoice",
        "difficultyLevel": "Medium",
        "text": "A client uses Dynamics 365 Sales, Power BI datasets, and Power BI dataflows. The Dynamics 365 Sales implementation has security roles that restrict data export. You need to ensure that data has the same restrictions in Power BI as it does in Dynamics 365 Sales. You need to design the security to avoid sensitive data from being seen. Which two actions should you recommend? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
        "keyWords": ["security roles", "restrict", "same restrictions", "Power BI", "Dynamics 365 Sales", "sensitive data"],
        "hints": {
            "easy": ["Think about security inheritance", "Consider row-level security", "How does security flow from Dataverse?"],
            "medium": ["What enforces Dataverse security in Power BI?", "Think about sharing restrictions", "Consider RLS implementation"],
            "hard": ["Evaluate security models across platforms", "Consider performance impacts of RLS", "Think about security maintenance"]
        },
        "conceptsTested": ["row-level security", "security inheritance", "Dataverse security", "Power BI security", "data governance"],
        "commonMistakes": [
            "Focusing only on export restrictions",
            "Not implementing RLS in Power BI",
            "Ignoring Dataverse security model",
            "Over-sharing dashboards"
        ],
        "analysisHighlights": {
            "requirements": ["maintain security restrictions", "prevent sensitive data exposure", "align with D365 security"],
            "constraints": ["existing security roles", "data export restrictions", "cross-platform security"],
            "patterns": ["security inheritance", "row-level security", "least privilege"]
        },
        "options": [
            { "letter": "A", "text": "Use Microsoft Dataverse restrictions before setting up the Power BI reports.", "isCorrect": true, "analysis": "Applying row-level security in Dataverse ensures only authorized data is exposed to the reporting layer." },
            { "letter": "B", "text": "Limit the role in Dynamics 365 Sales to only data allowed so it cannot be exported to Microsoft Excel.", "isCorrect": false, "analysis": "Preventing Excel export doesn't fully address applying the same security to Power BI." },
            { "letter": "C", "text": "Limit the role and ensure that exporting to Microsoft Excel is not allowed in both Dynamics 365 Sales and Power BI.", "isCorrect": false, "analysis": "Focusing just on blocking Excel export doesn't replicate row-level restrictions in Power BI." },
            { "letter": "D", "text": "Share Power BI dashboards only with users who are supported to see this data.", "isCorrect": true, "analysis": "You must share dashboards only with users who already have appropriate permissions in Dataverse." }
        ],
        "correctAnswers": ["A", "D"],
        "isMultipleChoice": true,
        "detailedExplanation": "Implement row-level security via Dataverse roles, and share Power BI only with authorized users. This enforces consistent data protection. Dataverse row-level security extends to Power BI with the right setup.",
        "category": "Architect a solution",
        "weight": 6.8,
        "examReference": "Design strategies for security",
        "source": "Custom generated"
    },
    {
        "id": 9,
        "topic": "Power Pages",
        "type": "specialdragdrop",
        "difficultyLevel": "Medium",
        "text": "DRAG DROP - You need to recommend methods for assigning security to each group of users. The customer provides the following requirements: • Customers need the ability to submit a case through an online portal. • Portal must handle 75 concurrent users submitting cases. • Service data must be retained for at least six years. You need to determine which requirements are functional or non-functional. Which requirements are functional or non-functional? To answer, drag the appropriate types to the correct requirements. Each type may be used once, more than once, or not at all. NOTE: Each correct selection is worth one point.",
        "keyWords": ["functional", "non-functional", "submit case", "75 concurrent", "retained", "six years", "portal"],
        "hints": {
            "easy": ["Think about features vs constraints", "Consider what the system does vs how well it does it", "Performance is typically non-functional"],
            "medium": ["Functional = what the system does", "Non-functional = how the system performs", "Consider scalability and retention as qualities"],
            "hard": ["Evaluate architectural qualities", "Consider ISO 25010 categories", "Think about measurable constraints"]
        },
        "conceptsTested": ["requirements analysis", "functional requirements", "non-functional requirements", "system qualities", "constraints"],
        "commonMistakes": [
            "Confusing features with performance",
            "Treating all numbers as non-functional",
            "Not recognizing retention as non-functional",
            "Missing the scalability aspect"
        ],
        "analysisHighlights": {
            "requirements": ["case submission capability", "concurrent user handling", "data retention period"],
            "patterns": ["functional = capabilities", "non-functional = qualities", "performance metrics"],
            "categories": ["functionality", "performance", "compliance"]
        },
        "options": [
            {
                "source": {
                    "requirement": "Customers need the ability to submit a case through an online portal.",
                    "choices": ["Functional", "Non-functional"]
                }
            },
            {
                "source": {
                    "requirement": "Portal must handle 75 concurrent users submitting cases.",
                    "choices": ["Functional", "Non-functional"]
                }
            },
            {
                "source": {
                    "requirement": "Service data must be retained for at least six years.",
                    "choices": ["Functional", "Non-functional"]
                }
            }
        ],
        "correctAnswers": [
            "Customers need the ability to submit a case through an online portal: Functional",
            "Portal must handle 75 concurrent users submitting cases: Non-functional",
            "Service data must be retained for at least six years: Non-functional"
        ],
        "isMultipleChoice": true,
        "detailedExplanation": "Functional requirements describe features or behaviors (submitting cases), while non-functional cover performance (concurrent users), scalability, and retention mandates (six years).",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Identify functional and non-functional requirements",
        "source": "Custom generated"
    },
    {
        "id": 10,
        "topic": "General",
        "type": "multiplechoice",
        "difficultyLevel": "Medium",
        "text": "You are a Power Platform consultant for an internet support company. The company lacks a budget to buy third-party ISVs or add-ons. The company requires a new system that achieves the following: • All support issues must come in by email, need to be logged, and assigned to the support group. • Accounts must synchronise with the parent company Oracle database. • Reports must be sent to the executives on a weekly basis. • No custom code will be used in the system. You need to recommend the components that should be configured. Which two components should you recommend? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
        "keyWords": ["no budget", "third-party", "email", "Oracle", "synchronise", "no custom code", "reports", "weekly"],
        "hints": {
            "easy": ["Think about out-of-box capabilities", "Consider email integration options", "What handles data synchronization?"],
            "medium": ["What processes emails automatically?", "Think about database connectivity", "Consider no-code solutions"],
            "hard": ["Evaluate server-side sync capabilities", "Consider Oracle connector options", "Think about report automation"]
        },
        "conceptsTested": ["email integration", "data synchronization", "no-code solutions", "server-side sync", "reporting"],
        "commonMistakes": [
            "Choosing solutions requiring custom code",
            "Selecting third-party add-ons",
            "Missing server-side synchronization",
            "Not considering Dataverse for data storage"
        ],
        "analysisHighlights": {
            "requirements": ["email to case", "Oracle sync", "weekly reports", "no custom code"],
            "constraints": ["no budget for ISVs", "no custom development", "existing Oracle database"],
            "technologies": ["Dataverse", "server-side sync", "Power Automate"]
        },
        "options": [
            { "letter": "A", "text": "Power Virtual Agents", "isCorrect": false, "analysis": "Chatbots are not required here, as issues come via email." },
            { "letter": "B", "text": "Microsoft Dataverse", "isCorrect": true, "analysis": "Dataverse can store and manage the support issues, accounts, etc. without custom code." },
            { "letter": "C", "text": "server-side synchronisation", "isCorrect": true, "analysis": "Server-side sync can process incoming emails into cases and integrate with external systems." },
            { "letter": "D", "text": "Microsoft Customer Voice", "isCorrect": false, "analysis": "Customer Voice is for surveys, not for core support ticket logging and Oracle sync." }
        ],
        "correctAnswers": ["B", "C"],
        "isMultipleChoice": true,
        "detailedExplanation": "Dataverse for data management, and server-side synchronisation to handle incoming emails. Flows or connectors can sync with Oracle. No custom code is needed. These two components allow email-to-case and integrated data management without requiring custom code or third-party solutions.",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Recommend components based on business requirements",
        "source": "Custom generated"
    },
    {
        "id": 11,
        "topic": "Administration",
        "type": "requirementtype",
        "difficultyLevel": "Medium",
        "text": "DRAG DROP - You are performing a requirements analysis for a customer. The customer provides the following requirements: • Power Platform storage capacity must remain under 100 percent. • Customer service representatives must be sent an email when they are assigned a case. • Help desk technicians must be shown an error message when they try to delete a task row. • The plug-in pass rate must remain over 99 percent for the production environment. You need determine if the requirements are functional or non-functional. Which requirement type should you use? To answer, drag the appropriate requirement types to the correct requirements. Each requirement type may be used once, more than once, or not at all. NOTE: Each correct selection is worth one point.",
        "keyWords": ["storage capacity", "100 percent", "email", "assigned", "error message", "delete", "pass rate", "99 percent"],
        "hints": {
            "easy": ["Capacity and performance are qualities", "Actions and behaviors are functions", "Think about measurable constraints"],
            "medium": ["What describes system behavior vs system quality?", "Consider performance metrics", "Email notifications are features"],
            "hard": ["Evaluate SLA requirements", "Consider monitoring implications", "Think about architectural qualities"]
        },
        "conceptsTested": ["requirements classification", "functional vs non-functional", "system qualities", "behaviors vs constraints"],
        "commonMistakes": [
            "Treating all percentages as functional",
            "Confusing notifications with performance",
            "Not recognizing capacity as non-functional",
            "Missing the behavioral aspects"
        ],
        "analysisHighlights": {
            "functional": ["send email", "show error message"],
            "nonFunctional": ["storage capacity", "pass rate"],
            "patterns": ["actions = functional", "constraints = non-functional", "metrics = non-functional"]
        },
        "options": {
            "positions": [
                { "id": 1, "requirement": "Power Platform storage capacity must remain under 100 percent." },
                { "id": 2, "requirement": "Customer service representatives must be sent an email when they are assigned a case." },
                { "id": 3, "requirement": "Help desk technicians must be shown an error message when they try to delete a task row." },
                { "id": 4, "requirement": "The plug-in pass rate must remain over 99 percent for the production environment." }
            ],
            "choices": ["Functional", "Non-functional"]
        },
        "correctAnswers": ["Non-functional", "Functional", "Functional", "Non-functional"],
        "isMultipleChoice": true,
        "detailedExplanation": "Functional covers behaviors and actions (email notifications, error messages), non-functional includes performance, capacity, or success rate constraints (storage limits, pass rates).",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Identify functional and non-functional requirements",
        "source": "Custom generated"
    },
    {
        "id": 12,
        "topic": "Power Automate",
        "type": "multiplechoice",
        "difficultyLevel": "Easy",
        "text": "A company has a website that contains a form named Contact Us. Data from completed forms is saved to a shared document. An office administrator periodically reviews the document. The office administrator sends new submissions to another employee who creates contacts or updates existing contacts. You need to recommend a solution to automate the process. What should you recommend?",
        "keyWords": ["Contact Us", "form", "shared document", "automate", "creates contacts", "updates", "existing contacts"],
        "hints": {
            "easy": ["Think about automating form processing", "Consider contact management systems", "What handles forms and contacts?"],
            "medium": ["What system manages contacts well?", "Think about form-to-contact automation", "Consider Customer Service capabilities"],
            "hard": ["Evaluate form processing options", "Consider duplicate detection", "Think about contact lifecycle"]
        },
        "conceptsTested": ["form automation", "contact management", "process automation", "Customer Service", "workflow automation"],
        "commonMistakes": [
            "Choosing marketing for basic contact creation",
            "Selecting analytics tools for operational tasks",
            "Missing the Customer Service option",
            "Overcomplicating with custom solutions"
        ],
        "analysisHighlights": {
            "requirements": ["automate form processing", "create/update contacts", "eliminate manual review"],
            "constraints": ["existing shared document", "manual process currently"],
            "technologies": ["Customer Service", "Power Automate", "contact management"]
        },
        "options": [
            { "letter": "A", "text": "Excel Online Connector", "isCorrect": false, "analysis": "This might help read data from Excel, but doesn't automatically create or update Dataverse contacts in a structured manner." },
            { "letter": "B", "text": "Dynamics 365 Customer Insights", "isCorrect": false, "analysis": "Primarily for analytics and segmenting customer data, not basic contact creation from a simple form." },
            { "letter": "C", "text": "Dynamics 365 Customer Service", "isCorrect": true, "analysis": "Can store and manage contacts, plus combine with Power Automate to handle new submissions automatically." },
            { "letter": "D", "text": "Dynamics 365 Marketing", "isCorrect": false, "analysis": "Marketing is mostly for campaign automation and lead nurturing, not direct 'Contact Us' form case creation." }
        ],
        "correctAnswers": ["C"],
        "isMultipleChoice": false,
        "detailedExplanation": "Use Customer Service with a simple Power Automate flow to watch the shared doc for new rows, then create/update contacts automatically. Customer Service provides the right data model (contacts, cases), and automations can be built quickly without needing heavy marketing or analytics features.",
        "category": "Architect a solution",
        "weight": 6.8,
        "examReference": "Identify automation opportunities",
        "source": "Custom generated"
    },
    {
        "id": 13,
        "topic": "Power Automate",
        "type": "hotspot",
        "difficultyLevel": "Medium",
        "text": "HOTSPOT - You need to design a Power Platform solution that meets the following requirements: • Capture data from a row during deletion to be used in an automated process. • Use AI to process forms and automate data entry from paper-based forms. Which requirements can be met by using out-of-the-box Power Platform components? Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
        "keyWords": ["capture data", "deletion", "AI", "process forms", "paper-based", "out-of-the-box", "automated"],
        "hints": {
            "easy": ["Think about Dataverse triggers", "Consider AI Builder capabilities", "What's available out-of-the-box?"],
            "medium": ["What triggers exist for deletion?", "How does AI Builder handle forms?", "Consider form processing models"],
            "hard": ["Evaluate pre-delete triggers", "Consider OCR capabilities", "Think about form recognition models"]
        },
        "conceptsTested": ["Dataverse triggers", "AI Builder", "form processing", "deletion events", "out-of-box capabilities"],
        "commonMistakes": [
            "Thinking deletion can't be captured",
            "Not knowing about AI Builder forms",
            "Assuming custom code is needed",
            "Missing standard trigger options"
        ],
        "analysisHighlights": {
            "requirements": ["capture deletion data", "AI form processing", "paper form automation"],
            "constraints": ["out-of-the-box only", "no custom code"],
            "technologies": ["Power Automate triggers", "AI Builder", "form recognition"]
        },
        "options": {
            "areas": [
                {
                    "name": "Capture data upon row deletion",
                    "options": ["Yes", "No"],
                    "correctAnswer": "Yes"
                },
                {
                    "name": "Use AI to process forms",
                    "options": ["Yes", "No"],
                    "correctAnswer": "Yes"
                }
            ]
        },
        "correctAnswers": ["Capture data upon row deletion: Yes", "Use AI to process forms: Yes"],
        "isMultipleChoice": false,
        "detailedExplanation": "Power Automate can trigger on row deletion in Dataverse ('When a row is deleted'). AI Builder can process forms out of the box. Both scenarios are supported by standard capabilities.",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Identify automation opportunities with Power Automate",
        "source": "Custom generated"
    },
    {
        "id": 14,
        "topic": "Integration",
        "type": "multiplechoice",
        "difficultyLevel": "Easy",
        "text": "A company has a custom web-based API that is hosted on Azure. You design a Microsoft Power Platform solution to provide the company additional capabilities. You need to integrate the Microsoft Power Platform solution with the API. What should you recommend?",
        "keyWords": ["custom", "web-based API", "Azure", "integrate", "Power Platform"],
        "hints": {
            "easy": ["Think about API connectivity", "What enables custom integrations?", "Consider REST API connections"],
            "medium": ["How do you connect to external APIs?", "Think about authentication", "Consider reusability"],
            "hard": ["Evaluate connector architecture", "Consider security patterns", "Think about rate limiting"]
        },
        "conceptsTested": ["API integration", "custom connectors", "external connectivity", "Azure integration"],
        "commonMistakes": [
            "Using data gateway for cloud APIs",
            "Choosing desktop flows for API calls",
            "Not considering authentication",
            "Missing the custom connector option"
        ],
        "analysisHighlights": {
            "requirements": ["integrate with custom API", "Azure-hosted service", "Power Platform connectivity"],
            "constraints": ["external API", "web-based service"],
            "technologies": ["custom connector", "REST API", "Azure"]
        },
        "options": [
            { "letter": "A", "text": "Connection reference", "isCorrect": false, "analysis": "Connection references map an existing connector to an environment, not define a new custom integration." },
            { "letter": "B", "text": "Custom connector", "isCorrect": true, "analysis": "A custom connector is used to call external web APIs in the Power Platform." },
            { "letter": "C", "text": "Desktop flow", "isCorrect": false, "analysis": "Desktop flows are for RPA with legacy systems, not direct Azure web API integration." },
            { "letter": "D", "text": "Data gateway", "isCorrect": false, "analysis": "Gateway is for on-premises data, not for an Azure-hosted custom API." }
        ],
        "correctAnswers": ["B"],
        "isMultipleChoice": false,
        "detailedExplanation": "A custom connector is the correct approach to integrate an external Azure-based API with Power Apps or Power Automate. Custom connectors let you wrap any REST-based API and use it natively within Power Platform solutions.",
        "category": "Architect a solution",
        "weight": 6.8,
        "examReference": "Design strategies for integration",
        "source": "Custom generated"
    },
    {
        "id": 15,
        "topic": "Power Pages",
        "type": "multiplechoice",
        "difficultyLevel": "Medium",
        "text": "You are designing a self-service portal for a company. The portal must meet the following requirements: • Customers must be able to submit and review cases. • Customers must be able to chat with service representatives in near real time. • Allow service representatives to select cases from queues and use knowledge articles to resolve customer concerns. You need to recommend solutions for the company that do not require custom development. Which three apps or services should you recommend? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
        "keyWords": ["self-service portal", "submit cases", "review cases", "chat", "real time", "queues", "knowledge articles", "no custom development"],
        "hints": {
            "easy": ["Think about portal solutions", "Consider chat capabilities", "What manages cases and knowledge?"],
            "medium": ["What enables external portals?", "Think about omnichannel chat", "Consider case management systems"],
            "hard": ["Evaluate portal security models", "Consider chat routing algorithms", "Think about knowledge management"]
        },
        "conceptsTested": ["self-service portals", "case management", "real-time chat", "knowledge management", "customer service"],
        "commonMistakes": [
            "Including Field Service for cases",
            "Missing the portal component",
            "Not including Omnichannel",
            "Forgetting knowledge articles"
        ],
        "analysisHighlights": {
            "requirements": ["customer portal", "case submission/review", "real-time chat", "queue management", "knowledge articles"],
            "constraints": ["no custom development", "self-service", "representative workflows"],
            "technologies": ["Power Pages", "Customer Service", "Omnichannel"]
        },
        "options": [
            { "letter": "A", "text": "Dynamics 365 Field Service", "isCorrect": false, "analysis": "Field Service is for scheduling onsite work, not general case or chat management." },
            { "letter": "B", "text": "Dynamics 365 Customer Service", "isCorrect": true, "analysis": "Provides case management, queues, and knowledge articles for service reps." },
            { "letter": "C", "text": "Omnichannel for Customer Service", "isCorrect": true, "analysis": "Enables real-time chat, skill-based routing for reps, integrating with Customer Service." },
            { "letter": "D", "text": "Customer Insights", "isCorrect": false, "analysis": "Focuses on customer data analytics, not direct portal or chat features." },
            { "letter": "E", "text": "Customer self-service portal", "isCorrect": true, "analysis": "Enables external customers to submit/review cases online with minimal custom dev." }
        ],
        "correctAnswers": ["B", "C", "E"],
        "isMultipleChoice": true,
        "detailedExplanation": "Customer self-service portal (E) for case submission, Customer Service (B) for core case mgmt and knowledge, Omnichannel (C) for chat/queue routing. These three combined allow self-service case submission, real-time chat, queue selection, and knowledge article usage without custom code.",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Identify opportunities to implement Power Pages",
        "source": "Custom generated"
    },
    {
        "id": 16,
        "topic": "Administration",
        "type": "hotspot",
        "difficultyLevel": "Hard",
        "text": "HOTSPOT - A multinational organisation uses a single Power Platform environment. The instance hosts multiple customisations for different users in different regions. Users in some regions complain about slow load time of the customisations. You need to architect a solution based on the main requirement. What should you recommend?",
        "keyWords": ["multinational", "single environment", "multiple regions", "slow load time", "performance", "customisations"],
        "hints": {
            "easy": ["Think about geographical distribution", "Consider performance optimization", "What affects load times?"],
            "medium": ["How do you handle global deployments?", "Think about data residency", "Consider multi-geo options"],
            "hard": ["Evaluate CDN strategies", "Consider data sovereignty", "Think about latency patterns"]
        },
        "conceptsTested": ["global deployment", "performance optimization", "multi-geo", "architecture patterns", "scalability"],
        "commonMistakes": [
            "Using single instance for all scenarios",
            "Not considering data residency",
            "Ignoring network latency",
            "Over-architecting simple scenarios"
        ],
        "analysisHighlights": {
            "requirements": ["improve load times", "support multiple regions", "maintain functionality"],
            "constraints": ["geographical distribution", "existing customizations", "user complaints"],
            "patterns": ["multi-geo deployment", "regional instances", "performance optimization"]
        },
        "options": {
            "areas": [
                {
                    "name": "Divisions actively collaborate on customers",
                    "options": [
                        "Single instance; use Microsoft Azure Traffic Manager where needed",
                        "Multi-tenant with one Power Platform environment in each region",
                        "Multiple instances in different regions; Power BI for reporting",
                        "Single multi-geo instance"
                    ],
                    "correctAnswer": "Multi-tenant with one Power Platform environment in each region"
                },
                {
                    "name": "Regions have separate customers but use the same functionality and need global reporting",
                    "options": [
                        "Multiple instances in different regions with data replication",
                        "Multi-tenant with one Power Platform environment in each region",
                        "Multiple instances in different regions; Power BI for reporting",
                        "Single multi-geo instance"
                    ],
                    "correctAnswer": "Multiple instances in different regions; Power BI for reporting"
                },
                {
                    "name": "Regions have separate functionality and customers but need global reporting on data",
                    "options": [
                        "Single instance; use Microsoft Azure Traffic Manager",
                        "Multi-tenant with one Power Platform environment in each region",
                        "Multiple instances in different regions; Power BI for reporting",
                        "Single multi-geo instance"
                    ],
                    "correctAnswer": "Multiple instances in different regions; Power BI for reporting"
                }
            ]
        },
        "correctAnswers": [
            "Divisions actively collaborate on customers → Multi-tenant with one Power Platform environment in each region",
            "Regions have separate customers but use the same functionality and need global reporting → Multiple instances in different regions; Power BI for reporting",
            "Regions have separate functionality and customers but need global reporting on data → Multiple instances in different regions; Power BI for reporting"
        ],
        "isMultipleChoice": false,
        "detailedExplanation": "Regional environments reduce latency. For collaboration, use regional environments. For separate customers/functionality, use multiple instances with Power BI for global reporting. This balances performance with data integration needs.",
        "category": "Perform solution envisioning and requirement analysis",
        "weight": 7.9,
        "examReference": "Plan solution deployment",
        "source": "Custom generated"
    }
    // Add more questions here
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
    try {
        const saved = localStorage.getItem('performanceData');
        if (saved) {
            performanceData = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error loading performance data:', error);
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
    // For demo purposes with limited questions
    const filtered = questions.filter(q => categories.includes(q.category));
    if (filtered.length < mockExamConfig.minQuestions) {
        return filtered;
    }
    
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
        
        // Scroll to explanation
        document.querySelector('.explanation-box').scrollIntoView({ behavior: 'smooth' });
    }
}

function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        // This is the last question, end the exam
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
        try {
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
            return { attempted: 0, percentage: 0 };
        }
    }
    return { attempted: 0, percentage: 0 };
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
window.reviewQuestion = reviewQuestion;
window.endExam = endExam; // Make sure endExam is exposed globally

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

// Log successful initialization
console.log('Exam Simulator initialized successfully!');
