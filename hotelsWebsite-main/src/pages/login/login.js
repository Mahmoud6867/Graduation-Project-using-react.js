import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../context/emailContext";
import i18n from "../../i18n";
import { auth, signInWithGoogle } from "../results/firebase";

export default function Login() {
  const navigate = useNavigate();
  // var { emailValue, setEmailValue } = useContext(EmailContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
      setUser(localStorage.name);
  }, [user])

  let template;
  if (localStorage.name!==undefined) {
    template =      <div className="home">
    <h4>Hello, <span></span>{user}</h4>
    <img className="rounded-pill" src={localStorage.photo} alt="not found" />
    <button className="button signout  btn btn-danger  rounded-pill mb-5 d-block mt-3 ms-auto me-auto " onClick={() =>{ auth.signOut()
    localStorage.clear()
    window.location.reload(false);

   
  }
    }>Log out</button>
  </div> ;
  } else {
    template = 
    <Form
      className="mb-3"
      onSubmit={() => {
        navigate("/");
      }}
    >
    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Label className="mb-5">
          <h3>
            {i18n.language === "en"
              ? "Sign in or create an account"
              : "تسجيل الدخول أو إنشاء حساب"}
          </h3>
        </Form.Label>
        {/* sign in  with google */}
        <div className="d-grid gap-2 col-8 mx-auto ">
          <button className="btn btn-outline-primary" type="button" onClick={signInWithGoogle}>
            <img
              class="m-3"
              alt=""
              src="https://a.travel-assets.com/egds/marks/google.svg"
              style={{ width: 20, height: 20 }}
              
            />
            Sign in with Google
          </button>

        </div>
        {/*  */}
        {/* <div className="display-6 m-4">or</div>
        <Form.Control
          className="mb-5"
          type="email"
          placeholder="Email"
          required
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
        />
        <button
          className="btn btn-primary w-100 rounded-pill mb-5 "
          type="submit"
        >
          {i18n.language === "en" ? "Continue" : "أكمل"}
        </button> */}
      </Form.Group>
    </Form>;
  }
  return (
    <Container>
    <Row>
        <Col sm={4} className="m-auto text-center">
        {template}
    
        </Col>
      </Row>

      <Row>
        <Col sm={4} className="m-auto text-center mb-3">
          <div>
            {" "}
            <p>
              {i18n.language === "en" ? "or continue with" : "أو أكمل بإستخدام"}
            </p>{" "}
          </div>
          <div>
            <a href="#">
              <img
                class="m-3"
                alt=""
                src="https://a.travel-assets.com/egds/marks/apple.svg"
                style={{ width: 20, height: 20 }}
              />
            </a>
            <a href="#">
              <img
                class="m-3"
                alt=""
                src="https://a.travel-assets.com/egds/marks/facebook.svg"
                style={{ width: 20, height: 20 }}
              />
            </a>
          </div>
          <div className="mb-3">
            <p>
              {i18n.language === "en"
                ? "By continuing, you have read and agree to our"
                : "بالمتابعة ، تكون قد قرأت ووافقت على"}{" "}
              <a href="#">
                {" "}
                {i18n.language === "en"
                  ? "Terms and Conditions"
                  : "الأحكام والشروط"}
              </a>{" "}
              {i18n.language === "en" ? "and" : "و"}{" "}
              <a href="#">
                {i18n.language === "en" ? "Privacy Statement" : "بيان الخصوصية"}
              </a>
              .
            </p>
          </div>
          <div className=" d-flex justify-content-evenly">
            <a href="#">
              {" "}
              {i18n.language === "en" ? "Contact us" : "اتصل بنا"}
            </a>
            <a href="#">Hotels.com</a>
            <a href="#">
              {" "}
              {i18n.language === "en" ? "Delete data" : "حذف البيانات"}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
