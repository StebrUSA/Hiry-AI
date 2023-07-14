const SingleOptions = [
  { value: "web-development", label: "web development" },
  { value: "communication", label: "Communication" },
  { value: "javascript", label: "javascript" },
  { value: "problem solving", label: "Problem Solving" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
];

const CategoryOptions = [
  { value: "", label: "Select Category" },

  {
    value: "designing",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "Problem Solving", label: "Problem Solving" },
      { value: "software design", label: "Software Design" },
    ],
    label: "Designing",
  },

  {
    value: "development",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "leadership", label: "LeaderShip" },
      { value: "adaptibility", label: "Adaptibility" },
    ],
    label: "Development",
  },

  {
    value: "AccountFinance",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "ProblemSolving", label: "Problem Solving" },
      { value: "softwaredesign", label: "Software Design" },
    ],
    label: "Account & Finance",
  },

  {
    value: "purchasingmanager",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "ProblemSolving", label: "Problem Solving" },
      { value: "softwaredesign", label: "Software Design" },
    ],
    label: "Purchasing Manager",
  },

  {
    value: "digitalmarketting",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "ProblemSolving", label: "Problem Solving" },
      { value: "softwaredesign", label: "Software Design" },
    ],
    label: "Digital Marketting",
  },

  {
    value: "training",
    skillsArray: [
      { value: "analytics", label: "analytics" },
      { value: "content craetion", label: "content creation" },
      { value: "copy writing", label: "copy writing" },
      { value: "softwaredesign", label: "Software Design" },
    ],
    label: "Training",
  },

  {
    value: "design",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "ProblemSolving", label: "Problem Solving" },
      { value: "softwaredesign", label: "Software Design" },
    ],
    label: "Design",
  },

  {
    value: "prductmanagement",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "ProblemSolving", label: "Problem Solving" },
      { value: "softwaredesign", label: "Software Design" },
    ],
    label: "Product Management",
  },

  {
    value: "projectmanagement",
    skillsArray: [
      { value: "communication", label: "Communication" },
      { value: "creativity", label: "Creativity" },
      { value: "ProblemSolving", label: "Problem Solving" },
      { value: "softwaredesign", label: "Software Design" },
    ],
    label: "Project Management",
  },
];

const JobTypesOptions = [
  { value: "Fulltime on W2", label: "Full Time on W2" },
  { value: "Contract on W2", label: "Contract on W2" },
  { value: "Third-Party C2C", label: "Third-Party C2C" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Internships", label: "Internships" },
];

const KeyWordTypes = [
  { value: "javascript", label: "Javascript" },
  { value: "react", label: "React" },
  { value: "redux", label: "redux" },
  { value: "graphql", label: "GraphQl" },
  { value: "benchsales", label: "Bench Sales" },
  { value: "fullstack", label: "Full Stack" },
  { value: "c#", label: "C#" },
  { value: "docker", label: "Docker" },
  { value: "jankins", label: "Jankins" },
  { value: "puppet", label: "Puppet" },
  { value: "azure", label: "Azure" },
  { value: "weblogic", label: "WebLogic" },
  { value: "dotnet", label: ".NET" },
];
const CoreSkillOptions = [
  { id: 1, value: "React", label: "React" },
  { id: 3, value: "Javascript", label: "Javascript" },
  { id: 4, value: "Node JS", label: "Node JS" },
  { id: 5, value: "Redux", label: "Redux" },
  { id: 6, value: "Jest", label: "Jest" },
  { id: 7, value: "Html", label: "HTML" },
  { id: 8, value: "CSS", label: "CSS" },
  { id: 9, value: "Angular", label: "Angular" },
  { id: 10, value: "Jquery", label: "Jquery" },
  { id: 11, value: "Java", label: "Java" },
  { id: 12, value: "Python", label: "Python" },
];

const AdditionalSkills = [
  { value: "UI/UX Centric Approach", label: "UI/UX Centric Approach" },
  { value: "Responsive Design", label: "Responsive Design" },
  { value: "HTML5", label: "HTML5" },
  { value: "Agile", label: "Agile" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "git", label: "Git" },
  { value: "jira", label: "Jira" },
  { value: "teams", label: "Teams" },
  { value: "slack", label: "Slack" },
  { value: "azure", label: "Azure" },
];
const TeamLeadMembers = [
  { id: "1", value: "Darline Williams", label: "Darline Williams" },
  { id: "2", value: "Sylvia Wright", label: "Sylvia Wright" },
  { id: "3", value: "Ellen Smith", label: "Ellen Smith" },
  { id: "4", value: "Jeffrey Salazar", label: "Jeffrey Salazar" },
  { id: "5", valu: "Mark Williams", label: "Mark Williams" },
];

export {
  SingleOptions,
  CategoryOptions,
  JobTypesOptions,
  KeyWordTypes,
  CoreSkillOptions,
  AdditionalSkills,
  TeamLeadMembers,
};
