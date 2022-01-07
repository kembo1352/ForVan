import React from "react";
import styles from "./schedule.module.css";

export default function MatchResult() {
  return (
    <>
      <div>
        <div className={styles.scheduleTimeContainer2}>
          <p1 className={styles.scheduleTime2}>Sunday 23 May 2021</p1>
        </div>
      </div>
      <div className={styles.resultContainer}>
        <div className={styles.resultContainer}>
          <div className={styles.team1}>
            <p1>TH FC</p1>
          </div>
          <div className={styles.team1LogoContainer}>
            <img className={styles.team1Logo} alt="" src="/logo_clb/thanhhoa.png" />
          </div>
          <div className={styles.team1ResultContainer}>
            <div className={styles.team1Result}>3</div>
          </div>
          <p1>-</p1>
          <div className={styles.team2ResultContainer}>
            <div className={styles.team2Result}>1</div>
          </div>
          <div className={styles.team2LogoContainer}>
            <img className={styles.team2Logo} alt="" src="/logo_clb/thanquangninh.png" />
          </div>
          <div className={styles.team2}>
            <p1>TQN</p1>
          </div>
        </div>
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.resultContainer}>
        <div className={styles.team1}>
          <p1>ND FC</p1>
        </div>
        <div className={styles.team1LogoContainer}>
          <img className={styles.team1Logo} alt="" src="/logo_clb/namdinh.png" />
        </div>
        <div className={styles.team1ResultContainer}>
          <div className={styles.team1Result}>1</div>
        </div>
        <p1>-</p1>
        <div className={styles.team2ResultContainer}>
          <div className={styles.team2Result}>0</div>
        </div>
        <div className={styles.team2LogoContainer}>
          <img className={styles.team2Logo} alt="" src="/logo_clb/binhduong.png" />
        </div>
        <div className={styles.team2}>
          <p1>BD FC</p1>
        </div>
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.resultContainer}>
        <div className={styles.team1}>
          <p1>SG FC</p1>
        </div>
        <div className={styles.team1LogoContainer}>
          <img className={styles.team1Logo} alt="" src="/logo_clb/saigon.png" />
        </div>
        <div className={styles.team1ResultContainer}>
          <div className={styles.team1Result}>0</div>
        </div>
        <p1>-</p1>
        <div className={styles.team2ResultContainer}>
          <div className={styles.team2Result}>2</div>
        </div>
        <div className={styles.team2LogoContainer}>
          <img className={styles.team2Logo} alt="" src="/logo_clb/gialai.png" />
        </div>
        <div className={styles.team2}>
          <p1>HAGL</p1>
        </div>
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.resultContainer}>
        <div className={styles.team1}>
          <p1>HN FC</p1>
        </div>
        <div className={styles.team1LogoContainer}>
          <img className={styles.team1Logo} alt="" src="/logo_clb/hanoi.png" />
        </div>
        <div className={styles.team1ResultContainer}>
          <div className={styles.team1Result}>2</div>
        </div>
        <p1>-</p1>
        <div className={styles.team2ResultContainer}>
          <div className={styles.team2Result}>1</div>
        </div>
        <div className={styles.team2LogoContainer}>
          <img className={styles.team2Logo} alt="" src="/logo_clb/hatinh.png" />
        </div>
        <div className={styles.team2}>
          <p1>HT FC</p1>
        </div>
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.resultContainer}>
        <div className={styles.team1}>
          <p1>DN FC</p1>
        </div>
        <div className={styles.team1LogoContainer}>
          <img className={styles.team1Logo} alt="" src="/logo_clb/danang.png" />
        </div>
        <div className={styles.team1ResultContainer}>
          <div className={styles.team1Result}>1</div>
        </div>
        <p1>-</p1>
        <div className={styles.team2ResultContainer}>
          <div className={styles.team2Result}>1</div>
        </div>
        <div className={styles.team2LogoContainer}>
          <img className={styles.team2Logo} alt="" src="/logo_clb/binhdinh.png" />
        </div>
        <div className={styles.team2}>
          <p1>BD FC</p1>
        </div>
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.resultContainer}>
        <div className={styles.team1}>
          <p1>HP FC</p1>
        </div>
        <div className={styles.team1LogoContainer}>
          <img className={styles.team1Logo} alt="" src="/logo_clb/haiphong.png" />
        </div>
        <div className={styles.team1ResultContainer}>
          <div className={styles.team1Result}>0</div>
        </div>
        <p1>-</p1>
        <div className={styles.team2ResultContainer}>
          <div className={styles.team2Result}>0</div>
        </div>
        <div className={styles.team2LogoContainer}>
          <img className={styles.team2Logo} alt="" src="/logo_clb/viettel.png" />
        </div>
        <div className={styles.team2}>
          <p1>VT FC</p1>
        </div>
      </div>
      <hr className={styles.lineBreak} />
      <div className={styles.resultContainer}>
        <div className={styles.team1}>
          <p1>SLNA FC</p1>
        </div>
        <div className={styles.team1LogoContainer}>
          <img className={styles.team1Logo} alt="" src="/logo_clb/songlam.png" />
        </div>
        <div className={styles.team1ResultContainer}>
          <div className={styles.team1Result}>3</div>
        </div>
        <p1>-</p1>
        <div className={styles.team2ResultContainer}>
          <div className={styles.team2Result}>2</div>
        </div>
        <div className={styles.team2LogoContainer}>
          <img className={styles.team2Logo} alt="" src="/logo_clb/hochiminh.png" />
        </div>
        <div className={styles.team2}>
          <p1>HCM FC</p1>
        </div>
      </div>
    </>
  );
}
