import { useState } from 'react';
// Import the modal component we built earlier
import ExperienceModal from './ExperienceModal'; 

export default function ExperienceSection() {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  const experiences = [
    {
      id: 'stealth-startup0',
      role: "Founding Engineer",
      company: "Stealth Startup",
      period: "Oct 2025 - Current",
      brief: "Led the entire technical evolution of early-stage ventures. Responsible for translating customer pain points into production-ready scalable software.",
      breakdowns: [
        {
          title: "ACID Compliance and Data Reliability",
          description: "Implemented a Write-Ahead Logging (WAL) pattern combined with PostgreSQL's Isolation Levels and SQLite to ensure ACID compliance. Used asyncpg in a FastAPI environment to manage database I/O that allows the system to maintain high throughput even during peak transaction volum across distributed nodes.",
          tags: ["PostgreSQL", "ACID", "Write-Ahead Logging", "asyncpg"]
        },
        {
          title: "Data Engineering and Business Logic",
          description: "Architected an asynchronous data processing pipeline in Python and Typescript that aggregated data from multiple locations into optimized analytical insights. By applying mathematical modeling to raw datasets and incorporating a pre-computed caching tactic, reduced consequential query latency for real-time business intelligence by 98%.",
          tags: ["Python", "Data Analytics", "TypeScript", "System Optimization"]
        },
        {
          title: "Scalable Live Messaging",
          description: "Engineered a stateless WebSocket server cluster utilizing Redis Pub/Sub to synchronize message delivery across horizontal instances, supporting theoretically infinite concurrent chat rooms. Optimized historical data retrieval by implementing PostgreSQL Partial Indexes and B-Tree indexing on Unix timestamps, reducing message log lookup times by 85% for multi-million row datasets.",
          tags: ["Redis Pub/Sub", "WebSockets", "SQL Optimization", "FastAPI"]
        },
        {
            title: "E2EE & Cryptograpy",
            description: "Developed an End-to-End Encryption (E2EE) framework utilizing AES-256-GCM for data-at-rest and TLS 1.3 for data-in-transit. Designed a security middleware in FastAPI to execute cryptographic handshake validations and packet integrity audits to ensure zero-knowledge privacy while maintaining sub-10ms overhead on sensitive transaction routes.",
            tags: ["AES-256", "Cryptography", "FastAPI", "Security Architecture"]
        },
        {
            title: "Stateless Authentication & Identity Management",
            description: "Implemented an authentication layer using JWT (JSON Web Tokens) with RS256 asymmetric signing to secure stateless user sessions across distributed nodes. Designed a token rotation strategy (Access/Refresh/Half-Life Decay) to mitigate session hijacking risks and integrated custom FastAPI middleware for efficient permission scoping and cryptographic signature verification.",
            tags: ["JWT", "OAuth2", "FastAPI", "Identity Security"]
        }
      ]
    },
    {
      id: 'stealth-startup1',
      role: "Senior Software Engineer",
      company: "Stealth Startup",
      period: "May 2024 - Oct 2025",
      brief: "Owned the end-to-end delivery of custom software for startups and local enterprises. Translated business requirements into robust architectures, managing everything from initial system design to final production deployment.",
      breakdowns: [
        {
          title: "AI Curricula Orchestration",
          description: "Architected a multi-model RAG (Retrieval-Augmented Generation) pipeline utilizing Gemini and GPT-4o to synthesize unstructured student datasets into optimized learning paths. Engineered automated ETL workflows for vector embeddings, implementing semantic search and ranking logic that reduced manual curriculum design time by 10+ hours weekly for educational stakeholders.",
          tags: ["LLM Orchestration", "RAG", "Vector Databases", "ETL Pipelines"]
        },
        {
            title: "Scalable Inventory Platform",
            description: "Developed an inventory ecosystem that scaled a single-business operation to 5,000+ Monthly Active Users (MAU). Optimized database indexing and query execution plans to maintain sub-100ms response times despite a rapidly expanding transactional dataset.",
            tags: ["Performance Scaling", "React Native", "Query Optimization", "System Architecture"]
        }
      ]
    },
    {
      id: 'Epic Systems',
      role: "Software Engineer",
      company: "Epic Systems",
      period: "Aug 2022 - May 2024",
      brief: "Managed the entire development cycle of software ecosystems within a highly regulated industry. Specialized in architecting modern interoperability layers to ensure compatibility across multiple legacy systems.",
      breakdowns: [
        {
            title: "Enterprise Data Integrity and Synchronization",
            description: "Developed a large-scale user data synchronization engine that integrated different databases for over one million active users. By engineering a robust reconciliation layer in C# and SQL, I reduced system-wide data integrity conflicts by 60%.",
            tags: ["C#", "SQL", "Distributed Systems", "Data Integrity"]
            },
            {
            title: "High-Performance API Modernization",
            description: "Engineered a custom suite of scalable APIs to interface with complex legacy data structures, achieving a 30x reduction in core workflow latency. Optimized the frontend delivery pipeline using TypeScript and React by transforming bottlenecked legacy processes into a modern user experience.",
            tags: ["TypeScript", "React", "API Optimization", "Legacy Modernization"]
            },
            {
            title: "Fault-Tolerant Infrastructure and Load Balancing",
            description: "Designed a custom health monitoring system and internal load balancers in Python to manage traffic scaling across critical infrastructures. This initiative prevented an estimated $2.2M in monthly revenue leakage and automated 50+ hours of manual developer intervention through proactive system-recovery logic.",
            tags: ["Python", "Infrastructure", "Load Balancing", "Systems Reliability"]
        }
      ]
    },
    {
      id: 'Burton Lab',
      role: "Software Engineer",
      company: "Burton Lab",
      period: "Jan 2020 - May 2022",
      brief: "Applied scientific theory and mathematical modeling to contribute to advanced physics research. Conducted independent computational research for a Senior Honors Thesis by applying math and physics theory to design and executing complex data analysis.",
      breakdowns: [
        {
            title: "Computational ML and Particle Dynamics",
            description: "Engineered supervised and unsupervised machine learning models using TensorFlow and SciPy to classify high-velocity particle trajectories. Reduced the data processing pipeline latency by 80% while maintaining high statistical precision in stochastic motion detection by automating the analysis of millions of experimental data points.",
            tags: ["Python", "TensorFlow", "SciPy", "Machine Learning"]
            },
            {
            title: "Stochastic System Simulation Engine",
            description: "Developed a simulation suite with a Tkinter-based interface to model complex stochastic systems. Increased the simulation generation by 74% by implementing configurable parameter-weighting logic and optimizing numerical integration steps, allowing for rapid and accurate hypothesis testing.",
            tags: ["Python", "Numerical Modeling", "Simulation", "Tkinter"]
            },
            {
            title: "Peer-Reviewed Physics Research",
            description: "Co-authored and published original research in Physical Review E (PRE), focusing on the computational analysis of physical systems. Directed the mathematical modeling and data verification phases of the research, ensuring the theoretical results aligned with experimental observations through rigorous peer review.",
            tags: ["Physics Research", "Data Verification", "Mathematical Modeling", "Publications"]
        }
      ]
    },
  ];

  return (
    <div className="space-y-6">
      {experiences.map((job) => (
        <button
          key={job.id}
          onClick={() => setSelectedJob(job)}
          className="w-full cursor-pointer text-left transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-transparent hover:border-blue-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{job.role}</h3>
              <p className="text-sm text-gray-500 font-mono">{job.period}</p>
            </div>
            <p className="text-sm text-blue-600 font-medium">{job.company}</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {job.brief}
            </p>
            <div className="mt-4 text-blue-500 text-sm font-bold flex items-center">
              VIEW BREAKDOWN <span className="ml-2">→</span>
            </div>
          </div>
        </button>
      ))}

      {selectedJob && (
        <ExperienceModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </div>
  );
}
