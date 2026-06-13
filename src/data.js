import profileImage from './assets/profile.webp';
export const WORK_HISTORY = [
    {
        id: 1,
        role: "Laravel Developer",
        company: "Doublard Design Pvt. Ltd., Kathmandu",
        date: "02/2025 – Present",
        icon: "fa-briefcase",
        color: "bg-primary-600",
        details: [
            "Built and maintained IMS-based web applications using PHP and Laravel.",
            "Developed reporting modules and improved data management workflows.",
            "Optimized MySQL queries to enhance application performance and reliability.",
            "Collaborated in Agile teams using Git for version control and issue resolution.",
            "Followed clean code practices and maintained proper technical documentation."
        ]
    },
    {
        id: 2,
        role: "Associate PHP Developer",
        company: "Avanya Technology Pvt. Ltd., Sanepa (Lalitpur)",
        date: "05/2024 – 01/2025",
        icon: "fa-code",
        color: "bg-accent-500",
        details: [
            "Contributed to CRM-based applications using PHP, CodeIgniter, and Laravel.",
            "Integrated RESTful APIs for smooth system communication.",
            "Developed scalable features and assisted in debugging performance issues.",
            "Worked closely with senior developers to deliver production-ready solutions."
        ]
    },
    {
        id: 3,
        role: "Junior PHP Developer",
        company: "Codewing Solutions, Chandol (Kathmandu)",
        date: "04/2023 – 05/2024",
        icon: "fa-wordpress",
        color: "bg-gray-800",
        details: [
            "Developed custom WordPress plugins and Gutenberg blocks.",
            "Built new features and improved performance of existing applications.",
            "Followed WordPress coding standards to ensure maintainable code quality."
        ]
    },
    {
        id: 4,
        role: "Software Engineer Intern",
        company: "VoxCrow Pvt. Ltd., Kathmandu",
        date: "03/2022 – 07/2022",
        icon: "fa-laptop-code",
        color: "bg-gray-500",
        details: [
            "Assisted in web application development using PHP, JavaScript, and MySQL.",
            "Developed and tested features using object-oriented programming principles.",
            "Gained hands-on experience with Git-based version control workflows."
        ]
    }
];

export const EDUCATION = [
    {
        id: 1,
        degree: "BSc.(Hons.) in Information Technology",
        school: "Lord Buddha Education Foundation, Kathmandu",
        year: "2018 – 2022",
        note: "(Affiliated with Asia Pacific University, Malaysia)",
        icon: "fa-graduation-cap",
        color: "text-primary-600 bg-primary-100"
    },
    {
        id: 2,
        degree: "10+2 in Science",
        school: "Capitol Hill Academy, Kathmandu",
        year: "2015 – 2017",
        icon: "fa-school",
        color: "text-accent-500 bg-accent-100"
    }
];

// Added Tailwind CSS here
export const SKILLS = [
    { name: "PHP", icon: "fab fa-php", color: "text-indigo-600" },
    { name: "Laravel", icon: "fab fa-laravel", color: "text-red-500" },
    { name: "ReactJS", icon: "fab fa-react", color: "text-blue-400" },
    { name: "CodeIgniter", icon: "fas fa-fire", color: "text-orange-500" },
    { name: "MySQL", icon: "fas fa-database", color: "text-blue-500" },
    { name: "WordPress", icon: "fab fa-wordpress", color: "text-cyan-600" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
    { name: "Tailwind CSS", icon: "fa-wind", color: "text-teal-400" }
];

export const PROJECTS = [
    {
        id: 1,
        title: "Everest Bank CRM",
        tech: ["Laravel", "CodeIgniter", "CRM"],
        desc: "Developed backend features and reporting modules for secure and efficient banking data management."
    },
    {
        id: 2,
        title: "WP Travel Engine Plugins",
        tech: ["WordPress", "Gutenberg", "ReactJS"],
        desc: "Created custom WordPress plugins and extensions to enhance travel booking functionality and user experience."
    },
    {
        id: 3,
        title: "GetDesk",
        tech: ["Laravel", "CRM"],
        desc: "CRM-based web application designed to streamline and automate business operations."
    },
    {
        id: 4,
        title: "Lung Cancer Detection",
        tech: ["Python", "CNN"],
        desc: "Developed a CNN-based machine learning model for detecting lung cancer from medical imaging data."
    },
    {
        id: 5,
        title: "E-commerce Website",
        tech: ["C#", ".NET"],
        desc: "Built a full-featured e-commerce platform using C# with secure payment integration and user management."
    },
];

export const PROFILE_IMAGE = profileImage;
