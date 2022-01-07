import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBarAdmin from "../../components/sideMenuAdmin/NavBar";
import CreatePlayer from "./players/createPlayer/createPlayer";
import ViewAllPlayer from "./players/viewAllPlayer";

export default function Admin() {
  return (
    <>
      <Router>
        <NavBarAdmin />
      </Router>
    </>
  );
}
