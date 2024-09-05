const data = {
  personal: {
    name: "Arthur Bloomberg",
    location: "New York City",
    email: "arthurbloomberg@gmail.com",
    phone: "01062375053",
    linkedin: "in/bloomberg",
  },

  experience: [
    {
      id: 1,
      summary: {
        position: "Full Stack Software Engineer",
        company: "Company A",
        location: "New York, NY",
        period: "June 2020 - Present",
      },
      bullets: [
        "Implemented and maintained RESTful API endpoints for a web application to provide rideshare services to students in California using Node.js, Express, Docker, and MongoDB.",
        "Restructured backend pipelines and API endpoints for more seamless user registration and sign-up.",
        "Resulted in a 200% increase in new users signed up and a 20% increase in average user retention.",
      ],
    },
    {
      id: 2,
      summary: {
        position: "Teaching Assistant",
        company: "Company B",
        location: "New York, NY",
        period: "June 2019 - June 2020",
      },
      bullets: [
        "Led office hours for 150+ students, reviewing critical computer science concepts for 10+ hours weekly for an introductory Java programming class.",
        "Resulted in students going from zero experience in Java programming to having a solid understanding of object-oriented programming, data structures, and algorithms.",
      ],
    },
    {
      id: 3,
      summary: {
        position: "Software Engineer Intern",
        company: "Company C",
        location: "New York, NY",
        period: "June 2018 - June 2019",
      },
      bullets: [
        "Developed and deployed a Kalman filter-based semiconductor anomaly detection algorithm in C and C++ with a 99.1% accuracy to a fabrication plant, impacting 15K+ semiconductor manufacturing machine users.",
        "Built a user interface to track the performance of the algorithm, display the performance metrics and visualize the temperature and pressure data during the manufacturing process.",
        "Prototyped an inter-process communication between the manufacturing software and data analysis program using shared memory to help the data analytics team detect problems during the manufacturing process.",
      ],
    },
    {
      id: 4,
      summary: {
        position: "Software Engineer",
        company: "Company D",
        location: "New York, NY",
        period: "June 2017 - June 2018",
      },
      bullets: [
        "Implemented a user bulletin board for an air force logistics information system where users can address software bugs using Spring framework; Identified and fixed 150+ bugs and reduced support calls by 30%.",
        "Translated 250+ technical software documentation for software engineers in [Country] and US Air Force to facilitate smooth and efficient software development, expediting the software development process by 45%.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "M.S in Electrical and Computer Engineering",
      institution: "New York University",
      location: "New York, NY",
      year: "2017",
    },
    {
      id: 2,
      degree: "B.S. in Electrical and Computer Engineering",
      institution: "New York University",
      location: "New York, NY",
      year: "2015",
    },
  ],
  coursework: [
    { id: 1, title: "Distributed Systems" },
    { id: 2, title: "Deep Learning" },
    { id: 3, title: "Pattern Recognition Theory" },
    { id: 4, title: "Data Structures" },
    { id: 5, title: "Machine Learning" },
    { id: 6, title: "Data Science" },
    { id: 7, title: "Web Application Development" },
    { id: 8, title: "Principles of Software Systems Construction" },
  ],
  skills: `Programming Languages: Python, Java, C, C++, Go, JavaScript, TypeScript Software\nTools/Frameworks: Git, AWS, Jira, Django, HTML/CSS, MATLAB, React, Node.js, MongoDB
`,
};

export default data;
