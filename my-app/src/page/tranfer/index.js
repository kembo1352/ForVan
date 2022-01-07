import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import jwt from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/Home.module.css";
import SearchAndList from "../../components/searchAndList/searchAndList";
import ViewAndHead from "../../components/pitchView/viewAndHead";
import Schedule from "../../components/schedule/schedule";
import PageLayOut from "../../components/pageLayOut/pageLayOut";
import { deletePlayer, addPlayer } from "../../helpers/helper";
import { sellPlayer, buyPlayer } from "../../actions";

export default function Tranfer() {
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
    kit: "",
  };

  const intFullPLayer = {
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
    kit: "",
  };

  const dispatch = useDispatch();
  const money = useSelector((state) => state.countMoney);

  const [favClub, setFavClub] = useState();
  const [userInfo, setUserInfo] = useState();
  const [show, setShow] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [alertFullPlayer, setAlertFullPlayer] = useState(false);
  const [alerOutOfBudget, setAlertOutOfBudget] = useState(false);
  const [GKs, setGKs] = useState([null]);
  const [DFs, setDFs] = useState([null, null, null, null]);
  const [MDs, setMDs] = useState([null, null, null]);
  const [FWs, setFWs] = useState([null, null, null]);
  const [players, setPlayers] = useState([intPlayer]);
  const [fullPlayer, setFullPlayer] = useState([intFullPLayer]);

  const token = localStorage.getItem("token");
  const user = jwt(token);
  const id = user.user._id;

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/user/userinfo`, {
          params: {
            id,
          },
        });
        const selectedUser = res.data;
        setUserInfo(res.data);
        const { clubInfo } = res.data[0];
        setFavClub(clubInfo);
      } catch (e) {
        throw new Error(e);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer${window.localStorage.getItem("token")}`,
      },
    };
    const getData = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/userformation/userformation`, {
          params: {
            id,
          },
          config,
        });
        setPlayers(res.data);
        // console.log(res.data);
        if (res.data && res.data.length > 0) {
          const { playerInfo } = res.data[0];
          const gk = playerInfo.filter((player) => player.position === "GK");
          setGKs(gk);

          const df = playerInfo.filter((player) => player.position === "DF");
          setDFs(df);

          const md = playerInfo.filter((player) => player.position === "MD");
          setMDs(md);

          const fw = playerInfo.filter((player) => player.position === "FW");
          setFWs(fw);
        }
      } catch (e) {
        throw new Error(e);
      }
    };
    getData();
  }, []);

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

  const deleteGKPlayer = (playerList, player) => {
    const newPlayerList = deletePlayer(playerList, player);
    const playerValue = parseInt(player.value, 10);
    dispatch(sellPlayer(playerValue));
    setGKs([...newPlayerList]);
  };
  const deleteDFPlayer = (playerList, player) => {
    const newPlayerList = deletePlayer(playerList, player);
    const playerValue = parseInt(player.value, 10);
    dispatch(sellPlayer(playerValue));
    setDFs([...newPlayerList]);
  };

  const deleteMDPlayer = (playerList, player) => {
    const newPlayerList = deletePlayer(playerList, player);
    const playerValue = parseInt(player.value, 10);
    dispatch(sellPlayer(playerValue));
    setMDs([...newPlayerList]);
  };

  const deleteFWPlayer = (playerList, player) => {
    const newPlayerList = deletePlayer(playerList, player);
    const playerValue = parseInt(player.value, 10);
    dispatch(sellPlayer(playerValue));
    setFWs([...newPlayerList]);
  };

  const handleSuccessAlert = () => setSuccessShow(true);
  const handleCloseSuccessAlert = () => setSuccessShow(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowAlertFullPlayer = () => setAlertFullPlayer(true);
  const handleCloseAlertFullPlayer = () => setAlertFullPlayer(false);
  const handleAlertOutOfBudget = () => setAlertOutOfBudget(true);
  const handleCloseAlertOutOfBudget = () => setAlertOutOfBudget(false);

  const replacePlayer = (player) => {
    const isDFAvailable = DFs.some((df) => df === null);
    const isGKAvailable = GKs.some((gk) => gk === null);
    const isMDAvailable = MDs.some((md) => md === null);
    const isFWAvailable = FWs.some((fw) => fw === null);
    if (player.position === "GK") {
      const isGKExist = GKs.some((gk) => gk && gk.name === player.name);
      const playerValue = parseInt(player.value, 10);
      const moneyDiffirence = money - playerValue;
      console.log(playerValue);
      if (isGKAvailable) {
        if (!isGKExist && moneyDiffirence >= 0) {
          dispatch(buyPlayer(playerValue));
          const newArr = addPlayer(GKs, player);
          setGKs([...newArr]);
        }
        if (isGKExist) {
          handleShow();
          return;
        }
        if (moneyDiffirence < 0) {
          handleAlertOutOfBudget();
          return;
        }
      }
      if (!isGKAvailable) {
        handleShowAlertFullPlayer();
      }
    }
    if (player.position === "DF") {
      const isDFExist = DFs.some((df) => df && df.name === player.name);
      const playerValue = parseInt(player.value, 10);
      const moneyDiffirence = money - playerValue;
      console.log(playerValue);
      if (isDFAvailable) {
        if (!isDFExist && moneyDiffirence >= 0) {
          dispatch(buyPlayer(playerValue));
          const newArr = addPlayer(DFs, player);
          setDFs([...newArr]);
        }
        if (isDFExist) {
          handleShow();
          return;
        }
        if (moneyDiffirence < 0) {
          handleAlertOutOfBudget();
          return;
        }
      }
      if (!isDFAvailable) {
        handleShowAlertFullPlayer();
      }
    }
    if (player.position === "MD") {
      const isMDExist = MDs.some((md) => md && md.name === player.name);
      const playerValue = parseInt(player.value, 10);
      const moneyDiffirence = money - playerValue;
      if (isMDAvailable) {
        if (!isMDExist && moneyDiffirence >= 0) {
          dispatch(buyPlayer(playerValue));
          const newArr = addPlayer(MDs, player);
          setMDs([...newArr]);
        }
        if (isMDExist) {
          handleShow();
          return;
        }
        if (moneyDiffirence < 0) {
          handleAlertOutOfBudget();
          return;
        }
      }
      if (!isMDAvailable) {
        handleShowAlertFullPlayer();
      }
    }
    if (player.position === "FW") {
      const isFWExist = FWs.some((fw) => fw && fw.name === player.name);
      const playerValue = parseInt(player.value, 10);
      const moneyDiffirence = money - playerValue;
      if (isFWAvailable) {
        if (!isFWExist && moneyDiffirence >= 0) {
          dispatch(buyPlayer(playerValue));
          const newArr = addPlayer(FWs, player);
          setFWs([...newArr]);
        }
        if (isFWExist) {
          handleShow();
          return;
        }
        if (moneyDiffirence < 0) {
          handleAlertOutOfBudget();
          return;
        }
      }
      if (!isFWAvailable) {
        handleShowAlertFullPlayer();
      }
    }
  };

  const getNewPlayer = (e) => {
    const playerArr = GKs.concat(DFs, MDs, FWs);
    console.log(playerArr);
    const playerID = playerArr.map((el) => el._id);
    console.log(playerID);
    const post_newPlayerID = { data: playerID, userId: id, newPlayer: playerArr };
    handleSuccessAlert();
    e.preventDefault();
    axios
      .put("http://localhost:3080/api/user/saveformation", post_newPlayerID)
      .then((response) => console.log(response));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>WARNING</Modal.Title>
        </Modal.Header>
        <Modal.Body>Player already existed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={successShow} onHide={handleCloseSuccessAlert}>
        <Modal.Header closeButton>
          <Modal.Title>CONGRATULATION !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your new formation has been saved</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={alertFullPlayer} onHide={handleCloseAlertFullPlayer}>
        <Modal.Header closeButton>
          <Modal.Title>WARNING</Modal.Title>
        </Modal.Header>
        <Modal.Body>There is enough player in this position. Please sell one first</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlertFullPlayer}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={alerOutOfBudget} onHide={handleCloseAlertOutOfBudget}>
        <Modal.Header closeButton>
          <Modal.Title>WARNING</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are out of budget. Please choose players with lower value</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlertOutOfBudget}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <PageLayOut>
        <div className={styles.PitchAndSearch}>
          <div className={styles.pitchAndView}>
            <ViewAndHead
              GKs={GKs}
              DFs={DFs}
              MDs={MDs}
              FWs={FWs}
              deleteGKPlayer={deleteGKPlayer}
              deleteDFPlayer={deleteDFPlayer}
              deleteMDPlayer={deleteMDPlayer}
              deleteFWPlayer={deleteFWPlayer}
              getNewPlayer={getNewPlayer}
            />
            <Schedule />
          </div>
          <div className={styles.searchAndList}>
            <SearchAndList
              fullPlayer={fullPlayer}
              addPlayer={replacePlayer}
              favClub={favClub}
              userInfo={userInfo}
              GKs={GKs}
              DFs={DFs}
              MDs={MDs}
              FWs={FWs}
            />
          </div>
        </div>
      </PageLayOut>
    </>
  );
}
