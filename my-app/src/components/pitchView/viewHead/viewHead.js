import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../view/pitchView.module.css";
import { sellPlayer, buyPlayer } from "../../../actions";

export default function ViewHead() {
  const money = useSelector((state) => state.countMoney);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={styles.font}>Transfer</p>
        <span className={styles.font}>Budget: {money}</span>
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.font2}>Select player for your team</div>
      <hr className={styles.lineBreak} />
      <p className={styles.schedulebox}>
        Next round start: <span className={styles.nextroundtime}> 07/05 17:00 </span>
      </p>
    </div>
  );
}
