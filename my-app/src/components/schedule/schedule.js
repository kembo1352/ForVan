import React, { useState } from "react";
import styles from "./schedule.module.css";
import MatchResult from "./matchResult";
import MatchResultNext from "./matchResultNext";
import MatchResultPrvevious from "./matchResultPrevious";

export default function Schedule() {
  const [changeSchedule, setChangeSchedule] = useState("FisrtSchedule");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.scheduleImgContainer}>
          <img className={styles.scheduleImg} alt="" src="logo_clb/vleague.svg" />
          <span className={styles.spanLogo}>Fixtures</span>
        </div>
        <div className={styles.scheduleTimeContainer}>
          <p1 className={styles.scheduleTime}>Gameweek 38- Sun 23 May 20:30</p1>
        </div>
        <div className={styles.line3TextContainer}>
          <p1 className={styles.line3Text}>All times are shown in your </p1>
          <span className={styles.spanLine3}>local time</span>
        </div>
        <div>
          {changeSchedule === "FisrtSchedule" && <MatchResult />}
          {changeSchedule === "NextSchedule" && <MatchResultNext />}
          {changeSchedule === "PreviousSchedule" && <MatchResultPrvevious />}
        </div>
        <hr className={styles.lineBreak} />
        <div>
          <div className={styles.resultContainer}>
            <div className={styles.next}>
              <input
                onClick={() => setChangeSchedule("PreviousSchedule")}
                type="image"
                src="/icon/previous.svg"
                alt=""
              />
            </div>
            <div className={styles.next}>
              <input onClick={() => setChangeSchedule("FisrtSchedule")} type="image" src="/icon/current.svg" alt="" />
            </div>
            <div className={styles.next}>
              <input onClick={() => setChangeSchedule("NextSchedule")} type="image" src="/icon/next.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
