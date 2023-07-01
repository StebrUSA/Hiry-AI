import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import CodingQuestionFormat from "./CodingQuestionFormat";
import CodingQuestionType from "./CodingQuestionType";
import MCQQuestionType from "./MCQQuestionType";
import TestResultsUI from "./TestResultsUI";
import axios from "axios";

const TestContent = ({ navigationData, activeQuestion }) => {
  const [question, setQuestion] = useState("");

  const currentProblem =
    navigationData
      .flatMap((section) => section.problems)
      .find((_, index) => index === activeQuestion) || null;

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/problems/get-problem/",
          {
            skill: "javascript",
            q_type: "Coding Algorithms / Scenarios",
            q_complexity: "beginner",
            q_age: "30",
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setQuestion(response.data.question);
      } catch (error) {
        console.log("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, []);

  return (
    <Row className="g-0">
      <Col xl={4} xxl={4} sm={4} md={4} lg={4} className="test-section">
        <Card style={{ height: "inherit" }}>
          <CardHeader className="fw-bold fs-16">
            {currentProblem ? `Question ${activeQuestion + 1}` : ""}
          </CardHeader>
          <CardBody className="overflow-y">
            {currentProblem && currentProblem.type === "coding" ? (
              <CodingQuestionFormat />
            ) : (
              question
            )}
          </CardBody>
        </Card>
      </Col>
      <Col xl={8} xxl={8} sm={8} md={8} lg={8} className="test-section">
        <Card style={{ height: "inherit" }}>
          <CardHeader className="fw-bold fs-16">
            {currentProblem && currentProblem.type === "MCQ"
              ? "Choose Answer"
              : "Write your code here"}
          </CardHeader>
          <CardBody className="code-editor-card">
            {currentProblem ? (
              <div>
                {currentProblem.type === "coding" ? (
                  <CodingQuestionType />
                ) : currentProblem.type === "MCQ" ? (
                  <MCQQuestionType />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            {currentProblem && currentProblem.type === "coding" ? (
              <TestResultsUI />
            ) : (
              <Row>
                <Col md={12} className="d-flex mt-3 align-items-center ">
                  <button type="button" className="btn btn-success">
                    Submit
                  </button>
                </Col>
              </Row>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default TestContent;
