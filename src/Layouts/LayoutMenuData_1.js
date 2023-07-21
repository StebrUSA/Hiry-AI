import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();

  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);
  const [isAccountSetting, setIsAccountSetting] = useState(false);
  const [isScreenCandidates, setIsScreenCandidates] = useState(false);
  const [isMessages, setisMessages] = useState(false);
  const [isTrainingCalender, setIsTraining] = useState(false);
  const [isJobEvents, setIsJobEvents] = useState(false);
  const [isTrain, setIsTrain] = useState(false);
  const [isMyCompany, setIsMyCompany] = useState(false);
  const [isSmartAIPush, setIsSmartAIPush] = useState(false);
  const [isCandidates, setIsCandidates] = useState(false);
  const [isLearning, setIsLearning] = useState(false);

  // Pages
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  const userType = useSelector((state) => {
    return state.LeftSideMenuBar.userType;
  });

  let menuItem = [];

  // employer view
  const employerMenuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    //dashboard
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "ri-dashboard-2-line",
      link: "/dashboard-crm",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        // setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    //messages
    {
      id: "messages",
      label: "Messages",
      icon: "ri-message-2-line",
      link: "/messages",
      click: function (e) {
        e.preventDefault();
        setisMessages(!isMessages);
        updateIconSidebar(e);
      },
      // stateVariables: isApps,
    },
    //jobs
    {
      id: "jobs",
      label: "Jobs",
      icon: "ri-file-list-3-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsApps(!isApps);
        setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isApps,
      subItems: [
        {
          id: "jobMarket",
          label: "Job Market",
          link: "/jobs-joblist-candidate",
          parentId: "jobs",
        },
        {
          id: "myjobs",
          label: "My Jobs",
          link: "/jobs-joblist-employer",
          parentId: "jobs",
        },
        {
          id: "createjob",
          label: "Create Job",
          link: "/jobs-job-create",
          parentId: "jobs",
        },
        // {
        //   id: "applicationtracking",
        //   label: "Application Tracking",
        //   link: "/application-tracking-system",
        //   parentId: "jobs",
        // },
      ],
    },
    // smart screen ai
    {
      id: "screencandidates",
      label: "Smart Screen AI",
      icon: "ri-user-follow-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsScreenCandidates(!isScreenCandidates);
        // setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isScreenCandidates,
      subItems: [
        {
          id: "testschedule",
          label: "Schedule (a Test)",
          link: "/testschedule",
          parentId: "screencandidates",
        },
        {
          id: "Viewschedule",
          label: "View Schedules/ My Screenings",
          link: "/viewschedule",
          parentId: "screencandidates",
        },
      ],
    },
    // calender
    {
      id: "trainingcalender",
      label: "Calender",
      icon: "ri-apps-2-line",
      link: "/apps-calendar",
      click: function (e) {
        e.preventDefault();
        setIsTraining(!isTrainingCalender);
        updateIconSidebar(e);
      },
    },
    // companies
    {
      id: "mycompany",
      label: "Companies",
      icon: "ri-store-3-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsMyCompany(!isMyCompany);
        // setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isMyCompany,
      subItems: [
        {
          id: "editCompany",
          label: "Edit My Company",
          link: "/apps-company-edit",
          parentId: "mycompany",
        },
        {
          id: "clients",
          label: "Clients/Vendors",
          link: "/vendors-contact",
          parentId: "mycompany",
        },
        {
          id: "myEmployee",
          label: "My Employee",
          link: "/my-employee",
          parentId: "mycompany",
        },
        {
          id: "companyDetail",
          label: "Company Detail",
          link: "/apps-company-overview",
          parentId: "mycompany",
        },
      ],
    },
    // Events
    // {
    //   id: "jobevents",
    //   label: "Events",
    //   icon: "ri-calendar-event-line",
    //   link: "/#",
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsJobEvents(!isJobEvents);
    //     //  setIscurrentState("Apps");
    //     updateIconSidebar(e);
    //   },
    //   stateVariables: isJobEvents,
    //   subItems: [
    //     {
    //       id: "createEvent",
    //       label: "Create an Event",
    //       link: "/create-event",
    //       parentId: "jobevents",
    //     },
    //     {
    //       id: "myEvents",
    //       label: "My Events",
    //       link: "/events-list",
    //       parentId: "jobevents",
    //     },
    //   ],
    // },

    // Training

    {
      id: "train",
      label: "Training",
      icon: "ri-book-3-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsTrain(!isTrain);
        //  setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isTrain,
      subItems: [
        {
          id: "createTraining",
          label: "Create Training",
          link: "/create-training",
          parentId: "train",
        },
        {
          id: "manageTraining",
          label: "Manage Training",
          link: "/manage-training",
          parentId: "train",
        },
      ],
    },
    // account settings
    {
      id: "accountsettings",
      label: "Account Setings",
      icon: "ri-settings-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsAccountSetting(!isAccountSetting);
        updateIconSidebar(e);
      },
      stateVariables: isAccountSetting,
      subItems: [
        {
          id: "editProfile",
          label: "Edit Profile",
          link: "/edit-profile-employee",
          parentId: "accountsettings",
        },
      ],
    },

    {
      label: "Additional",
      isHeader: true,
    },

    {
      id: "candidates",
      label: "Candidates",
      icon: "ri-file-user-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsCandidates(!isCandidates);
        // setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isCandidates,
      subItems: [
        {
          id: "mycandidates",
          label: "My Candidates",
          link: "/mycandidates-list",
          parentId: "candidates",
        },
        {
          id: "talentpool",
          label: "Talent Pool",
          link: "/talentpool",
          parentId: "candidates",
        },
        {
          id: "candiadtedetail",
          label: "Candidate Detail",
          link: "/candidate-detail",
          parentId: "candidates",
        },
      ],
    },
  ];

  // candidate view
  const candidateMenuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    // dashboard
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "ri-dashboard-2-line",
      link: "/dashboard-analytics",
      // stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        // setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    //messages
    {
      id: "messages",
      label: "Messages",
      icon: "ri-apps-2-line",
      link: "/messages",
      click: function (e) {
        e.preventDefault();
        setisMessages(!isMessages);
        updateIconSidebar(e);
      },
      // stateVariables: isApps,
    },
    // jobs
    {
      id: "jobs",
      label: "Jobs",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsApps(!isApps);
        setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isApps,
      subItems: [
        {
          id: "myjobs",
          label: "Job Market",
          link: "/jobmarket-candidate",
          parentId: "jobs",
        },

        {
          id: "myapplication",
          label: "My Applications",
          link: "/my-application",
          parentId: "jobs",
        },
      ],
    },
    // calender
    {
      id: "trainingcalender",
      label: "Calender",
      icon: "ri-apps-2-line",
      link: "/apps-calendar",
      click: function (e) {
        e.preventDefault();
        setIsTraining(!isTrainingCalender);
        updateIconSidebar(e);
      },
    },
    // ai push

    {
      id: "smartAIPush",
      label: "Smart AI Push",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsSmartAIPush(!isSmartAIPush);
        // setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isSmartAIPush,
      subItems: [
        {
          id: "smartpush",
          label: "Smart Push",
          link: "/smartpush",
          parentId: "smartAIPush",
        },
        {
          id: "emergency power push",
          label: "Emergency Power Push",
          link: "/emergencypowerpush",
          parentId: "smartAIPush",
        },
      ],
    },

    // companies
    {
      id: "mycompany",
      label: "Companies",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsMyCompany(!isMyCompany);
        // setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isMyCompany,
      subItems: [
        {
          id: "search",
          label: "Search",
          link: "/search-companies",
          parentId: "mycompany",
        },
        {
          id: "myCompanies",
          label: "My Companies",
          link: "/mycompanies",
          parentId: "mycompany",
        },
      ],
    },

    // learn
    {
      id: "learn",
      label: "Learn",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsLearning(!isLearning);
        // setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isLearning,
      subItems: [
        {
          id: "learnAI",
          label: "Learn With AI",
          link: "/learn-via-ai",
          parentId: "learn",
        },
        {
          id: "learnExpert",
          label: "Learn from Expert",
          link: "/learn-expert",
          parentId: "learn",
        },
      ],
    },

    // account settings
    {
      id: "accountsettingsCandidate",
      label: "Account Setings",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsAccountSetting(!isAccountSetting);
        updateIconSidebar(e);
      },
      stateVariables: isAccountSetting,
      subItems: [
        {
          id: "myProfile",
          label: "My Profile",
          link: "/pages-profile",
          parentId: "accountsettingsCandidate",
        },
        {
          id: "editProfileCandidate",
          label: "Edit Profile",
          link: "/pages-profile-settings",
          parentId: "accountsettingsCandidate",
        },
      ],
    },
    {
      label: "Additional",
      isHeader: true,
    },
    {
      id: "testscreen",
      label: "Test Screen",
      link: "/pages-test-screens",
      icon: "ri-apps-2-line",
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
  ];

  const commonMenuItems = [
    {
      id: "benchsales",
      label: "Bench Sales",
      icon: "ri-mail-volume-line",
      link: "/bench-sales",
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    {
      id: "Billingandreferrals",
      label: "Billing and referrals",
      icon: "ri-secure-payment-line",
      link: "/billing-and-referrals",
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
    {
      label: "Super Admin",
      isHeader: true,
    },
    {
      id: "skillsManagement",
      label: "Skills Management",
      icon: "ri-mail-volume-line",
      link: "/skills-management",
      click: function (e) {
        e.preventDefault();
        updateIconSidebar(e);
      },
    },
  ];

  if (userType === "employer") {
    menuItem = [...employerMenuItems, ...commonMenuItems];
  } else {
    menuItem = [...candidateMenuItems, , ...commonMenuItems];
  }

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }

    // Need to change here for setMyCompany

    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
  }, [history, iscurrentState]);

  return <React.Fragment>{menuItem}</React.Fragment>;
};

export default Navdata;
