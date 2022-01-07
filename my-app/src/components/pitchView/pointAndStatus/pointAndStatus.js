import React, { useState } from "react";
import styles from "./pointAndStatus.module.css";

export default function PointAndStatus(props) {
  const { currentUser, userPoint } = props;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.pointHeader}>
          {currentUser?.map((el) => (
            <h3 key={el?.name} className={styles.pointHeaderText}>
              Point - {el?.name}
            </h3>
          ))}
        </div>
        <hr className={styles.lineBreak} />
        <div className={styles.h5}>
          <h5 className={styles.gameWeek}>Gameweek 38</h5>
        </div>
        <hr className={styles.lineBreak} />
        <div className={styles.statusBoxContainer}>
          <div className={styles.item1}>
            <h6 className={styles.box1line1}>Player Point</h6>
            {userPoint?.map((el) => (
              <h4 key={el?.point} className={styles.box1line2}>
                {el?.point}
              </h4>
            ))}
          </div>
          <div className={styles.item1}>
            <h6 className={styles.box1line1}>Formation Value</h6>
            {userPoint?.map((el) => (
              <h4 key={el?.formation_value} className={styles.box1line2}>
                {el?.formation_value} Mill
              </h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
