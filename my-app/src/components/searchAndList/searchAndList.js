import React from "react";
import UserInfoTranfer from "../userinfo/userInfoTranfer/userInfoTranfer";
import SearchBox from "./search/search";
import "./searchAndList.css";

export default function SearchAndList(props) {
  const { fullPlayer, addPlayer, GKs, DFs, MDs, FWs, userInfo, favClub } = props;

  return (
    <>
      <div className="container">
        <UserInfoTranfer userInfo={userInfo} favClub={favClub} className="infocontainer" />
        <SearchBox
          className="searchcontainer"
          fullPlayers={fullPlayer}
          addPlayer={addPlayer}
          GKs={GKs}
          DFs={DFs}
          MDs={MDs}
          FWs={FWs}
        />
      </div>
    </>
  );
}
