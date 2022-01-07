import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiPlusMedical } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import "./viewAllPlayer.css";
import NavBarAdmin from "../../../components/sideMenuAdmin/NavBar";

export default function ViewAllPlayer() {
  const { id } = useParams();
  const history = useHistory();

  const intFullPLayer = {
    _id: "",
    name: "",
    short_name: "",
    nation: "",
    nation_url: "",
    shirt_number: "",
    avatar: "",
    position: "",
    age: "",
    value: "",
    performance: "",
    goal: "",
    strong_foot: "",
    assist: "",
    club: "",
    club_url: "",
    point: "",
  };

  const [fullPlayer, setFullPlayer] = useState([intFullPLayer]);

  useEffect(() => {
    const getFullPlayerData = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/player/fullplayer");
        setFullPlayer(res.data);
        // console.log(res.data);
      } catch (e) {
        throw new Error(e);
      }
    };
    getFullPlayerData();
  }, []);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <Link to="/create-player">
          <button type="button" className="btn btn-success">
            Add Player
          </button>
        </Link>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Club</th>
              <th scope="col">Position</th>
              <th scope="col">Value</th>
              <th scope="col">Point</th>
            </tr>
          </thead>
          {fullPlayer?.map((el) => (
            <tbody key={el.name}>
              <tr
                className="onClick"
                onClick={() => {
                  history.push(`/view-all-player/${el._id}`);
                }}
              >
                <td>{el?.name}</td>
                <td>{el?.position}</td>
                <td>{el?.club}</td>
                <td>{el?.value}</td>
                <td>{el?.point}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
