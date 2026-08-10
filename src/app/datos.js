export const navItems = [
  { label: "Home", href: "/" },
  { label: "Tracks", href: "/tracks" },
  { label: "Agenda", href: "/agenda" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Venue", href: "/venue" },
  { label: "80th Anniversary", href: "/anniversary" },
];

export const registrationPrices = [
  { audience: "Student Members", price: "100", accent: "cyan" },
  { audience: "Professionals", price: "120", accent: "orange" },
  { audience: "Non-Members", price: "150", accent: "blue-soft" },
];

export const eventBenefits = [
  "Full access to both Summit days",
  "All materials and technical resources",
  "Breakfast and two lunches",
  "Track mentorship",
  "Cocktails and dinner",
  "Endorsed program",
];

export const eventPhases = [
  {
    number: "01",
    mode: "Virtual",
    schedule: "Self-paced · Leading up to September 22",
    status: "Before the Summit",
    title: "Prepare before you arrive.",
    description:
      "A guided virtual preparation phase so every participant arrives ready to work at the frontier.",
    accent: "cyan",
    items: [
      {
        title: "Documentation",
        description: "Curated reading paths and references mapped to your chosen track.",
      },
      {
        title: "Theory and foundations",
        description: "The conceptual groundwork needed to understand the problem.",
      },
      {
        title: "Setup and installation",
        description: "Environment, toolchains, and installs walked through step by step.",
      },
      {
        title: "Asynchronous support",
        description: "Help channels and check-ins so blockers are resolved before arrival.",
      },
    ],
  },
  {
    number: "02",
    mode: "In-Person",
    schedule: "September 22-23 · San José, Costa Rica",
    status: "The Summit",
    title: "Two days in the deep end.",
    description:
      "Mentors, keynotes, and hands-on work come together on site in San José.",
    accent: "orange",
    items: [
      {
        title: "Track mentorship",
        description: "Experts work beside you in your specific technical area.",
      },
      {
        title: "Keynotes",
        description: "Leaders from across the field frame where the work is headed.",
      },
      {
        title: "Build and have fun",
        description: "Every track includes hands-on building and collaboration.",
      },
      {
        title: "Go deeper",
        description: "Move beyond preparation into the work that online courses cannot reach.",
      },
    ],
  },
];

export const trackCards = [
  {
    slug: "cybersecurity-smart-buildings",
    code: "01 // CYBERSECURITY",
    title: "An Introduction to Cybersecurity for Critical Smart Buildings",
    accent: "cyan",
    description:
      "Asynchronous virtual blocks on cybersecurity applied to smart buildings, control systems, and the BACnet protocol.",
    tags: ["Smart Buildings", "BACnet", "Python / Docker"],
    partner: "Format: Asynchronous virtual blocks.",
    speaker: {
      name: "Herson",
      role: "Adjunct Professor and Researcher, Costa Rica Institute of Technology (TEC)",
      image: "/images/speakers/herson.jpg",
      bio: "Herson is an adjunct professor and researcher at the Costa Rica Institute of Technology (TEC), where he is part of the management and teaching staff of the Cybersecurity Master's Program. He teaches undergraduate and graduate courses in cybersecurity and leads TEC's cybersecurity research group, El Hackatorio. He earned his PhD in Cybersecurity from the University of Twente, The Netherlands. His research collaborations with both industry and academic partners include the Siemens CERT, Singapore University of Technology and Design (SUTD), CISPA Helmholtz Center for Information Security, among others.",
    },
    sections: [
      {
        label: "Topics",
        items: [
          "Introduction to the concept of smart buildings.",
          "Cybersecurity applied to smart buildings.",
          "Cybersecurity requirements.",
          "Cybersecurity threats.",
          "The BACnet protocol (ISO 16484-5).",
          "Defense tools for smart buildings.",
        ],
      },
      {
        label: "Entry Profile",
        items: [
          "General knowledge of computing, cybersecurity, or control systems.",
          "Basic knowledge of the Python programming language.",
          "Basic knowledge of Docker.",
        ],
      },
      {
        label: "Graduate Profile",
        items: [
          "Foundations of cybersecurity in smart buildings.",
          "Knowledge of the BACnet communication protocol (ISO 16484-5).",
          "Ability to execute cyberattacks against emulated smart buildings.",
        ],
      },
    ],
  },
  {
    slug: "deep-learning-time-series",
    code: "02 // DEEP_LEARNING",
    title: "Deep Learning for Time-Series Forecasting",
    accent: "orange",
    description:
      "Practical workshop to develop deep learning models for time-series forecasting, from data exploration through results evaluation.",
    tags: ["Time Series", "LSTM / TCN", "Forecasting"],
    partner: "Costa Rica Institute of Technology (TEC)",
    speaker: {
      name: "Martín Solís",
      role: "Professor and Researcher, Costa Rica Institute of Technology",
      image: "/images/speakers/martin-solis.jpg",
      bio: "He is a professor and researcher at the Costa Rica Institute of Technology. He has a background in statistics and holds Master's degrees in Statistics and Data Science. He holds a PhD in Public Management and Business Sciences. His research focuses on forecasting and time-series analysis. He has also worked on developing and applying machine-learning predictive models to solve problems in different areas, such as early detection of student dropout, agricultural predictions using sensor data, and text simplification with large language models, among others.",
    },
    sections: [
      {
        label: "Objective",
        items: [
          "Develop the practical skills required to design, train, and evaluate deep learning models for time-series forecasting.",
        ],
      },
      {
        label: "Content",
        items: [
          "Introduction to time series: components, characterization, decomposition, seasonal plots, autocorrelograms, and handling missing data.",
          "Data preparation: normalization, transformation into a supervised learning problem, and data splitting.",
          "Network training and optimization: LSTM and TCN architectures, and optimization strategies.",
          "Results evaluation and visualization.",
        ],
      },
      {
        label: "Requirements",
        items: ["Basic knowledge of machine learning."],
      },
    ],
  },
  {
    slug: "llm-engineering",
    code: "03 // LLM_ENGINEERING",
    title: "Introduction to Large Language Model Engineering",
    accent: "cyan",
    description:
      "Short thematic laboratory on the foundations of Natural Language Processing (NLP) and the practical application of Large Language Models (LLMs) to text classification tasks.",
    tags: ["NLP", "BERT / Embeddings", "Zero-shot / Few-shot"],
    partner: "Short thematic laboratory",
    speakers: [
      {
        name: "Saul Calderón Ramírez",
        role: "Data Science Department Coordinator, Spartan Approach; PARMA-Group Coordinator, TEC",
        image: "/images/speakers/saul-calderon.png",
        bio: "• Ph.D. in Computer Science and Intelligent Systems, De Montfort University, United Kingdom, funded by De Montfort University. • Master of Science in Electrical Engineering with an emphasis on digital systems, University of Costa Rica (UCR). • Bachelor's degree in Computing and Informatics, University of Costa Rica. • Data Science Department Coordinator, Spartan Approach. • Specialties: Digital signal processing (sound, images, video), pattern recognition, machine learning, and parallel computing. • Coordinator of the Pattern Recognition and Machine Learning Group (PARMA-Group) at TEC. • Publications: Approximately 40 articles in highly renowned international conferences such as ICIP and NIPS and in first- and second-quartile journals, in the areas of digital signal processing, pattern recognition, and deep learning. • He has taught courses on machine learning, neural networks, deep learning, programming, and electronics. This has included programs in the Master's in Computer Science (TEC), Bachelor's in Computer Engineering (TEC), Data Science program (TEC), Computer Engineering (TEC), Electrical Engineering (UCR), and he has been a guest professor at De Montfort University (United Kingdom) and the University of Buenos Aires (Argentina). • Professional experience: Intel: research and development in image analysis; Search Technologies: Big Data consultant; Spartan Approach: artificial intelligence and data science; researcher at the Center for Research in Information and Communication Technologies (UCR, CITIC); Image Processing and Computer Vision group (UBA, Argentina), among others.",
      },
      {
        name: "Esteban Villalobos Gómez",
        role: "AI & LLM Architecture Technical Manager, Accenture",
        image: "/images/speakers/esteban-villalobos.png",
        bio: "Esteban Villalobos Gómez is a software engineer and consultant with more than 20 years of experience, specializing in Machine Learning engineering, large-scale data processing, and high-performance architectures. He currently serves as AI & LLM Architecture Technical Manager at Accenture, where he leads the design and implementation of agentic systems for clients that are global corporations, enabling the automation of complex data analysis and the optimization of critical processes. His experience stands out in orchestrating advanced Generative AI (RAG) solutions using cutting-edge technologies such as LangGraph, Databricks, Azure OpenAI, and robust cloud architectures on AWS and Azure.\n\nIn academia, Esteban has a strong educational background that includes a Master's degree in Computer Science (Magna Cum Laude) from the Costa Rica Institute of Technology (ITCR), where he developed a research thesis on uncertainty estimation in generative models for the LHCb project at CERN. He complements this profile with postgraduate degrees in Data Science and Big Data, in addition to his undergraduate degree in Computer Engineering from ITCR.\n\nThroughout his career, he has led multidisciplinary teams in delivering high-impact technology products, from data-pipeline monitoring systems (ETL) to scalable microservices in Python, Java, and C#. His professional approach combines deep technical expertise in structured and unstructured data with a strategic vision to guide organizations toward the next generation of AI initiatives. He currently focuses on the evolution of language-model architectures (LLMs) and the creation of intelligent digital agents that transform business competitiveness on a global scale.",
      },
      {
        name: "Danny Xie Li",
        role: "Ph.D. Student in Artificial Intelligence and High Performance Computing, University of Luxembourg",
        image: "/images/speakers/danny-xie-li.png",
        bio: "Ph.D. student in Artificial Intelligence and High Performance Computing at the University of Luxembourg, where he is part of the Trustworthy AI for Science research group in the Faculty of Science, Technology and Medicine. He earned a Bachelor's degree in Computer Engineering from the Costa Rica Institute of Technology (TEC), Cartago, Costa Rica, in 2021, and a Master's degree in Computing with an emphasis on Artificial Intelligence from the same institution in 2026. He has research experience at the National High Technology Center (CeNAT), the Pattern Recognition and Machine Learning (PARMA-Group) Research Group at the Costa Rica Institute of Technology, the Imagine Lab at the University of Costa Rica, and the Computer Vision Laboratory at the University of Ljubljana. His research has focused on artificial intelligence, machine learning, computer vision, natural language processing, and data science. His contributions include the development of multiple-object detection and tracking methods for precision agriculture applications, as well as large-scale language models to improve Spanish-language accessibility and other applications. Professionally, he has worked as a data science engineer at Accenture, participating in the design and implementation of artificial intelligence, machine learning, and advanced analytics solutions for various industries. His main research areas include computer vision, natural language processing, deep learning, representation learning, unstructured data analysis, and trustworthy artificial intelligence (Trustworthy Artificial Intelligence).",
      },
    ],
    sections: [
      {
        label: "Context",
        items: [
          "The dataset used comes from research conducted by master's and doctoral students, who developed the FEINA corpus as part of their work on simplifying financial texts for people with visual disabilities. This resource makes it possible to work with real-world data with social impact.",
          "The laboratory combines theory with intensive practice using Python, scikit-learn, Hugging Face Transformers, and Jupyter Notebooks, culminating in a statistical analysis to determine which approach is most effective for detecting textual complexity.",
        ],
      },
      {
        label: "Objectives",
        items: [
          "Understand the binary classification algorithm of logistic regression and identify when it may be more efficient and effective than using a large language model.",
          "Generate dense text representations using pretrained embedding models such as BERT and understand the advantages of contextual representations over frequency-based representations.",
          "Design classification pipelines that integrate traditional methods and modern LLM architectures, evaluating their performance with appropriate metrics.",
          "Apply zero-shot and few-shot prompting techniques to leverage the implicit knowledge of LLMs without the need for extensive supervised training.",
          "Conduct robust experimental evaluations, including cross-validation with multiple runs, stratified splits, and statistical tests for treatment comparison.",
          "Interpret and communicate results through tables, convergence plots, decision surfaces, and qualitative analysis of classification examples.",
        ],
      },
    ],
  },
  {
    slug: "quantum-computing",
    code: "04 // QUANTUM_COMPUTING",
    title: "Quantum Computing",
    accent: "orange",
    description:
      "A technical track exploring quantum computing and its connections with advanced computing research.",
    tags: ["Quantum Computing", "High-Performance Computing", "Neural Networks"],
    partner: "Costa Rica Institute of Technology (ITCR)",
    speaker: {
      name: "José Castro",
      role: "Professor of Computer Engineering, Costa Rica Institute of Technology (ITCR)",
      initials: "JC",
      bio: "José Castro is a professor of Computer Engineering at ITCR and taught the first quantum computing course in Costa Rica in ITCR's Master's in Computing program in 2006. He was the coordinator of the Computing Research Center (CIC) from 2006 to 2011, where he promoted projects in the use of high-performance computing and fostered the creation of ITCR's eScience research program. He is currently a professor at ITCR's San José campus. His interests are Quantum Computing and Learning in Neural Networks. José Castro holds a Ph.D. in Computer Engineering from the University of Central Florida.",
    },
    sections: [
      {
        label: "Track Details",
        items: ["Program details will be announced soon."],
      },
    ],
  },
  {
    slug: "decentralized-web",
    code: "05 // WEB_DECENTRALIZED",
    title: "Decentralized Web & Web3",
    accent: "blue-soft",
    description:
      "Layer-2 systems, decentralized identity, and programmable trust for cross-border digital economies.",
    tags: ["Blockchain", "DID / DAOs"],
    partner: "Ethereum / Starknet / Polygon Labs",
    objectives: [
      "Prototype scalable financial rails for volatile and fragmented markets.",
      "Use decentralized identity for regional mobility and verification.",
      "Audit smart contracts for supply-chain and governance use cases.",
    ],
  },
];

export const agendaDays = eventPhases.map((phase) => ({
  title: `Phase ${phase.number}: ${phase.mode}`,
  date: phase.schedule,
  status: phase.status,
  sessions: phase.items.map((item) => ({
    time: phase.mode === "Virtual" ? "SELF-PACED" : "IN PERSON",
    label: phase.mode,
    title: item.title,
    description: item.description,
    accent: phase.accent,
  })),
}));

export const sponsorTiers = [
  {
    tier: "Sponsor",
    accent: "blue",
    label: "Official Sponsor",
    description: "Supporting the Summit's technical program and participant experience.",
    companies: ["IEEE Computer Society"],
    logos: {
      "IEEE Computer Society": "/images/sponsors/ieee-computer-society.png",
    },
  },
  {
    tier: "Partners",
    accent: "cyan",
    label: "Event Partners",
    description:
      "Institutional and community partners supporting IEEE CS LATAMTech Summit Costa Rica 2026.",
    companies: [
      "Dojo",
      "Unidad de Posgrados de Computación del TEC Costa Rica",
    ],
    logos: {
      "Unidad de Posgrados de Computación del TEC Costa Rica":
        "/images/sponsors/unidad-posgrados-computacion.png",
    },
  },
  {
    tier: "Endorsed By",
    accent: "orange",
    label: "Program Endorsement",
    description: "Organizations recognizing and endorsing the Summit program.",
    companies: [
      "Open Quantum Institute",
      "Colaboratorio Nacional de Computación Avanzada (CCNA), CeNAT",
    ],
  },
];

export const venueFacts = [
  {
    title: "In-person dates",
    text: "September 22-23, 2026.",
  },
  {
    title: "Location",
    text: "San José, Costa Rica.",
  },
  {
    title: "CLASYPCS add-on",
    text: "Includes one additional hotel night for eligible CLASYPCS participants.",
  },
];
