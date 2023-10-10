import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Card, Col, Container, Row, Input, Label, Button, Form, FormFeedback } from "reactstrap";
import AuthSlider from "../authCarousel";
import { resetPasswordConfirmation } from "../../../service/BackendHelper";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";

const ConfirmResetPassword = () => {
  document.title =
    "Reset Password | Hiry AI |  Job Search, Hiring, Technical Screening unified platform";

  const [passwordShow, setPasswordShow] = useState(false);
  const { resetToken, uid } = useParams();
  const navigate = useNavigate();

  const CallResetPasswordApi = async (payload) => {
    // api call to reset password
    try {
      const resp = await resetPasswordConfirmation(payload);
      if (resp) {
        navigate("/login");
      }
    }
    catch (error) {
      console.log('error: ', error);
    }
  };

  // handle reset form via formik and call the reset api
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(RegExp("(.*[a-z].*)"), "At least one lowercase letter")
        .matches(RegExp("(.*[A-Z].*)"), "At least one uppercase letter")
        .matches(RegExp("(.*[0-9].*)"), "At least one number")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      const payload = {
        new_password1: values.password,
        new_password2: values.confirmPassword,
        uid: uid,
        token: resetToken
      }
      CallResetPasswordApi(payload);
    },
  });

  return (
    <React.Fragment>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="overflow-hidden m-0">
                  <Row className="justify-content-center g-0">
                    <AuthSlider />

                    <Col lg={6}>
                      <div className="p-lg-5 p-4">
                        <div>
                          <h5 className="text-primary">Reset Your Pasword</h5>
                          <p className="text-muted">
                            Please Enter Your New Password
                          </p>
                        </div>

                        <div className="mt-4">
                          <Form
                            onSubmit={validation.handleSubmit}
                            action="index"
                          >
                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="password-input"
                              >
                                Password <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative auth-pass-inputgroup">
                                <Input
                                  type={passwordShow ? "text" : "password"}
                                  className="form-control pe-5 password-input"
                                  placeholder="Enter New Password"
                                  id="password-input"
                                  name="password"
                                  value={validation.values.password || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.touched.password &&
                                      validation.errors.password
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.password &&
                                  validation.touched.password ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.password}
                                  </FormFeedback>
                                ) : null}
                                <Button
                                  color="link"
                                  onClick={() => setPasswordShow(!passwordShow)}
                                  className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                >
                                  <i className="ri-eye-fill align-middle"></i>
                                </Button>
                              </div>
                            </div>

                            <div className="mb-3">
                              <Label
                                className="form-label"
                                htmlFor="password-input"
                              >
                                Confirm Password <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative auth-pass-inputgroup">
                                <Input
                                  type={passwordShow ? "text" : "password"}
                                  className="form-control pe-5 password-input"
                                  placeholder="Enter New Password"
                                  id="password-input"
                                  name="confirmPassword"
                                  value={validation.values.confirmPassword || ""}
                                  onBlur={validation.handleBlur}
                                  onChange={validation.handleChange}
                                  invalid={
                                    validation.touched.confirmPassword &&
                                      validation.errors.confirmPassword
                                      ? true
                                      : false
                                  }
                                />
                                {validation.errors.confirmPassword &&
                                  validation.touched.confirmPassword ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.confirmPassword}
                                  </FormFeedback>
                                ) : null}
                                <Button
                                  color="link"
                                  onClick={() => setPasswordShow(!passwordShow)}
                                  className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                >
                                  <i className="ri-eye-fill align-middle"></i>
                                </Button>
                              </div>
                            </div>

                            <div className="mt-5">
                              <Button
                                className="btn btn-success w-100"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </div>

                          </Form>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <footer className="footer">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p className="mb-0">
                    {new Date().getFullYear()} Hiry. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Stebr,
                    California
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  );
};
export default ConfirmResetPassword;
