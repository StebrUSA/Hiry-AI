import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import CodingQuestionFormat from "./CodingQuestionFormat";
import Code from "./Code";
import MCQQuestionType from "./MCQQuestionType";

import { fetchProblem, fetchSampleCode } from "./api";

const TestContent = ({ navigationData, activeQuestion }) => {
  const [problem, setProblem] = useState(null);
  const [scenarioText, setScenarioText] = useState("");

  const currentProblem =
    navigationData
      .flatMap((section) => section.problems)
      .find((_, index) => index === activeQuestion) || null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = {
          total_test_time: "70",
          skill_name_list: ["javascript"],
          skill_level_list: ["6"],
        };
        const data = await fetchProblem(queryParams);
        setProblem(data);

        if (data) {
          const newScenarioText =
            data.session_result.skills[0].problems[0].scenario;
          setScenarioText(newScenarioText);
        }
      } catch (error) {
        console.error("Error fetching problem:", error);
      }
    };

    fetchData();
  }, []); // Run only on component mount

  const displaySampleCodeClick = async () => {
    if (problem) {
      const problemId = problem.session_result.skills[0].problems[0].id;

      try {
        const sampleCodeData = await fetchSampleCode(problemId);
        // Do something with the sampleCodeData, like displaying it in your UI
        console.log("Sample Code Data:", sampleCodeData.code);
      } catch (error) {
        console.error("Error fetching sample code:", error);
      }
    }
  };

  return (
    <Row className="g-0">
      <Col xl={4} xxl={4} sm={4} md={4} lg={4} className="test-section">
        <Card style={{ height: "inherit" }}>
          <CardHeader className="fw-bold fs-16 mt-2">
            {currentProblem ? `Question ${activeQuestion + 1}` : ""}
          </CardHeader>
          <CardBody className="overflow-y">
            {currentProblem && currentProblem.type === "coding" ? (
              <CodingQuestionFormat />
            ) : (
              "In React, what is the purpose of the setState method?"
            )}
          </CardBody>
        </Card>
      </Col>
      <Col xl={8} xxl={8} sm={8} md={8} lg={8} className="test-section">
        <Card style={{ height: "inherit" }}>
          <CardHeader className="fw-bold fs-16 mt-2">
            {currentProblem && currentProblem.type === "MCQ"
              ? "Choose Answer"
              : "Write your code here"}
          </CardHeader>
          <CardBody className="code-editor-card">
            {currentProblem ? (
              <div>
                {currentProblem.type === "coding" ? (
                  <Code />
                ) : currentProblem.type === "MCQ" ? (
                  <MCQQuestionType />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default TestContent;
