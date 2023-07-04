//time_taken will be in min (That will be handled by us in frontend to display the time)

//result key-value pair to be discussed with Raymond

//Array of skills from the frontend which the recruiter selects will go in the query string of the get call of questions_api.

//scenario key is the question problem

const questions = [
  {
    skill: "reactjs",
    problems: [
      {
        id: 1,
        result: "",
        q_type: "MCQ",

        answered: false,
        q_complexity: "Easy",
        time_taken: "1",
        scenario: "",
      },
      {
        id: 2,
        answered: false,
        result: "--",
        q_type: "Coding",
        q_complexity: "Beginner",
        time_taken: "6",
        scenario: "",
      },
      {
        id: 3,
        result: "--",
        answered: false,
        q_type: "Coding",
        q_complexity: "Medium",
        time_taken: "10",
        scenario: "",
      },
    ],
  },
  {
    skill: "javascript",
    problems: [
      {
        id: 1,
        answered: false,
        result: "--",
        q_type: "Coding",
        q_complexity: "Easy",
        time_taken: "3",
        scenario: "",
      },
      {
        id: 2,
        result: "--",
        answered: false,
        q_type: "Coding",
        q_complexity: "Medium",
        time_taken: "5",
        scenario: "",
      },
    ],
  },
  {
    skill: "html and css",
    problems: [
      {
        id: 1,
        result: "--",
        answered: false,
        q_type: "Coding",
        q_complexity: "Easy",
        time_taken: "5",
        scenario: "",
      },
      {
        id: 2,
        result: "--",
        q_type: "Coding",
        answered: false,
        q_complexity: "Medium",
        time_taken: "10",
        scenario: "",
      },
    ],
  },
];
