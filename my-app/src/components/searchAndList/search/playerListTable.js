import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import styles from "./search.module.css";
import MyVerticallyCenteredModalSearchBox from "./playerInfoSearchBox";

const intPlayer = {
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

export default function PlayerListTable(props) {
  const [selectedPlayerSearchBox, setSelectedPlayerSearchBox] = useState(intPlayer);
  const [modalShow, setModalShow] = useState(false);

  const { fullPlayers, addPlayer } = props;

  console.log(fullPlayers);

  const handleOpenPlayerModal = (fullPlayer) => {
    setSelectedPlayerSearchBox(fullPlayer);
    setModalShow(true);
  };

  return (
    <>
      <Table role="grid" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Info</th>
            <th>Position</th>
            <th>Name</th>
            <th>Club</th>
            <th>Value</th>
          </tr>
        </thead>
        {fullPlayers?.map((fullPlayer) => (
          <tbody className={styles.pointer} key={fullPlayers.name}>
            <tr>
              <td>
                <input type="image" alt="" src="/icon/info-lg.svg" onClick={() => handleOpenPlayerModal(fullPlayer)} />
              </td>
              <td role="gridcell" onClick={() => addPlayer(fullPlayer)}>
                {fullPlayer.position}
              </td>
              <td role="gridcell" onClick={() => addPlayer(fullPlayer)}>
                {fullPlayer.name}
              </td>
              <td role="gridcell" onClick={() => addPlayer(fullPlayer)}>
                {fullPlayer.club}
              </td>
              <td role="gridcell" onClick={() => addPlayer(fullPlayer)}>
                {fullPlayer.value}
              </td>
            </tr>
          </tbody>
        ))}
        <MyVerticallyCenteredModalSearchBox
          onHide={() => setModalShow(false)}
          player={selectedPlayerSearchBox}
          show={modalShow}
        />
      </Table>
    </>
  );
}
