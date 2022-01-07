import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import NavBarAdmin from "../../../../components/sideMenuAdmin/NavBar";
import "./showUser.css";

export default function ShowUser() {
  const [selectedUser, setSelectedUser] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getSelectedUser = async () => {
      try {
        const res = await axios.get("http://localhost:3080/api/user/each-user", {
          params: {
            id,
          },
        });
        setSelectedUser(res.data);
      } catch (e) {
        throw new Error(e);
      }
    };
    getSelectedUser();
  }, []);

  console.log(selectedUser);

  const handleOnClickDeleteUser = (e) => {
    console.log("Good Bye Bitch");
    const deleteUserID = {
      userID: id,
    };
    console.log(deleteUserID);
    axios
      .post("http://localhost:3080/api/user/delete-user", deleteUserID)
      .then((res) => console.log(res), history.push("/view-all-user"));
  };

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">User Detail</h3>
          </div>
          <div className="panel-body">
            <div className="buttonContainer">
              <ul className="button">
                <li className="li">
                  <input
                    type="button"
                    onClick={() => {
                      history.push(`/edit-user/${id}`);
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
                    onClick={handleOnClickDeleteUser}
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
              <div className="status">{selectedUser[0]?.name}</div>
              <hr className="hr" />
            </div>
            <div>
              <div className="label">Avatar:</div>
              <img src={`http://localhost:3080${selectedUser[0]?.avatar}`} width="120px" height="80px" alt="" />
              <hr className="hr" />
            </div>
            <div>
              <label className="label">Last Name:</label>
              <div className="status">{selectedUser[0]?.lastName}</div>
              <hr className="hr" />
            </div>
            <div>
              <label className="label">First Name:</label>
              <div className="status">{selectedUser[0]?.firstName}</div>
              <hr className="hr" />
            </div>
            <div>
              <label className="label">Mobile:</label>
              <div className="status">{selectedUser[0]?.mobile}</div>
              <hr className="hr" />
            </div>
            <div>
              <label className="label">Address:</label>
              <div className="status">{selectedUser[0]?.address}</div>
              <hr className="hr" />
            </div>
            <div>
              <label className="label">Email:</label>
              <div className="status">{selectedUser[0]?.email}</div>
              <hr className="hr" />
            </div>
            <div>
              <div className="label">Favorite Club:</div>
              <img src={selectedUser[0]?.clubInfo[0]?.logo} width="120px" height="80px" alt="" />
              <hr className="hr" />
            </div>
            <div>
              <div className="label">Nation:</div>
              <img src={`http://localhost:3080${selectedUser[0]?.nation_url}`} width="120px" height="80px" alt="" />
              <hr className="hr" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
