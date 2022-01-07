import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./pitchView.module.css";
import MyVerticallyCenteredModal from "./playerInfo/playerInfo";

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

export default function PitchView(props) {
  const { GKs, DFs, MDs, FWs, deleteDFPlayer, deleteGKPlayer, deleteMDPlayer, deleteFWPlayer, getNewPlayer } = props;
  const [modalShow, setModalShow] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(intPlayer);

  const handleOpenPlayerModal = (player) => {
    setSelectedPlayer(player);
    setModalShow(true);
  };

  return (
    <>
      <div className={styles.diagram}>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonLine}>
            {GKs?.map((GK) =>
              GK ? (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input
                      className={styles.swapButton}
                      onClick={() => deleteGKPlayer(GKs, GK)}
                      type="image"
                      src="/icon/close.svg"
                      alt="player"
                    />
                    <input type="image" alt="" onClick={() => handleOpenPlayerModal(GK)} src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src={`http://localhost:3080${GK.kit}`} />
                  <p className={styles.playerName} variant="primary">
                    {GK?.short_name}
                  </p>
                </div>
              ) : (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input className={styles.swapButton} type="image" alt="" src="/icon/close.svg" />
                    <input type="image" alt="" src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src="/jersey/noneplayer.jpg" />
                  <p className={styles.playerName} variant="primary">
                    None
                  </p>
                </div>
              ),
            )}
          </div>
          <div className={styles.buttonLine}>
            {DFs?.map((DF) =>
              DF ? (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input
                      className={styles.swapButton}
                      onClick={() => deleteDFPlayer(DFs, DF)}
                      type="image"
                      alt=""
                      src="/icon/close.svg"
                    />
                    <input type="image" alt="" onClick={() => handleOpenPlayerModal(DF)} src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src={`http://localhost:3080${DF?.kit}`} />
                  <p className={styles.playerName} variant="primary">
                    {DF?.short_name}
                  </p>
                </div>
              ) : (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input className={styles.swapButton} alt="" type="image" src="/icon/close.svg" />
                    <input type="image" alt="" src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src="/jersey/noneplayer.jpg" />
                  <p className={styles.playerName} variant="primary">
                    None
                  </p>
                </div>
              ),
            )}
          </div>
          <div className={styles.buttonLine}>
            {MDs?.map((MD) =>
              MD ? (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input
                      className={styles.swapButton}
                      onClick={() => deleteMDPlayer(MDs, MD)}
                      type="image"
                      alt=""
                      src="/icon/close.svg"
                    />
                    <input type="image" onClick={() => handleOpenPlayerModal(MD)} alt="" src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src={`http://localhost:3080${MD?.kit}`} />
                  <p className={styles.playerName} variant="primary">
                    {MD?.short_name}
                  </p>
                </div>
              ) : (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input className={styles.swapButton} alt="" type="image" src="/icon/close.svg" />
                    <input type="image" alt="" src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src="/jersey/noneplayer.jpg" />
                  <p className={styles.playerName} variant="primary">
                    None
                  </p>
                </div>
              ),
            )}
          </div>
          <div className={styles.buttonLine}>
            {FWs?.map((FW) =>
              FW ? (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input
                      className={styles.swapButton}
                      onClick={() => deleteFWPlayer(FWs, FW)}
                      type="image"
                      alt=""
                      src="/icon/close.svg"
                    />
                    <input type="image" onClick={() => handleOpenPlayerModal(FW)} alt="" src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src={`http://localhost:3080${FW?.kit}`} />
                  <p className={styles.playerName} variant="primary">
                    {FW?.short_name}
                  </p>
                </div>
              ) : (
                <div className={styles.buttonLineContainer}>
                  <div className={styles.playerOptions}>
                    <input className={styles.swapButton} alt="" type="image" src="/icon/close.svg" />
                    <input type="image" alt="" src="/icon/info-lg.svg" />
                  </div>
                  <img className={styles.xamloz} alt="" src="/jersey/noneplayer.jpg" />
                  <p className={styles.playerName} variant="primary">
                    None
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div className={styles.saveButton}>
        <Button variant="primary" size="lg" onClick={getNewPlayer}>
          Save Formation
        </Button>
      </div>
      <MyVerticallyCenteredModal onHide={() => setModalShow(false)} player={selectedPlayer} show={modalShow} />
    </>
  );
}
