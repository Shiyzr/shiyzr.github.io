export const personalInfo: {
  name: string;
  location: string;
  email: string;
  github: string;
  linkedin?: string;
  blog: string;
  profilePicture: string;
  heroDescription: string;
} = {
  name: "Yangziran Shi",
  location: "Beijing, China",
  email: "shiyzr@stu.pku.edu.cn",
  github: "https://github.com/shiyzr",
  // linkedin: "https://linkedin.com/in/loremipsum",
  blog: "https://shiyzr.github.io",
  profilePicture: "/profile.jpeg",
  heroDescription:
    "I am currently pursuing a Bachelor of Science in Computer Science at the School of Electronics Engineering and Computer Science (EECS), Peking University.",
};

// export const workExperience = [
//   {
//     company: "Dolor Sit Amet",
//     location: "Ipsumville",
//     position: "Software Developer",
//     period: "Feb 2019 - Jan 2020",
//     achievements: [
//       "Morbi in sem quis dui placerat ornare.",
//       "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
//     ],
//   },
//   {
//     company: "Consectetur Inc.",
//     location: "Adipiscing, Ipsum",
//     position: "Intern",
//     period: "Jun 2018 - Feb 2019",
//     achievements: [
//       "Praesent dapibus, neque id cursus faucibus.",
//       "Fusce feugiat malesuada odio.",
//     ],
//   },
// ];
export const workExperience: any[] = [];

export const education: {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements?: string[];
}[] = [
  {
    institution: "Peking University",
    location: "Beijing",
    degree: "Undergraduate Student",
    period: "2024 -",
    // achievements: [
    //   "President of Lorem Ipsum Club",
    //   "Organized multiple lorem events",
    //   "Represented university in national competitions.",
    //   "Graduated with honors.",
    // ],
  },
];
export const skills = {
  programmingLanguages: [
    "C/C++",
    "Python",
  ],
  // frontendDevelopment: [
  //   "LoremJS",
  //   "IpsumJS",
  //   "Dolor Native",
  //   "Sit UI",
  //   "Amet CSS",
  //   "HTML",
  //   "CSS",
  // ],
  // backendDevelopment: ["LoremNode", "IpsumExpress"],
  // databaseAndStorage: ["LoremDB", "IpsumORM"],
  // cloudAndDevOps: ["LoremCloud"],
  // toolsAndServices: [
  //   "Dify",
  // ],
};

// export const projects = [
//   {
//     title: "Lorem Ipsum Project",
//     github: "https://github.com/loremipsum/project",
//     description: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
//       "Excepteur sint occaecat cupidatat non proident.",
//     ],
//   },
//   {
//     title: "Dolor Sit Amet App",
//     github: "https://github.com/loremipsum/dolorapp",
//     description: [
//       "Morbi in sem quis dui placerat ornare.",
//       "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
//       "Praesent dapibus, neque id cursus faucibus.",
//       "Fusce feugiat malesuada odio.",
//       "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
//     ],
//   },
// ];
export const projects: any[] = [];

// export const awards = [
//   {
//     name: "Lorem Ipsum Award",
//     issuer: "Lorem Organization",
//     date: "Jan 2020",
//     type: "International",
//     position: "First Place",
//   },
// ];
export const awards: any[] = [];
