import type { MenuItemType, ISECTION } from "@/types";

export const menuData: MenuItemType[] = [
  {
    id: 1,
    title: "HOME",
    pageData: [] as ISECTION[],
    description: "",
    href: "/"
  },
  {
    id: 6,
    title: "SERVICES",
    pageData: [] as ISECTION[],
    description: "Our comprehensive range of technology services",
    image: "https://placehold.co/200x200.jpg",
    href: "/services",
    children: [
      {
        id: 7,
        title: "Software Development",
        description: "Custom software solutions built for your business",
        image: "/images/menu/software-dev.jpg",
        href: "/services/software-development" as const,
        children: [
          {
            id: 8,
            title: "Web Development",
            pageData: [{ title: "Hello world" }] as ISECTION[],
            description: "",
            href: "/services/software-development/web-development"
          },
          {
            id: 9,
            title: "Mobile Development",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/mobile-development"
          },
          {
            id: 10,
            title: "SaaS Platforms",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/saas-platforms"
          },
          {
            id: 101,
            title: "API Integration",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/api-integration"
          },
          {
            id: 102,
            title: "Web 3.0",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/web3"
          },
          {
            id: 103,
            title: "Salesforce Solutions",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/salesforce"
          },
          {
            id: 104,
            title: "CMS Platforms",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/cms"
          },
          {
            id: 105,
            title: "Progressive Web Apps",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/pwa"
          },
          {
            id: 106,
            title: "Game Development",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/software-development/game-development"
          }
        ]
      },
      {
        id: 11,
        title: "Data and Analytics",
        pageData: [] as ISECTION[],
        description: "Transform your data into actionable insights",
        image: "/images/menu/data-analytics.jpg",
        href: "/services/data-and-analytics",
        children: [
          {
            id: 120,
            title: "Data Visualization",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/data-visualization"
          },
          {
            id: 130,
            title: "Predictive Analytics",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/predictive-analytics"
          },
          {
            id: 140,
            title: "Big Data",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/big-data"
          },
          {
            id: 141,
            title: "Machine Learning",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/machine-learning"
          },
          {
            id: 142,
            title: "Computer Vision",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/computer-vision"
          },
          {
            id: 143,
            title: "Data Cleansing",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/data-cleansing"
          },
          {
            id: 144,
            title: "Data Engineering",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/data-engineering"
          },
          {
            id: 145,
            title: "Data Migration Services",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/data-and-analytics/data-migration"
          }
        ]
      },
      {
        id: 15,
        title: "Cloud and DevOps",
        pageData: [] as ISECTION[],
        description: "Scalable infrastructure and seamless deployment",
        image: "/images/menu/cloud-devops.jpg",
        href: "/services/cloud-and-devops",
        children: [
          {
            id: 151,
            title: "Cloud Solutions",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/cloud-solutions"
          },
          {
            id: 152,
            title: "Automation Services",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/automation"
          },
          {
            id: 153,
            title: "CI/CD Pipelines",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/cicd"
          },
          {
            id: 154,
            title: "Kubernetes Management",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/kubernetes"
          },
          {
            id: 155,
            title: "Docker Containers",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/docker"
          },
          {
            id: 156,
            title: "Cost Optimization",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/cost-optimization"
          },
          {
            id: 157,
            title: "Disaster Recovery",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/disaster-recovery"
          },
          {
            id: 158,
            title: "Serverless Computing",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/cloud-and-devops/serverless"
          }
        ]
      },
      {
        id: 16,
        title: "Emerging Technologies",
        pageData: [] as ISECTION[],
        description: "Cutting-edge solutions for tomorrow's challenges",
        image: "/images/menu/emerging-tech.jpg",
        href: "/services/emerging-technologies",
        children: [
          {
            id: 162,
            title: "Blockchain Solutions",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/emerging-technologies/blockchain"
          },
          {
            id: 163,
            title: "Voice Technology",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/emerging-technologies/voice-tech"
          },
          {
            id: 164,
            title: "IoT Integration",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/emerging-technologies/iot"
          },
          {
            id: 165,
            title: "AI Personalization",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/emerging-technologies/ai-personalization"
          },
          {
            id: 166,
            title: "AR/VR Applications",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/emerging-technologies/ar-vr"
          },
          {
            id: 167,
            title: "Quantum Computing",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/emerging-technologies/quantum"
          },
          {
            id: 168,
            title: "Workflow AI",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/emerging-technologies/workflow-ai"
          }
        ]
      },
      {
        id: 17,
        title: "Creative and Design",
        pageData: [] as ISECTION[],
        description: "Visually stunning and user-focused design",
        image: "/images/menu/creative-design.jpg",
        href: "/services/creative-and-design",
        children: [
          {
            id: 172,
            title: "Graphic Design",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/creative-and-design/graphic-design"
          },
          {
            id: 173,
            title: "UX/UI Design",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/creative-and-design/ux-ui"
          },
          {
            id: 174,
            title: "3D Modeling",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/creative-and-design/3d-modeling"
          },
          {
            id: 175,
            title: "Motion Graphics",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/creative-and-design/motion-graphics"
          },
          {
            id: 176,
            title: "Branding Services",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/creative-and-design/branding"
          },
          {
            id: 177,
            title: "Infographic Design",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/creative-and-design/infographics"
          }
        ]
      },
      {
        id: 18,
        title: "Digital Marketing",
        pageData: [] as ISECTION[],
        description: "Data-driven strategies for growth",
        image: "/images/menu/digital-marketing.jpg",
        href: "/services/digital-marketing",
        children: [
          {
            id: 182,
            title: "SEO Services",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/digital-marketing/seo"
          },
          {
            id: 183,
            title: "Social Media",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/digital-marketing/social-media"
          },
          {
            id: 184,
            title: "Content Marketing",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/digital-marketing/content-marketing"
          },
          {
            id: 185,
            title: "Email Campaigns",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/digital-marketing/email-marketing"
          },
          {
            id: 186,
            title: "PPC Advertising",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/digital-marketing/ppc"
          },
          {
            id: 187,
            title: "Analytics & Reporting",
            pageData: [] as ISECTION[],
            description: "",
            href: "/services/digital-marketing/marketing-analytics"
          }
        ]
      }
    ]
  },
  {
    id: 500,
    title: "INDUSTRIES",
    pageData: [] as ISECTION[],
    description: "Specialized solutions for diverse sectors",
    image: "https://placehold.co/200x200.jpg",
    href: "/industries",
    children: [
      {
        id: 501,
        title: "Healthcare & Life Sciences",
        pageData: [] as ISECTION[],
        description: "Transforming patient care through technology",
        image: "/images/menu/healthcare.jpg",
        href: "/industries/healthcare",
        children: [
          {
            id: 5011,
            title: "Regulatory Compliance",
            pageData: [] as ISECTION[],
            href: "/industries/healthcare/regulatory-compliance"
          },
          {
            id: 5012,
            title: "Data-Driven Care",
            pageData: [] as ISECTION[],
            href: "/industries/healthcare/data-driven-care"
          },
          {
            id: 5013,
            title: "Telehealth & IoT",
            pageData: [] as ISECTION[],
            href: "/industries/healthcare/telehealth-iot"
          },
          {
            id: 5014,
            title: "Cloud & DevOps for Healthcare",
            pageData: [] as ISECTION[],
            href: "/industries/healthcare/cloud-devops"
          },
          {
            id: 5015,
            title: "Medical Software Development",
            pageData: [] as ISECTION[],
            href: "/industries/healthcare/medical-software"
          }
        ]
      },
      {
        id: 502,
        title: "Financial Services",
        pageData: [] as ISECTION[],
        description: "Secure and innovative fintech solutions",
        image: "/images/menu/finance.jpg",
        href: "/industries/finance",
        children: [
          {
            id: 5021,
            title: "Security & Compliance",
            pageData: [] as ISECTION[],
            href: "/industries/finance/security-compliance"
          },
          {
            id: 5022,
            title: "Fraud Detection",
            pageData: [] as ISECTION[],
            href: "/industries/finance/fraud-detection"
          },
          {
            id: 5023,
            title: "FinTech Innovation",
            pageData: [] as ISECTION[],
            href: "/industries/finance/fintech-innovation"
          },
          {
            id: 5024,
            title: "Scalable Infrastructure",
            pageData: [] as ISECTION[],
            href: "/industries/finance/scalable-infrastructure"
          },
          {
            id: 5025,
            title: "Blockchain for Finance",
            pageData: [] as ISECTION[],
            href: "/industries/finance/blockchain"
          }
        ]
      },
      {
        id: 503,
        title: "Retail & E-Commerce",
        pageData: [] as ISECTION[],
        description: "Elevating the digital shopping experience",
        image: "/images/menu/retail.jpg",
        href: "/industries/retail",
        children: [
          {
            id: 5031,
            title: "E-Commerce Platforms",
            pageData: [] as ISECTION[],
            href: "/industries/retail/e-commerce-platforms"
          },
          {
            id: 5032,
            title: "Omnichannel Solutions",
            pageData: [] as ISECTION[],
            href: "/industries/retail/omnichannel"
          },
          {
            id: 5033,
            title: "Customer Analytics",
            pageData: [] as ISECTION[],
            href: "/industries/retail/customer-analytics"
          },
          {
            id: 5034,
            title: "Inventory Management",
            pageData: [] as ISECTION[],
            href: "/industries/retail/inventory-management"
          },
          {
            id: 5035,
            title: "Personalized Marketing",
            pageData: [] as ISECTION[],
            href: "/industries/retail/personalized-marketing"
          }
        ]
      },
      {
        id: 504,
        title: "Manufacturing",
        pageData: [] as ISECTION[],
        description: "Optimizing production through digital transformation",
        image: "/images/menu/manufacturing.jpg",
        href: "/industries/manufacturing",
        children: [
          {
            id: 5041,
            title: "IoT & Automation",
            pageData: [] as ISECTION[],
            href: "/industries/manufacturing/iot-automation"
          },
          {
            id: 5042,
            title: "Supply Chain Security",
            pageData: [] as ISECTION[],
            href: "/industries/manufacturing/supply-chain"
          },
          {
            id: 5043,
            title: "Predictive Maintenance",
            pageData: [] as ISECTION[],
            href: "/industries/manufacturing/predictive-maintenance"
          },
          {
            id: 5044,
            title: "Digital Twins",
            pageData: [] as ISECTION[],
            href: "/industries/manufacturing/digital-twins"
          },
          {
            id: 5045,
            title: "Smart Factory Solutions",
            pageData: [] as ISECTION[],
            href: "/industries/manufacturing/smart-factory"
          }
        ]
      },
      {
        id: 505,
        title: "Education & E-Learning",
        pageData: [] as ISECTION[],
        description: "Innovative platforms for knowledge sharing",
        image: "/images/menu/education.jpg",
        href: "/industries/education",
        children: [
          {
            id: 5051,
            title: "LMS Development",
            pageData: [] as ISECTION[],
            href: "/industries/education/lms-development"
          },
          {
            id: 5052,
            title: "Student Analytics",
            pageData: [] as ISECTION[],
            href: "/industries/education/student-analytics"
          },
          {
            id: 5053,
            title: "Virtual Classrooms",
            pageData: [] as ISECTION[],
            href: "/industries/education/virtual-classrooms"
          },
          {
            id: 5054,
            title: "Educational Apps",
            pageData: [] as ISECTION[],
            href: "/industries/education/educational-apps"
          },
          {
            id: 5055,
            title: "Interactive Learning",
            pageData: [] as ISECTION[],
            href: "/industries/education/interactive-learning"
          }
        ]
      },
      {
        id: 506,
        title: "Technology & SaaS",
        pageData: [] as ISECTION[],
        description: "Building the platforms of tomorrow",
        image: "/images/menu/technology.jpg",
        href: "/industries/technology",
        children: [
          {
            id: 5061,
            title: "Platform Architecture",
            pageData: [] as ISECTION[],
            href: "/industries/technology/platform-architecture"
          },
          {
            id: 5062,
            title: "Scalability Solutions",
            pageData: [] as ISECTION[],
            href: "/industries/technology/scalability"
          },
          {
            id: 5063,
            title: "API Development",
            pageData: [] as ISECTION[],
            href: "/industries/technology/api-development"
          },
          {
            id: 5064,
            title: "Multi-tenant Systems",
            pageData: [] as ISECTION[],
            href: "/industries/technology/multi-tenant"
          },
          {
            id: 5065,
            title: "SaaS Optimization",
            pageData: [] as ISECTION[],
            href: "/industries/technology/saas-optimization"
          }
        ]
      }
    ]
  },
  {
    id: 9000,
    title: "TECHNOLOGIES",
    pageData: [] as ISECTION[],
    description: "Expertise across leading technology stacks",
    image: "https://placehold.co/200x200.jpg",
    href: "/technologies",
    children: [
      {
        id: 9100,
        title: "Web Technologies",
        pageData: [] as ISECTION[],
        description: "Modern frameworks for powerful web applications",
        image: "/images/menu/web-tech.jpg",
        href: "/technologies/web",
        children: [
          {
            id: 9101,
            title: "React.js",
            pageData: [] as ISECTION[],
            href: "/technologies/web/reactjs",
            description: "Building interactive UIs with React"
          },
          {
            id: 9102,
            title: "Angular",
            pageData: [] as ISECTION[],
            href: "/technologies/web/angular",
            description: "Enterprise-grade applications with Angular"
          },
          {
            id: 9103,
            title: "Vue.js",
            pageData: [] as ISECTION[],
            href: "/technologies/web/vuejs",
            description: "Progressive web frameworks with Vue"
          },
          {
            id: 9104,
            title: "Node.js",
            pageData: [] as ISECTION[],
            href: "/technologies/web/nodejs",
            description: "Server-side JavaScript solutions"
          },
          {
            id: 9105,
            title: "Next.js",
            pageData: [] as ISECTION[],
            href: "/technologies/web/nextjs",
            description: "React framework for production"
          },
          {
            id: 9106,
            title: "PHP/Laravel",
            pageData: [] as ISECTION[],
            href: "/technologies/web/php-laravel",
            description: "Elegant web applications with Laravel"
          }
        ]
      },
      {
        id: 9200,
        title: "Mobile Technologies",
        pageData: [] as ISECTION[],
        description: "Cross-platform and native mobile development",
        image: "/images/menu/mobile-tech.jpg",
        href: "/technologies/mobile",
        children: [
          {
            id: 9201,
            title: "React Native",
            pageData: [] as ISECTION[],
            href: "/technologies/mobile/react-native",
            description: "Cross-platform mobile apps with React Native"
          },
          {
            id: 9202,
            title: "Flutter",
            pageData: [] as ISECTION[],
            href: "/technologies/mobile/flutter",
            description: "Beautiful native apps with Flutter"
          },
          {
            id: 9203,
            title: "iOS/Swift",
            pageData: [] as ISECTION[],
            href: "/technologies/mobile/ios-swift",
            description: "Native iOS development with Swift"
          },
          {
            id: 9204,
            title: "Android/Kotlin",
            pageData: [] as ISECTION[],
            href: "/technologies/mobile/android-kotlin",
            description: "Modern Android apps with Kotlin"
          },
          {
            id: 9205,
            title: "Progressive Web Apps",
            pageData: [] as ISECTION[],
            href: "/technologies/mobile/pwa",
            description: "Web apps with native-like experience"
          },
          {
            id: 9206,
            title: "Xamarin",
            pageData: [] as ISECTION[],
            href: "/technologies/mobile/xamarin",
            description: ".NET-powered cross-platform development"
          }
        ]
      },
      {
        id: 9300,
        title: "Cloud Technologies",
        pageData: [] as ISECTION[],
        description: "Infrastructure and deployment solutions",
        image: "/images/menu/cloud-tech.jpg",
        href: "/technologies/cloud",
        children: [
          {
            id: 9301,
            title: "AWS",
            pageData: [] as ISECTION[],
            href: "/technologies/cloud/aws",
            description: "Amazon Web Services solutions"
          },
          {
            id: 9302,
            title: "Azure",
            pageData: [] as ISECTION[],
            href: "/technologies/cloud/azure",
            description: "Microsoft Azure cloud services"
          },
          {
            id: 9303,
            title: "Google Cloud",
            pageData: [] as ISECTION[],
            href: "/technologies/cloud/google-cloud",
            description: "Google Cloud Platform expertise"
          },
          {
            id: 9304,
            title: "Kubernetes",
            pageData: [] as ISECTION[],
            href: "/technologies/cloud/kubernetes",
            description: "Container orchestration at scale"
          },
          {
            id: 9305,
            title: "Docker",
            pageData: [] as ISECTION[],
            href: "/technologies/cloud/docker",
            description: "Containerization for modern apps"
          },
          {
            id: 9306,
            title: "Serverless",
            pageData: [] as ISECTION[],
            href: "/technologies/cloud/serverless",
            description: "Event-driven cloud computing"
          }
        ]
      },
      {
        id: 9400,
        title: "Data Technologies",
        pageData: [] as ISECTION[],
        description: "Storage, processing, and analysis solutions",
        image: "/images/menu/data-tech.jpg",
        href: "/technologies/data",
        children: [
          {
            id: 9401,
            title: "PostgreSQL",
            pageData: [] as ISECTION[],
            href: "/technologies/data/postgresql",
            description: "Advanced open-source database"
          },
          {
            id: 9402,
            title: "MongoDB",
            pageData: [] as ISECTION[],
            href: "/technologies/data/mongodb",
            description: "NoSQL database for modern applications"
          },
          {
            id: 9403,
            title: "Redis",
            pageData: [] as ISECTION[],
            href: "/technologies/data/redis",
            description: "In-memory data structure store"
          },
          {
            id: 9404,
            title: "Elasticsearch",
            pageData: [] as ISECTION[],
            href: "/technologies/data/elasticsearch",
            description: "Distributed search and analytics"
          },
          {
            id: 9405,
            title: "Apache Kafka",
            pageData: [] as ISECTION[],
            href: "/technologies/data/kafka",
            description: "Real-time data streaming platform"
          },
          {
            id: 9406,
            title: "GraphQL",
            pageData: [] as ISECTION[],
            href: "/technologies/data/graphql",
            description: "API query language for modern apps"
          }
        ]
      },
      {
        id: 9500,
        title: "AI & Machine Learning",
        pageData: [] as ISECTION[],
        description: "Intelligent solutions for complex problems",
        image: "/images/menu/ai-ml.jpg",
        href: "/technologies/ai-ml",
        children: [
          {
            id: 9501,
            title: "TensorFlow",
            pageData: [] as ISECTION[],
            href: "/technologies/ai-ml/tensorflow",
            description: "End-to-end machine learning platform"
          },
          {
            id: 9502,
            title: "PyTorch",
            pageData: [] as ISECTION[],
            href: "/technologies/ai-ml/pytorch",
            description: "Research-focused deep learning"
          },
          {
            id: 9503,
            title: "Computer Vision",
            pageData: [] as ISECTION[],
            href: "/technologies/ai-ml/computer-vision",
            description: "Image and video processing"
          },
          {
            id: 9504,
            title: "NLP",
            pageData: [] as ISECTION[],
            href: "/technologies/ai-ml/nlp",
            description: "Natural language understanding"
          },
          {
            id: 9505,
            title: "Predictive Models",
            pageData: [] as ISECTION[],
            href: "/technologies/ai-ml/predictive-models",
            description: "Future-focused business intelligence"
          },
          {
            id: 9506,
            title: "GenAI & LLMs",
            pageData: [] as ISECTION[],
            href: "/technologies/ai-ml/generative-ai",
            description: "Creative AI applications"
          }
        ]
      },
      {
        id: 9600,
        title: "DevOps Tools",
        pageData: [] as ISECTION[],
        description: "Streamline development and operations",
        image: "/images/menu/devops.jpg",
        href: "/technologies/devops",
        children: [
          {
            id: 9601,
            title: "CI/CD Pipelines",
            pageData: [] as ISECTION[],
            href: "/technologies/devops/cicd",
            description: "Automated testing and deployment"
          },
          {
            id: 9602,
            title: "Jenkins",
            pageData: [] as ISECTION[],
            href: "/technologies/devops/jenkins",
            description: "Open-source automation server"
          },
          {
            id: 9603,
            title: "GitHub Actions",
            pageData: [] as ISECTION[],
            href: "/technologies/devops/github-actions",
            description: "Workflow automation for GitHub"
          },
          {
            id: 9604,
            title: "Terraform",
            pageData: [] as ISECTION[],
            href: "/technologies/devops/terraform",
            description: "Infrastructure as code"
          },
          {
            id: 9605,
            title: "Ansible",
            pageData: [] as ISECTION[],
            href: "/technologies/devops/ansible",
            description: "Configuration management"
          },
          {
            id: 9606,
            title: "Monitoring Tools",
            pageData: [] as ISECTION[],
            href: "/technologies/devops/monitoring",
            description: "System and application observability"
          }
        ]
      }
    ]
  },
  {
    id: 45,
    title: "BLOG",
    pageData: [] as ISECTION[],
    description: "",
    href: "/blog"
  },
  {
    id: 47,
    title: "CONTACT",
    pageData: [] as ISECTION[],
    description: "",
    href: "/contact"
  }
];
