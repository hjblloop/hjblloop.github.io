export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  tech: string[];
  elegantSolutions: string;
  picture: string;
}

export const projectData: Record<string, Project> = {
  'pos-system': {
    id: 'pos-system',
    title: "High-Concurrency POS System",
    role: "Systems Architect & Lead Engineer",
    summary: "Developed a centralized retail ecosystem for multi-location enterprises. Engineered a single source of truth for inventory, payroll, and tax accounting while supporting fragmented payment hardware (Stripe/Clover) into a unified process.",
    problem: "Incompatible hardware ecosystems and fragmented data streams created critical bottlenecks in cross-location business intelligence and financial reporting.",
    solution: "Developed a central data hub using TypeScript, Python, PostgreSQL, and a Redis-based locking mechanism for atomic state management.",
    results: "Increased overall operational efficiency by 80% and scaled to handle $100,000 in monthly volume.",
    tech: ["Python", "React Native", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe API"],
    elegantSolutions: "Mitigated hardware race conditions by implementing a distributed consensus layer using Cloudflare Workers and atomic timestamping. This ensured strict event sequencing and data integrity across fragmented hardware nodes during high-concurrency peak loads.",
    picture: "pos_system_design.png"
  },
  'financial-advisory-ecosystem': {
    id: 'financial-advisory-ecosystem',
    title: "Financial Advisory & Content Ecosystem",
    role: "Founding Engineer & Systems Architect",
    summary: "Developed a high-security financial ecosystem designed to bridge the gap between professional advisors and eager investors. This platform synthesizes E2EE data protocols, low-latency WebSocket communication, and an algorithmic content engine into a unified, user-centric interface.",
    problem: "High-output individuals, including small business owners and those managing multiple income streams, often lack the time to achieve high financial literacy or manage complex assets effectively.",
    solution: "Designed and developed a full-stack ecosystem featuring E2EE data security, a low-latency chat backbone, and an automated content engine for seamless advisory delivery.",
    results: "Built a production-ready platform that synthesizes complex financial workflows into intuitive user experiences while providing advisors with real-time interaction analytics.",
    tech: ["TypeScript", "React Native", "Python", "FastAPI", "PostgreSQL", "WebSockets", "AES-256", "Redis"],
    elegantSolutions: "Engineered a recommendation engine based on local maxima optimization, identifying statistically significant (p < 0.05, n >= 100) user behavior patterns to dynamically identify the ideal advisor profile based on specific user preferences.",
    picture: "investor_system_design.png"
  },
};
