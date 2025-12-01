export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  skills: string[];
  curriculum: string[];
  careerPaths: string[];
  googleFormUrl: string;
}

export const servicesData: Service[] = [
  {
    id: "machine-learning-engineer",
    icon: "🤖",
    title: "Machine Learning Engineer",
    description: "Master ML algorithms, model development, and deployment. Build intelligent systems using TensorFlow, PyTorch, and scikit-learn with real-world applications.",
    fullDescription: "Become a Machine Learning Engineer and master the art of building intelligent systems. This comprehensive program covers everything from fundamental ML algorithms to advanced deep learning techniques and production deployment strategies. You'll gain hands-on experience with industry-standard tools and frameworks, working on real-world projects that prepare you for immediate impact in tech companies. Our curriculum is designed by industry experts to bridge the gap between theoretical knowledge and practical implementation.",
    duration: "3 - 4 months",
    skills: [
      "Python Programming",
      "TensorFlow & PyTorch",
      "Neural Networks & Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Model Deployment & MLOps",
      "Data Preprocessing",
      "Scikit-learn & Pandas"
    ],
    curriculum: [
      "Introduction to Machine Learning Concepts",
      "Python for ML and Data Science",
      "Supervised Learning Algorithms",
      "Unsupervised Learning & Clustering",
      "Deep Learning & Neural Networks",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN)",
      "Natural Language Processing",
      "Computer Vision Projects",
      "Model Optimization & Tuning",
      "MLOps & Production Deployment",
      "Capstone Project"
    ],
    careerPaths: [
      "Machine Learning Engineer",
      "AI Research Scientist",
      "Deep Learning Engineer",
      "Computer Vision Engineer",
      "NLP Engineer",
      "MLOps Engineer"
    ],
    googleFormUrl: "https://forms.google.com/your-ml-form-url"
  },
  {
    id: "data-scientist",
    icon: "📊",
    title: "Data Scientist",
    description: "Learn statistical analysis, predictive modeling, and data visualization. Work with Python, R, and advanced analytics tools to extract insights from complex datasets.",
    fullDescription: "Become a Data Scientist and unlock the power of data-driven decision making. This program equips you with the skills to analyze complex datasets, build predictive models, and communicate insights effectively to stakeholders. You'll master statistical methods, machine learning techniques, and business intelligence tools used by Fortune 500 companies. Our project-based approach ensures you graduate with a portfolio that demonstrates your ability to solve real business problems.",
    duration: "3 - 4 months",
    skills: [
      "Statistical Analysis",
      "Python & R Programming",
      "Data Visualization",
      "Predictive Modeling",
      "SQL & Database Management",
      "Machine Learning",
      "A/B Testing",
      "Business Intelligence"
    ],
    curriculum: [
      "Statistics for Data Science",
      "Python & R Programming Fundamentals",
      "Data Wrangling & Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization with Tableau & Power BI",
      "SQL & Database Querying",
      "Predictive Analytics",
      "Machine Learning for Data Science",
      "Time Series Analysis",
      "A/B Testing & Experimentation",
      "Business Intelligence & Reporting",
      "Real-world Data Science Projects"
    ],
    careerPaths: [
      "Data Scientist",
      "Business Intelligence Analyst",
      "Analytics Manager",
      "Research Analyst",
      "Quantitative Analyst",
      "Data Science Consultant"
    ],
    googleFormUrl: "https://forms.google.com/your-ds-form-url"
  },
  {
    id: "data-analyst",
    icon: "📈",
    title: "Data Analyst",
    description: "Master data cleaning, analysis, and reporting. Use SQL, Excel, Tableau, and Power BI to transform raw data into actionable business insights.",
    fullDescription: "Start your journey as a Data Analyst and learn to transform raw data into actionable insights. This hands-on program teaches you the essential tools and techniques used by top companies to drive data-informed decisions. You'll become proficient in SQL, Excel, and visualization tools while developing strong analytical thinking and communication skills. Our industry-aligned curriculum prepares you for immediate employment in various sectors.",
    duration: "3 - 4 months",
    skills: [
      "SQL & Database Queries",
      "Excel & Advanced Formulas",
      "Tableau & Power BI",
      "Data Cleaning & Processing",
      "Statistical Analysis",
      "Dashboard Creation",
      "Report Writing",
      "Business Analytics"
    ],
    curriculum: [
      "Introduction to Data Analysis",
      "SQL Fundamentals & Advanced Queries",
      "Excel for Data Analysis",
      "Data Cleaning Techniques",
      "Statistical Methods",
      "Data Visualization Principles",
      "Tableau Mastery",
      "Power BI Development",
      "Dashboard Design",
      "Business Reporting",
      "KPI Development",
      "Industry Projects"
    ],
    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "Operations Analyst",
      "Financial Analyst",
      "Marketing Analyst",
      "Product Analyst"
    ],
    googleFormUrl: "https://forms.google.com/your-da-form-url"
  },
  {
    id: "web-developer",
    icon: "💻",
    title: "Web Developer",
    description: "Build modern, responsive web applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB. Learn full-stack development from industry experts.",
    fullDescription: "Become a Full-Stack Web Developer and build modern, scalable web applications from scratch. This comprehensive program covers both frontend and backend technologies, enabling you to create complete web solutions. You'll learn industry best practices, modern frameworks, and deployment strategies while building real projects that showcase your skills. Our mentorship-driven approach ensures you're job-ready upon completion.",
    duration: "3 - 4 months",
    skills: [
      "HTML5 & CSS3",
      "JavaScript & ES6+",
      "React.js & Redux",
      "Node.js & Express",
      "MongoDB & Mongoose",
      "REST APIs",
      "Git & GitHub",
      "Responsive Design"
    ],
    curriculum: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript Programming",
      "Modern JavaScript (ES6+)",
      "React.js Development",
      "State Management with Redux",
      "Node.js & Express Backend",
      "MongoDB Database",
      "RESTful API Development",
      "Authentication & Authorization",
      "Responsive Web Design",
      "Version Control with Git",
      "Deployment & DevOps Basics",
      "Full-Stack Projects"
    ],
    careerPaths: [
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "React Developer",
      "Web Application Developer",
      "JavaScript Engineer"
    ],
    googleFormUrl: "https://forms.google.com/your-web-form-url"
  },
  {
    id: "cybersecurity-engineer",
    icon: "🔒",
    title: "Cybersecurity Engineer",
    description: "Protect digital infrastructure through ethical hacking, penetration testing, and security protocols. Master tools like Kali Linux, Metasploit, and Wireshark.",
    fullDescription: "Become a Cybersecurity Engineer and protect organizations from evolving cyber threats. This intensive program covers ethical hacking, penetration testing, and security best practices to secure digital infrastructure. You'll gain hands-on experience with industry-standard security tools and learn to think like an attacker to build stronger defenses. Our lab-based training ensures you're prepared for real-world security challenges.",
    duration: "3 - 4 months",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Kali Linux",
      "Metasploit Framework",
      "Wireshark",
      "Security Protocols",
      "Incident Response"
    ],
    curriculum: [
      "Introduction to Cybersecurity",
      "Network Fundamentals",
      "Linux & Command Line",
      "Ethical Hacking Basics",
      "Penetration Testing Methodology",
      "Web Application Security",
      "Network Security & Firewalls",
      "Cryptography",
      "Malware Analysis",
      "Security Tools (Kali, Metasploit, Wireshark)",
      "Incident Response & Forensics",
      "Security Compliance & Governance",
      "Real-world Security Projects"
    ],
    careerPaths: [
      "Cybersecurity Engineer",
      "Penetration Tester",
      "Security Analyst",
      "Ethical Hacker",
      "Security Consultant",
      "Incident Response Specialist"
    ],
    googleFormUrl: "https://forms.google.com/your-cyber-form-url"
  },
  {
    id: "blockchain-engineer",
    icon: "⛓️",
    title: "Blockchain Engineer",
    description: "Develop decentralized applications and smart contracts. Learn Ethereum, Solidity, Web3.js, and build secure blockchain solutions for the future.",
    fullDescription: "Become a Blockchain Engineer and build the decentralized future. This cutting-edge program covers smart contract development, DApp creation, and blockchain architecture to create secure and transparent solutions. You'll master Ethereum development, Solidity programming, and Web3 technologies while working on projects that showcase the transformative potential of blockchain. Our curriculum keeps pace with this rapidly evolving field.",
    duration: "3 - 4 months",
    skills: [
      "Blockchain Fundamentals",
      "Solidity Programming",
      "Smart Contracts",
      "Ethereum Development",
      "Web3.js",
      "DApp Development",
      "Cryptography",
      "Blockchain Security"
    ],
    curriculum: [
      "Blockchain Technology Fundamentals",
      "Cryptocurrency Basics",
      "Ethereum Platform",
      "Solidity Programming",
      "Smart Contract Development",
      "Web3.js & Ethereum APIs",
      "DApp Development",
      "IPFS & Decentralized Storage",
      "Token Standards (ERC-20, ERC-721)",
      "DeFi Concepts",
      "Blockchain Security",
      "Testing & Deployment",
      "Blockchain Projects"
    ],
    careerPaths: [
      "Blockchain Developer",
      "Smart Contract Developer",
      "DApp Developer",
      "Blockchain Architect",
      "Crypto Developer",
      "Web3 Engineer"
    ],
    googleFormUrl: "https://forms.google.com/your-blockchain-form-url"
  }
];
