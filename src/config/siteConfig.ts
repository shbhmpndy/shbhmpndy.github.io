const showBlogs = true;

export const siteConfig = {
    siteName: "Shubham Pandey",
    name: "Shubham Pandey",
    metadataTitle: "Shubham Pandey | Machine Learning Engineer @ Meta",
    siteDescription:
        "Machine Learning Engineer at Meta with 8+ years of experience. MS AI from University at Buffalo.",
    tabIcon: "/icon.svg",
    socials: {
        github: { show: true, url: "https://github.com/shbhmpndy" },
        linkedin: { show: true, url: "https://www.linkedin.com/in/shbhmpndy/" },
        googleScholar: { show: true, url: "https://scholar.google.com/citations?user=OzgvvF0AAAAJ&hl=en" },
        twitter: { show: false, url: "" },
    },
    showDevLogo: false,
    siteColorTheme: "indigo",

    navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "News", href: "/news" },
        ...(showBlogs ? [{ label: "Blog", href: "/blogs" }] : []),
        { label: "Contact", href: "/contact" },
    ],

    hero: {
        headline: "Hi, I'm",
        subtitle: "Machine Learning Engineer @ Meta | Building Production AI Systems",
        profileImage: "/profile.jpg",
        ctaPrimary: { include: true, label: "View Projects", href: "/projects" },
        ctaSecondary: { include: true, label: "Contact Me", href: "/contact" },
    },

    about: {
        bio: `I build end-to-end AI systems that work in production, not just in notebooks.

With 8+ years of experience in ML and data engineering, I specialize in NLP, LLMs, MLOps, and scalable AI pipelines.

Currently at Meta working on next-gen AI products. Previously led ML at Delaware North, built solutions at Tredence and Wipro, and earned my MS in AI from University at Buffalo.`,

        skills: {
            frontend: { name: "AI & ML", include: true, skill: ["NLP", "LLMs", "BERT", "PyTorch", "TensorFlow", "MLOps"] },
            backend: { name: "Data Engineering", include: true, skill: ["Python", "Spark", "Airflow", "Kafka", "ETL"] },
            cloud: { name: "Cloud & DevOps", include: true, skill: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"] },
            ai_security: { name: "Tools", include: true, skill: ["Jira", "Snowflake", "Databricks", "Tableau"] },
            tools: { name: "Languages", include: true, skill: ["Python", "JavaScript", "SQL", "C++"] },
        },

        experience: [
            { role: "Machine Learning Engineer", company: "Meta", duration: "Jan 2026 - Present", points: ["Production ML systems for AI products", "ML pipelines at scale", "Next-gen AI features"] },
            { role: "Machine Learning Engineer", company: "Delaware North", duration: "Jan 2024 - Jan 2026", points: ["ML Observability platform", "50TB+/day pipelines", "NLP solutions"] },
            { role: "Data Engineering Intern", company: "Delaware North", duration: "May 2023 - Dec 2023", points: ["ETL pipelines", "Data quality monitoring"] },
            { role: "Data Scientist", company: "Fidelity Investments", duration: "Jun 2022 - Jul 2022", points: ["Financial analytics models", "Investment dashboards"] },
            { role: "Senior Data Scientist", company: "Tredence Inc.", duration: "Jul 2021 - Jun 2022", points: ["NLP for Fortune 500", "Voice of customer analytics"] },
            { role: "Data Scientist / AI Engineer", company: "Tredence Inc.", duration: "Jul 2019 - Jun 2021", points: ["AI solutions for clients", "NLP pipelines"] },
            { role: "ML Engineer", company: "Wipro Limited", duration: "Aug 2017 - Jul 2019", points: ["ML models", "Automation solutions"] },
        ],

        leadership: [
            { role: "President", organization: "UB AI Club", duration: "Nov 2022 - Dec 2023", points: ["Led 200+ members", "Organized AI/ML workshops", "Hosted industry speakers"] },
        ],

        publications: [
            { title: "Unsupervised paradigm for information extraction from transcripts using BERT", venue: "ECML PKDD 2021", link: "https://link.springer.com/chapter/10.1007/978-3-030-86523-4_7", citation: "16 citations" },
            { title: "Delivery issues identification from customer feedback data", venue: "arXiv 2021", link: "https://arxiv.org/abs/2101.12345", citation: "5 citations" },
            { title: "Multi-channel feedback analytics for presentation generation", venue: "US Patent 12,165,179", link: "https://patents.google.com/patent/US12165179", citation: "Patent 2024" },
        ],

        education: [
            { degree: "M.S. in Artificial Intelligence", institution: "University at Buffalo", duration: "Aug 2022 - Dec 2023", details: ["Specialization: AI", "NLP, ML, Deep Learning"] },
            { degree: "B.Tech in Computer Science", institution: "BIT Mesra", duration: "Jul 2015 - May 2019", details: ["Computer Science", "Graduated with distinction"] },
        ],
    },

    news: {
        include: true,
        items: [
            { date: "Apr 2026", title: "Joined Meta as ML Engineer" },
            { date: "Jan 2024", title: "Promoted to ML Engineer at Delaware North" },
            { date: "May 2023", title: "Started Data Engineering Internship at Delaware North" },
            { date: "Dec 2023", title: "Graduated with MS AI from UB" },
            { date: "Jun 2022", title: "Data Scientist Internship at Fidelity" },
            { date: "Aug 2022", title: "Started MS in AI at UB" },
            { date: "Jul 2021", title: "Promoted to Senior Data Scientist at Tredence" },
            { date: "Jul 2019", title: "Joined Tredence as Data Scientist" },
            { date: "Aug 2017", title: "Joined Wipro as ML Engineer" },
            { date: "Jul 2015", title: "Started B.Tech at BIT Mesra" },
        ],
    },

    blogs: { include: showBlogs, description: "Insights on ML, production AI, and career." },
    contact: { header: "Get In Touch", description: "Always open to new projects.", email: "shubhampandey.ai@gmail.com", location: "SF Bay Area, CA", includeForm: true },
    resend: { fromEmail: "Portfolio Contact <onboarding@resend.dev>", toEmail: "shubhampandey.ai@gmail.com" },
    footer: { copyrightName: "Shubham Pandey", copyrightYear: "2026", details: "ML Engineer | Production AI" },
};

export default siteConfig;