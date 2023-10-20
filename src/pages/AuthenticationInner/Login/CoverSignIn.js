import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";
import AuthSlider from "../authCarousel";
import googleImg from "../../../assets/images/brands/google.png";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCurrentUser, postGoogleSignIn, postLogin } from "../../../service/BackendHelper";
import { GoogleAuthProvider } from "firebase/auth";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const CoverSignIn = () => {
  const provider = new GoogleAuthProvider();
  document.title =
    "SignIn | Hiry AI | Job Search, Hiring, Technical Screening unified platform";

  const [passwordShow, setPasswordShow] = useState(false);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [captchaResult, setCaptchaResult] = useState();
  const navigate = useNavigate();

  const handleRecaptcha = (value) => {

    fetch('http://143.110.147.0:8080/api/auth/recaptcha/', {
      method: 'POST',
      body: JSON.stringify({ 'captcha_value': value }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        setCaptchaResult(data.captcha.success)
      })
  }

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      const params = {
        code: codeResponse?.code,
        redirect_uri: "http://localhost:3000",
        client_id: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        client_secret: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_SECRET,
        grant_type: "authorization_code"
      };
      const data = Object.keys(params)
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data, url: 'https://oauth2.googleapis.com/token',
      };
      const response = await axios(options);
      handleSignInWithGoogle(response.id_token);
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const handleSignInWithGoogle = async (accessToken) => {
    try {
      const payload = {
        access_token: accessToken,
      }
      const apiResp = await postGoogleSignIn(payload);
      if (apiResp) {
        sessionStorage.setItem("authToken", apiResp?.key);
        navigate("/dashboard");
      }
    }
    catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(RegExp("(.*[a-z].*)"), "At least one lowercase letter")
        .matches(RegExp("(.*[A-Z].*)"), "At least one uppercase letter")
        .matches(RegExp("(.*[0-9].*)"), "At least one number")
        .required("Please Enter Your Password"),
    }),
    onSubmit: async (values) => {
      const payload = { username: values.username, password: values.password };

      // api call to login
      let resp;
      try {
        resp = await postLogin(payload);
        if (resp) {
          sessionStorage.setItem("authToken", resp?.key);
          navigate("/dashboard");
        }
      }
      catch (error) {
        console.log('error: ', error);
      }
      
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
                <Card className="overflow-hidden">
                  <Row className="g-0">
                    <AuthSlider />

                    <Col lg={6}>
                      <div className="p-lg-5 p-4">
                        <div>
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p className="text-muted">
                            Sign in to continue to HIRY AI
                          </p>
                        </div>

                        <div className="mt-4">
                          <Form
                            onSubmit={validation.handleSubmit}
                            action="index"
                          >
                            <div className="mb-3">
                              <Label htmlFor="username" className="form-label">
                                Username
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                value={validation.values.username || ""}
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                invalid={
                                  validation.touched.username &&
                                    validation.errors.username
                                    ? true
                                    : false
                                }
                              />
                              {validation.touched.username &&
                                validation.errors.username ? (
                                <FormFeedback type="invalid">
                                  {validation.errors.username}
                                </FormFeedback>
                              ) : null}
                            </div>

                            <div className="mb-3">
                              <div className="float-end">
                                <Link
                                  to="/password-reset"
                                  className="text-muted"
                                >
                                  Forgot password?
                                </Link>
                              </div>
                              <Label className="form-label" htmlFor="password">
                                Password
                              </Label>
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <Input
                                  type={passwordShow ? "text" : "password"}
                                  className="form-control pe-5 password-input"
                                  placeholder="Enter password"
                                  id="password-input"
                                  name="password"
                                  value={validation.values.password || ""}
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  invalid={
                                    validation.touched.password &&
                                      validation.errors.password
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.password &&
                                  validation.errors.password ? (
                                  <FormFeedback type="invalid">
                                    {validation.errors.password}
                                  </FormFeedback>
                                ) : null}
                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                  type="button"
                                  id="password-addon"
                                  onClick={() => setPasswordShow(!passwordShow)}
                                >
                                  <i className="ri-eye-fill align-middle"></i>
                                </button>
                              </div>
                            </div>

                            {/* <div className="form-check">
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="auth-remember-check"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="auth-remember-check"
                              >
                                Remember me
                              </Label>
                            </div> */}

                            <div className="mt-4">
                              <ReCAPTCHA
                                sitekey="6LdWKK4oAAAAABIsmJH3sZfv6xt57vxfA8hCD_f-"
                                onChange={handleRecaptcha}
                              />

                              {
                                captchaResult && <button type='submit'>Submit</button>
                              }
                            </div>


                            <div className="mt-4">
                              <Button
                                color="dark"
                                className="w-100"
                                type="submit"
                              >
                                Sign In
                              </Button>
                            </div>

                            <div className="mt-4 text-center">
                              <div className="signin-other-title">
                                <h5 className="fs-13 mb-4 title">OR</h5>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "100%",
                                  border: "1px solid #eee",
                                }}
                              >
                                <Button
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#fff",
                                    color: "black",
                                    outline: "none",
                                    border: "none",
                                  }}
                                  onClick={() => login()}
                                >
                                  <img
                                    height="37.5px"
                                    width="37.5px"
                                    src={googleImg}
                                    alt="image not available"
                                    style={{ marginRight: "10px" }}
                                  />
                                  <p style={{ margin: 0, padding: 0 }}>
                                    {" "}
                                    Sign In With Google
                                  </p>
                                </Button>
                              </div>                              
                            </div>
                          </Form>
                        </div>

                        <div className="mt-5 text-center">
                          <p className="mb-0">
                            Don't have an account ?{" "}
                            <Link
                              to="/register"
                              className="fw-semibold text-primary text-decoration-underline"
                            >
                              {" "}
                              Signup
                            </Link>{" "}
                          </p>
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
            <Row>
              <Col lg={12}>
                <div className="text-center">
                  <p className="mb-0">
                    &copy; {new Date().getFullYear()} Hiry. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Stebr,
                    California
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default CoverSignIn;
