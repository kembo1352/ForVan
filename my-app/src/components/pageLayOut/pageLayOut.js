import React from "react";
import MyMain from "../main/main";
import MyNavBar from "../nav/nav";
import Footer from "../footer/footer";

export default function PageLayOut(props) {
  return (
    <>
      <MyNavBar />
      <MyMain />
      {props.children}
      <Footer />
    </>
  );
}
