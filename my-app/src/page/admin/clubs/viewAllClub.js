import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiPlusMedical } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import "./viewAllClub.css";
import NavBarAdmin from "../../../components/sideMenuAdmin/NavBar";

export default function ViewAllClub() {
  const { id } = useParams();
  const history = useHistory();

  const [club, setClub] = useState();

  useEffect(() => {
    const getFullClub = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/club/view-all-club");
        setClub(res.data);
      } catch (e) {
        throw new Error(e);
      }
    };
    getFullClub();
  }, []);

  console.log(club);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <Link to="/create-club">
          <button type="button" className="btn btn-success">
            Add Club
          </button>
        </Link>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Rank</th>
              <th scope="col">Logo</th>
              <th scope="col">Kit</th>
              <th scope="col">Highlight Title</th>
            </tr>
          </thead>
          {club?.map((el) => (
            <tbody key={el?._id}>
              <tr className="onClick" onClick={() => history.push(`/view-all-club/${el._id}`)}>
                <td>{el?.name}</td>
                <td>{el?.rank}</td>
                <td>
                  <img src={el?.logo} alt="" width="120px" height="90px" />
                </td>
                <td>
                  <img src={`http://localhost:3080${el?.kit_url}`} alt="" width="120px" height="90px" />
                </td>
                <td>{el?.highlight_title}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
