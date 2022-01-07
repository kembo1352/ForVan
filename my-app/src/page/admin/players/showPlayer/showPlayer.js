import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";
import "./showPlayer.css";

export default function ShowPlayer() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const history = useHistory();

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getSelectedPlayer = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/player/each-player", {
          params: {
            id,
          },
        });
        setSelectedPlayer(res.data);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedPlayer();
  }, []);

  const handleOnClickDeletePlayer = (e) => {
    console.log("Good Bye Bitch");
    const deletePlayerId = {
      playerID: id,
    };
    console.log(deletePlayerId);
    axios
      .post("http://localhost:3080/api/player/delete-player", deletePlayerId)
      .then((res) => console.log(res), history.push("/view-all-player"));
  };

  console.log(selectedPlayer);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Player Detail</h3>
          </div>
          <div className="panel-body">
            <div className="buttonContainer">
              <ul className="button">
                <li className="li">
                  <input
                    type="button"
                    onClick={() => {
                      history.push(`/edit-player/${id}`);
                    }}
                    className="btn btn-success px-8"
                    width="50px"
                    height="20px"
                    value="Edit"
                  />
                </li>
                <li className="li">
                  <input
                    type="button"
                    onClick={handleOnClickDeletePlayer}
                    className="btn btn-success px-8"
                    width="50px"
                    height="20px"
                    value="Delete"
                  />
                </li>
              </ul>
            </div>
            <div>
              <label className="label">Name:</label>
              <div className="status">{selectedPlayer.name}</div>
              <hr className="hr" />
            </div>
            <div className="info">
              <label className="label">Short Name:</label>
              <div className="status">{selectedPlayer.short_name}</div>
              <hr />
            </div>
            <div className="info">
              <div className="label">Nation:</div>
              <img src={`http://localhost:3080${selectedPlayer.nation_url}`} width="120px" height="80px" alt="" />
              <hr />
            </div>
            <div className="info">
              <label className="label">Shirt Number:</label>
              <div className="status">{selectedPlayer.shirt_number}</div>
              <hr />
            </div>
            <div className="info">
              <div className="label">Avatar:</div>
              <img src={`http://localhost:3080${selectedPlayer.avatar}`} width="120px" height="80px" alt="" />
              <hr />
            </div>
            <div className="info">
              <label className="label">Position:</label>
              <div className="status">{selectedPlayer.position}</div>
              <hr />
            </div>
            <div className="info">
              <label className="label">Age:</label>
              <div className="status">{selectedPlayer.age}</div>
              <hr />
            </div>
            <div className="info">
              <label className="label">Value:</label>
              <div className="status">{selectedPlayer.value}</div>
              <hr />
            </div>
            <div className="info">
              <label className="label">Performance:</label>
              <div className="status">{selectedPlayer.performance}</div>
              <hr />
            </div>
            <div className="info">
              <label className="label">Goal:</label>
              <div className="status">{selectedPlayer.goal}</div>
              <hr />
            </div>
            <div className="info">
              <label className="label">Strong Foot:</label>
              <div className="status">{selectedPlayer.strong_foot}</div>
              <hr />
            </div>
            <div className="info">
              <label className="label">Assist:</label>
              <div className="status">{selectedPlayer.assist}</div>
              <hr />
            </div>
            <div className="info">
              <div className="label">Club:</div>
              <div className="status">{selectedPlayer.club}</div>
              <hr />
            </div>
            <div className="info">
              <label className="label">Point:</label>
              <div className="status">{selectedPlayer.point}</div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
