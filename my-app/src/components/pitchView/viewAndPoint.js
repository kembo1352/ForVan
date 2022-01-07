import React from "react";
import PitchView from "./view/pitchView";
import PointAndStatus from "./pointAndStatus/pointAndStatus";

export default function ViewAndPoint(props) {
  const { currentUser, GKs, DFs, MDs, FWs, userPoint } = props;

  return (
    <>
      <PointAndStatus currentUser={currentUser} userPoint={userPoint} />
      <PitchView GKs={GKs} DFs={DFs} MDs={MDs} FWs={FWs} />
    </>
  );
}
