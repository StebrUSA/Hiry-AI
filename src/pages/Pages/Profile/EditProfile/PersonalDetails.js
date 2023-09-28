import React from "react";

import { Col, Form, Input, Label, Row, FormFeedback } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalDetails = ({ updateProgress }) => {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    phonenumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    zipcode: Yup.string()
      .min(5, "Zip Code must be at least 5 characters")
      .max(6, "Zip Code must be at most 6 characters")
      .required("Zip Code is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "Dave",
      lastname: "Adame",
      phonenumber: "+(1) 987 6543",
      email: "daveadame@Hiry.ai",
      password: "",
      confirmpassword: "",
      city: "Sunnywale",
      state: "California",
      country: "United States",
      zipcode: "90011",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here, if needed.
      console.log("Form values:", values);
    },
  });

  const handleUpdate = () => {
    // Call the updateProgress function passed from the parent component
    formik.handleSubmit();
    updateProgress();
  };
  return (
    <React.Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col lg={6}>
            <div className="mb-3 mt-3">
              <Label htmlFor="firstnameInput" className="form-label">
                First Name <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                className="form-control"
                id="firstnameInput"
                placeholder="Enter your firstname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("firstname")}
                invalid={formik.touched.firstname && !!formik.errors.firstname}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <FormFeedback>{formik.errors.firstname}</FormFeedback>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3 mt-3">
              <Label htmlFor="lastnameInput" className="form-label">
                Last Name <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                className="form-control"
                id="lastnameInput"
                placeholder="Enter your lastname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("lastname")}
                invalid={formik.touched.lastname && !!formik.errors.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <FormFeedback>{formik.errors.lastname}</FormFeedback>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="phonenumberInput" className="form-label">
                Phone Number <span className="text-danger">*</span>
              </Label>
              <Input
                type="number"
                className="form-control"
                id="phonenumberInput"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("phonenumber")}
                invalid={
                  formik.touched.phonenumber && !!formik.errors.phonenumber
                }
              />
              {formik.touched.phonenumber && formik.errors.phonenumber && (
                <FormFeedback>{formik.errors.phonenumber}</FormFeedback>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="emailInput" className="form-label">
                Email Address <span className="text-danger">*</span>
              </Label>
              <Input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("email")}
                invalid={formik.touched.email && !!formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <FormFeedback>{formik.errors.email}</FormFeedback>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="passwordInput" className="form-label">
                Password <span className="text-danger">*</span>
              </Label>
              <Input
                type="password"
                className="form-control"
                id="passwordInput"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("password")}
                invalid={formik.touched.password && !!formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (
                <FormFeedback>{formik.errors.password}</FormFeedback>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-3">
              <Label htmlFor="confirmpasswordInput" className="form-label">
                Confirm Password <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                className="form-control"
                id="confirmpasswordInput"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("confirmpassword")}
                invalid={
                  formik.touched.confirmpassword &&
                  !!formik.errors.confirmpassword
                }
              />
              {formik.touched.confirmpassword &&
                formik.errors.confirmpassword && (
                  <FormFeedback>{formik.errors.confirmpassword}</FormFeedback>
                )}
            </div>
          </Col>
          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="cityInput" className="form-label">
                City <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                className="form-control"
                minLength="5"
                maxLength="6"
                id="zipcodeInput"
                placeholder="Enter zipcode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("city")}
                invalid={formik.touched.city && !!formik.errors.city}
              />
              {formik.touched.city && formik.errors.city && (
                <FormFeedback>{formik.errors.city}</FormFeedback>
              )}
            </div>
          </Col>
          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="stateInput" className="form-label">
                State <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                className="form-control"
                id="cityInput"
                placeholder="City"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("city")}
                invalid={formik.touched.city && !!formik.errors.city}
              />
              {formik.touched.city && formik.errors.city && (
                <FormFeedback>{formik.errors.city}</FormFeedback>
              )}
            </div>
          </Col>
          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="countryInput" className="form-label">
                Country <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                className="form-control"
                id="countryInput"
                placeholder="Country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("country")}
                invalid={formik.touched.country && !!formik.errors.country}
              />
              {formik.touched.country && formik.errors.country && (
                <FormFeedback>{formik.errors.country}</FormFeedback>
              )}
            </div>
          </Col>

          <Col lg={3}>
            <div className="mb-3">
              <Label htmlFor="zipcodeInput" className="form-label">
                Zip Code <span className="text-danger">*</span>
              </Label>
              <Input
                type="number"
                className="form-control"
                minLength="5"
                maxLength="6"
                id="zipcodeInput"
                placeholder="Enter zipcode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("zipcode")}
                invalid={formik.touched.zipcode && !!formik.errors.zipcode}
              />
              {formik.touched.zipcode && formik.errors.zipcode && (
                <FormFeedback>{formik.errors.zipcode}</FormFeedback>
              )}
            </div>
          </Col>

          <Col lg={12}>
            <div className="mb-4 pb-2">
              <Label
                htmlFor="exampleFormControlTextarea"
                className="form-label"
              >
                Description
              </Label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea"
                rows="5"
              ></textarea>
            </div>
          </Col>
          <Col lg={12}>
            <div className="hstack gap-2 justify-content-end">
              <button
                type="button"
                onClick={handleUpdate}
                className="btn btn-primary"
              >
                Update
              </button>
              <button type="button" className="btn btn-soft-success">
                Cancel
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default PersonalDetails;
