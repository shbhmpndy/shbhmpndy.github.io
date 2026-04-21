import { Project } from "@/types";

export const projects: Project[] = [
  // Notable Industry Projects
  {
    title: "ML Observability Platform",
    description:
      "Built a comprehensive ML model monitoring and observability platform at Delaware North. Features real-time drift detection, model performance metrics, data quality alerts, and automated reporting. Processes telemetry from 100+ models in production.",
    technologies: ["Python", "MLflow", "Kafka", "Prometheus", "Grafana", "AWS"],
    githubLink: "",
    demoLink: "",
    image: '/projects/ml-observability.jpg',
  },
  {
    title: "Enterprise Data Pipeline",
    description:
      "Designed and implemented real-time data pipelines processing 50TB+ data daily at Delaware North. Built ETL workflows with Airflow, integrated with Snowflake, and created data quality monitoring. Reduced data latency from hours to minutes.",
    technologies: ["Apache Spark", "Airflow", "Snowflake", "Python", "AWS"],
    githubLink: "",
    demoLink: "",
    image: '/projects/data-pipeline.jpg',
  },
  {
    title: "NLP Pipeline for Gartner",
    description:
      "Developed an end-to-end NLP pipeline for text analysis and entity extraction at Tredence. Built custom NER models, sentiment analysis, and text classification systems serving Fortune 500 clients.",
    technologies: ["Python", "BERT", "SpaCy", "FastAPI", "MongoDB"],
    githubLink: "",
    demoLink: "",
    image: '/projects/nlp-pipeline.jpg',
  },
  {
    title: "Package Damage Detection",
    description:
      "Built a computer vision system for detecting package damage in logistics. Used object detection models to identify dents, scratches, and water damage on packages in warehouse environments.",
    technologies: ["Python", "YOLO", "OpenCV", "PyTorch", "AWS SageMaker"],
    githubLink: "",
    demoLink: "",
    image: '/projects/damage-detection.jpg',
  },
  {
    title: "SmartOCR Document Processing",
    description:
      "Developed an intelligent document extraction system using OCR and NLP. Extract structured data from invoices, receipts, and forms with 95% accuracy. Deployed as a REST API for enterprise clients.",
    technologies: ["Python", "Tesseract", "OpenAI", "LangChain", "Azure"],
    githubLink: "",
    demoLink: "",
    image: '/projects/smartocr.jpg',
  },

  // Academic Projects - UB
  {
    title: "RL for Ad Bidding",
    description:
      "Master's thesis project on reinforcement learning for online advertising bidding. Developed a deep RL agent that optimizes bid strategies in real-time auctions, achieving 15% improvement over baseline strategies.",
    technologies: ["Python", "PyTorch", "Gym", "RL Algorithms"],
    githubLink: "https://github.com/shbhmpndy/rl-ad-bidding",
    demoLink: "",
    image: '/projects/rl-ad-bidding.jpg',
  },
  {
    title: "GAN Detection Metrics",
    description:
      "Research project developing novel metrics for detecting AI-generated images. Created a framework evaluating multiple detection methods and proposed improved evaluation benchmarks.",
    technologies: ["Python", "PyTorch", "GANs", "Computer Vision"],
    githubLink: "https://github.com/shbhmpndy/gan-detection",
    demoLink: "",
    image: '/projects/gan-detection.jpg',
  },

  // BIT Mesra Projects
  {
    title: "Facial Image Similarity",
    description:
      "Undergraduate project implementing face recognition using Siamese networks. Achieved 92% accuracy on LFW dataset for face verification.",
    technologies: ["Python", "OpenCV", "CNN", "Siamese Networks"],
    githubLink: "https://github.com/shbhmpndy/face-similarity",
    demoLink: "",
    image: '/projects/face-similarity.jpg',
  },
  {
    title: "Training & Placement Notifier",
    description:
      "Web application for college T&P cell to manage placements. Students can view openings, companies can post requirements, and automated notifications are sent.",
    technologies: ["HTML/CSS", "PHP", "MySQL", "JavaScript"],
    githubLink: "https://github.com/shbhmpndy/tnp-notifier",
    demoLink: "",
    image: '/projects/tnp-notifier.jpg',
  },
  {
    title: "Chat Server",
    description:
      "Real-time chat application using socket programming. Supports multiple rooms, private messaging, and file sharing.",
    technologies: ["Python", "Socket.IO", "JavaScript", "Node.js"],
    githubLink: "https://github.com/shbhmpndy/chat-server",
    demoLink: "",
    image: '/projects/chat-server.jpg',
  },
  {
    title: "Online Exam Portal",
    description:
      "Web-based examination system with timed tests, randomized questions, and automated grading. Used by college for online assessments.",
    technologies: ["HTML/CSS", "PHP", "MySQL", "JavaScript"],
    githubLink: "https://github.com/shbhmpndy/exam-portal",
    demoLink: "",
    image: '/projects/exam-portal.jpg',
  },
];