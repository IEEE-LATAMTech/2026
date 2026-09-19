export const navItems = [
  { label: "Home", href: "/" },
  { label: "Tracks", href: "/tracks" },
  { label: "Team", href: "/team" },
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

export const organizingTeam = {
  organizers: [
    {
      code: "01",
      name: "Esteban Arias-Méndez",
      role: "Escuela de Ingeniería en Computación\nInstituto Tecnológico de Costa Rica",
      accent: "cyan",
      image: "/images/team/esteban-arias-mendez.png",
    },
    {
      code: "02",
      name: "Alfredo Mercado Rios",
      role: "Escuela de Ingeniería en Computación\nInstituto Tecnológico de Costa Rica",
      accent: "cyan",
      image: "/images/team/alfredo-mercado-rios.png",
    },
    {
      code: "03",
      name: "Nicole Parra Valverde",
      role: "Escuela de Ingeniería en Computación\nInstituto Tecnológico de Costa Rica",
      accent: "cyan",
      image: "/images/team/nicole-parra-valverde.png",
    },
    {
      code: "04",
      name: "Mauricio Arroyo",
      role: "Unidad de Posgrados de Computación\nInstituto Tecnológico de Costa Rica",
      accent: "cyan",
      image: "/images/team/mauricio-arroyo.png",
    },
  ],
  collaborators: [
    {
      code: "05",
      name: "Jaime Garcia",
      role: "Event Collaborator",
      accent: "orange",
    },
    {
      code: "06",
      name: "Roberto Moreno",
      role: "Event Collaborator",
      accent: "orange",
      image: "/images/team/roberto-moreno.png",
    },
  ],
};

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
        label: "Block 0: Context Preparation",
        items: [
          "A laptop with a Linux-based operating system (preferably Debian or a derivative). A virtual machine running on top of another operating system is also acceptable.",
          "At least 8 GB of RAM; 16 GB is recommended.",
          "Approximately 10 GB of free disk space.",
          "An internet connection for the initial image download.",
          "The ability to run virtualization.",
          "Docker Engine and Docker Compose.",
        ],
      },
      {
        label: "Block 1: The Scientific Challenge",
        items: [
          "The experiment demonstrates how an attacker with network access to a smart-building BACnet/IP controller can manipulate building operations through unauthorized BACnet commands.",
          "Discover the simulated BACnet controller and its exposed objects.",
          "Read information such as HVAC temperatures, setpoints, and device states.",
          "Issue unauthorized WriteProperty commands to modify controllable points.",
          "Observe the cyber-physical consequence in the simulated building—for example, changing an HVAC setpoint or switching equipment on or off.",
          "Analyze the security implications and consider how such activity could be detected or prevented.",
          {
            text: 'Related publication: "Automatic Deployment of Specification-based Intrusion Detection in the BACnet Protocol"',
            href: "https://dl.acm.org/doi/abs/10.1145/3140241.3140244",
          },
          {
            text: "Additional reading: What Is BACnet? The Building Automation Protocol Explained",
            href: "https://controlcircuitry.com/what-is-bacnet-and-how-it-works/",
          },
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
        name: "Sarah Priscilla Quesada Chaves",
        role: "Software Engineering Student, Tecnológico de Costa Rica (TEC)",
        image: "/images/speakers/sarah-priscilla-quesada-chaves.png",
        bio: "Sarah Priscilla Quesada Chaves is a Software Engineering student at Tecnológico de Costa Rica (TEC) with interests in artificial intelligence, data analysis, machine learning, and the development of technology-driven solutions to real-world problems. Her academic background includes projects in software development, software testing, data analysis, and research.\n\nShe is currently working with CEN-CINAI on a project focused on the digital transformation of interdisciplinary care processes, exploring the use of AI-assisted development and software solutions to improve institutional workflows and support the design of practical digital tools.\n\nShe is also co-author of a published research study on carpooling and traffic-flow optimization, combining bibliometric analysis with integer linear programming to explore more efficient and sustainable urban mobility solutions.\n\nHer current interests center on applied artificial intelligence, Python, machine learning, data analysis, and the development of technology with practical and social impact.",
      },
      {
        name: "Óscar Andrés Obando Umaña",
        role: "Computer Science Student, Tecnológico de Costa Rica (TEC)",
        image: "/images/speakers/oscar-andres-obando-umana.png",
        bio: "Óscar Obando is a Computer Science student at Tecnológico de Costa Rica (TEC), with focus on software engineering. He has interest on software development, automation, artificial intelligence, and the design of solutions for real-world problems. His academic and professional experience includes software development, system design, software testing, and the application of AI to software engineering processes.\n\nHe has contributed to projects involving the design, development, and evaluation of software solutions. As part of his work, he helped design and execute performance benchmarks for language models, developing experimental methodologies and analyzing results to draw meaningful comparisons.\n\nHe is currently developing a software module for the Centro Nacional de Detección Temprana de Cáncer Gástrico (CNDTCG), a Costa Rican organization responsible for cancer screening campaigns. The project focuses on digitally managing the workflow and information associated with gastroduodenal series studies, supporting the modernization of clinical processes.\n\nHe also has experience with AI-assisted software development, exploring role-based architectures and a custom orchestrator to structure and coordinate AI agents in support of software development and documentation processes.",
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
    slug: "modern-parallel-python-hpc-ai",
    code: "05 // HPC_PYTHON",
    title: "Modern Parallel Programming in Python for HPC and Artificial Intelligence",
    accent: "cyan",
    description:
      "Python is the predominant language in data science, artificial intelligence, and scientific computing. In this workshop, participants will learn how to overcome performance limitations using modern high-performance computing techniques, from parallelism on a single machine to distributed execution on HPC clusters and GPU acceleration.",
    tags: ["Python", "HPC", "GPU / Distributed Computing"],
    partner: "CeNAT / Colaboratorio Nacional de Computación Avanzada (CCNA)",
    speakers: [
      {
        name: "Christian Asch",
        role: "Collaborator, CeNAT and Colaboratorio Nacional de Computación Avanzada (CCNA)",
        image: "/images/speakers/christian-asch.jpeg",
        bio: "Christian Asch is a collaborator at the National Center for High Technology (CeNAT) and the Advanced Computing Collaboratory (CCNA), where he participates in projects related to high-performance computing (HPC), parallel programming, distributed computing, and GPU acceleration.\n\nHe holds a Bachelor's degree in Computing and Informatics with an emphasis in Computer Science from the University of Costa Rica (UCR). He has contributed to research in areas such as computational physics, supercomputing, performance analysis, parallel algorithms, cybersecurity, and HPC infrastructure for academic research. His primary interest is bringing modern high-performance computing techniques to scientific, academic, and data science communities through accessible tools in the Python ecosystem.",
      },
      {
        name: "Luis Carlos N. Todd",
        role: "Research Assistant at ITCR and CeNAT, M.Sc. Student at ITCR",
        initials: "LT",
        bio: "Luis Carlos N. Todd is a research assistant at the Costa Rica Institute of Technology and at the National Center for High Technology, where he works in projects about high-performance computing (HPC), deep learning (DL), natural language processing (NLP) and bioinformatics.\n\nHe holds a Bachelor's degree in Computer Engineering and currently is a M.Sc. Student in Computer Science at ITCR. His research interests include fault tolerance for DL and HPC systems, retrieval-augmented generation (RAG) and agents in HPC infrastructures, resource optimization techniques for DL and data science. He has experience working with quantization-aware training, mixed precision optimizations and Bayesian models in the python ecosystem using technologies like Pytorch, Jax and NumPyro. He has also leveraged high-performance tools like the HDF5 library to study silent data corruptions (SDCs) in DL and HPC dwarfs with parallel and distributed workloads.",
      },
    ],
    sections: [
      {
        label: "Topics",
        items: [
          "Fundamentals of High-Performance Computing (HPC).",
          "Strategies for accelerating scientific and data-analysis applications in Python.",
          "Parallelism on multicore architectures.",
          "Efficient processing of large volumes of data.",
          "GPU-accelerated computing.",
          "Applications of HPC in artificial intelligence and machine learning.",
          "Distributed computing and scaling across multiple nodes.",
          "Modern tools from the Python ecosystem for HPC.",
          "Best practices for performance, measurement, and optimization.",
          "Using HPC infrastructure for research and innovation.",
        ],
      },
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
