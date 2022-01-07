import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./createPlayer.css";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";

export default function CreatePlayer() {
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [filename, setFilename] = useState();
  const [newAvatar, setNewAvatar] = useState();
  const [selectClub, setSelectClub] = useState();
  const [name, setName] = useState();
  const [shortName, setShortName] = useState();
  const [shirtNumber, setShirtNumber] = useState();
  const [position, setPosition] = useState();
  const [age, setAge] = useState();
  const [value, setValue] = useState();
  const [performance, setPerformance] = useState();
  const [goal, setGoal] = useState();
  const [strongFoot, setStrongFoot] = useState();
  const [assist, setAssist] = useState();
  const [point, setPoint] = useState();

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

  const createNewPlayer = (e) => {
    const newPlayer = {
      name,
      shortName,
      shirtNumber,
      position,
      age,
      value,
      performance,
      goal,
      strongFoot,
      assist,
      point,
      selectClub,
      newAvatar,
    };
    e.preventDefault();
    axios
      .post("http://localhost:3080/api/player/create-new-player", newPlayer)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelect = (e) => {
    setSelectClub(e.target.value);
  };

  console.log(newAvatar);

  const handleChangeImage = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeShortName = (e) => {
    setShortName(e.target.value);
  };

  const handleChangeShirtNumber = (e) => {
    setShirtNumber(e.target.value);
  };

  const handleChangePosition = (e) => {
    setPosition(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangePerformance = (e) => {
    setPerformance(e.target.value);
  };

  const handleChangeGoal = (e) => {
    setGoal(e.target.value);
  };

  const handleChangeStrongFoot = (e) => {
    setStrongFoot(e.target.value);
  };

  const handleChangeAssist = (e) => {
    setAssist(e.target.value);
  };

  const handleChangePoint = (e) => {
    setPoint(e.target.value);
  };

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">ADD PLAYER</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/view-all-player" class="btn btn-success">
                Player List
              </Link>
            </h4>
            <div>
              <label className="label">Name:</label>
              <input type="text" onChange={handleChangeName} className="form-control" placeholder="Name" />
            </div>
            <div className="info">
              <label className="label">Short Name:</label>
              <input type="text" onChange={handleChangeShortName} className="form-control" placeholder="Short Name" />
            </div>
            <div className="info">
              <label className="label">Shirt Number:</label>
              <input
                type="text"
                onChange={handleChangeShirtNumber}
                className="form-control"
                placeholder="Shirt Number"
              />
            </div>
            <div className="info">
              <label className="label">Avatar</label>{" "}
              <div>
                <img src={`http://localhost:3080${newAvatar}`} alt="Player Avatar" className="img" />
              </div>
            </div>
            <form classsName="uploadImage" onSubmit={uploadImage}>
              <input type="file" name="file" id="customFile" onChange={handleChangeImage} />
              <input type="Submit" value="Upload" />
            </form>
            <div className="info">
              <label className="label">Position:</label>
              <input type="text" onChange={handleChangePosition} className="form-control" placeholder="Position" />
            </div>
            <div className="info">
              <label className="label">Age:</label>
              <input type="text" onChange={handleChangeAge} className="form-control" placeholder="Age" />
            </div>
            <div className="info">
              <label className="label">Value:</label>
              <input type="text" onChange={handleChangeValue} className="form-control" placeholder="Value" />
            </div>
            <div className="info">
              <label className="label">Performance:</label>
              <input
                type="text"
                onChange={handleChangePerformance}
                className="form-control"
                name="phoneNumber"
                placeholder="Performance"
              />
            </div>
            <div className="info">
              <label className="label">Goal:</label>
              <input type="text" onChange={handleChangeGoal} className="form-control" placeholder="Goal" />
            </div>
            <div className="info">
              <label className="label">Strong Foot:</label>
              <input type="text" onChange={handleChangeStrongFoot} className="form-control" placeholder="Strong Foot" />
            </div>
            <div className="info">
              <label className="label">Assist:</label>
              <input type="text" onChange={handleChangeAssist} className="form-control" placeholder="Assist" />
            </div>
            <div className="info">
              <label className="label">Club:</label>
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
            <div className="info">
              <label className="label">Point:</label>
              <input type="text" onChange={handleChangePoint} className="form-control" placeholder="Point" />
            </div>
            <button type="submit" onClick={createNewPlayer} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
      s
    </>
  );
}
