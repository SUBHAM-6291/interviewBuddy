export interface PrepSection {
    id: string;
    title: string;
    description: string;
    image: string;
    blurDataURL: string;
    cta: string;
    link: string;
    interviewsession: string;
  }
  
  export const prepSections: PrepSection[] = [
    {
      id: "frontend",
      title: "Frontend Interview Prep",
      description: "Master React, JavaScript, and CSS through targeted mock interviews.",
      image: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...Frontend",
      cta: "Begin Preparation",
      link: "/interview/frontend",
      interviewsession: "/ai-interview",
    },
    {
      id: "backend",
      title: "Backend Interview Prep",
      description: "Hone your skills in Node.js, databases, and API design with practice interviews.",
      image: "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...Backend",
      cta: "Begin Preparation",
      link: "/interview/backend",
      interviewsession: "/ai-interview",
    },
    {
      id: "fullstack",
      title: "Full Stack Interview Prep",
      description: "Tackle end-to-end development challenges, from frontend to backend systems.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...Fullstack",
      cta: "Begin Preparation",
      link: "/interview/fullstack",
      interviewsession: "/ai-interview",
    },
    {
      id: "devops",
      title: "DevOps Interview Prep",
      description: "Master CI/CD, cloud platforms, and containerization with mock interviews.",
      image: "https://images.unsplash.com/photo-1631624222568-6619ce21a683?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...DevOps",
      cta: "Begin Preparation",
      link: "/interview/devops",
      interviewsession: "/ai-interview",
    },
    {
      id: "datascience",
      title: "Data Science Interview Prep",
      description: "Practice Python, machine learning, and data analysis for data science roles.",
      image: "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...DataScience",
      cta: "Begin Preparation",
      link: "/interview/datascience",
      interviewsession: "/ai-interview",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Interview Prep",
      description: "Prepare for security roles with network, penetration testing, and threat analysis practice.",
      image: "https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...Cybersecurity",
      cta: "Begin Preparation",
      link: "/interview/cybersecurity",
      interviewsession: "/ai-interview",
    },
    {
      id: "mobile",
      title: "Mobile Development Interview Prep",
      description: "Excel in iOS and Android development with Swift, Kotlin, and app design challenges.",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...Mobile",
      cta: "Begin Preparation",
      link: "/interview/mobile",
      interviewsession: "/ai-interview",
    },
    {
      id: "cloud",
      title: "Cloud Engineering Interview Prep",
      description: "Master AWS, Azure, and cloud architecture through scenario-based interviews.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=375&fit=crop&auto=format&q=60",
      blurDataURL: "data:image/jpeg;base64,/9j/2w...Cloud",
      cta: "Begin Preparation",
      link: "/interview/cloud",
      interviewsession: "/ai-interview",
    },
  ] as const;