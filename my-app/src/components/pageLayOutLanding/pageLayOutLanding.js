import React from "react";
import MyMain from "../main/main";
import LandingNav from "../landingNav/navLanding";
import Footer from "../footer/footer";

export default function PageLayOutLanding(props) {
  return (
    <>
      <LandingNav />
      <MyMain />
      {props.children}
      <Footer />
    </>
  );
}
