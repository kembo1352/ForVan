import React from "react";
import "./style.module.css";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LandingNav() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: `#053764` }}>
      <a className="navbar-brand" href="#">
        <Link to="/">
          <img src="/logo_clb/vleague.svg" alt="" width="80" height="60" />
        </Link>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/hanoi.png" width="30" height="30" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/viettel.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/binhdinh.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/binhduong.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/danang.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/gialai.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/haiphong.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/hatinh.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/hochiminh.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/namdinh.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/saigon.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/songlam.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/thanhhoa.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <div>
                <img alt="" src="/logo_clb/thanquangninh.png" width="30px" height="30px" />
              </div>
            </a>
          </li>
        </ul>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Get Start
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/login">Log In</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/signup">Sign Up</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
