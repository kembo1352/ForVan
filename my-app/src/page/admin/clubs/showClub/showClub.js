import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";
import "./showClub.css";

export default function ShowClub() {
  const [selectedClub, setSelectedClub] = useState();

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
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedClub();
  }, []);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Club Detail</h3>
          </div>
          <div className="panel-body">
            <div className="buttonContainer">
              <ul className="button">
                <li className="li">
                  <input
                    type="button"
                    onClick={() => {
                      history.push(`/edit-club/${id}`);
                    }}
                    className="btn btn-success px-8"
                    width="50px"
                    height="20px"
                    value="Edit"
                  />
                </li>
                <li className="li">
                  <input type="button" className="btn btn-success px-8" width="50px" height="20px" value="Delete" />
                </li>
              </ul>
            </div>
            <div>
              <label className="label">Name:</label>
              <div className="status">{selectedClub?.name}</div>
              <hr className="hr" />
            </div>
            <div className="info">
              <label className="label">Rank:</label>
              <div className="status">{selectedClub?.rank}</div>
              <hr />
            </div>
            <div className="info">
              <div className="label">Logo:</div>
              <img src={selectedClub?.logo} width="120px" height="80px" alt="" />
              <hr />
            </div>
            <div className="info">
              <div className="label">Kit:</div>
              <img src={`http://localhost:3080${selectedClub?.kit_url}`} width="120px" height="80px" alt="" />
              <hr />
            </div>
            <div className="info">
              <div className="label">Highlight Title:</div>
              <div className="status">{selectedClub?.highlight_title}</div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
