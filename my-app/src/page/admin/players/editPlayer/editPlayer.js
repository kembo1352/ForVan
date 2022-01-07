import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";
import "./editPlayer.css";

export default function EditPlayer() {
  const { id } = useParams();
  const history = useHistory();

  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [name, setName] = useState();
  const [shortName, setShortName] = useState();
  const [shirtNumber, setShirtNumber] = useState();
  const [avatar, setAvatar] = useState();
  const [filename, setFilename] = useState();
  const [position, setPosition] = useState();
  const [age, setAge] = useState();
  const [value, setValue] = useState();
  const [performance, setPerformance] = useState();
  const [goal, setGoal] = useState();
  const [strongFoot, setStrongFoot] = useState();
  const [assist, setAssist] = useState();
  const [club, setClub] = useState();
  const [point, setPoint] = useState();
  const [file, setFile] = useState("");
  const [newAvatar, setNewAvatar] = useState();
  const [uploadedFile, setUploadedFile] = useState({});
  const [oldClub, setOldClub] = useState();
  const [kit, setKit] = useState();

  useEffect(() => {
    const getSelectedPlayer = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/player/each-player-1", {
          params: {
            id,
          },
        });
        setSelectedPlayer(res.data);
        setName(res.data[0].name);
        setShortName(res.data[0].short_name);
        setShirtNumber(res.data[0].shirt_number);
        setPosition(res.data[0].position);
        setAge(res.data[0].age);
        setAvatar(res.data[0].avatar);
        setValue(res.data[0].value);
        setPerformance(res.data[0].performance);
        setGoal(res.data[0].goal);
        setStrongFoot(res.data[0].strong_foot);
        setAssist(res.data[0].assist);
        setClub(res.data[0].club);
        setPoint(res.data[0].point);
        const { clubInfo } = res.data[0];
        setOldClub(clubInfo);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedPlayer();
  }, []);

  console.log(oldClub);

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

  const editPost = (e) => {
    e.preventDefault();
    if (!newAvatar) {
      console.log("haha");
      const newPlayer = {
        playerID: id,
        newName: name,
        newShortName: shortName,
        newShirtNumber: shirtNumber,
        newAvatar: avatar,
        newPosition: position,
        newAge: age,
        newValue: value,
        newPerformance: performance,
        newGoal: goal,
        newStrongFoot: strongFoot,
        newAssist: assist,
        newClub: club,
        newPoint: point,
      };
      axios
        .put("http://localhost:3080/api/player/edit-player", newPlayer)
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
      const newPlayer = {
        playerID: id,
        newName: name,
        newShortName: shortName,
        newShirtNumber: shirtNumber,
        newAvatar,
        newPosition: position,
        newAge: age,
        newValue: value,
        newPerformance: performance,
        newGoal: goal,
        newStrongFoot: strongFoot,
        newAssist: assist,
        newClub: club,
        newPoint: point,
      };
      axios
        .put("http://localhost:3080/api/player/edit-player", newPlayer)
        .then((res) => {
          console.log(res);
          history.push("/view-all-player");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleShortNameChange = (e) => {
    setShortName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleShirtNumberChange = (e) => {
    setShirtNumber(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handlePerformanceChange = (e) => {
    setPerformance(e.target.value);
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleStrongFootChange = (e) => {
    setStrongFoot(e.target.value);
  };

  const handleAssistChange = (e) => {
    setAssist(e.target.value);
  };

  const handlePointChange = (e) => {
    setPoint(e.target.value);
  };

  const handleSelect = (e) => {
    setClub(e.target.value);
  };

  const handleChangeImage = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Edit Player</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/view-all-player" class="btn btn-success">
                Player List
              </Link>
            </h4>
            <div>
              <label className="label">Name:</label>
              <input type="text" value={name} onChange={handleNameChange} className="form-control" placeholder="Name" />
            </div>
            <div className="info">
              <label className="label">Short Name:</label>
              <input
                type="text"
                value={shortName}
                onChange={handleShortNameChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Shirt Number:</label>
              <input
                type="text"
                value={shirtNumber}
                onChange={handleShirtNumberChange}
                className="form-control"
                placeholder="Name"
              />
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
              <label className="label">Position:</label>
              <input
                type="text"
                value={position}
                onChange={handlePositionChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Age:</label>
              <input type="text" value={age} onChange={handleAgeChange} className="form-control" placeholder="Name" />
            </div>
            <div className="info">
              <label className="label">Value:</label>
              <input
                type="text"
                value={value}
                onChange={handleValueChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Performance:</label>
              <input
                type="text"
                value={performance}
                onChange={handlePerformanceChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Goal:</label>
              <input type="text" value={goal} onChange={handleGoalChange} className="form-control" placeholder="Name" />
            </div>
            <div className="info">
              <label className="label">Strong Foot:</label>
              <input
                type="text"
                value={strongFoot}
                onChange={handleStrongFootChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="info">
              <label className="label">Assist:</label>
              <input
                type="text"
                value={assist}
                onChange={handleAssistChange}
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
            <div className="info">
              <label className="label">Point:</label>
              <input
                type="text"
                value={point}
                onChange={handlePointChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <button type="submit" onClick={editPost} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
