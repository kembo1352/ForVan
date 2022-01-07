import React from "react";
import LandingNav from "../landingNav/navLanding";
import Footer from "../footer/footer";

export default function PageLayOutAuthen(props) {
  return (
    <>
      <LandingNav />
      {props.children}
      <Footer />
    </>
  );
}
