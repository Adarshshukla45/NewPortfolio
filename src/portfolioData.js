
export const portfolioData = {
  personalInfo: {
    name: "Adarsh Shukla",
    title: "Computer Science Engineering Student",
    subtitle: "Full-Stack Developer & Problem Solver",
    bio: "Passionate Computer Science Engineering undergraduate specializing in building modern web applications, designing interactive user interfaces, and solving algorithmic problems. Dedicated to writing clean, optimized, and maintainable code.",
    careerObjective: "To leverage my technical skills in full-stack development, software engineering principles, and data structures to build highly scalable, user-centric software solutions in a dynamic and collaborative engineering environment.",
    avatar: "/adarsh.png",
    resumeUrl: "#resume", // Interactive section link
    email: "adarshshuklajjk@example.com",
    phone: "9026500843",
    location: "Kanpur UP, India",
    github: "https://github.com/Adarshshukla45",
    linkedin: "https://www.linkedin.com/in/adarsh-shukla-741b86335/",
  },
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Pranveer Singh Institute of Technology, Kanpur",
      period: "2023 - 2027",
      grade: "CGPA: 8.2/10.0",
      details: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.",
        "Dean's List for Academic Excellence (Top 5% of class).",
        "Active member of the Software Development Club and Competitive Coding Cell."
      ]
    },
    {
      degree: "12th Grade (Science Stream)",
      institution: "Dr. Virendra Swarup Public School, Kanpur",
      period: "2022- 2023",
      // grade: "Score: 96.4%",
      details: [
        "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
        // "Winner of the regional Inter-School Coding Olympiad."
      ]
    }
  ],
  skills: [
    // Languages
    { name: "C++", level: 90, category: "languages" },
    { name: "Java", level: 85, category: "languages" },
    { name: "Python", level: 80, category: "languages" },
    { name: "JavaScript", level: 92, category: "languages" },
    { name: "HTML", level: 95, category: "languages" },
    { name: "CSS", level: 90, category: "languages" },
    // Frameworks/Libraries
    { name: "React", level: 92, category: "frameworks" },
    { name: "Node.js", level: 80, category: "frameworks" },
    { name: "Express.js", level: 85, category: "frameworks" },
    { name: "MongoDB", level: 78, category: "frameworks" },
    { name: "MySQL", level: 85, category: "frameworks" },
    // Tools
    { name: "Git", level: 88, category: "tools" },
    { name: "GitHub", level: 90, category: "tools" },
    { name: "MS SQL Server", level: 90, category: "tools" },
    { name: "Postman", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
  
    // Core CS Concepts
    { name: "DSA", level: 88, category: "concepts" },
    { name: "OOP", level: 90, category: "concepts" },
    { name: "DBMS", level: 85, category: "concepts" },
    { name: "Operating System", level: 82, category: "concepts" },
    { name: "Computer Networks", level: 80, category: "concepts" },
    //DS
    { name: "Numpy", level: 88, category: "New" },
    { name: "Pandas", level: 90, category: "New" },
    { name: "Matplotlib", level: 85, category: "New" },
    { name: "Machine Learning", level: 85, category: "New" },
  

  ],
  projects: [
    {
      id: "hand-cricket",
      name: "Hand Cricket Game",
      description: "An interactive, retro hand cricket game with intelligent computer opponents, customizable target chases, real-time scorecard animation, and high-score saving features.",
      longDescription: "Recognized as the Top Project of Year 1! This interactive digital recreation of the classic hand-signals game features smart AI patterns that learn from the player's history, beautiful stadium visual themes, commentary engines, and persistent high scores. Built with optimized React rendering.",
      image: "/hand_cricket_cover_1783002607187.jpg",
      techStack:  ["⚛️ React", "🎨 Tailwind CSS", "💾 Local Storage"],
      liveUrl: "https://hand-cricket-game-umber.vercel.app/", // Points to the interactive in-page game
      githubUrl: "https://github.com",
      category: "game",
      featured: true
    },
    {
      id: "datalens",
      name: "DataLens",
      description: "A  data science web app built with Python & Streamlit. Upload any CSV dataset and get instant EDA, visualizations, ML modeling, and downloadable PDF reports.",
      longDescription: "A powerful client-side analytical platform allowing users to import massive CSV/JSON files and generate multi-layered visual representations like scatter plots, bar charts, and heatmaps. Supported with Web Workers for non-blocking UI thread execution.",
      image: "/datalens_cover_1783002637410.jpg",
      techStack:  [
  "📤 CSV Upload",
  "📋 Data Report",
  "🧹 Data Cleaning",
  "📊 Visualization",
  "🤖 Machine Learning",
  "📈 Model Metrics",
  "🔮 Live Predictions",
  "📄 PDF Report",
  "⬇️ Export"
],
      liveUrl: "https://adarshshukla45.github.io/Lauching-Soon-Page/",
      githubUrl: "http://github.com/Adarshshukla45/DataLens",
      category: "web",
      featured: true
    },
    {
      id: "civicpulse",
      name: "CivicPulse 2.0",
      description: "A local governance transparency and citizen participation platform with public survey tools, voting mechanisms, and real-time community engagement analytics.",
      longDescription: "CivicPulse 2.0 bridges the gap between citizens and local governance. Features secure feedback logs, active community voting on municipal tasks, clean modern visualization charts of infrastructure budgets, and a transparent query filing mechanism.",
      image: "/civic_pulse_cover_1783002622238.jpg",
      techStack: ["⚛️ React", "🎨 Tailwind CSS", "🚀 Express.js", "🍃 MongoDB", "📊 Chart.js"],
      liveUrl: "https://adarshshukla45.github.io/Lauching-Soon-Page/",
      githubUrl: "https://github.com/Adarshshukla45/CivicPulse-2.0",
      category: "system",
      featured: true
    },
    {
      id: "carrent",
      name: "CarRentSystem",
      description: "A full-stack vehicle rental and reservation system with interactive fleet tracking, calendar bookings, and dynamic rate calculation.",
      longDescription: "A streamlined fleet orchestration system offering active user management, real-time availability tracking calendars, automated booking agreements, and a sleek dark-teal theme responsive client panel.",
      image: "/carrent_cover_1783002652519.jpg",
      techStack:   ["⚛️ React", "🟢 Node.js", "🚀 Express.js", "🛢️ MySQL", "🎨 Tailwind CSS"],
      liveUrl: "https://adarshshukla45.github.io/Lauching-Soon-Page/",
      githubUrl: "hhttps://github.com/Adarshshukla45/car-Booking-system",
      category: "system",
      featured: false
    },
    {
      id: "society",
      name: "Society Management System",
      description: "An administrative portal for modern housing complexes, handling digital resident dues payments, maintenance complaints, and shared facility bookings.",
      longDescription: "Empowers housing society administrators and residents with automated billing ledger logs, multi-stage complaint ticketing systems, dynamic slot allocations for community spaces, and broadcast notifications.",
      image: "/society_cover_1783002667907.jpg",
      techStack:   ["⚛️ React", "🚀 Express.js", "🍃 MongoDB", "🎨 Tailwind CSS"],
      liveUrl: "https://adarshshukla45.github.io/Lauching-Soon-Page/",
      githubUrl: "https://github.com/Adarshshukla45/Society-Maintenance-Tracker",
      category: "system",
      featured: false
    },
    {
      id: "youview",
      name: "YouView",
      description: "A shared media hub and community-focused video content organization layout with tag filtering, comment aggregations, and responsive video players.",
      longDescription: "A high-fidelity dashboard built to curate and organize shared video streams. Features interactive commentary systems, group watchrooms, responsive overlay modals, and responsive layout configurations.",
      image: "/youview_cover_1783002681297.jpg",
      techStack: ["⚛️ React", "🎨 Tailwind CSS", "💾 Local Storage", "🎞️ Framer Motion"],
      liveUrl: "https://adarshshukla45.github.io/Lauching-Soon-Page/",
      githubUrl: "https://github.com/Adarshshukla45/YouView",
      category: "web",
      featured: false
    }
  ],
  certificates: [
    {
      name: "SQL(Basics)",
      organization: "HackerRank",
      date: "May 2025",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/91b245186ce7",
      image: "/SQL.png"
    },
    {
      name: "Problem Solving (Basics)",
      organization: "HackerRank",
      date: "Dec 2024",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/02527f2567ee",
      image: "/DSA.png"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      organization: "Amazon Web Services",
      date: "Oct 2025",
      credentialUrl: "https://skillbuilder.aws/a86f926e-011a-4708-9eb7-fb1f1ed81f74",
      image: "/aws.png"
    },
    {
      name: "Machine Learning for Data Science Projects",
      organization: "IBM",
      date: "Jul 2024",
      credentialUrl: "https://skills.yourlearning.ibm.com/credential/CREDLY-148b4f36-2ee8-478d-9a14-7767ad75f102",
      image: "/IBM.png"
    },
     {
      name: "Introduction to Model Context Protocol",
      organization: "Anthropic",
      date: "June 2026",
      credentialUrl: "https://verify.skilljar.com/c/ed8ex5y9gpsn",
      image: "/Claude.png"
    }
  ],
  codingProfiles: [
    {
      platform: "LeetCode",
      // username: "alex_cse_27",
      profileUrl: "https://leetcode.com/u/A_S123456",
      solvedCount: 600,
      // rating: "Knight (1920 Max Rating)",
      badge: "50+ Day Streak"
    },
    {
      platform: "GeeksforGeeks",
      // username: "alex_dev_99",
      profileUrl: "https://www.geeksforgeeks.org/profile/adarshshme9c",
      solvedCount: 150,
      // rating: "Overall Coding Score: 1850",
      badge: "Gold Contributor"
    },
    {
      platform: "HackerRank",
      // username: "alex_hr_2023",
      profileUrl: "https://www.hackerrank.com/profile/cs1a_40008",
      solvedCount: 200,
      Achievement:"4 ⭐ in Problem Solving",
      rating: "5 Star in Problem Solving & C++",
      badge: "Problem Solving Certificate"
    },
   
  ],
  githubProfile: {
    // username: "alexdev-cse",
    profileUrl: "https://github.com",
    publicRepos: 28,
    followers: 124,
    totalStars: 198,
    languages: [
      { name: "JavaScript", percentage: 42, color: "#f1e05a" },
      { name: "C++", percentage: 28, color: "#f34b7d" },
      { name: "CSS", percentage: 15, color: "#563d7c" },
      { name: "HTML", percentage: 10, color: "#e34c26" },
      { name: "Python", percentage: 5, color: "#3572A5" }
    ],
    topRepos: [
      {
        name: "Hand-Cricket-Interactive",
        description: "Optimized React & Tailwind responsive game engine of hand cricket with custom computer behaviors.",
        language: "JavaScript",
        stars: 48,
        forks: 12,
        url: "https://github.com"
      },
      {
        name: "DataLens-Visualization",
        description: "A clean dataset orchestrator & analytical pipeline powered by Recharts dashboard and concurrent processing.",
        language: "JavaScript",
        stars: 36,
        forks: 8,
        url: "https://github.com"
      },
      {
        name: "CivicPulse-Core",
        description: "Local governance database and public tracking micro-service architecture.",
        language: "JavaScript",
        stars: 29,
        forks: 5,
        url: "https://github.com"
      }
    ]
  }
};
