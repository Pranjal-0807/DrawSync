import { Github, LinkedinIcon, Users } from "lucide-react";

export const NavBarOptions = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "History", href: "/history" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
];

export const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: "Document Name",
        level: 2,
      },
      id: "123",
      type: "header",
    },
    {
      data: {
        level: 4,
      },
      id: "1234",
      type: "header",
    },
  ],
  version: "2.8.1",
};

export const features = [
  {
    title: "Collaborative Canvas",
    desc: "Real-time diagramming for distributed teams. Fast, multiplayer, and intuitive.",
  },
  {
    title: "Markdown Editor",
    desc: "Document your architecture, design notes, and plans in plain text with rich formatting.",
  },
  {
    title: "Diagram-as-Code",
    desc: "Write diagrams like code and embed them in Git workflows.",
  },
  {
    title: "Integrations",
    desc: "Plug into Jira, GitHub, Slack, Notion, and more to sync team workflows.",
  },
  {
    title: "Version History",
    desc: "Rewind and review past versions — no more guessing what changed.",
  },
  {
    title: "AI Assistance",
    desc: "Autogenerate diagrams and documentation using AI suggestions.",
  },
];

export const projects = [
  { title: "Microservice System Map", type: "Architecture" },
  { title: "Product Onboarding Flow", type: "UX Diagram" },
  { title: "CI/CD Pipeline", type: "DevOps" },
  { title: "AI Decision Graph", type: "ML Ops" },
  { title: "SaaS Roadmap", type: "Planning" },
  { title: "API Ecosystem", type: "Integration" },
];

export const timelines = [
  {
    year: "2022",
    event: "The Spark",
    desc: "DrawSync started as a weekend hackathon project to simplify system diagramming.",
  },
  {
    year: "2023",
    event: "Launch",
    desc: "We launched our MVP and were featured on Product Hunt, gaining traction across dev teams.",
  },
  {
    year: "2024",
    event: "Scaling",
    desc: "DrawSync reached 100,000 users, with real-time collaboration, integrations, and AI features.",
  },
];

export const menu = [
  {
    id: 1,
    name: "Create Team",
    path: "/teams/create",
    icon: Users,
  },
];

export const menuList = [
  {
    id: 1,
    name: "Github",
    icon: Github,
    path: "https://github.com/Pranjal-0807/DrawSync",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: LinkedinIcon,
    path: "https://www.linkedin.com/in/pranjal-agarwal-84b335246",
  },
];

export const tableHeaders = ["File Name", "Created At", "Edited", "Author"];

export const OpenPositions = [
  {
    title: "Frontend Engineer",
    desc: "React + Tailwind. Build beautiful, responsive UIs.",
  },
  {
    title: "Backend Engineer",
    desc: "Node.js, PostgreSQL, scalable APIs and services.",
  },
  {
    title: "Product Designer",
    desc: "Shape user flows and visual identity.",
  },
  {
    title: "DevRel Advocate",
    desc: "Build community and empower developers.",
  },
];

export const CoreValues = [
  {
    title: "Simplicity",
    desc: "We create tools that are powerful, yet easy to use.",
  },
  {
    title: "Collaboration",
    desc: "Great things happen when teams work together, so we build for it.",
  },
  {
    title: "Transparency",
    desc: "We foster open communication both in our team and with our users.",
  },
  {
    title: "Innovation",
    desc: "We’re constantly iterating and learning to serve you better.",
  },
  {
    title: "Accessibility",
    desc: "Everyone deserves access to modern tooling, regardless of background.",
  },
  {
    title: "Trust",
    desc: "Security and privacy are never an afterthought.",
  },
];

export default {
  MAX_FREE_FILE: 5,
};
