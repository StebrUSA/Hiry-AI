import React, { useEffect, useState } from "react";
import { Row, Col, Label, Input, CardHeader } from "reactstrap";
import axios from "axios";

const Location = () => {
  const [input, setInput] = useState("");
  const [placeSuggestions, setPlaceSuggestions] = useState([]);

  const fetchData = async () => {
    const apiKey = "ge-746f4c638ea6f138";
    const data = await axios.get(
      `https://api.geocode.earth/v1/search?text=${input}&api_key=${apiKey}`
    );
    const features = data.features;
    console.log(data.features);
    const suggestions = features.map((feature) => feature.properties.label);
    setPlaceSuggestions(suggestions);
  };

  const handleLocation = (input) => {
    const value = input.target.value;
    console.log(value);
    setInput(value);
  };
  const handleFinalLocation = (suggestion) => {
    setInput(suggestion);
    document.getElementById("place-suggestions").style.display = "none";
  };
  useEffect(() => {
    fetchData();
  }, [handleLocation]);

  return (
    <div>
     
        <p
          className="border text-black rounded-3 px-2"
          style={{
            backgroundColor: "#ecf9ff",
            height: "40px",
            lineHeight: "40px",
            verticalAlign: "middle",
          }}
        >
          Candidates are 140% more likely to apply when you include a city.
          Location is also required for some jobs boards.
        </p>
    
      <Row className="mt-4 position-relative">
        <div className="mb-3">
          <Label className="form-label" htmlFor="job-title-input">
            Job Location <span className="text-danger">*</span>
          </Label>
          <Input
            type="text"
            className="form-control"
            id="job-title-input"
            onChange={handleLocation}
            value={input}
            autoComplete="off"
          />
        </div>
        <Row>
          <Col xxl={12}>
            {placeSuggestions.length > 0 && (
              <ul
                style={{ zIndex: 2 }}
                id="place-suggestions"
                className="fs-4 w-100 position-absolute right-0 bg-white left-8"
              >
                {placeSuggestions.map((suggestion, index) => {
                  return (
                    <>
                      <li
                        onClick={() => handleFinalLocation(suggestion)}
                        className="my-1 list-unstyled mx-n3 cursor-pointer"
                        key={index}
                      >
                        {suggestion}
                      </li>
                    </>
                  );
                })}
              </ul>
            )}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Location;
