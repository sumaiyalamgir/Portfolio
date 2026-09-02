export const site = {
  name: 'Sumaiya Alamgir',
  email: 'assumaiya99@gmail.com',
  github: 'https://github.com/sumaiyalamgir',
  linkedin: 'https://www.linkedin.com/in/sumaiyaalamgir0342002/',
  cv: '/Sumaiya_Alamgir_CV.pdf',
  lastUpdated: 'September 2026',
  photo: null, // or '/photo.jpg'
}

export const hero = {
  kicker: 'Sumaiya Alamgir, software engineer in Dhaka',
  headline: 'I build web applications {{from the database up}}.',
  intro:
    'Full-stack developer working mostly in Java, Python and SQL. I like the part of a project where the data model gets decided, and I stay around for the part where it has to actually work.',
  availability: 'Open to internships and graduate roles from September 2026',
}

export const about = {
  paragraphs: [
    'I graduated from Daffodil International University in August 2026 with a BSc in Software Engineering, CGPA 3.9 out of 4.00. Most of what I know about building software I learned by building it: a daycare booking platform, a cleaning-service backend, an airline database, and a robot that follows people around a room.',
    'The common thread is that I care about the shape of the data. Given a new problem I start with the schema and the queries, then build outward to the API and the interface. That order has kept me out of trouble more than once.',
    "Outside the main stack I've used Power BI and Looker Studio for reporting, finished the AWS Academy machine learning course, and trained small models in TensorFlow and Keras. I'm looking for a team where I can take on real features end to end and learn from people who have shipped more than I have.",
  ],
}

export const projects = [
  {
    title: 'Daycare Connect',
    stack: ['PostgreSQL', 'Django', 'React', 'Docker'],
    summary: 'A booking platform where parents find daycare providers and manage schedules in one place.',
    built: [
      'Designed the normalized relational schema for users, bookings, schedules and provider records',
      'Implemented JWT token-based authentication with role-based access so parent and provider data stay separate',
      'Wrote the SQL behind booking lookups, scheduling views and provider reporting, with automated data-integrity tests',
    ],
    next: null,
    repo: 'https://github.com/sumaiyalamgir/Daycare--Connect',
    live: 'https://daycare-connect.vercel.app/',
    screenshot: '/projects/daycare-connect.jpg',
  },
  {
    title: 'CleanIt',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    summary: 'A backend for booking cleaning services, built to give a frontend something reliable to talk to.',
    built: [
      'Modelled service, booking and user data in MySQL',
      'Built the REST endpoints serving that data, with request validation and consistent error responses',
    ],
    next: null,
    repo: 'https://github.com/sumaiyalamgir/CleanIt',
    live: null,
    screenshot: '/projects/cleanit.jpg',
  },
  {
    title: 'Airplane Management System',
    stack: ['Java', 'MySQL'],
    summary: 'A consistent, queryable store for flight schedules, bookings and passenger records.',
    built: [
      'Normalized MySQL database with indexed lookups on frequently queried fields',
      'Queries for schedule reporting and booking retrieval across joined tables',
    ],
    next: null,
    repo: 'https://github.com/sumaiyalamgir/Airplane_ticket_management',
    live: null,
    screenshot: '/projects/airplane.jpeg',
  },
  {
    title: 'Human Following Robot',
    stack: ['Arduino', 'Sonar (ultrasonic) sensor', 'IR sensors'],
    summary: 'An Arduino robot that tracks and follows the nearest obstacle in front of it.',
    built: [
      'Programmed the follow behaviour using a sonar sensor to measure distance to the obstacle ahead and track it',
      'Added IR sensors to help detect and steer toward the obstacle at close range',
    ],
    next: null,
    repo: null,
    live: null,
    screenshot: '/projects/human-following-robot.jpeg',
  },
]

export const skills = [
  { group: 'Languages', items: 'Java, Python, SQL, JavaScript, R' },
  { group: 'Frontend', items: 'React, HTML, CSS, Tailwind' },
  { group: 'Backend and databases', items: 'Spring Boot, Django, REST APIs, PostgreSQL, MySQL' },
  { group: 'Data and machine learning', items: 'pandas, TensorFlow, Keras, Power BI, Looker Studio, Excel' },
  { group: 'Tools', items: 'Git, Docker, Jupyter, AWS (Academy)' },
]

export const education = [
  {
    institution: 'Daffodil International University, Dhaka',
    degree: 'BSc in Software Engineering',
    dates: 'Graduated August 2026',
    detail:
      'CGPA 3.9/4.00. Coursework in database systems, algorithms, artificial intelligence, machine learning and software quality assurance.',
  },
]

export const certifications = [
  {
    name: 'AWS Academy Graduate: Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    date: 'August 2025',
  },
]

export const contact = {
  heading: "Let's talk.",
  line: "I'm looking for an internship or graduate role in Dhaka.",
}
