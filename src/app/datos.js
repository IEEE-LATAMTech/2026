export const navItems = [
  { label: "Home", href: "/" },
  { label: "Tracks", href: "/tracks" },
  { label: "Agenda", href: "/agenda" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Venue", href: "/venue" },
];

export const stats = [
  { value: "80+", label: "Top-tier attendees", accent: "blue" },
  { value: "4", label: "Advanced tracks", accent: "orange" },
  { value: "15+", label: "Global keynotes", accent: "cyan" },
  { value: "24h", label: "Hands-on lab time", accent: "blue-soft" },
];

export const trackCards = [
  {
    slug: "quantum-hpc",
    code: "01 // QUANTUM_HPC",
    title: "Quantum & High Performance Computing",
    accent: "blue",
    description:
      "Hybrid compute architectures, quantum-readiness, and scalable simulation pipelines for regional infrastructure.",
    tags: ["Quantum circuits", "Scalable architecture"],
    partner: "CERN / IEEE Quantum / IBM Research",
    objectives: [
      "Engineer error-corrected quantum workflows for emerging regional clusters.",
      "Move classical HPC workloads into hybrid quantum-classical pipelines.",
      "Prototype resilient compute architectures for research-heavy environments.",
    ],
  },
  {
    slug: "trust-security",
    code: "02 // TRUST_SECURITY",
    title: "Trust & Cybersecurity Systems",
    accent: "cyan",
    description:
      "Security-by-design for critical systems, post-quantum cryptography, and resilient public infrastructure.",
    tags: ["Zero trust", "Cryptography"],
    partner: "IBM Security / CERT-LATAM / Akamai",
    objectives: [
      "Design post-quantum secure architectures for sovereign data platforms.",
      "Harden distributed systems against advanced and state-level threats.",
      "Deploy privacy-preserving data exchange across regulated ecosystems.",
    ],
  },
  {
    slug: "ai-patterns",
    code: "03 // AI_PATTERN",
    title: "AI & Pattern Analysis",
    accent: "orange",
    description:
      "Applied AI beyond hype, with efficient models, governance patterns, and deployment for constrained contexts.",
    tags: ["Neural nets", "Generative AI"],
    partner: "Intel / Microsoft / NVIDIA AI",
    objectives: [
      "Train and adapt multimodal systems for regional and multilingual use cases.",
      "Build federated and privacy-aware AI systems for health and public services.",
      "Apply ethical AI controls in production-grade environments.",
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
    date: "October 14, 2026",
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
    date: "October 15, 2026",
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
  },
  {
    tier: "Partners",
    accent: "cyan",
    companies: [
      "Dojo",
      "Unidad de Posgrados de Computacion del TEC Costa Rica",
    ],
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
