import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const ServiceOffered = [
  {
    label: "Identify a Sponsor",
    value:
      "First and foremost, you need to find a U.S. employer who is willing to sponsor your H-1B visa. The employer must be willing to offer you a job that requires a specialized skill or knowledge that you possess.",
  },
  {
    label: "Labor Condition Application (LCA)",
    value:
      "Once you have a sponsoring employer, they must file a Labor Condition Application (LCA) with the U.S. Department of Labor (DOL). The LCA ensures that your employment will not adversely affect the wages and working conditions of U.S. workers in similar positions.",
  },
  {
    label: "H-1B Petition Preparation",
    value:
      "After the LCA is approved, your employer will prepare the H-1B petition. This includes completing the necessary forms, gathering required documentation, and preparing a detailed job description outlining the specialized skills required for the position.",
  },
  {
    label: "Submission of H-1B Petition",
    value:
      "Your employer will then submit the H-1B petition to USCIS on or after the designated filing date, usually in the first week of April. USCIS typically announces the exact date each year.",
  },
  {
    label: "H-1B Visa Lottery",
    value:
      "f the number of H-1B petitions received by USCIS exceeds the annual cap (65,000 for regular H-1B visas and an additional 20,000 for U.S. master's degree holders), a random lottery is conducted to select the petitions that will move forward for processing.",
  },

  {
    label: "Petition Processing",
    value:
      "USCIS will then proceed with the processing of the selected H-1B petitions. This involves verifying the submitted information, conducting background checks, and assessing the eligibility of the candidate and the employer.",
  },
  {
    label: "Approval or Denial",
    value:
      "USCIS will either approve or deny the H-1B petition. If approved, you will be eligible to obtain an H-1B visa to work in the United States for the specified employer.",
  },
  {
    label: "Visa Application and Interview",
    value:
      "If you are outside the U.S., you will need to apply for an H-1B visa at a U.S. consulate or embassy in your home country. If you are already in the U.S., you may need to apply for a change of status to H-1B.",
  },
  {
    label: "Travel and Employment",
    value:
      "Once you have the H-1B visa stamp or have obtained a change of status, you can travel to the U.S. (if applicable) and begin working for your sponsoring employer.",
  },
];

const Steps = () => {
  return (
    <>
      <Card>
        <CardBody>
          <h5 className="card-title mb-4">Services offered</h5>
          <Row>
            <Col xxl={12} xl={4} lg={4} sm={12}>
              <ol className="vstack gap-4">
                {ServiceOffered.map((item, index) => {
                  return (
                    <li key={index}>
                      <strong>{item.label}:</strong> {item.value}
                    </li>
                  );
                })}
              </ol>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Steps;
