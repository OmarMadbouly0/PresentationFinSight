
import { useSyncExternalStore } from "react";

/* ---------- Types ---------- */
export type SlideId =
  | "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8"
  | "s9" | "s10" | "s11" | "s12" | "s13" | "s14" | "s15" | "s16" | "s17" | "s18" | "s19" | "s20" | "s21" | "s22" | "s23" | "s24" | "s25";

export type FieldType = "text" | "textarea" | "list" | "image";
export type FieldSchema = { key: string; label: string; type: FieldType; hint?: string };

export type SlideContent = Record<string, string | string[]>;
export type ContentMap = Record<SlideId, SlideContent>;

/* ---------- Defaults ---------- */
export const defaultContent: ContentMap = {
  s1: {
    kicker: "AI-Powered Financial Intelligence",
    brandPrefix: "Fin",
    brandAccent: "Sight",
    subtitle: "Turning scattered financial data into intelligent business decisions — with forecasting, simulation and an AI assistant.",
    pills: ["Dashboard", "AI Forecasting", "AI Assistant", "Scenario Simulator", "Smart Notifications"],
    presenterLabel: "\n",
    presenterName: "Your Name",
    projectLabel: "\n",
    projectName: "Graduation / Internship",
    dateLabel: "\n",
    dateValue: "2026",
  },
  s2: {
    kicker: "Roadmap",
    titlePre: "Table of",
    titleAccent: "Contents",
    items: [
      "Introduction", "Problem Statement", "Project Objectives", "Business Model & Ecosystem",
      "Competitive Landscape", "Dashboard & Core Features", "AI Forecasting & Assistant", "Scenario Simulator",
      "Smart Notifications", "Technology Stack", "Future Roadmap", "Conclusion",
    ],
  },
  s3: {
    kicker: "01 · Introduction",
    titlePre: "Meet",
    titleAccent: "FinSight",
    tagline: "The Autonomous AI CFO for the Modern Enterprise",
    description: "Powered by Nixtla TimeGPT and Anthropic Claude, FinSight transcends traditional dashboards. It proactively monitors your runway, simulates complex scenarios, and orchestrates financial intelligence in real-time.",
    coreFeatures: [
      "90-Day Predictive Runway",
      "Real-time SignalR Telemetry",
      "LangFlow Orchestrated AI",
      "Multi-Tenant Architecture"
    ]
  },
  s4: {
    kicker: "02 · Problem Statement",
    titlePre: "The",
    titleAccent: "SME Crisis",
    statValue: "82%",
    statLabel: "of SME failures are tied to poor cash flow management.",
    painPoints: [
      "Rearview Mirror Analytics — Decisions based on outdated spreadsheets.",
      "Fragmented Intelligence — Data scattered across banks and manual trackers.",
      "Reactive, Not Proactive — Discovering a cash crunch after the runway evaporates."
    ]
  },
  s5: {
    kicker: "03 · Project Objectives",
    titlePre: "Our",
    titleAccent: "Mission",
    missionStatement: "To build a proactive financial nervous system that transforms raw accounting data into actionable foresight.",
    goals: [
      "Predictive — Forecast 90 days out using TimeGPT.",
      "Autonomous — Orchestrate risk alerts with LangFlow.",
      "Simulated — Test decisions safely via What-If modeling."
    ]
  },
  s17: {
    kicker: "07 · Target Customers",
    titlePre: "Who We",
    titleAccent: "Serve",
    subtitle: "FinSight is built specifically for organizations that need CFO-level financial intelligence without hiring a full-time CFO.",
    c1Icon: "briefcase",
    c1Title: "SME Owners",
    c1Profile: ["Need high-level visibility", "No spreadsheets"],
    c1Pains: ["Unexpected cash flow crises"],
    c1Benefits: ["Clear runway visibility"],
    c1Highlight: "Primary target",
    c2Icon: "calculator",
    c2Title: "Accountants",
    c2Profile: ["Accounting firms"],
    c2Pains: ["Manual reporting"],
    c2Benefits: ["Invoice management"],
    c3Icon: "users",
    c3Title: "Fractional CFOs",
    c3Profile: ["Advisory firms"],
    c3Pains: ["Hard to scale"],
    c3Benefits: ["Scenario simulation"],
    c4Icon: "",
    c4Title: "",
    c4Need: [],
    c4Benefits: [],
    badgeTitle: "",
    badgeBody: "",
  },
  s6: {
    kicker: "04 · System Architecture",
    titlePre: "How it all",
    titleAccent: "connects",
    clientTier: ["Angular 17", "SignalR Client"],
    apiTier: [".NET 8 Web API", "SignalR Hub", "Hangfire (Nightly Batch)"],
    dataTier: ["SQL Server", "Nixtla TimeGPT", "LangFlow & Claude (AI)"],
  },
  s7: {
    kicker: "08 · Core Dashboard",
    titlePre: "Intelligent",
    titleAccent: "Command Center",
    intro: "A centralized, real-time overview of your company's financial heartbeat.",
    benefits: [
      "Live Cash Balance & Revenue Tracking",
      "Dynamic Safety Threshold Alerts",
      "Actionable Expense Analysis"
    ],
  },
  s8: {
    kicker: "12 · AI Forecasting",
    titlePre: "AI",
    titleAccent: "Forecasting",
    targets: ["Cash Flow", "Runway", "Liquidity", "Invoices"],
    steps: [
      "Nightly batch processing via Hangfire",
      "Nixtla TimeGPT 90-day forecast",
      "Asynchronous saving with Pending status",
      "Langflow webhook updates UI via SignalR"
    ],
  },
  s9: {
    kicker: "13 · AI Assistant",
    titlePre: "Chat with your",
    titleAccent: "finances",
    intro: "Natural language interface — ask anything, get instant insight from your data.",
    technologies: ["Anthropic Claude", "LangFlow", "SQL Retrieval", "Secure API"],
    questions: [
      "What is my runway?",
      "Why did expenses spike in May?",
      "Show expense trends.",
      "Compare yearly performance.",
    ],
  },
  s10: {
    kicker: "14 · Scenario Simulator",
    titlePre: "Run",
    titleAccent: "what-if",
    titleSuffix: "on your business",
    sims: ["Hiring: Add new headcount", "Investments: Capital injections", "Custom Events: One-off expenses"],
    impacts: ["Baseline: Cash Flow", "Simulated: Cash Flow", "Runway: Extension", "Threshold: Monitoring"],
  },
  s11: {
    kicker: "15 · Smart Notifications",
    titlePre: "Smart Financial",
    titleAccent: "Alerts",
    titleSuffix: "",
    intro: "The system monitors cash thresholds and triggers a LangFlow agent to analyze anomalies and formulate strategic recommendations.",
    alerts: ["Critical: Threshold breach", "Warning: Forecast risk", "Info: Revenue drop"],
    flow: ["Forecast Anomaly", "LangFlow Agent Analysis", "Real-time SignalR Alert", "Strategic Recommendation"],
  },
  s12: {
    kicker: "18 · Technology Stack",
    titlePre: "Built with a",
    titleAccent: "modern stack",
    groups: [
      "Frontend: Angular 17.2, TypeScript 5.4, RxJS, Chart.js",
      "Backend: .NET 10 (ASP.NET Core Web API), EF Core 10, MediatR",
      "Database & Real-time: SQL Server, SignalR, Hangfire",
      "AI & Orchestration: Nixtla TimeGPT, LangFlow, Anthropic Claude",
      "Auth & External: JWT, ASP.NET Identity, Google Identity",
    ],
  },
  s13: {
    kicker: "19 · Future Roadmap",
    titlePre: "Post-V1",
    titleAccent: "Enhancements",
    phases: [
      "Direct Plaid / Stripe integration for automated syncing",
      "Multi-currency support for international operations",
      "Exporting forecast reports to PDF/Excel",
      "SignalR push updates for scenario results",
      "Dynamic LangFlow test company scaling",
      "Expanded multi-tenant scenario analysis"
    ],
  },
  s14: {
    kicker: "20 · Conclusion",
    titlePre: "A production-ready",
    titleAccent: "AI Finance Platform",
    wins: [
      "Hybrid Angular & .NET 8 Web API Architecture",
      "Robust SQL Server & EF Core Data Tier",
      "Real-Time SignalR & Hangfire Batch Jobs",
      "LangFlow & Nixtla TimeGPT AI Integrations",
      "Secure JWT Role-Based Access Control (RBAC)",
      "Transactional Consistency via Unit of Work"
    ],
  },
  s15: {
    kicker: "21 · Live Demonstration",
    titlePre: "Live",
    titleAccent: "Demonstration",
    intro: "Experience FinSight in action.",
    videoLabel: "Watch Video Demo",
    videoLink: "https://drive.google.com/file/d/1K1DLrcqwlqZIV85HRYJwwBbmidlfZ8dp/view?usp=sharing",
    githubLabel: "GitHub Repository",
    githubLink: "https://github.com/FatmaHaggag/FinSight",
    demoLabel: "Live Application",
    demoLink: "https://fin-sight-eight-ruby.vercel.app/",
  },
  s18: {
    kicker: "09 · Financial Records",
    titlePre: "Financial",
    titleAccent: "Records",
    intro: "A comprehensive view of your company's financial activities.",
    c1Title: "Monthly Cash Flow Summary",
    c1Desc: "Displays a quick overview of the company's financial performance, including:",
    c1List: ["Revenue", "Expenses", "Net Cash Flow", "Transaction Viewer"],
    c2Title: "Bills Management",
    c2Desc: "Helps users:",
    c2List: ["Track bill status", "Manage invoices", "Automatically convert paid bills into transactions"],
  },
  s19: {
    kicker: "10 · CSV Data Import",
    titlePre: "CSV Data",
    titleAccent: "Import",
    intro: "Seamlessly bring your existing data into the platform.",
    c1Title: "Transaction Import",
    c1Desc: "",
    c1List: ["Allows users to upload bank transaction CSV files to quickly populate financial records."],
    c2Title: "Bills & Invoices Import",
    c2Desc: "",
    c2List: ["Enables importing invoice and bill data from CSV files for easier tracking and forecasting."],
  },
  s20: {
    kicker: "11 · Workspaces",
    titlePre: "Collaborative",
    titleAccent: "Workspaces",
    intro: "Role-based access to ensure everyone has the right tools.",
    c1Title: "Owner",
    c1Desc: "Full administrative access, including:",
    c1List: ["Dashboard", "Forecasting", "Scenario Simulator", "AI Assistant", "User Management", "System Settings"],
    c2Title: "Accountant",
    c2Desc: "Operational access focused on financial management, including:",
    c2List: ["Dashboard", "Transactions", "Bills", "CSV Import", "AI Assistant"],
  },
  s21: {
    kicker: "16 · Admin Dashboard",
    titlePre: "Admin",
    titleAccent: "Dashboard",
    intro: "The operational control center of FinSight, designed exclusively for platform administrators to manage the entire SaaS ecosystem.",
    statusLabel: "System Status",
    statusValue: "Optimal",
    f1Title: "Platform Visibility",
    f1Desc: "Real-time overview of registered companies and users.",
    f2Title: "Business Performance",
    f2Desc: "Total financial volume processed across all tenants.",
    f3Title: "User Management",
    f3Desc: "Tracks the distribution of user roles.",
    f4Title: "Onboarding Insights",
    f4Desc: "Monitor recent registrations and onboarding trends.",
    f5Title: "Operational Health",
    f5Desc: "Monitor background AI processes and forecasting jobs.",
  },
  s22: {
    kicker: "17 · Customer Support",
    titlePre: "Customer",
    titleAccent: "Support",
    intro: "Integrated Customer Support system enabling seamless communication between users and platform administrators without leaving the application.",
    c1Title: "Integrated Support",
    c1List: ["Report technical issues", "Billing questions", "Direct in-app communication"],
    c2Title: "Centralized Management",
    c2List: ["Single admin dashboard", "Efficient ticket filtering", "Status tracking"],
  },
  s16: {
    tagline: "FinSight · AI-Powered Financial Intelligence",
  },
  s23: {
    kicker: "04 · Business Model",
    titlePre: "How FinSight",
    titleAccent: "Creates Value",
    partners: ["OpenAI / Anthropic", "Nixtla (TimeGPT)", "Cloud Providers (Azure/AWS)"],
    activities: ["Platform Development", "AI Model Fine-Tuning", "Security & Compliance"],
    valueProps: ["Automated Financial Forecasting", "Real-Time AI CFO Alerts", "Actionable Scenario Simulation"],
    relationships: ["Self-Serve SaaS", "Automated Support", "Community & Docs"],
    segments: ["SME Owners", "Accountants", "Fractional CFOs"],
    resources: ["Proprietary Algorithms", "Financial Data Pipelines", "Cloud Infrastructure"],
    channels: ["Direct Sales", "Partnerships (Accounting Firms)", "Digital Marketing"],
    cost: ["Cloud Infrastructure & API Costs", "R&D and Engineering", "Marketing & Customer Support"],
    revenue: ["Tiered SaaS Subscriptions", "White-Label Licensing (B2B)", "Usage-Based AI API Fees"],
  },
  s24: {
    kicker: "05 · Investment Ecosystem",
    titlePre: "Investment",
    titleAccent: "Ecosystem",
    intro: "FinSight empowers innovation hubs, government entities, and NGOs to evaluate and select the best strategic partners using the Scenario Simulator.",
    orgs: ["ITI & NTI (Government)", "ITIDA & Creativa (Startup Ecosystems)", "Foundations & NGOs"],
    partners: ["Microsoft & AWS", "500 Global & Flat6Labs", "World Bank & USAID"],
    scenarioTitle: "Use Case: Investor Selection",
    scenarioDesc: "Compare multiple offers (e.g., AWS vs 500 Global) by analyzing equity dilution, runway impact, and cloud credits, receiving an AI-generated optimal recommendation.",
  },
  s25: {
    kicker: "06 · Competitive Landscape",
    titlePre: "Why FinSight",
    titleAccent: "Wins",
    c1Name: "Xero",
    c1Desc: "Accounting platform focused on bookkeeping & compliance.",
    c1Drawbacks: ["No AI cash flow forecasting", "Overwhelming feature set for SMEs"],
    c2Name: "QuickBooks",
    c2Desc: "Strong transaction and tax management.",
    c2Drawbacks: ["Insights limited to static reports", "No proactive alerting system"],
    c3Name: "Fathom",
    c3Desc: "Financial reporting and analytics.",
    c3Drawbacks: ["No AI assistant or natural language", "Relies on historical data only"],
    c4Name: "Float",
    c4Desc: "Cash flow forecasting tool.",
    c4Drawbacks: ["Uses rule-based models, not ML", "Targets larger businesses, not SMEs"],
    finsightAdvantage: "FinSight uniquely combines Nixtla TimeGPT forecasting, LangFlow autonomous agents, and real-time alerts to transform raw data into proactive intelligence.",
  },
};

/* ---------- Editor schema (drives the form UI) ---------- */
export const slideOrder: SlideId[] = [
  "s1", "s2", "s3", "s4", "s5", "s23", "s24", "s25", "s17", "s7", "s18", "s19", "s20", "s8", "s9", "s10", "s11", "s21", "s22", "s12", "s13", "s14", "s15", "s16",
];

export const slideMeta: Record<SlideId, { title: string; fields: FieldSchema[] }> = {
  s1: {
    title: "Title", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "brandPrefix", label: "Brand prefix", type: "text" },
      { key: "brandAccent", label: "Brand accent", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "pills", label: "Feature pills", type: "list" },
      { key: "presenterName", label: "Presenter name", type: "text" },
      { key: "presenterLabel", label: "Presenter label", type: "text" },
      { key: "projectLabel", label: "Project label", type: "text" },
      { key: "projectName", label: "Project name", type: "text" },
      { key: "dateLabel", label: "Date label", type: "text" },
      { key: "dateValue", label: "Date value", type: "text" },
    ]
  },
  s2: {
    title: "Agenda", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "items", label: "Agenda items", type: "list" },
    ]
  },
  s3: {
    title: "Introduction", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro paragraph", type: "textarea" },
      { key: "pillars", label: "Pillars (4)", type: "list" },
      { key: "benefits", label: "Key benefits", type: "list" },
    ]
  },
  s4: {
    title: "Problem Statement", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "challenges", label: "Challenges", type: "list" },
      { key: "solutionBody", label: "Solution body", type: "textarea" },
      { key: "solutionBadge", label: "Solution badge", type: "text" },
    ]
  },
  s5: {
    title: "Objectives", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "objectives", label: "Objectives", type: "list" },
      { key: "outcomes", label: "Expected outcomes", type: "list" },
    ]
  },
  s17: {
    title: "Target Customers", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "c1Icon", label: "Card 1 icon key", type: "text", hint: "briefcase | calculator | users | rocket" },
      { key: "c1Title", label: "Card 1 title", type: "text" },
      { key: "c1Profile", label: "Card 1 profile", type: "list" },
      { key: "c1Pains", label: "Card 1 pain points", type: "list" },
      { key: "c1Benefits", label: "Card 1 benefits", type: "list" },
      { key: "c1Highlight", label: "Card 1 highlight", type: "textarea" },
      { key: "c2Icon", label: "Card 2 icon key", type: "text", hint: "briefcase | calculator | users | rocket" },
      { key: "c2Title", label: "Card 2 title", type: "text" },
      { key: "c2Profile", label: "Card 2 profile", type: "list" },
      { key: "c2Pains", label: "Card 2 pain points", type: "list" },
      { key: "c2Benefits", label: "Card 2 benefits", type: "list" },
      { key: "c3Icon", label: "Card 3 icon key", type: "text", hint: "briefcase | calculator | users | rocket" },
      { key: "c3Title", label: "Card 3 title", type: "text" },
      { key: "c3Profile", label: "Card 3 profile", type: "list" },
      { key: "c3Pains", label: "Card 3 pain points", type: "list" },
      { key: "c3Benefits", label: "Card 3 benefits", type: "list" },
      { key: "c3Badge", label: "Card 3 badge", type: "text" },
      { key: "c4Icon", label: "Card 4 icon key", type: "text", hint: "briefcase | calculator | users | rocket" },
      { key: "c4Title", label: "Card 4 title", type: "text" },
      { key: "c4Need", label: "Card 4 needs", type: "list" },
      { key: "c4Benefits", label: "Card 4 benefits", type: "list" },
      { key: "badgeTitle", label: "Bottom badge title", type: "text" },
      { key: "badgeBody", label: "Bottom badge body", type: "textarea" },
    ]
  },
  s6: {
    title: "Architecture", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "clientTier", label: "Client Tier", type: "list" },
      { key: "apiTier", label: "API & Orchestration Tier", type: "list" },
      { key: "dataTier", label: "Intelligence & Data Tier", type: "list" },
    ]
  },
  s7: {
    title: "Dashboard", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro paragraph", type: "textarea" },
      { key: "features", label: "Features", type: "list" },
      { key: "benefits", label: "Benefits", type: "list" },
      { key: "statLabel", label: "Stat label", type: "text" },
      { key: "statValue", label: "Stat value", type: "text" },
      { key: "statDelta", label: "Stat delta", type: "text" },
    ]
  },
  s8: {
    title: "AI Forecasting", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "targets", label: "Prediction targets", type: "list" },
      { key: "steps", label: "AI process steps", type: "list" },
    ]
  },
  s9: {
    title: "AI Assistant", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro paragraph", type: "textarea" },
      { key: "technologies", label: "Technologies", type: "list" },
      { key: "questions", label: "Sample questions", type: "list" },
    ]
  },
  s10: {
    title: "Scenario Simulator", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "titleSuffix", label: "Title suffix", type: "text" },
      { key: "sims", label: "Simulations", type: "list" },
      { key: "impacts", label: "Impacts (Label: Value)", type: "list", hint: "Format each as 'Label: Value'" },
    ]
  },
  s11: {
    title: "Notifications", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "titleSuffix", label: "Title suffix", type: "text" },
      { key: "intro", label: "Intro paragraph", type: "textarea" },
      { key: "alerts", label: "Alerts", type: "list" },
      { key: "flow", label: "Workflow steps", type: "list" },
    ]
  },
  s12: {
    title: "Tech Stack", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "groups", label: "Groups (Category: item, item)", type: "list", hint: "Format: 'Category: item, item, item'" },
    ]
  },
  s13: {
    title: "Future Work", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title Pre", type: "text" },
      { key: "titleAccent", label: "Title Accent", type: "text" },
      { key: "phases", label: "Future Phases", type: "list" },
    ]
  },
  s14: {
    title: "Conclusion", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title Pre", type: "text" },
      { key: "titleAccent", label: "Title Accent", type: "text" },
      { key: "wins", label: "Achievements", type: "list" },
    ]
  },
  s15: {
    title: "Demo", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro", type: "textarea" },
      { key: "videoLabel", label: "Video Label", type: "text" },
      { key: "videoLink", label: "Video Link", type: "text" },
      { key: "githubLabel", label: "GitHub Label", type: "text" },
      { key: "githubLink", label: "GitHub Link", type: "text" },
      { key: "demoLabel", label: "Demo Label", type: "text" },
      { key: "demoLink", label: "Demo Link", type: "text" },
    ]
  },
  s18: {
    title: "Financial Records", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro", type: "textarea" },
      { key: "c1Title", label: "Col 1 Title", type: "text" },
      { key: "c1Desc", label: "Col 1 Desc", type: "text" },
      { key: "c1List", label: "Col 1 Items", type: "list" },
      { key: "c2Title", label: "Col 2 Title", type: "text" },
      { key: "c2Desc", label: "Col 2 Desc", type: "text" },
      { key: "c2List", label: "Col 2 Items", type: "list" },
    ]
  },
  s19: {
    title: "CSV Data Import", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro", type: "textarea" },
      { key: "c1Title", label: "Col 1 Title", type: "text" },
      { key: "c1Desc", label: "Col 1 Desc", type: "text" },
      { key: "c1List", label: "Col 1 Items", type: "list" },
      { key: "c2Title", label: "Col 2 Title", type: "text" },
      { key: "c2Desc", label: "Col 2 Desc", type: "text" },
      { key: "c2List", label: "Col 2 Items", type: "list" },
    ]
  },
  s20: {
    title: "Workspaces", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro", type: "textarea" },
      { key: "c1Title", label: "Col 1 Title", type: "text" },
      { key: "c1Desc", label: "Col 1 Desc", type: "text" },
      { key: "c1List", label: "Col 1 Items", type: "list" },
      { key: "c2Title", label: "Col 2 Title", type: "text" },
      { key: "c2Desc", label: "Col 2 Desc", type: "text" },
      { key: "c2List", label: "Col 2 Items", type: "list" },
    ]
  },
  s21: {
    title: "Admin Dashboard", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro", type: "textarea" },
      { key: "statusLabel", label: "Status Label", type: "text" },
      { key: "statusValue", label: "Status Value", type: "text" },
      { key: "f1Title", label: "Feature 1 Title", type: "text" },
      { key: "f1Desc", label: "Feature 1 Desc", type: "textarea" },
      { key: "f2Title", label: "Feature 2 Title", type: "text" },
      { key: "f2Desc", label: "Feature 2 Desc", type: "textarea" },
      { key: "f3Title", label: "Feature 3 Title", type: "text" },
      { key: "f3Desc", label: "Feature 3 Desc", type: "textarea" },
      { key: "f4Title", label: "Feature 4 Title", type: "text" },
      { key: "f4Desc", label: "Feature 4 Desc", type: "textarea" },
      { key: "f5Title", label: "Feature 5 Title", type: "text" },
      { key: "f5Desc", label: "Feature 5 Desc", type: "textarea" },
    ]
  },
  s22: {
    title: "Customer Support", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title", type: "text" },
      { key: "titleAccent", label: "Title accent", type: "text" },
      { key: "intro", label: "Intro", type: "textarea" },
      { key: "c1Title", label: "Col 1 Title", type: "text" },
      { key: "c1List", label: "Col 1 Items", type: "list" },
      { key: "c2Title", label: "Col 2 Title", type: "text" },
      { key: "c2List", label: "Col 2 Items", type: "list" },
    ]
  },
  s16: {
    title: "Thank You", fields: [
      { key: "tagline", label: "Tagline", type: "text" },
    ]
  },
  s23: {
    title: "Business Model Canvas", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title Pre", type: "text" },
      { key: "titleAccent", label: "Title Accent", type: "text" },
      { key: "partners", label: "Key Partners", type: "list" },
      { key: "activities", label: "Key Activities", type: "list" },
      { key: "valueProps", label: "Value Proposition", type: "list" },
      { key: "relationships", label: "Relationships", type: "list" },
      { key: "segments", label: "Cust. Segments", type: "list" },
      { key: "resources", label: "Key Resources", type: "list" },
      { key: "channels", label: "Channels", type: "list" },
      { key: "cost", label: "Cost Structure", type: "list" },
      { key: "revenue", label: "Revenue Streams", type: "list" },
    ]
  },
  s24: {
    title: "Investment Ecosystem", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title Pre", type: "text" },
      { key: "titleAccent", label: "Title Accent", type: "text" },
      { key: "intro", label: "Intro", type: "textarea" },
      { key: "orgs", label: "Target Organizations", type: "list" },
      { key: "partners", label: "Strategic Partners", type: "list" },
      { key: "scenarioTitle", label: "Scenario Title", type: "text" },
      { key: "scenarioDesc", label: "Scenario Desc", type: "textarea" },
    ]
  },
  s25: {
    title: "Competitors", fields: [
      { key: "kicker", label: "Kicker", type: "text" },
      { key: "titlePre", label: "Title Pre", type: "text" },
      { key: "titleAccent", label: "Title Accent", type: "text" },
      { key: "c1Name", label: "Comp 1 Name", type: "text" },
      { key: "c1Desc", label: "Comp 1 Desc", type: "textarea" },
      { key: "c1Drawbacks", label: "Comp 1 Drawbacks", type: "list" },
      { key: "c2Name", label: "Comp 2 Name", type: "text" },
      { key: "c2Desc", label: "Comp 2 Desc", type: "textarea" },
      { key: "c2Drawbacks", label: "Comp 2 Drawbacks", type: "list" },
      { key: "c3Name", label: "Comp 3 Name", type: "text" },
      { key: "c3Desc", label: "Comp 3 Desc", type: "textarea" },
      { key: "c3Drawbacks", label: "Comp 3 Drawbacks", type: "list" },
      { key: "c4Name", label: "Comp 4 Name", type: "text" },
      { key: "c4Desc", label: "Comp 4 Desc", type: "textarea" },
      { key: "c4Drawbacks", label: "Comp 4 Drawbacks", type: "list" },
      { key: "finsightAdvantage", label: "FinSight Advantage", type: "textarea" },
    ]
  },
};

/* ---------- Universal image field for every slide ---------- */
for (const id of slideOrder) {
  if (!("image" in defaultContent[id])) defaultContent[id].image = "";
  slideMeta[id].fields.push({
    key: "image",
    label: "Slide image",
    type: "image",
    hint: "Upload a file or paste a URL",
  });
}

/* ---------- Store (vanilla, localStorage-backed) ---------- */
const STORAGE_KEY = "finsight:content:v6";
let state: ContentMap = loadInitial();
const listeners = new Set<() => void>();

function loadInitial(): ContentMap {
  if (typeof window === "undefined") return defaultContent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw) as Partial<ContentMap>;
    // shallow merge — fall back to defaults for new keys
    const merged = { ...defaultContent };
    for (const id of slideOrder) {
      merged[id] = { ...defaultContent[id], ...(parsed[id] ?? {}) };
    }
    return merged;
  } catch {
    return defaultContent;
  }
}

function persist() {
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* ignore */ }
}

function emit() { for (const l of listeners) l(); }

function subscribe(l: () => void) {
  listeners.add(l);
  return () => { listeners.delete(l); };
}

export function getSnapshot(): ContentMap { return state; }
function getServerSnapshot(): ContentMap { return defaultContent; }

export function updateField(id: SlideId, key: string, value: string | string[]) {
  state = { ...state, [id]: { ...state[id], [key]: value } };
  persist();
  emit();
}

export function resetSlide(id: SlideId) {
  state = { ...state, [id]: { ...defaultContent[id] } };
  persist();
  emit();
}

export function resetAll() {
  state = { ...defaultContent };
  persist();
  emit();
}

/* ---------- React hooks ---------- */
export function useContentMap(): ContentMap {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useSlideContent(id: SlideId): SlideContent {
  const map = useContentMap();
  return map[id];
}

/* ---------- Helpers for slide rendering ---------- */
export const str = (v: string | string[] | undefined, fallback = ""): string =>
  typeof v === "string" ? v : fallback;

export const arr = (v: string | string[] | undefined, fallback: string[] = []): string[] =>
  Array.isArray(v) ? v : fallback;

/** Parse "Label: Value" → {k, v} */
export function parseKV(line: string): { k: string; v: string } {
  const i = line.indexOf(":");
  if (i === -1) return { k: line.trim(), v: "" };
  return { k: line.slice(0, i).trim(), v: line.slice(i + 1).trim() };
}

/** Parse "Category: a, b, c" → {t, items[]} */
export function parseGroup(line: string): { t: string; items: string[] } {
  const { k, v } = parseKV(line);
  return { t: k, items: v ? v.split(",").map((s) => s.trim()).filter(Boolean) : [] };
}

