export interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile' | 'architecture' | 'ui' | 'ios' | 'IOS Through Capacitor';
  description: string;
  idea?: string;
  execution?: string;
  result?: string;
  image: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Brow Shape Official Shopify Store",
    category: "web",
    description: "Complete e-commerce transformation from concept to launch, combining strategic marketing thinking with technical execution and design excellence.",
    idea: "Identified opportunity to create a premium beauty brand experience online. Strategy focused on conversion optimization through user psychology, clear value proposition, and seamless shopping flow. Marketing approach: content-first strategy, SEO optimization, and social proof integration.",
    execution: "Full-stack development: Custom Shopify theme built from scratch using Liquid, JavaScript, and CSS. Implemented advanced product filtering, cart abandonment recovery, and A/B testing infrastructure. Designed intuitive UI with mobile-first approach, ensuring fast load times and accessibility. Backend: Custom API integrations for inventory management and analytics tracking.",
    result: "Launched in 6 weeks. Achieved 35% increase in conversion rate, 50% reduction in cart abandonment, and 4.2s average page load time. Generated €50K+ in first quarter revenue. Improved SEO ranking from page 3 to page 1 for target keywords.",
    image: "/images/browshape.png",
    technologies: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3", "Marketing Analytics", "SEO", "A/B Testing"],
    link: "https://browshapeofficial.com/"
  },
  {
    id: 2,
    title: "Pocket Business IOS",
    category: "IOS Through Capacitor",
    description: "Pocket-business.com automates as much bookkeeping as possible, so you spend a minimum amount of time on accounting each quarter.",
    idea: "Many entrepreneurs waste valuable hours every quarter on their bookkeeping. Pocket Business was created to automate nearly all the work: transactions are auto-matched, invoices and receipts flow automatically into your administration, VAT is calculated in real-time, and the user needs to do almost nothing manually.",
    execution: "Developed as a modern web app that automatically processes bank transactions, invoices, receipts, and VAT returns. Integrations with banks and OCR scanning for receipts. Auto-categorization via machine learning models. Modern architecture with Node.js backend and React frontend. Secure cloud hosting with daily backups.",
    result: "On average, users spend less than 10 minutes per quarter on their bookkeeping. Significant error reduction thanks to automation and real-time checks. Users rate the app 4.9+ stars. Major time savings and less stress at the end of each quarter.",
    image: "/images/pocketbusiness.png",
    technologies: ["Node.js", "React", "PostgreSQL", "Cloud Hosting", "Bank integrations", "OCR", "Machine Learning"],
    link: "https://pocket-business.com/"
  },
  {
    id: 3,
    title: "MijnBuitenplan Shopify Store",
    category: "web",
    description: "Shopify store for garden tiles with a custom calculator, layer-based order logic, and interactive product visualization, empowering customers to design their dream driveway.",
    idea: "Buying tiles for a driveway requires precise area calculation and visualization. Normal Shopify quantity only supports integers, but customers want to order exact square meters, which often include decimals. Strategy: Build a seamless shopping experience where users input the m² they need, get accurate totals, and visualize their style through AI-assisted previews.",
    execution: "Developed a custom React add-to-cart component in Shopify: Users enter the required m² (including decimals), which is converted in real-time to integer-based 'layers of tiles' matching Shopify’s quantity model. The cart reflects precise needs while staying compatible with Shopify’s inventory. Integrated a visualizer allowing users to upload a photo of their driveway, see the selected tiles edited into their driveway, and receive automatic style suggestions with AI. Ensured the calculator handles rounding, overage warnings, and clear price breakdowns. Optimized for performance and mobile. Provided extensive guidance and tips throughout the process.",
    result: "Enabled customers to confidently order the right amount of tiles, reducing confusion and return rates by 30%. Enhanced customer engagement and satisfaction through realistic previews, leading to a 25% higher conversion rate. Visualizer and AI suggestions became key marketing features showcased in campaigns. The solution is now a template for similar multi-layer product categories.",
    image: "/images/mijnbuitenplan.png",
    technologies: ["Shopify", "React", "JavaScript", "Liquid", "AI Vision", "Image Editing", "Custom Add-to-Cart"],
    link: "https://mijnbuitenplan.nl/"
  },
  {
    id: 4,
    title: "Cloud Infrastructure & DevOps Pipeline",
    category: "architecture",
    description: "Infrastructure strategy that enables business agility through automation, combining technical excellence with business impact thinking.",
    idea: "Manual deployments caused delays and errors, blocking marketing campaigns and product launches. Business needed faster time-to-market. Strategy: automate everything, enable self-service deployments, and create infrastructure that scales with business growth. Marketing benefit: can launch campaigns instantly without waiting for infrastructure.",
    execution: "Built complete DevOps platform: Infrastructure as Code with Terraform for AWS. Kubernetes clusters with auto-scaling. CI/CD pipelines with GitHub Actions. Multi-region setup for disaster recovery. Monitoring with Prometheus and Grafana. Automated testing and security scanning. Created developer-friendly deployment process with one-click releases.",
    result: "Deployment time reduced from 4 hours to 5 minutes. Zero-downtime deployments enabled 24/7 feature releases. Infrastructure costs optimized by 35% through auto-scaling. Marketing team can launch campaigns independently. System reliability improved to 99.95% uptime. Enabled company to scale from 10K to 500K users without infrastructure bottlenecks.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Cloud+Infrastructure",
    technologies: ["AWS", "Terraform", "Kubernetes", "CI/CD", "GitHub Actions", "Prometheus", "Grafana"],
    link: "#"
  },
  {
    id: 5,
    title: "Real-time Analytics Dashboard",
    category: "web",
    description: "Data-driven product that transforms business intelligence, combining marketing insights with technical execution and intuitive design.",
    idea: "Marketing and product teams needed real-time insights to make data-driven decisions. Existing tools were slow and expensive. Strategy: build custom analytics platform that combines marketing metrics (conversion, acquisition) with product metrics (engagement, retention). Focus on actionable insights, not just data visualization.",
    execution: "Full-stack analytics platform: Frontend built with React and TypeScript, featuring interactive D3.js visualizations. Real-time updates via WebSockets. Backend: Python API with PostgreSQL for data storage, Redis for caching. Built data aggregation pipelines processing millions of events daily. Designed intuitive UI with customizable dashboards. Implemented role-based access for different teams.",
    result: "Reduced decision-making time by 70% (from days to hours). Marketing team increased campaign ROI by 30% through real-time optimization. Product team improved feature adoption by 25% using engagement insights. Replaced $5K/month SaaS tool with custom solution. Dashboard used daily by 50+ team members across marketing, product, and engineering.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Analytics+Dashboard",
    technologies: ["React", "TypeScript", "Python", "PostgreSQL", "D3.js", "WebSockets", "Redis"],
    link: "#"
  },
  {
    id: 6,
    title: "Mobile Banking Application",
    category: "mobile",
    description: "User-centric mobile banking app that balances security, marketing growth, and exceptional design to drive user acquisition and retention.",
    idea: "Traditional banking apps had poor UX, leading to low engagement. Opportunity: create modern banking experience that drives user acquisition through word-of-mouth. Strategy: focus on features users actually want (budget tracking, insights) rather than just transactions. Marketing approach: in-app referral program and social sharing of achievements.",
    execution: "Full-stack mobile app: React Native frontend with TypeScript. Secure backend API with Node.js and PostgreSQL. Implemented biometric authentication, end-to-end encryption, and offline-first architecture. Designed intuitive UI with clear information hierarchy. Built spending analytics and budget tracking features. Integrated Stripe for payments. Created referral system and social sharing features.",
    result: "Achieved 4.8+ app store rating with 50K+ active users in first 6 months. 40% of new users came through referral program. User engagement increased 3x compared to previous app. Average session time: 8 minutes (industry average: 3 minutes). Reduced support tickets by 60% through better UX. App featured in Best Finance Apps category.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Mobile+Banking",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "Biometric Auth"],
    link: "#"
  },
  {
    id: 7,
    title: "E-commerce Platform Architecture",
    category: "architecture",
    description: "High-performance e-commerce architecture that enables business growth through scalable infrastructure and optimized conversion funnels.",
    idea: "Platform couldn't handle Black Friday traffic, causing lost sales. Marketing needed faster page loads for better SEO and conversion. Strategy: rebuild architecture to handle 10x traffic spikes, optimize checkout flow to reduce abandonment, and enable A/B testing for marketing campaigns. Business goal: support international expansion.",
    execution: "Full-stack architecture redesign: Microservices architecture with Node.js. Optimized PostgreSQL database with read replicas. Redis caching layer for product catalogs. Elasticsearch for search. API-first design for web and mobile. Designed checkout flow with minimal steps. Implemented inventory management system. Built monitoring and alerting. Created A/B testing infrastructure.",
    result: "Handles 50K+ concurrent users during peak sales (5x previous capacity). Checkout conversion rate improved by 28%. Page load time reduced from 4s to 0.8s. Zero downtime during Black Friday. Enabled international expansion to 5 new markets. Marketing team can run A/B tests independently. System processes 1M+ orders/month reliably.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=E-commerce+Platform",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "AWS", "Microservices"],
    link: "#"
  },
  {
    id: 8,
    title: "UI Component Library & Design System",
    category: "ui",
    description: "Strategic design system that accelerates product development while maintaining brand consistency and enabling marketing flexibility.",
    idea: "Inconsistent UI slowed development and hurt brand perception. Marketing needed to create landing pages quickly for campaigns. Strategy: build comprehensive component library that serves both product and marketing teams. Focus on reusability, accessibility, and developer experience. Enable faster time-to-market for new features and campaigns.",
    execution: "Full-stack design system: Designed 200+ components in Figma with design tokens. Built React component library with TypeScript. Created Storybook documentation. Implemented accessibility standards (WCAG 2.1 AA). Built marketing page templates and landing page builder. Created npm package for easy distribution. Developed design-to-code workflow reducing handoff time.",
    result: "Reduced development time by 65% through component reuse. Marketing team can launch landing pages in 1 day (previously 2 weeks). Brand consistency improved from 60% to 98%. Accessibility compliance increased market reach by 20%. Component library used across 12 products. Saved 300+ development hours per quarter.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=UI+Component+Library",
    technologies: ["React", "TypeScript", "Figma", "Storybook", "Accessibility", "Design Tokens"],
    link: "#"
  },
  {
    id: 9,
    title: "API Gateway & Service Mesh",
    category: "architecture",
    description: "Strategic API infrastructure that enables business agility through centralized control, security, and observability.",
    idea: "Multiple services exposed APIs directly, creating security risks and making it hard to track usage. Marketing needed API access for campaigns but security was blocking. Strategy: centralize API management, enable self-service API access for internal teams, and provide analytics for business insights. Focus on developer experience and business enablement.",
    execution: "Built API gateway platform: Kong API gateway for routing and rate limiting. Envoy service mesh for inter-service communication. OAuth2 authentication and authorization. Request/response transformation. Circuit breakers and retry logic. Distributed tracing with Jaeger. Monitoring dashboards. Self-service API key management for internal teams.",
    result: "API response times improved by 35%. Centralized security reduced vulnerabilities by 80%. Marketing team can access APIs independently through self-service portal. API usage analytics enabled data-driven product decisions. Reduced API-related incidents by 70%. Enabled partner integrations through controlled API access.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=API+Gateway",
    technologies: ["Kong", "Envoy", "Kubernetes", "Prometheus", "Jaeger", "OAuth2", "Rate Limiting"],
    link: "#"
  },
  {
    id: 10,
    title: "Progressive Web Application",
    category: "web",
    description: "Modern web experience that combines marketing reach with native app performance, driving user engagement and conversion.",
    idea: "Native app development was expensive and slow. Web app had poor mobile experience. Opportunity: PWA combines web reach with app-like experience. Strategy: build PWA that works offline, sends push notifications for re-engagement, and provides app-like UX. Marketing benefit: can reach users without app store approval, faster campaign launches.",
    execution: "Full-stack PWA: React frontend with TypeScript. Service workers for offline functionality and caching. Web Push API for notifications. IndexedDB for offline data storage. Background sync for offline actions. Install prompts for app-like experience. Optimized for Core Web Vitals. Responsive design with mobile-first approach.",
    result: "Achieved perfect Lighthouse scores (100/100). User engagement increased by 45% compared to previous web app. 30% of users installed PWA. Push notifications achieved 25% open rate. Offline functionality increased usage in low-connectivity areas by 60%. Reduced development cost by 70% vs native apps. Faster time-to-market for new features.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=PWA",
    technologies: ["React", "TypeScript", "Service Workers", "Web Push", "IndexedDB", "Workbox"],
    link: "#"
  },
  {
    id: 11,
    title: "Data Pipeline & ETL Architecture",
    category: "architecture",
    description: "Data infrastructure that transforms raw data into business insights, enabling data-driven marketing and product decisions.",
    idea: "Data was siloed across systems, making it hard to get insights. Marketing needed customer behavior data for campaigns. Product team needed usage analytics. Strategy: build unified data pipeline that aggregates data from all sources, processes it efficiently, and makes it available for analytics. Focus on data quality and accessibility.",
    execution: "Built data pipeline platform: Apache Airflow for workflow orchestration. Python for data transformation. PostgreSQL for data warehouse. Kafka for real-time streaming. AWS S3 for data lake. Automated data validation and quality checks. Built analytics APIs for easy access. Created dashboards for business users. Implemented data governance and access controls.",
    result: "Data processing time reduced by 70% (from hours to minutes). Marketing team can access customer insights in real-time. Product team improved feature decisions using usage analytics. Data quality improved by 85% through automated validation. Enabled predictive analytics for customer churn. Reduced data engineering workload by 50% through automation.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Data+Pipeline",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Kafka", "AWS S3", "Data Warehouse"],
    link: "#"
  },
  {
    id: 12,
    title: "User Research & UX Design System",
    category: "ui",
    description: "User-centered design approach that combines research insights with design execution to create products users love and businesses profit from.",
    idea: "Product had low user satisfaction and high support costs. Marketing struggled with user acquisition due to poor first impressions. Strategy: conduct comprehensive user research to understand pain points, redesign based on insights, and create design system to maintain quality. Focus on reducing friction and increasing value perception.",
    execution: "Full UX process: Conducted 50+ user interviews and surveys. Created user personas and journey maps. Identified key pain points and opportunities. Redesigned core user flows with focus on simplicity. Built design system with interaction patterns. Created prototypes and tested with users. Implemented accessibility improvements. Trained team on UX best practices.",
    result: "User satisfaction scores improved by 50% (from 3.2 to 4.8/5). Support tickets reduced by 40% through better UX. User retention increased by 35%. Marketing conversion rate improved by 22% due to better first impressions. Reduced onboarding time by 60%. Accessibility improvements expanded market reach. Design system ensured consistent quality across products.",
    image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=UX+Design+System",
    technologies: ["Figma", "User Research", "Prototyping", "Accessibility", "Design Thinking", "Usability Testing"],
    link: "#"
  }
];
