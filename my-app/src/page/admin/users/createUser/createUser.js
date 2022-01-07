import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";
import "./createUser.css";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";

export default function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState();
  const [successShow, setSuccessShow] = useState(false);

  const handleWarning = () => setSuccessShow(true);
  const handleCloseWarning = () => setSuccessShow(false);

  const register = (e) => {
    e.preventDefault();

    const registered = {
      email,
      password,
    };
    axios.post("http://localhost:3080/api/user/create-user", registered).then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        handleWarning();
        setWarning(error.response.data);
      },
    );
  };

  const hanldeChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">ADD USER</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/view-all-user" class="btn btn-success">
                User List
              </Link>
            </h4>
            <div>
              <label className="label">Email:</label>
              <input type="text" onChange={hanldeChangeEmail} className="form-control" placeholder="Email" />
            </div>
            <div className="info">
              <label className="label">Password:</label>
              <input type="text" onChange={handleChangePassword} className="form-control" placeholder="Password" />
            </div>
            <button type="submit" onClick={register} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Modal show={successShow} onHide={handleCloseWarning}>
        <Modal.Header closeButton>
          <Modal.Title>WARNING!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{warning}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseWarning}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
