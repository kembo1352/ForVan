import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";
import { SideBarData } from "./SideBarData";
import { auth, authAdmin } from "../../helpers/helper";

function NavBarAdmin() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

  const logOutAdmin = () => {
    authAdmin.sigoutAdmin();
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar justify-content-between">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </Link>
            </li>
            {SideBarData.map((item, index) => (
              <li key={SideBarData.title} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
            <div className="logoutButton">
              <Button variant="danger" onClick={logOutAdmin}>
                Log Out
              </Button>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBarAdmin;
