import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import PageLayOutAuthen from "../../components/pageLayOutAuthen/pageLayOutAuthen";
import { authAdmin } from "../../helpers/helper";
import "./index.css";

export default function LoginAdmin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState();
  const [successShow, setSuccessShow] = useState(false);
  const history = useHistory();

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const login = {
  //     email,
  //     password,
  //   };
  //   try {
  //     const res = axios.post("http://localhost:3080/api/user/login", login);
  //     const { token } = res.data;
  //     localStorage.setItem("token", token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleWarning = () => setSuccessShow(true);
  const handleCloseWarning = () => setSuccessShow(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const login = {
      name,
      password,
    };
    axios.post("http://localhost:3080/api/user/login-admin", login).then(
      (res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        authAdmin.authenticateAdmin();
        history.push("/view-all-player");
      },
      (error) => {
        handleWarning();
        setWarning(error.response.data);
      },
    );
  };

  console.log(warning);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <PageLayOutAuthen>
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
          <div className="card card0 border-0">
            <div className="row d-flex">
              <div className="col-lg-6">
                <div className="card1 pb-5">
                  <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                    {" "}
                    <img src="vleague_poster/admin.jpg" className="image" alt="" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                  <h3>Sign In</h3>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Email Address</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={handleChangeName} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Password</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={handleChangePassword} type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="row mb-3 px-3">
                    {" "}
                    <button onClick={onSubmit} type="submit" className="btn col-sm-9 btn-blue text-center">
                      Login
                    </button>{" "}
                  </div>
                  <div className="row mb-4 px-3">
                    {" "}
                    <small className="font-weight-bold">
                      Log In as{" "}
                      <Link to="/login">
                        <a className="text-danger ">User</a>
                      </Link>
                    </small>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue py-4">
              <div className="row px-3">
                {" "}
                <div className="social-contact ml-4 ml-sm-auto">
                  {" "}
                  <span className="fa fa-facebook mr-4 text-sm" /> <span className="fa fa-google-plus mr-4 text-sm" />{" "}
                  <span className="fa fa-linkedin mr-4 text-sm" />{" "}
                  <span className="fa fa-twitter mr-4 mr-sm-5 text-sm" />{" "}
                </div>
              </div>
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
      </PageLayOutAuthen>
    </>
  );
}
