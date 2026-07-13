export const navItems = [
  { label: "Home", href: "/" },
  { label: "Tracks", href: "/tracks" },
  { label: "Agenda", href: "/agenda" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Venue", href: "/venue" },
  { label: "80th Anniversary", href: "/anniversary" },
];

export const stats = [
  { value: "80+", label: "Top-tier attendees", accent: "blue" },
  { value: "4", label: "Advanced tracks", accent: "orange" },
  { value: "15+", label: "Global keynotes", accent: "cyan" },
  { value: "24h", label: "Hands-on lab time", accent: "blue-soft" },
];

export const trackCards = [
  {
    slug: "cybersecurity-smart-buildings",
    code: "01 // CYBERSECURITY",
    title: "Una introducci\u00f3n a la ciberseguridad de edificios inteligentes cr\u00edticos",
    accent: "cyan",
    description:
      "Bloques virtuales as\u00edncronos sobre ciberseguridad aplicada a edificios inteligentes, sistemas de control y el protocolo BACnet.",
    tags: ["Edificios inteligentes", "BACnet", "Python / Docker"],
    partner: "Modalidad: Bloques virtuales as\u00edncronos.",
    speaker: {
      name: "Herson",
      role: "Adjunct Professor and Researcher, Costa Rica Institute of Technology (TEC)",
      image: "/images/speakers/herson.jpg",
      bio: "Herson is an adjunct professor and researcher at the Costa Rica Institute of Technology (TEC), where he is part of the management and teaching staff of the Cybersecurity Master's Program. He teaches undergraduate and graduate courses in cybersecurity and leads TEC's cybersecurity research group, El Hackatorio. He earned his PhD in Cybersecurity from the University of Twente, The Netherlands. His research collaborations with both industry and academic partners include the Siemens CERT, Singapore University of Technology and Design (SUTD), CISPA Helmholtz Center for Information Security, among others.",
    },
    sections: [
      {
        label: "Lista de temas",
        items: [
          "Introducci\u00f3n al concepto de edificios inteligentes.",
          "Ciberseguridad aplicada a edificios inteligentes.",
          "Requerimientos de ciberseguridad.",
          "Amenazas de ciberseguridad.",
          "El protocolo BACnet (ISO 16484-5).",
          "Herramientas de defensa para edificios inteligentes.",
        ],
      },
      {
        label: "Perfil de ingreso",
        items: [
          "Conocimiento general en computaci\u00f3n, ciberseguridad o sistemas de control.",
          "Conocimientos b\u00e1sicos en el lenguaje de programaci\u00f3n Python.",
          "Conocimientos b\u00e1sicos de Docker.",
        ],
      },
      {
        label: "Perfil de salida",
        items: [
          "Fundamentos de ciberseguridad en edificios inteligentes.",
          "Conocimientos en el protocolo de comunicaci\u00f3n BACnet (ISO 16484-5).",
          "Capacidad de ejecutar ciberataques contra edificios inteligentes emulados.",
        ],
      },
    ],
  },
  {
    slug: "deep-learning-time-series",
    code: "02 // DEEP_LEARNING",
    title: "Aprendizaje Profundo para Pronósticos de Series de Tiempo",
    accent: "orange",
    description:
      "Taller práctico para desarrollar modelos de aprendizaje profundo orientados al pronóstico de series de tiempo, desde la exploración de datos hasta la evaluación de resultados.",
    tags: ["Series de tiempo", "LSTM / TCN", "Forecasting"],
    partner: "Tecnológico de Costa Rica (TEC)",
    speaker: {
      name: "Martín Solís",
      role: "Profesor e investigador, Tecnológico de Costa Rica",
      image: "/images/speakers/martin-solis.jpg",
      bio: "Es profesor e investigador del Tecnológico de Costa Rica. Estadístico de formación con Maestrías en Estadística y Ciencia de Datos. Doctor en Gestión Pública y Ciencias Empresariales. Su trabajo de investigación se centra en las áreas de pronósticos y análisis de series de tiempo. También ha trabajado en el desarrollo y aplicación de modelos predictivos con aprendizaje automático para resolver problemas en diferentes áreas, como detección anticipada de deserción estudiantil, predicciones en agricultura usando datos de sensores y simplificación de textos con grandes modelos de lenguaje, entre otros.",
    },
    sections: [
      {
        label: "Objetivo",
        items: [
          "Desarrollar las competencias prácticas necesarias para diseñar, entrenar y evaluar modelos de aprendizaje profundo orientados al pronóstico de series de tiempo.",
        ],
      },
      {
        label: "Contenido",
        items: [
          "Introducción a series de tiempo: componentes, caracterización, descomposición, gráficas de estacionalidad, autocorrelogramas y manejo de datos perdidos.",
          "Preparación de datos: normalización, transformación a problema supervisado y división de datos.",
          "Entrenamiento y optimización de redes: arquitecturas LSTM y TCN, y estrategias de optimización.",
          "Evaluación y visualización de resultados.",
        ],
      },
      {
        label: "Requisitos",
        items: ["Conocimientos básicos de aprendizaje automático."],
      },
    ],
  },
  {
    slug: "llm-engineering",
    code: "03 // LLM_ENGINEERING",
    title: "Introducción a la Ingeniería de Modelos Grandes de Lenguaje",
    accent: "cyan",
    description:
      "Laboratorio temático corto sobre fundamentos del Procesamiento del Lenguaje Natural (PLN) y la aplicación práctica de Modelos Grandes de Lenguaje (LLMs) en tareas de clasificación de textos.",
    tags: ["PLN", "BERT / Embeddings", "Zero-shot / Few-shot"],
    partner: "Laboratorio temático corto",
    speakers: [
      {
        name: "Saul Calderón Ramírez",
        role: "Coordinador de Ciencias de los Datos, Spartan Approach; coordinador de PARMA-Group, TEC",
        image: "/images/speakers/saul-calderon.png",
        bio: "• Ph. D. en Ciencias de la computación y sistemas inteligentes, Universidad De Montfort, Reino Unido, becado por la Universidad De Montfort. • Magister Scientae en Ingeniería Eléctrica con énfasis en sistemas digitales, Universidad de Costa Rica (UCR). • Bachiller en Computación e Informática, Universidad de Costa Rica. • Coordinador departamento ciencias de los datos, Spartan Approach. • Especialidades: Procesamiento digital de señales (sonido, imágenes, video), reconocimiento de patrones, aprendizaje automático y computación paralela. • Coordinador del PAttern Recognition and Machine Learning Group (PARMA-Group) en el TEC. • Publicaciones: Alrededor de 40 artículos en conferencias internacionales de alto renombre como el ICIP y el NIPS y revistas de primer y segundo cuartil, en el área de procesamiento digital de señales, reconocimiento de patrones y aprendizaje profundo. • Ha impartido cursos en temas de aprendizaje automático, redes neuronales, aprendizaje profundo, programación y electrónica. Ello en los programas de Maestría en Ciencias de la Computacion (TEC), Bachillerato Ingeniería en Computacion (TEC), programa de Ciencias de Datos (TEC), Ingeniería en Computadores (TEC), Ingeniería Eléctrica (UCR) y ha sido profesor invitado en la Universidad De Montfort (Reino Unido) y la Universidad de Buenos Aires (Argentina) • Experiencia profesional: Intel: investigación y desarrollo en análisis de imágenes, Search Technologies: consultor en Big Data, Spartan Approach: inteligencia artificial y ciencias de datos, Investigador en el Centro de Investigación en Tecnologías de la Información y comunicación (UCR, CITIC), grupo de Procesamiento de Imágenes y Visión Computacional (UBA, Argentina), entre otros.",
      },
      {
        name: "Esteban Villalobos Gómez",
        role: "AI & LLM Architecture Technical Manager, Accenture",
        image: "/images/speakers/esteban-villalobos.png",
        bio: "Esteban Villalobos Gómez es un ingeniero de software y consultor con más de 20 años de trayectoria, especializado en ingeniería de Machine Learning, procesamiento de datos a gran escala y arquitecturas de alto rendimiento. Actualmente se desempeña como AI & LLM Architecture Technical Manager en Accenture, donde lidera el diseño e implementación de sistemas agénticos para clientes que son corporaciones globales, permitiendo la automatización de análisis de datos complejos y la optimización de procesos críticos. Su experiencia destaca por la orquestación de soluciones avanzadas de IA Generativa (RAG) utilizando tecnologías de vanguardia como LangGraph, Databricks, Azure OpenAI y arquitecturas robustas en la nube sobre AWS y Azure.\n\nEn el ámbito académico, Esteban posee una sólida formación que incluye una Maestría en Ciencias de la Computación (Magna Cum Laude) del Instituto Tecnológico de Costa Rica (ITCR), donde desarrolló una tesis de investigación sobre la estimación de incertidumbre en modelos generativos para el proyecto LHCb en el CERN. Complementa su perfil con posgrados en Ciencia de Datos y Big Data, además de su título base en Ingeniería en Computación del ITCR.\n\nA lo largo de su carrera, ha liderado equipos multidisciplinarios en la entrega de productos tecnológicos de alto impacto, desde sistemas de monitoreo de tuberías de datos (ETL) hasta microservicios escalables en Python, Java y C#. Su enfoque profesional combina una profunda pericia técnica en el manejo de datos estructurados y no estructurados con una visión estratégica para guiar a las organizaciones hacia la próxima generación de iniciativas de IA. Actualmente, se enfoca en la evolución de arquitecturas de modelos de lenguaje (LLM) y la creación de agentes digitales inteligentes que transforman la competitividad empresarial a escala global.",
      },
      {
        name: "Danny Xie Li",
        role: "Doctorando en Inteligencia Artificial y High Performance Computing, Universidad de Luxemburgo",
        image: "/images/speakers/danny-xie-li.png",
        bio: "Estudiante de Doctorado (Ph.D.) en Inteligencia Artificial y Computación de Alto Rendimiento (High Performance Computing) en la Universidad de Luxemburgo, donde forma parte del grupo de investigación Trustworthy AI for Science de la Facultad de Ciencias, Tecnología y Medicina (Faculty of Science, Technology and Medicine). Obtuvo el grado de Bachillerato en Ingeniería en Computación en el Instituto Tecnológico de Costa Rica (TEC), Cartago, Costa Rica, en 2021, y el grado de Maestría en Computación con énfasis en Inteligencia Artificial en la misma institución en 2026. Cuenta con experiencia como investigador en el Centro Nacional de Alta Tecnología (CeNAT), el Pattern Recognition and Machine Learning (PARMA-Group) Research Group del Instituto Tecnológico de Costa Rica, el Imagine Lab de la Universidad de Costa Rica y el Computer Vision Laboratory de la Universidad de Ljubljana. Su investigación se ha centrado en inteligencia artificial, aprendizaje automático, visión por computadora, procesamiento de lenguaje natural y ciencia de datos. Entre sus contribuciones destacan el desarrollo de métodos de detección y seguimiento múltiples de objetos para aplicaciones de agricultura de precisión, así como modelos de lenguaje de gran escala para mejorar la accesibilidad del idioma español y otras aplicaciones. En el ámbito profesional, se ha desempeñado como ingeniero en ciencia de datos en Accenture, participando en el diseño e implementación de soluciones de inteligencia artificial, aprendizaje automático y analítica avanzada para diversos sectores industriales. Sus principales líneas de investigación incluyen visión por computadora, procesamiento de lenguaje natural, aprendizaje profundo (Deep Learning), aprendizaje de representaciones, análisis de datos no estructurados e inteligencia artificial confiable (Trustworthy Artificial Intelligence).",
      },
    ],
    sections: [
      {
        label: "Contexto",
        items: [
          "El dataset utilizado proviene de una investigación realizada por estudiantes de maestría y doctorado, quienes desarrollaron el corpus FEINA como parte de sus trabajos sobre simplificación de textos financieros para personas con discapacidad visual. Este recurso permite trabajar con datos reales y de impacto social.",
          "El laboratorio combina teoría con práctica intensiva utilizando Python, scikit-learn, Hugging Face Transformers y Jupyter Notebooks, y culmina con un análisis estadístico para determinar qué enfoque es más efectivo en la detección de complejidad textual.",
        ],
      },
      {
        label: "Objetivos",
        items: [
          "Comprender el algoritmo de clasificación binaria de regresión logística y reconocer cuándo puede ser más eficiente y eficaz que usar un modelo grande de lenguaje.",
          "Generar representaciones densas de texto utilizando modelos de embeddings preentrenados como BERT y comprender las ventajas de las representaciones contextuales sobre las basadas en frecuencia.",
          "Diseñar pipelines de clasificación que integren métodos tradicionales y arquitecturas modernas de LLMs, evaluando su desempeño con métricas apropiadas.",
          "Aplicar técnicas de prompting zero-shot y few-shot para aprovechar el conocimiento implícito de los LLMs sin necesidad de entrenamiento supervisado extenso.",
          "Realizar evaluaciones experimentales robustas, incluyendo validación cruzada con múltiples corridas, particiones estratificadas y pruebas estadísticas de comparación de tratamientos.",
          "Interpretar y comunicar resultados mediante tablas, gráficos de convergencia, superficies de decisión y análisis cualitativo de ejemplos de clasificación.",
        ],
      },
    ],
  },
  {
    slug: "decentralized-web",
    code: "04 // WEB_DECENTRALIZED",
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

export const agendaDays = [
  {
    title: "Day 1: Vision",
    date: "September 22, 2026",
    status: "Live tracks",
    sessions: [
      {
        time: "09:00 - 10:30",
        label: "Strategic keynote",
        title: "Technological Sovereignty in LATAM",
        description:
          "A high-level opening session on AI autonomy, quantum-ready infrastructure, and the next regional computing roadmap.",
        accent: "blue",
      },
      {
        time: "11:00 - 13:00",
        label: "Mentoring circles",
        title: "Architecting Scale: CXO Sessions",
        description:
          "Closed-door groups focused on scaling hardware-software integrated startups across emerging markets.",
        accent: "muted",
      },
      {
        time: "14:30 - 17:00",
        label: "Panel discussion",
        title: "Green Energy for Compute Clusters",
        description:
          "How Latin America can leverage renewable grids to power the next generation of high-performance computing.",
        accent: "muted",
      },
      {
        time: "19:30 - late",
        label: "Social engineering",
        title: "Visionary Networking Dinner",
        description:
          "A premium closing dinner for speakers, researchers, and strategic partners.",
        accent: "orange",
      },
    ],
  },
  {
    title: "Day 2: Deep Dive",
    date: "September 23, 2026",
    status: "Certification labs",
    sessions: [
      {
        time: "08:30 - 12:00",
        label: "Immersive workshop",
        title: "Quantum Cryptography Lab",
        description:
          "A technical workshop for post-quantum security layers on modern cloud and edge architectures.",
        accent: "blue",
      },
      {
        time: "13:30 - 16:30",
        label: "Certification project",
        title: "Edge Computing Certification",
        description:
          "Collaborative build track with deployable prototypes and IEEE competency validation.",
        accent: "cyan",
      },
      {
        time: "16:45 - 18:00",
        label: "Closing summary",
        title: "Summit Retrospective",
        description:
          "Synthesis of workshops, findings, and announcement of the 2027 research grant cycle.",
        accent: "muted",
      },
      {
        time: "18:30 - 21:00",
        label: "Ceremony",
        title: "Closing Cocktail & Awards",
        description:
          "Awards, certification acknowledgements, and closing partner commitments.",
        accent: "orange",
      },
    ],
  },
];

export const sponsorTiers = [
  {
    tier: "Sponsor",
    accent: "blue",
    companies: ["IEEE Computer Society"],
    logos: {
      "IEEE Computer Society": "/images/sponsors/ieee-computer-society.png",
    },
  },
  {
    tier: "Partners",
    accent: "cyan",
    companies: [
      "Dojo",
      "Unidad de Posgrados de Computación del TEC Costa Rica",
    ],
    logos: {
      "Unidad de Posgrados de Computación del TEC Costa Rica":
        "/images/sponsors/unidad-posgrados-computacion.png",
    },
  },
];

export const venueFacts = [
  {
    title: "Primary venue",
    text: "Four Points by Sheraton / Marriott Sabana, in the center of San Jose's tech corridor.",
  },
  {
    title: "Airport connection",
    text: "Juan Santamaria International Airport with direct shuttle access for delegates and speakers.",
  },
  {
    title: "Technical amenities",
    text: "Wi-Fi 6E, hybrid streaming rooms, live demo zones, and collaboration lounges.",
  },
];
