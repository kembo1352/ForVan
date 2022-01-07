import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import NavBarAdmin from "../../../components/sideMenuAdmin/NavBar";

export default function ViewAllUser() {
  const [favClub, setFavClub] = useState();
  const [userInfo, setUserInfo] = useState();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/user/all-user`, {
          params: {
            id,
          },
        });
        setUserInfo(res.data);
        const club = [];
        res.data.forEach((el) => {
          club.push(el.clubInfo[0]);
        });
        setFavClub(club);
      } catch (e) {
        throw new Error(e);
      }
    };
    getUser();
  }, []);

  console.log(favClub);

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <Link to="/create-user">
          <button type="button" className="btn btn-success">
            Add User
          </button>
        </Link>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Avatar</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Favorite Club</th>
              <th scope="col">Nation</th>
            </tr>
          </thead>
          {userInfo?.map((el) => (
            <tbody key={el.name}>
              <tr
                className="onClick"
                onClick={() => {
                  history.push(`/view-all-user/${el._id}`);
                }}
              >
                <td>{el?.name}</td>
                <td>
                  <img src={`http://localhost:3080${el?.avatar}`} alt="" width="120px" height="90px" />
                </td>
                <td>{el?.address}</td>
                <td>{el?.mobile}</td>
                <td>{el?.email}</td>
                <td>
                  <img src={`http://localhost:3080${el.clubInfo[0]?.logo}`} alt="" width="120px" height="90px" />
                </td>
                <td>
                  <img src={`http://localhost:3080${el?.nation_url}`} alt="" width="120px" height="90px" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
