import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";
import "./editClub.css";

export default function EditClub() {
  const [selectedClub, setSelectedClub] = useState();
  const [name, setName] = useState();
  const [rank, setRank] = useState();
  const [logo, setLogo] = useState();
  const [kit, setKit] = useState();
  const [highlighTitle, setHighlightTitle] = useState();
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadedKit, setUploadedKit] = useState({});
  const [kitFile, setKitFile] = useState();
  const [filename, setFilename] = useState();
  const [fileFileKit, setFileKitName] = useState();
  const [newLogo, setNewLogo] = useState();
  const [newKit, setNewKit] = useState();

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getSelectedClub = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/club/each-club", {
          params: {
            id,
          },
        });
        setSelectedClub(res.data);
        setName(res.data.name);
        setRank(res.data.rank);
        setLogo(res.data.logo);
        setKit(res.data.kit_url);
        setHighlightTitle(res.data.highlight_title);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedClub();
  }, []);

  const uploadLogo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:3080/api/user/upload-club-logo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      console.log(filePath);
      setNewLogo(filePath);
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const uploadKit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", kitFile);

    try {
      const res = await axios.post("http://localhost:3080/api/user/upload-jersey", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      console.log(filePath);
      setNewKit(filePath);
      setUploadedKit({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  const editClub = (e) => {
    e.preventDefault();
    if (!newKit && !newLogo) {
      console.log("hoho");
      const newClub = {
        clubID: id,
        newName: name,
        newRank: rank,
        newLogo: logo,
        newKit: kit,
        newTitle: highlighTitle,
      };
      axios
        .put("http://localhost:3080/api/club/edit-club", newClub)
        .then((res) => {
          console.log(res);
          history.push("/view-all-club");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (!newKit && newLogo) {
      console.log("hihi");
      const newClub = {
        clubID: id,
        newName: name,
        newRank: rank,
        newLogo,
        newKit: kit,
        newTitle: highlighTitle,
      };
      axios
        .put("http://localhost:3080/api/club/edit-club", newClub)
        .then((res) => {
          console.log(res);
          history.push("/view-all-club");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (newKit && !newLogo) {
      console.log("haha");
      const newClub = {
        clubID: id,
        newName: name,
        newRank: rank,
        newLogo: logo,
        newKit,
        newTitle: highlighTitle,
      };
      axios
        .put("http://localhost:3080/api/club/edit-club", newClub)
        .then((res) => {
          console.log(res);
          history.push("/view-all-club");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (newKit && newLogo) {
      console.log("haha");
      const newClub = {
        clubID: id,
        newName: name,
        newRank: rank,
        newLogo,
        newKit,
        newTitle: highlighTitle,
      };
      axios
        .put("http://localhost:3080/api/club/edit-club", newClub)
        .then((res) => {
          console.log(res);
          history.push("/view-all-club");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChangeLogo = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleChangeKit = (e) => {
    setKitFile(e.target.files[0]);
    setFileKitName(e.target.files[0].name);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRankChange = (e) => {
    setRank(e.target.value);
  };

  const handleTitleChange = (e) => {
    setHighlightTitle(e.target.value);
  };

  console.log(selectedClub);
  console.log(name);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Edit Club</h3>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/view-all-club" class="btn btn-success">
                Club List
              </Link>
            </h4>
            <div>
              <label className="label">Name:</label>
              <input type="text" value={name} onChange={handleNameChange} className="form-control" placeholder="Name" />
            </div>
            <div className="info">
              <label className="label">Rank:</label>
              <input type="text" value={rank} onChange={handleRankChange} className="form-control" placeholder="Name" />
            </div>
            <div className="info">
              <label className="label">Logo</label>{" "}
              <div>
                {newLogo ? (
                  <img src={`http://localhost:3080${newLogo}`} alt="Player Avatar" className="img" />
                ) : (
                  <img src={`http://localhost:3080${logo}`} alt="Player Avatar" className="img" />
                )}
              </div>
            </div>
            <form classsName="uploadImage" onSubmit={uploadLogo}>
              <input type="file" name="file" id="customFile" onChange={handleChangeLogo} />
              <input type="Submit" value="Upload" />
            </form>
            <div className="info">
              <label className="label">Kit</label>{" "}
              <div>
                {newKit ? (
                  <img src={`http://localhost:3080${newKit}`} alt="Player Avatar" className="img" />
                ) : (
                  <img src={`http://localhost:3080${kit}`} alt="Player Avatar" className="img" />
                )}
              </div>
            </div>
            <form classsName="uploadImage" onSubmit={uploadKit}>
              <input type="file" name="file" id="customFile" onChange={handleChangeKit} />
              <input type="Submit" value="Upload" />
            </form>
            <div className="info">
              <label className="label">Highlight Title:</label>
              <input
                type="text"
                value={highlighTitle}
                onChange={handleTitleChange}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <button type="submit" onClick={editClub} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
