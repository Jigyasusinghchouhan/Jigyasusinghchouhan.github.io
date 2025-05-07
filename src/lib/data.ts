import type { NavItem, SocialLink, Skill, Project, Experience, Education, Certification } from './types';
import {
  Activity,
  Award,
  BarChartBig,
  Blocks,
  Box,
  Briefcase,
  Cloud,
  CloudCog,
  Code,
  Computer, // Corrected: Was 'Linux' which is not an icon, assuming 'Computer' or similar for OS
  ClipboardList,
  Database,
  FileText,
  Gauge,
  GitBranch,
  GitMerge,
  Github,
  Gitlab,
  GraduationCap,
  LifeBuoy,
  Linkedin,
  ListChecks,
  Lock,
  Mail,
  Monitor,
  Package,
  ScanSearch,
  Server,
  Settings,
  ShieldCheck,
  Terminal,
  TerminalSquare,
  Users,
  Wand2,
  Wrench,
  SearchX 
} from 'lucide-react';

export const siteConfig = {
  name: "Jigyasu Singh Chouhan",
  title: "jigyasu singh choauhan",
  description: "DevOps Engineer with hands-on experience in automating infrastructure, managing CI/CD pipelines, and deploying scalable applications on cloud platforms like AWS and Azure. Proficient in containerization, configuration management, monitoring, and security integration. Adept at improving release cycles, resolving production issues, and collaborating in Agile environments. Focused on reducing downtime and enhancing system reliability through proactive automation and DevSecOps practices.",
};

export const navLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com/Jigyasusinghchouhan', label: 'GitHub', icon: Github },
  { href: 'https://linkedin.com/in/jigyasusinghchouahn', label: 'LinkedIn', icon: Linkedin },
  { href: 'mailto:jigyashu2001@gmail.com', label: 'Email', icon: Mail },
];

export const skills: Skill[] = [
  // Languages
  { name: 'Python', icon: Code, description: 'High-level programming language for scripting and automation.', level: 'Proficient' },
  { name: 'Shell Scripting', icon: TerminalSquare, description: 'Writing scripts for automating tasks in Unix/Linux environments (Bash).', level: 'Proficient' },
  { name: 'SQL', icon: Database, description: 'Querying and managing relational databases.', level: 'Intermediate' },

  // CI/CD & DevOps Tools
  { name: 'Jenkins', icon: Settings, description: 'Automation server for building, testing, and deploying software (CI/CD).', level: 'Advanced' },
  { name: 'GitHub Actions', icon: Github, description: 'Automate workflows directly within GitHub repositories.', level: 'Advanced' },
  { name: 'GitLab CI/CD', icon: Gitlab, description: 'Integrated CI/CD pipelines within GitLab.', level: 'Proficient' },
  { name: 'Docker', icon: Box, description: 'Containerization platform for packaging and running applications.', level: 'Advanced' },
  { name: 'Maven', icon: Package, description: 'Build automation tool primarily for Java projects.', level: 'Intermediate' },
  { name: 'SonarQube', icon: ScanSearch, description: 'Continuous inspection of code quality to perform automatic reviews.', level: 'Proficient' },
  { name: 'Git', icon: GitBranch, description: 'Distributed version control system for tracking changes in source code.', level: 'Advanced' },
  // Bitbucket is listed under Version Control in the prompt, moving it there.

  // Cloud Platforms
  { name: 'AWS', icon: Cloud, description: 'Amazon Web Services (EC2, S3, RDS, ALB/ELB, IAM, VPC, Route53, CloudWatch, DynamoDB).', level: 'Advanced' },
  { name: 'Azure', icon: CloudCog, description: 'Microsoft Azure cloud computing services.', level: 'Proficient' },
  { name: 'Azure DevOps', icon: Wrench, description: 'Services for teams to share code, track work, and ship software (Azure Repos, Pipelines, Boards).', level: 'Proficient' },

  // Infra & Config
  { name: 'YAML', icon: FileText, description: 'Human-readable data serialization language, often used for configuration files.', level: 'Proficient' },
  { name: 'Linux', icon: Computer, description: 'Operating system widely used for servers and DevOps tools.', level: 'Advanced' },
  { name: 'Bash', icon: Terminal, description: 'Unix shell and command language.', level: 'Proficient' },
  { name: 'Apache Tomcat', icon: Server, description: 'Open-source Java servlet container and web server.', level: 'Intermediate' },
  { name: 'NGINX', icon: Server, description: 'High-performance web server, reverse proxy, and load balancer.', level: 'Intermediate' },

  // Monitoring
  { name: 'Grafana', icon: BarChartBig, description: 'Multi-platform open source analytics and interactive visualization web application.', level: 'Proficient' },
  { name: 'Prometheus', icon: Gauge, description: 'Open-source systems monitoring and alerting toolkit.', level: 'Proficient' },
  { name: 'New Relic', icon: Activity, description: 'Observability platform for application performance monitoring.', level: 'Intermediate' },
  { name: 'AWS CloudWatch', icon: Monitor, description: 'Monitoring and observability service for AWS resources and applications.', level: 'Proficient' },
  
  // Version Control (specific tools)
  { name: 'GitHub', icon: Github, description: 'Platform for hosting and collaborating on Git repositories.', level: 'Advanced' },
  { name: 'GitLab', icon: Gitlab, description: 'Web-based DevOps lifecycle tool that provides a Git-repository manager.', level: 'Proficient' },
  { name: 'Bitbucket', icon: GitMerge, description: 'Git-based source code hosting and collaboration tool.', level: 'Intermediate' }, // Used GitMerge as per current
  { name: 'Jira', icon: ClipboardList, description: 'Issue tracking and project management tool.', level: 'Proficient' },
  { name: 'GitBash', icon: Terminal, description: 'Git command-line interface for Windows, providing a Bash emulation.', level: 'Proficient' },

  // Project Management
  { name: 'Asana', icon: ListChecks, description: 'Work management platform for teams to organize, track, and manage their work.', level: 'Intermediate' },
  { name: 'Agile/Scrum', icon: Users, description: 'Methodologies for iterative and incremental project management and software development.', level: 'Proficient' },

  // Other
  { name: 'DevSecOps', icon: ShieldCheck, description: 'Integrating security practices within the DevOps process.', level: 'Proficient' },
  { name: 'IaC (Infrastructure as Code)', icon: Blocks, description: 'Managing and provisioning infrastructure through code (e.g., Terraform, CloudFormation).', level: 'Intermediate' },
  { name: 'Security Best Practices', icon: Lock, description: 'Implementing industry-standard security measures in infrastructure and applications.', level: 'Proficient' },
  { name: 'Automation', icon: Wand2, description: 'Using technology to perform tasks with minimal human intervention.', level: 'Advanced' },
  { name: 'Troubleshooting', icon: SearchX, description: 'Identifying and resolving issues in complex systems and applications.', level: 'Advanced' },
  { name: 'Production Support', icon: LifeBuoy, description: 'Maintaining and supporting live production environments, ensuring reliability and availability.', level: 'Proficient' },
];


export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Django AWS Deployment',
    description: 'Automated the deployment of a Django application on AWS EC2 within a 3-tier architecture. Leveraged Jenkins for CI/CD, Docker for containerization, and SonarQube for code quality analysis. Ensured robust version control using Git.',
    imageUrl: 'https://picsum.photos/seed/djangoaws/600/400',
    imageAiHint: 'django aws',
    tags: ['Django', 'AWS EC2', 'Jenkins', 'Docker', 'SonarQube', 'Git', 'CI/CD', '3-Tier Architecture'],
    githubLink: '#', // Add actual link if available
    liveLink: '#', // Add actual link if available
  },
  {
    id: 'project-2',
    title: 'Timetable Generation System',
    description: 'Developed an academic scheduling system using Python and MySQL. The application was containerized using Docker for easy deployment and scalability. Focused on creating an efficient algorithm for timetable creation.',
    imageUrl: 'https://picsum.photos/seed/timetable/600/400',
    imageAiHint: 'python mysql',
    tags: ['Python', 'MySQL', 'Docker', 'Algorithm', 'Academic Scheduler'],
    githubLink: '#', // Add actual link if available
    liveLink: '#', // Add actual link if available
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Junior DevOps Engineer',
    company: 'Sigma Solve, Inc.',
    duration: 'Dec 2023 – Present',
    description: [
      'Designed, implemented, and managed CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI, significantly reducing deployment times and improving release frequency.',
      'Deployed and maintained microservices (FastAPI, .NET, Node.js, Laravel) ensuring high availability, scalability, and fault tolerance using containerization (Docker) and orchestration principles.',
      'Managed diverse AWS cloud infrastructure components including EC2 instances, S3 storage, RDS databases, Elastic Load Balancers (ALB/ELB), IAM roles, VPC configurations, and Route53 for DNS management.',
      'Setup and configured comprehensive monitoring and alerting systems using Prometheus, Grafana, and New Relic, alongside AWS CloudWatch, to ensure system health and proactive issue detection.',
      'Championed DevSecOps practices by integrating security tools like SonarQube into CI/CD pipelines for static code analysis and vulnerability scanning, enhancing overall application security.',
      'Actively participated in Agile/Scrum ceremonies, collaborated with development teams to troubleshoot and resolve production issues, and contributed to continuous improvement of DevOps processes.',
      'Automated routine infrastructure tasks and deployment processes using shell scripting and Python, minimizing manual intervention and improving operational efficiency.'
    ],
    logoUrl: 'https://picsum.photos/seed/sigmasolve/100/100',
    imageAiHint: 'tech company',
  },
];

export const educations: Education[] = [
  {
    id: 'edu-1',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'MIT World Peace University, Pune',
    duration: '2022 – 2024',
    description: 'Focused on advanced computer science concepts, software development methodologies, cloud computing, and data management. Completed projects in distributed systems and web technologies.',
    logoUrl: 'https://picsum.photos/seed/mitwpu/100/100',
    imageAiHint: 'university building',
  },
  {
    id: 'edu-2',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'SP College, MLSU Udaipur',
    duration: '2019 – 2022',
    description: 'Gained a strong foundation in programming, database management, networking, and web development. Actively participated in coding competitions and tech workshops.',
    logoUrl: 'https://picsum.photos/seed/spcollege/100/100',
    imageAiHint: 'college campus',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Cloud Technical Essentials',
    issuingOrganization: 'edX',
    date: 'N/A', // Date not specified in prompt
    credentialUrl: '#', // Add actual link if available
    logoUrl: 'https://picsum.photos/seed/edxaws/100/100',
    imageAiHint: 'aws edx',
  },
  {
    id: 'cert-2',
    name: 'AWS Academy Graduate – Cloud Architecting',
    issuingOrganization: 'AWS Academy',
    date: 'N/A', // Date not specified in prompt
    credentialUrl: '#', // Add actual link if available
    logoUrl: 'https://picsum.photos/seed/awsacademy/100/100',
    imageAiHint: 'aws academy',
  },
  {
    id: 'cert-3',
    name: 'AWS Certified Solutions Architect Associate SAA-C03',
    issuingOrganization: 'Udemy (Completion)', // Clarify if it's an official cert or course completion
    date: 'N/A', // Date not specified in prompt
    credentialUrl: '#', // Add actual link if available
    logoUrl: 'https://picsum.photos/seed/awscert/100/100',
    imageAiHint: 'aws solution architect',
  },
];

