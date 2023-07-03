import React, { useState } from "react";

const JudgeAPI = () => {
  const [input, setInput] = useState(localStorage.getItem("input") || "");

  const [languageId, setLanguageId] = useState(
    localStorage.getItem("language_Id") || "2"
  );
  const [userInput, setUserInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
    localStorage.setItem("input", event.target.value);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleLanguage = (event) => {
    setLanguageId(event.target.value);
    localStorage.setItem("language_Id", event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const outputText = document.getElementById("output");
    outputText.innerHTML = "";
    outputText.innerHTML += "Creating Submission ...\n";

    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions",
      {
        method: "POST",
        headers: {
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
          "x-rapidapi-key":
            "600cc57102msh20c3068a814096dp165d51jsn84d590fc67b6", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          source_code: input,
          stdin: userInput,
          language_id: languageId,
        }),
      }
    );

    outputText.innerHTML += "Submission Created ...\n";
    const jsonResponse = await response.json();
    let jsonGetSolution = {
      status: { description: "Queue" },
      stderr: null,
      compile_output: null,
    };

    while (
      jsonGetSolution.status.description !== "Accepted" &&
      jsonGetSolution.stderr == null &&
      jsonGetSolution.compile_output == null
    ) {
      outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;

      if (jsonResponse.token) {
        let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
        const getSolution = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key":
              "3bb9e91b57mshb5179e9ba4acd3cp17b74fjsna5330c94e10a", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
            "content-type": "application/json",
          },
        });
        jsonGetSolution = await getSolution.json();
      }
    }

    if (jsonGetSolution.stdout) {
      const output = window.atob(jsonGetSolution.stdout);
      outputText.innerHTML = "";
      outputText.innerHTML += `Results :\n${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
    } else if (jsonGetSolution.stderr) {
      const error = window.atob(jsonGetSolution.stderr);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${error}`;
    } else {
      const compilation_error = window.atob(jsonGetSolution.compile_output);
      outputText.innerHTML = "";
      outputText.innerHTML += `\n Error :${compilation_error}`;
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="question mt-4 ml-4">
              <span className="fs-20 heading my-2">
                <i className="fas fa-exclamation fa-fw fa-md"></i> Question
              </span>
              <textarea className="mt-4" id="question" readOnly>
                Write a statement to declare and initialize an array named
                denominations that contains exactly six elements of type of int
                . Your declaration statement should initialize the elements of
                the array to the following values : 1, 5, 10, 25, 50, 100. (The
                value 1 goes into the first element , the value 100 to the
                last.)
              </textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <label htmlFor="tags" className="mr-1">
                <b className="heading">Language:</b>
              </label>
              <select
                value={languageId}
                onChange={handleLanguage}
                id="tags"
                className="form-control form-inline mb-2 language"
              >
                <option value="54">C++</option>
                <option value="50">C</option>
                <option value="62">Java</option>
                <option value="71">Python</option>
                <option value="93">Javascript</option>
              </select>
              <div className="col-lg-11">
                <label htmlFor="solution">
                  <span className="fs-20">
                    <i className="fas fa-code fa-fw fa-lg"></i> Code Here
                  </span>
                </label>
                <textarea
                  required
                  name="solution"
                  id="source"
                  onChange={handleInput}
                  className="source"
                  value={input}
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-danger ml-2 mr-2"
                  onClick={handleSubmit}
                >
                  <i className="fas fa-cog fa-fw"></i> Run
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <span className="fs-20 mt-2 heading my-2">
                  <i className="fas fa-exclamation fa-fw fa-md"></i> Output
                </span>
                <textarea id="output"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JudgeAPI;
