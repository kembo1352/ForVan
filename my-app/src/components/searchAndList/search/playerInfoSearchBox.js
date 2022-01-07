import { Modal, Button, Image } from "react-bootstrap";
import React from "react";
import styles from "./search.module.css";

export default function MyVerticallyCenteredModalSearchBox(props) {
  const { player, onHide } = props;

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Image className={styles.img} src={`http://localhost:3080${player?.avatar}`} roundedCircle />
          <span className={styles.spanHeader}>{player?.name}</span>
          <span>({player?.position})</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton>
        <div>
          <div className={styles.infoContainer}>
            <div className={styles.infoDetails}>
              <div className={styles.nation}>
                <p>Nation:</p>
              </div>
              <div className={styles.nationImageContainer}>
                <img className={styles.nationImage} src={`http://localhost:3080${player?.nation_url}`} alt="" />
              </div>
            </div>
            <div className={styles.infoDetails}>
              <div className={styles.nation}>
                <p>Club:</p>
              </div>
              <div>
                <img className={styles.clubImage} src={player?.club_url} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoDetails}>
              <div>Shirt Number:</div>
              <div>{player?.shirt_number}</div>
            </div>
            <div className={styles.infoDetails}>
              <div>Strong Foot:</div>
              <div>{player?.strong_foot}</div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoDetails}>
              <div>Point:</div>
              <div>{player?.point}</div>
            </div>
            <div className={styles.infoDetails}>
              <div>Value:</div>
              <div>{player?.value}</div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoDetails}>
              <div>Age:</div>
              <div>{player?.age}</div>
            </div>
            <div className={styles.infoDetails}>
              <div>Performance:</div>
              <div>{player?.performance}</div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoDetails}>
              <div>Goal:</div>
              <div>{player?.goal}</div>
            </div>
            <div className={styles.infoDetails}>
              <div>Assist:</div>
              <div>{player?.assist}</div>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
