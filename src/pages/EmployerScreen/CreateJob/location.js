import React, { useEffect, useState } from "react";
import { Row, Col, Label, Input, CardHeader } from "reactstrap";
import axios from "axios";

const Location = ({tagline,Joblocation}) => {
  const [input, setInput] = useState("");
  const [placeSuggestions, setPlaceSuggestions] = useState([]);

  const fetchData = async () => {
    const apiKey = "ge-746f4c638ea6f138";
    if(input.length>0){
      
      const data = await axios.get(
        `https://api.geocode.earth/v1/search?text=${input}&api_key=${apiKey}`
      );
      const features = data.features;
      console.log(data.features);
      const suggestions = features.map((feature) => feature.properties.label);
      setPlaceSuggestions(suggestions);
    }

  };

  const handleLocation = (input) => {
    const value = input.target.value;
    if(value.length === 0){
      if(document.getElementById("place-suggestions")){
        document.getElementById("place-suggestions").style.display = "none";
      }
    }else{
      if(document.getElementById("place-suggestions"))
        {
           document.getElementById("place-suggestions").style.display = "block";
        }
    }
    setInput(value);
  };
  const handleFinalLocation = (suggestion) => {
    setInput(suggestion);
    document.getElementById("place-suggestions").style.display = "none";
  };
  useEffect(() => {
    const getData=setTimeout(() => {
      fetchData();
    },500);
    return ()=>clearTimeout(getData)
  }, [input]);

  return (
    <div>
      {tagline &&
      <div>
        <p
          className="border text-black rounded-3 px-2"
          style={{
            backgroundColor: "#ecf9ff",
            lineHeight: "40px",
            verticalAlign: "middle",
          }}
        >
          {tagline}
        </p>
      </div>}
      <Row className="mt-1 position-relative">
        <div className="mb-3">
          <Label className="form-label" htmlFor="job-title-input">
            {Joblocation}
             <span className="text-danger">*</span>
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
              <div
                style={{ zIndex: 2,top:"-15px" }}
                id="place-suggestions"
                className="fs-4 w-100 position-absolute right-0 bg-white dropdown-location-suggestion"
              >
                {placeSuggestions.map((suggestion, index) => {
                  return (
                    <>
                      <li
                        onClick={() => handleFinalLocation(suggestion)}
                        className="my-1 list-location-suggestion cursor-pointer"
                        key={index}
                      >
                        {suggestion}
                      </li>
                    </>
                  );
                })}
              </div>
            )}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Location;
