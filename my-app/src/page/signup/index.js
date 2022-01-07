import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./index.css";
import PageLayOutAuthen from "../../components/pageLayOutAuthen/pageLayOutAuthen";
// import SignUp from "../../components/signup/signup";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState();
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [filename, setFilename] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [club, setClub] = useState();
  const [warning, setWarning] = useState();
  const [successShow, setSuccessShow] = useState(false);

  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    const registered = {
      newAccountName: name,
      email,
      password,
      newFirstName: firstName,
      newLastName: lastName,
      newMobile: mobile,
      newAddress: address,
      newFavClub: club,
    };
    axios.post("http://localhost:3080/api/user/register", registered).then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        handleWarning();
        setWarning(error.response.data);
      },
    );
    history.push("/login");
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:3080/api/user/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      console.log(filePath);
      setNewAvatar(filePath);
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const handleWarning = () => setSuccessShow(true);
  const handleCloseWarning = () => setSuccessShow(false);

  const handleChangeImage = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const hanldeChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeClub = (e) => {
    setClub(e.target.value);
    console.log(club);
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
                    <img src="vleague_poster/1.jpg" className="image" alt="" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                  <h3>Register</h3>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Account Name</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={handleChangeName} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Email</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={hanldeChangeEmail} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">First Name</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={handleChangeFirstName} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Last Name</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={handleChangeLastName} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Mobile</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={handleChangeMobile} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Address</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <input onChange={handleChangeAddress} type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="row px-3">
                    {" "}
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Favorite Club</h6>
                    </label>{" "}
                    <div className="col-sm-9 text-secondary">
                      <select onChange={handleChangeClub} className="form-control">
                        <option value="Ha Noi FC">Ha Noi FC</option>
                        <option value="Hoang Anh Gia Lai FC">Hoang Anh Gia Lai</option>
                        <option value="Ho Chi Minh FC">Ho Chi Minh FC</option>
                        <option value="Nam Dinh FC">Nam Dinh FC</option>
                        <option value="Than Quang Ninh">Than Quang Ninh</option>
                        <option value="Binh Dinh FC">Binh Dinh FC</option>
                        <option value="Sai Gon FC">Sai Gon FC</option>
                        <option value="Viettel FC">Viettel FC</option>
                        <option value="Thanh Hoa FC">Thanh Hoa FC</option>
                        <option value="Da Nang FC">Da Nang FC</option>
                        <option value="Hai Phong FC">Hai Phong FC</option>
                        <option value="Song Lam Nghe An">Song Lam Nghe An</option>
                        <option value="Hong Linh Ha Tinh">Hong Linh Ha Tinh</option>
                        <option value="Becamex Binh Duong">Becamex Binh Duong</option>
                      </select>
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
                    <button onClick={register} type="submit" className="btn col-sm-9 btn-blue text-center">
                      Register
                    </button>{" "}
                  </div>
                  <div className="row mb-4 px-3">
                    {" "}
                    <small className="font-weight-bold">
                      Already have an account?{" "}
                      <Link to="/login">
                        <a className="text-danger ">Log In</a>
                      </Link>
                    </small>{" "}
                  </div>
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
