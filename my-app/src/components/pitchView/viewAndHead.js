import React from "react";
import ViewHead from "./viewHead/viewHead";
import PitchView from "./view/pitchView";

export default function ViewAndHead(props) {
  const {
    GKs,
    DFs,
    MDs,
    FWs,
    handleOpenPlayerModal,
    selectedPlayer,
    deleteDFPlayer,
    deleteGKPlayer,
    deleteMDPlayer,
    deleteFWPlayer,
    getNewPlayer,
  } = props;

  // console.log(GKs)
  // console.log(DFs)

  return (
    <>
      <ViewHead />
      <PitchView
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
    </>
  );
}
