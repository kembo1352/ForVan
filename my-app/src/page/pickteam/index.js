import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jwt-decode";
import styles from "../../styles/Home.module.css";
import ViewAndPoint from "../../components/pitchView/viewAndPoint";
import UserInfo from "../../components/userinfo/userInfoPickteam/userInfoPickteam";
import Schedule from "../../components/schedule/schedule";
import PageLayOut from "../../components/pageLayOut/pageLayOut";

export default function Pickteam() {
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

  const token = localStorage.getItem("token");
  const user = jwt(token);
  const id = user.user._id;

  const [favClub, setFavClub] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [userPoint, setUserPoint] = useState([]);
  const [GKs, setGKs] = useState([null]);
  const [DFs, setDFs] = useState([null, null, null, null]);
  const [MDs, setMDs] = useState([null, null, null]);
  const [FWs, setFWs] = useState([null, null, null]);
  const [players, setPlayers] = useState([intPlayer]);
  const [oldRank, setOldRank] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3080/api/user/userinfo`, {
          params: {
            id,
          },
        });
        setCurrentUser(res.data);
        const { clubInfo } = res.data[0];
        setFavClub(res.data[0].clubInfo);
        const { userInfo } = res.data[0];
        setUserPoint([userInfo]);
        setOldRank(res.data[0].userInfo.rank);
      } catch (e) {
        throw new Error(e);
      }
    };
    getUser();
  }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const playerArr = GKs.concat(DFs, MDs, FWs);
  //       console.log(playerArr);
  //       const playerID = playerArr.map((el) => el._id);
  //       console.log(playerID);
  //       const post_newPlayerID = { data: playerID, userId: id, newPlayer: playerArr };
  //       const res = await axios.get(`http://localhost:3080/api/user/userinfo`, {
  //         params: {
  //           id,
  //         },
  //       });
  //       setCurrentUser(res.data);
  //       const { clubInfo } = res.data[0];
  //       setFavClub(res.data[0].clubInfo);
  //       const { userInfo } = res.data[0];
  //       setUserPoint([userInfo]);
  //       setOldRank(res.data[0].userInfo.rank);
  //     } catch (e) {
  //       throw new Error(e);
  //     }
  //   };
  //   getUser();
  // }, []);

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
        const { playerInfo } = res.data[0];
        // console.log(res.data);
        if (res.data && res.data.length > 0) {
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

  console.log(players[0].playerInfo);

  return (
    <>
      <PageLayOut>
        <div className={styles.PitchAndSearch}>
          <div className={styles.pitchAndView}>
            <ViewAndPoint
              currentUser={currentUser}
              userPoint={userPoint}
              GKs={GKs}
              DFs={DFs}
              MDs={MDs}
              FWs={FWs}
              players={players}
            />
            <Schedule />
          </div>
          <div className={styles.searchAndList}>
            <UserInfo currentUser={currentUser} oldRank={oldRank} userPoint={userPoint} favClub={favClub} />
          </div>
        </div>
      </PageLayOut>
    </>
  );
}
