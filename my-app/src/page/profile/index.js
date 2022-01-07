import React, { useEffect, useState } from "react";
import "./index.css";
import jwt from "jwt-decode";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import PageLayOut from "../../components/pageLayOut/pageLayOut";
import { auth } from "../../helpers/helper";

export default function Profile() {
  const [userInfo, setUserInfo] = useState();
  const [favClub, setFavClub] = useState();
  const [selectClub, setSelectClub] = useState();
  const [oldFirstName, setOldFirstName] = useState("");
  const [oldLastName, setOldLastName] = useState("");
  const [oldMobile, setOldMobile] = useState("");
  const [oldAddress, setOldAddress] = useState("");
  const [accountName, setAccountName] = useState("");
  const [file, setFile] = useState("");
  const [newAvatar, setNewAvatar] = useState();
  const [oldAvatar, setOldAvatar] = useState();
  const [filename, setFilename] = useState();
  const [uploadedFile, setUploadedFile] = useState({});
  const history = useHistory();

  const token = localStorage.getItem("token");
  const user = jwt(token);
  const id = user.user._id;
  // const userInfo = user.user;

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/user/userinfo`, {
          params: {
            id,
          },
        });
        const selectedUser = res.data;
        setUserInfo(selectedUser);
        setAccountName(res.data[0].name);
        setOldFirstName(res.data[0].firstName);
        setOldLastName(res.data[0].lastName);
        setOldMobile(res.data[0].mobile);
        setOldAddress(res.data[0].address);
        setFavClub(res.data[0].clubInfo);
        setOldAvatar(res.data[0].avatar);
      } catch (e) {
        throw new Error(e);
      }
    };
    getUser();
  }, []);

  const updateUserInfo = (e) => {
    // const userNewInfos = {
    //   newFirstName: oldFirstName,
    //   newLastName: oldLastName,
    //   newAccountName: accountName,
    //   newMobile: oldMobile,
    //   newAddress: oldAddress,
    //   newAvatar,
    //   newFavClub: selectClub,
    //   userId: id,
    // };

    if (newAvatar) {
      const userNewInfos = {
        newFirstName: oldFirstName,
        newLastName: oldLastName,
        newAccountName: accountName,
        newMobile: oldMobile,
        newAddress: oldAddress,
        newAvatar,
        newFavClub: selectClub,
        userId: id,
      };

      e.preventDefault();
      console.log(userNewInfos);
      axios
        .put("http://localhost:3080/api/updateUser/updateUser", userNewInfos)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    }
    if (!newAvatar) {
      const userNewInfos = {
        newFirstName: oldFirstName,
        newLastName: oldLastName,
        newAccountName: accountName,
        newMobile: oldMobile,
        newAddress: oldAddress,
        newAvatar: oldAvatar,
        newFavClub: selectClub,
        userId: id,
      };

      e.preventDefault();
      console.log(userNewInfos);
      axios
        .put("http://localhost:3080/api/updateUser/updateUser", userNewInfos)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const logOut = () => {
    auth.sigout();
    history.push("/");
    localStorage.removeItem("token");
  };

  console.log(file);

  const onSubmit = async (e) => {
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

  console.log(newAvatar);

  const handleSelect = (e) => {
    setSelectClub(e.target.value);
    console.log(selectClub);
  };

  const handleFirstNameInputChange = (e) => {
    setOldFirstName(e.target.value);
  };

  const handleLastNameInputChange = (e) => {
    setOldLastName(e.target.value);
  };

  const handleOldMobileInputChange = (e) => {
    setOldMobile(e.target.value);
  };

  const handleOldAddressInputChange = (e) => {
    setOldAddress(e.target.value);
  };

  const handleAccountInputChange = (e) => {
    setAccountName(e.target.value);
  };

  return (
    <>
      <PageLayOut>
        <div className="jumbotron vertical-center">
          <div className="container">
            <div className="main-body align-self-center justify-content-center">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        {newAvatar ? (
                          <img
                            src={`http://localhost:3080${newAvatar}`}
                            alt="Admin"
                            className="rounded-circle p-1 bg-primary"
                            width="110"
                            height="110"
                          />
                        ) : (
                          <img
                            src={`http://localhost:3080${oldAvatar}`}
                            alt="Admin"
                            className="rounded-circle p-1 bg-primary"
                            width="110"
                            height="110"
                          />
                        )}

                        <form onSubmit={onSubmit}>
                          <input type="file" name="file" id="customFile" onChange={onChange} />
                          <input type="Submit" value="Upload" />
                        </form>
                        <div className="mt-3">
                          {userInfo?.map((el) => (
                            <h4 key={el.firstName}>{el.name}</h4>
                          ))}
                          {userInfo?.map((el) => (
                            <h6 className="mt-3" key={el.firstName}>
                              {el.firstName} {el.lastName}
                            </h6>
                          ))}
                          {userInfo?.map((el) => (
                            <p className="mt-3" key={el.firstName}>
                              {el.mobile}
                            </p>
                          ))}
                          {userInfo?.map((el) => (
                            <p key={el.firstName}>{el.address}</p>
                          ))}
                          <hr />
                          {favClub?.map((el) => (
                            <img
                              key={el.logo}
                              width="110"
                              height="120"
                              alt="Admin"
                              src={`http://localhost:3080${el.logo}`}
                            />
                          ))}
                          {favClub?.map((el) => (
                            <h4 className="mt-3" key={el.firstName}>
                              {el.name}
                            </h4>
                          ))}
                          <hr />
                          <input type="Submit" onClick={logOut} className="btn btn-danger px-4" value="Log Out" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">First Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            value={oldFirstName}
                            onChange={handleFirstNameInputChange}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Last Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            onChange={handleLastNameInputChange}
                            value={oldLastName}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Account Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            onChange={handleAccountInputChange}
                            value={accountName}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            onChange={handleOldMobileInputChange}
                            value={oldMobile}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            onChange={handleOldAddressInputChange}
                            value={oldAddress}
                          />
                        </div>
                        <div className="col-sm-9 text-secondary" />
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Favorite Club</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <select onChange={handleSelect} value={selectClub} className="form-control">
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
                        <div className="col-sm-9 text-secondary" />
                      </div>
                      <div className="row">
                        <div className="col-sm-3" />
                        <div className="col-sm-9 text-secondary">
                          <Link to="/tranfer">
                            <input
                              type="Submit"
                              onClick={updateUserInfo}
                              className="btn btn-primary px-4"
                              value="Save Changes"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayOut>
    </>
  );
}
