import React, { useState, useCallback, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol } from "mdbreact";
import { Form } from "react-bootstrap";
import styles from "./search.module.css";
import PlayerListTable from "./playerListTable";
import Pagination from "./Pagination";

export default function SearchBox(props) {
  const { fullPlayers, addPlayer, GKs, DFs, MDs, FWs } = props;

  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage, setPlayerPerPage] = useState(5);
  const [resultPlayerList, setResultPlayerList] = useState([]);
  const [totalItem, setTotalItem] = useState(fullPlayers.length);

  const indexOfLastPlayer = currentPage * playerPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playerPerPage;
  const currentPlayer = resultPlayerList.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  function search(players, query = "") {
    return players.filter(
      (player) =>
        player.name.toLowerCase().indexOf(query?.toLowerCase()) > -1 ||
        player.value.toLowerCase().indexOf(query?.toLowerCase()) > -1 ||
        player.club.toLowerCase().indexOf(query?.toLowerCase()) > -1 ||
        player.point.toLowerCase().indexOf(query?.toLowerCase()) > -1 ||
        player.position.toLowerCase().indexOf(query?.toLowerCase()) > -1,
    );
  }

  useEffect(() => {
    const result = search(fullPlayers, searchText);
    if (result) {
      setResultPlayerList(result);
      setTotalItem(result.length);
    }
    // console.log(result);
  }, [searchText, fullPlayers]);

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className={styles.searchTextContainer}>
        <p className={styles.sortText}>Find your desire player</p>
        <MDBCol className={styles.search}>
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={onChangeHandler}
          />
        </MDBCol>
      </div>
      <div>
        <PlayerListTable fullPlayers={currentPlayer} addPlayer={addPlayer} GKs={GKs} DFs={DFs} MDs={MDs} FWs={FWs} />
        <Pagination playerPerPage={playerPerPage} totalPlayer={totalItem} paginate={paginate} />
      </div>
    </>
  );
}
