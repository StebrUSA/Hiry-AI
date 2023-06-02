import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

const topPages = [
  {
    id: 1,
    page: "/themesbrand/skote-25867",
    active: "99",
    user: "25.3%",
  },
  {
    id: 2,
    page: "/dashonic/chat-24518",
    active: "86",
    user: "22.7%",
  },
  {
    id: 3,
    page: "/skote/timeline-27391",
    active: "64",
    user: "18.7%",
  },
  {
    id: 4,
    page: "/themesbrand/minia-26441",
    active: "53",
    user: "14.2%",
  },
  {
    id: 5,
    page: "/dashon/dashboard-29873",
    active: "33",
    user: "12.6%",
  },
  {
    id: 6,
    page: "/doot/chats-29964",
    active: "20",
    user: "10.9%",
  },
  {
    id: 7,
    page: "/minton/pages-29739",
    active: "10",
    user: "07.3%",
  },
];

// Charts Data

const allData = [
  {
    data: [1230, 1240, 590, 1255, 1250, 789, 960, 522, 1285, 729],
    name: "Sessions",
  },
];

const monthData = [
  {
    data: [820, 1320, 390, 1000, 850, 579, 630, 380, 825, 479],
    name: "Sessions",
  },
];

const halfyearData = [
  {
    data: [1010, 1140, 1290, 1255, 1050, 689, 800, 420, 1085, 589],
    name: "Sessions",
  },
];

// Audiences Metrics
const allaudiencesMetricsData = [
  {
    name: "Last Year",
    data: [
      25.3, 12.5, 20.2, 18.5, 40.4, 25.4, 15.8, 22.3, 19.2, 25.3, 12.5, 20.2,
    ],
  },
  {
    name: "Current Year",
    data: [
      36.2, 22.4, 38.2, 30.5, 26.4, 30.4, 20.2, 29.6, 10.9, 36.2, 22.4, 38.2,
    ],
  },
];

const monthaudiencesMetricsData = [
  {
    name: "Last Year",
    data: [
      15.3, 22.5, 40.2, 78.5, 20.4, 35.4, 45.8, 32.3, 43.2, 35.3, 22.5, 10.2,
    ],
  },
  {
    name: "Current Year",
    data: [
      26.2, 62.4, 48.2, 10.5, 26.4, 50.4, 40.2, 39.6, 10.9, 56.2, 12.4, 28.2,
    ],
  },
];

const halfyearaudiencesMetricsData = [
  {
    name: "Last Year",
    data: [
      35.3, 12.5, 20.2, 28.5, 40.4, 25.4, 25.8, 32.3, 39.2, 35.3, 52.5, 40.2,
    ],
  },
  {
    name: "Current Year",
    data: [
      36.2, 42.4, 48.2, 30.5, 26.4, 40.4, 60.2, 79.6, 30.9, 46.2, 32.4, 58.2,
    ],
  },
];

const yaeraudiencesMetricsData = [
  {
    name: "Last Year",
    data: [
      45.3, 32.5, 40.2, 18.5, 40.4, 25.4, 35.8, 52.3, 79.2, 35.3, 72.5, 70.2,
    ],
  },
  {
    name: "Current Year",
    data: [
      76.2, 62.4, 28.2, 30.5, 26.4, 60.4, 40.2, 39.6, 40.9, 76.2, 32.4, 98.2,
    ],
  },
];

// Users by Device
const todayDeviceData = [78.56, 105.02, 42.89];

const lastWeekDeviceData = [81.56, 50.02, 24.89];

const lastMonthDeviceData = [28.56, 75.02, 55.89];

const currentYearDeviceData = [20.56, 89.02, 35.89];

// Audiences Sessions by Country

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString() + "h";
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

const todayaudiencesCountryData = [
  {
    name: "Sat",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Fri",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Thu",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Wed",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Tue",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Mon",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "Sun",
    data: generateData(18, {
      min: 0,
      max: 90,
    }),
  },
];

const lastWeekaudiencesCountryData = [
  {
    name: "Sat",
    data: generateData(18, {
      min: 10,
      max: 90,
    }),
  },
  {
    name: "Fri",
    data: generateData(18, {
      min: 10,
      max: 90,
    }),
  },
  {
    name: "Thu",
    data: generateData(18, {
      min: 10,
      max: 90,
    }),
  },
  {
    name: "Wed",
    data: generateData(18, {
      min: 10,
      max: 90,
    }),
  },
  {
    name: "Tue",
    data: generateData(18, {
      min: 10,
      max: 90,
    }),
  },
  {
    name: "Mon",
    data: generateData(18, {
      min: 10,
      max: 90,
    }),
  },
  {
    name: "Sun",
    data: generateData(18, {
      min: 10,
      max: 90,
    }),
  },
];

const lastMonthaudiencesCountryData = [
  {
    name: "Sat",
    data: generateData(18, {
      min: 0,
      max: 30,
    }),
  },
  {
    name: "Fri",
    data: generateData(18, {
      min: 0,
      max: 30,
    }),
  },
  {
    name: "Thu",
    data: generateData(18, {
      min: 0,
      max: 30,
    }),
  },
  {
    name: "Wed",
    data: generateData(18, {
      min: 0,
      max: 30,
    }),
  },
  {
    name: "Tue",
    data: generateData(18, {
      min: 0,
      max: 30,
    }),
  },
  {
    name: "Mon",
    data: generateData(18, {
      min: 0,
      max: 30,
    }),
  },
  {
    name: "Sun",
    data: generateData(18, {
      min: 0,
      max: 30,
    }),
  },
];

const currentyearaudiencesCountryData = [
  {
    name: "Sat",
    data: generateData(18, {
      min: 30,
      max: 70,
    }),
  },
  {
    name: "Fri",
    data: generateData(18, {
      min: 30,
      max: 70,
    }),
  },
  {
    name: "Thu",
    data: generateData(18, {
      min: 30,
      max: 70,
    }),
  },
  {
    name: "Wed",
    data: generateData(18, {
      min: 30,
      max: 70,
    }),
  },
  {
    name: "Tue",
    data: generateData(18, {
      min: 30,
      max: 70,
    }),
  },
  {
    name: "Mon",
    data: generateData(18, {
      min: 30,
      max: 70,
    }),
  },
  {
    name: "Sun",
    data: generateData(18, {
      min: 30,
      max: 70,
    }),
  },
];

const activities1 = [
  {
    id: 1,
    date: "25",
    weekDay: "Tue",
    time: "12:00am - 03:30pm",
    caption: "Screening Call for Lead Software Engineer Role with Anna Watson",
    subItem: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar2 },
      { id: 3, img: avatar3 },
    ],
    imgNumber: "5",
    bgcolor: "bg-info",
  },
  {
    id: 2,
    date: "20",
    weekDay: "Wed",
    time: "02:00pm - 03:45pm",
    caption: "Screening Call for React Developer Role with Anna Watson",
    subItem: [
      { id: 1, img: avatar4 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar6 },
      { id: 4, img: avatar7 },
    ],
    imgNumber: "3",
    bgcolor: "bg-success",
  },
  {
    id: 3,
    date: "17",
    weekDay: "Wed",
    time: "04:30pm - 07:15pm",
    caption: "Interview with Get Hired Recruiter James",
    subItem: [
      { id: 1, img: avatar8 },
      { id: 2, img: avatar1 },
      { id: 3, img: avatar2 },
    ],
    imgNumber: "4",
    bgcolor: "bg-primary",
  },
  {
    id: 4,
    date: "12",
    weekDay: "Tue",
    time: "10:30am - 01:15pm",
    caption: "Interview with Get Hired Recruiter James",
    subItem: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar2 },
    ],
    imgNumber: "9",
    bgcolor: "bg-warning",
  },
  {
    id: 5,
    date: "12",
    weekDay: "Tue",
    time: "10:30am - 01:15pm",
    caption: "Interview with Get Hired Recruiter James",
    subItem: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar2 },
    ],
    imgNumber: "9",
    bgcolor: "bg-warning",
  },
];

const myTasks = [
  {
    id: 1,
    projectName: "Brand Logo Design",

    percentage: "53%",

    badge: "Inprogress",
    badgeClass: "warning",
    dueDate: "06 Sep 2021",
  },
  {
    id: 2,
    projectName: "Redesign - Landing Page",

    percentage: "0%",

    badge: "Pending",
    badgeClass: "danger",
    dueDate: "13 Nov 2021",
  },
  {
    id: 3,
    projectName: "Multipurpose Landing Template",

    percentage: "100%",

    badge: "Completed",
    badgeClass: "success",
    dueDate: "26 Nov 2021",
  },
  {
    id: 4,
    projectName: "Chat Application",

    percentage: "64%",

    badge: "Progress",
    badgeClass: "warning",
    dueDate: "15 Dec 2021",
  },
  {
    id: 5,
    projectName: "Create Wireframe",

    percentage: "77%",

    badge: "Progress",
    badgeClass: "warning",
    dueDate: "21 Dec 2021",
  },
  {
    id: 5,
    projectName: "Create Wireframe",

    percentage: "77%",

    badge: "Progress",
    badgeClass: "warning",
    dueDate: "21 Dec 2021",
  },
  {
    id: 5,
    projectName: "Create Wireframe",

    percentage: "77%",

    badge: "Progress",
    badgeClass: "warning",
    dueDate: "21 Dec 2021",
  },
  {
    id: 5,
    projectName: "Create Wireframe",

    percentage: "77%",

    badge: "Progress",
    badgeClass: "warning",
    dueDate: "21 Dec 2021",
  },
];

const recentApplicants1 = [
  {
    id: 1,
    no: "#VZ2112",
    img: avatar1,
    name: "Nicholas Ball",
    designation: "Assistant / Store Keeper",
    rate: "$109.00",
    city: "California, US",
    type: "Full Time",
    typeColor: "success",
    rating: "5.0",
    ratingDetails: "(245 Rating)",
  },
  {
    id: 2,
    no: "#VZ2111",
    img: avatar2,
    name: "Elizabeth Allen",
    designation: "Education Training",
    rate: "$149.00",
    city: "Mughairah, UAE",
    type: "Freelancer",
    typeColor: "secondary",
    rating: "4.7",
    ratingDetails: "(1.34 Rating)",
  },
  {
    id: 3,
    no: "#VZ2114",
    img: avatar3,
    name: "Cassian Jenning",
    designation: "Graphic Designer",
    rate: "$215.00",
    city: "4,305",
    type: "Part Time",
    typeColor: "danger",
    rating: "4.5",
    ratingDetails: "(2.93 Rating)",
  },
  {
    id: 4,
    no: "#VZ2117",
    img: avatar4,
    name: "Scott Holt",
    designation: "UI/UX Designer",
    rate: "$235.00",
    city: "Germany",
    type: "Part Time",
    typeColor: "danger",
    rating: "2.3",
    ratingDetails: "(4.5 Rating)",
  },
  {
    id: 5,
    no: "#VZ2113",
    img: avatar6,
    name: "Hadley Leonard",
    designation: "React Developer",
    rate: "$175.00",
    city: " Limestone, US",
    type: "Full Time",
    typeColor: "success",
    rating: "4.5",
    ratingDetails: "(645 Rating)",
  },
  {
    id: 6,
    no: "#VZ2118",
    img: avatar8,
    name: "Harley Watkins",
    designation: "Project Manager",
    rate: "$372.00",
    city: " Limestone, US",
    type: "Freelancer",
    typeColor: "secondary",
    rating: "4.5",
    ratingDetails: "(12 Rating)",
  },
  {
    id: 7,
    no: "#VZ2119",
    img: avatar8,
    name: "Jenson Carlson",
    designation: "Web Designer",
    rate: "$835.00",
    city: " Limestone, US",
    type: "Part Time",
    typeColor: "danger",
    rating: "2.5",
    ratingDetails: "(6.3 Rating)",
  },
  {
    id: 8,
    no: "#VZ2115",
    img: avatar8,
    name: "Nadia Harding",
    designation: "Product Director",
    rate: "$215.00",
    city: " Limestone, US",
    type: "Full Time",
    typeColor: "success",
    rating: "4.7",
    ratingDetails: "(23 Rating)",
  },
];

export {
  topPages,
  allData,
  monthData,
  halfyearData,
  allaudiencesMetricsData,
  monthaudiencesMetricsData,
  halfyearaudiencesMetricsData,
  yaeraudiencesMetricsData,
  todayDeviceData,
  lastWeekDeviceData,
  lastMonthDeviceData,
  currentYearDeviceData,
  todayaudiencesCountryData,
  lastWeekaudiencesCountryData,
  lastMonthaudiencesCountryData,
  currentyearaudiencesCountryData,
  activities1,
  myTasks,
  recentApplicants1,
};
