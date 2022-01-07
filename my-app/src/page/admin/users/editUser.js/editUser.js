import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";
import "./editUser.css";

export default function EditUser() {
  const { id } = useParams();
  const history = useHistory();

  const [selectedUser, setSelectedUser] = useState([]);
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [club, setClub] = useState();
  const [password, setPassword] = useState();
  const [newAvatar, setNewAvatar] = useState();
  const [uploadedFile, setUploadedFile] = useState({});
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getSelectedUser = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/user/each-user", {
          params: {
            id,
          },
        });
        setSelectedUser(res.data);
        setName(res.data[0].name);
        setAvatar(res.data[0].avatar);
        setFirstName(res.data[0].firstName);
        setLastName(res.data[0].lastName);
        setMobile(res.data[0].mobile);
        setAddress(res.data[0].address);
        setEmail(res.data[0].email);
        setClub(res.data[0].club);
        setPassword(res.data[0].password);
        setUserInfo(res.data[0].userInfo);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedUser();
  }, []);

  console.log(userInfo);

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

  console.log(selectedUser);
  console.log(name);
  console.log(email);

  const editUser = (e) => {
    e.preventDefault();
    if (!newAvatar) {
      console.log("haha");
      const newUser = {
        userID: id,
        newName: name,
        newFirstName: firstName,
        newLastName: lastName,
        newAvatar: avatar,
        newMobile: mobile,
        newAddress: address,
        newEmail: email,
        newClub: club,
        newPassword: password,
        newUserInfo: userInfo,
      };
      axios
        .put("http://localhost:3080/api/user/edit-user", newUser)
        .then((res) => {
          console.log(res);
          history.push("/view-all-player");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (newAvatar != null) {
      console.log("hihi");
      const newUser = {
        userID: id,
        newName: name,
        newFirstName: firstName,
        newLastName: lastName,
        newAvatar,
        newMobile: mobile,
        newAddress: address,
        newEmail: email,
        newClub: club,
        newPassword: password,
        newUserInfo: userInfo,
      };
      axios
        .put("http://localhost:3080/api/user/edit-user", newUser)
        .then((res) => {
          console.log(res);
          history.push("/view-all-player");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeImage = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleSelect = (e) => {
    setClub(e.target.value);
  };

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Edit User</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/view-all-user" class="btn btn-success">
                User List
              </Link>
            </h4>
            <div>
              <label className="label">Name:</label>
              <input type="text" value={name} onChange={handleChangeName} className="form-control" placeholder="Name" />
            </div>
            <div className="info">
              <label className="label">Avatar</label>{" "}
              <div>
                {newAvatar ? (
                  <img src={`http://localhost:3080${newAvatar}`} alt="Player Avatar" className="img" />
                ) : (
                  <img src={`http://localhost:3080${avatar}`} alt="Player Avatar" className="img" />
                )}
              </div>
            </div>
            <form classsName="uploadImage" onSubmit={uploadImage}>
              <input type="file" name="file" id="customFile" onChange={handleChangeImage} />
              <input type="Submit" value="Upload" />
            </form>
            <div className="info">
              <label className="label">Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={handleChangeLastName}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Mobile:</label>
              <input
                type="text"
                value={mobile}
                onChange={handleChangeMobile}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Address:</label>
              <input
                type="text"
                value={address}
                onChange={handleChangeAddress}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Email:</label>
              <input
                type="text"
                value={email}
                onChange={handleChangeEmail}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Password:</label>
              <input
                type="password"
                value={password}
                onChange={handleChangePassword}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Club:</label>
              <select onChange={handleSelect} value={club} className="form-control">
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
            <button type="submit" onClick={editUser} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
