import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Zain Ali",
    summary:
      "Software engineer obsessed with building exceptional projects that people love",
    email: "zainali.rio@gmail.com",
    phone: "+92-305-2563405",
    location: "Lahore, Pakistan",
    url: "linkedin.com/in/zainali",
  },
  workExperiences: [
    {
      company: "Microsoft",
      jobTitle: "Software Engineer",
      date: "Dec 2024 - Present",
      descriptions: [
        "Lead a cross-functional team of 5 engineers in developing a search bar, which enables thousands of daily active users to search content across the entire platform",
        "Create stunning home page product demo animations that drives up sign up rate by 20%",
        "Write clean code that is modular and easy to maintain while ensuring 100% test coverage",
      ],
    },
    {
      company: "Devsinc ",
      jobTitle: "Software Engineer Intern",
      date: "Summer 2022",
      descriptions: [
        "Re-architected the existing content editor to be mobile responsive that led to a 10% increase in mobile user engagement",
        "Created a progress bar to help users track progress that drove up user retention by 15%",
        "Discovered and fixed 5 bugs in the existing codebase to enhance user experience",
      ],
    },
    {
      company: "UET Lahore",
      jobTitle: "Research Assistant",
      date: "Summer 2021",
      descriptions: [
        "Devised a new NLP algorithm in text classification that results in 10% accuracy increase",
        "Compiled and presented research findings to a group of 20+ faculty and students",
      ],
    },
  ],
  educations: [
    {
      school: "University of Engineering and Technology",
      degree: "Bachelor of Science in Computer Science",
      date: "Sep 2019 - May 2023",
      gpa: "3.8",
      descriptions: [
        "Won 1st place in 2022 Education Hackathon, 2nd place in 2023 Health Tech Competition",
        "Teaching Assistant for Programming for the Web (2022 - 2023)",
        "Coursework: Object-Oriented Programming (A+), Programming for the Web (A+), Cloud Computing (A), Introduction to Machine Learning (A-), Algorithms Analysis (A-)",
      ],
    },
  ],
  projects: [
    {
      project: "MUalij",
      date: "Fall 2024",
      descriptions: [
        "Created and launched a nwtworking app with ai features that connects doctors with doctors",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "FLutter", rating: 4 },
      { skill: "MERN", rating: 4 },
      { skill: "Python", rating: 3 },
      { skill: "JAVA", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "C++", rating: 2 },
    ],
    descriptions: [
      "Tech: Flutter , GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Leadership, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
