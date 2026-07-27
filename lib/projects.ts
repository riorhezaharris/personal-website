export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  githubUrl: string;
  status: "written" | "coming-soon";
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "bank-ledger",
    title: "Bank Ledger",
    oneLiner: "A consistency-first ledger built around strict correctness under partition.",
    githubUrl: "https://github.com/riorhezaharris/bank-ledger",
    status: "written",
    featured: true,
  },
  {
    slug: "todo-list",
    title: "Todo List",
    oneLiner: "An availability-first take on the same problem space, opposite tradeoff.",
    githubUrl: "https://github.com/riorhezaharris/todo-list",
    status: "written",
    featured: false,
  },
  {
    slug: "payment-gateway-webhook",
    title: "Payment Gateway Webhook",
    oneLiner: "Webhook handling for financial events under real compliance constraints.",
    githubUrl: "https://github.com/riorhezaharris/payment-gateway-webhook",
    status: "written",
    featured: true,
  },
  {
    slug: "rate-limiter",
    title: "Rate Limiter",
    oneLiner: "A boundary-exploitation flaw, found and fixed.",
    githubUrl: "https://github.com/riorhezaharris/rate-limiter",
    status: "written",
    featured: true,
  },
  {
    slug: "load-balancer",
    title: "Load Balancer",
    oneLiner: "Zero-downtime failover across backend nodes.",
    githubUrl: "https://github.com/riorhezaharris/load-balancer",
    status: "coming-soon",
    featured: false,
  },
  {
    slug: "circuit-breaker",
    title: "Circuit Breaker",
    oneLiner: "Failing fast to protect a system under cascading load.",
    githubUrl: "https://github.com/riorhezaharris/circuit-breaker",
    status: "coming-soon",
    featured: false,
  },
  {
    slug: "automated-log-archiver",
    title: "Automated Log Archiver",
    oneLiner: "Rolling log retention and archival without manual intervention.",
    githubUrl: "https://github.com/riorhezaharris/automated-log-archiver",
    status: "coming-soon",
    featured: false,
  },
  {
    slug: "behavioral-tracker",
    title: "Behavioral Tracker",
    oneLiner: "Event tracking pipeline for user behavior analytics.",
    githubUrl: "https://github.com/riorhezaharris/behavioral-tracker",
    status: "coming-soon",
    featured: false,
  },
  {
    slug: "weather-app",
    title: "Weather App",
    oneLiner: "A small full-stack app exploring third-party API integration patterns.",
    githubUrl: "https://github.com/riorhezaharris/weather-app",
    status: "coming-soon",
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
