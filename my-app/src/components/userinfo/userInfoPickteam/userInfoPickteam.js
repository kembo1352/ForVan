import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "../userinfo.module.css";

export default function UserInfo(props) {
  const { currentUser, userPoint, favClub, oldRank } = props;
  const money = useSelector((state) => state.countMoney);
  // const { point } = userPoint[0];
  const totalPoint = parseInt(userPoint[0]?.point, 10) + parseInt(userPoint[0]?.formation_value, 10);
  console.log(totalPoint);

  return (
    <>
      <div className={styles.contianer}>
        <div className={styles.firstLineTextContainer}>
          {currentUser?.map((el) => (
            <>
              <Link to="/profile">
                <img
                  className="rounded-circle p-1"
                  width="80"
                  height="80"
                  key={el.avatar}
                  src={`http://localhost:3080${el.avatar}`}
                  alt=""
                />
                <span key={el?.lastName} className={styles.firstLineText}>
                  {el?.name}
                </span>
              </Link>
            </>
          ))}
        </div>
        <div className={styles.containerBody}>
          <div>
            <div className={styles.statusBox}>
              <div className={styles.userNameContainer}>
                {currentUser?.map((el) => (
                  <p1 key={el?.name} className={styles.textline1}>
                    {el?.firstName} {el?.lastName}
                  </p1>
                ))}
              </div>
              <div className={styles.imgBoxContainer}>
                <img className={styles.imgBox} alt="" src="/VN/VN.png" />
              </div>
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div>
            <div className={styles.textline2Container}>
              <h3 className={styles.textline2}>Points/Rankings</h3>
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div>
            <div className={styles.statusBox}>
              <div className={styles.textline3Container}>
                <p1 className={styles.textline3}>Total Point:</p1>
              </div>
              <div className={styles.textline3_2Container}>
                <p1 className={styles.textline3_2}>{totalPoint}</p1>
              </div>
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div>
            <div className={styles.statusBox}>
              <div className={styles.textline3Container}>
                <p1 className={styles.textline3}>Rank:</p1>
              </div>
              <div className={styles.textline3_2Container}>
                <p1 className={styles.textline3_2}>{oldRank}</p1>
              </div>
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div>
            <div className={styles.statusBox}>
              <div className={styles.textline3Container}>
                <p1 className={styles.textline3}>Total Users:</p1>
              </div>
              <div className={styles.textline3_2Container}>
                <p1 className={styles.textline3_2}>12</p1>
              </div>
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div>
            <div className={styles.statusBox}>
              <div className={styles.textline3Container}>
                <p1 className={styles.textline3}>Gameweek Points:</p1>
              </div>
              <div className={styles.textline3_2Container}>
                <p1 className={styles.textline3_2}>{totalPoint}</p1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerBodyExtra} />
        <div className={styles.containerBody}>
          <div>
            <div className={styles.statusBox}>
              <div className={styles.userNameContainer}>
                <p1 className={styles.textline1}>Favorite Club</p1>
              </div>
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div>
            <div className={styles.statusBox}>
              <div className={styles.box2logoContainer}>
                {favClub?.map((el) => (
                  <img
                    width="50px"
                    height="200px"
                    key={el.logo}
                    className={styles.box2logo}
                    alt=""
                    src={`http://localhost:3080${el.logo}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className={styles.lineBreak} />
          <div>
            <div className={styles.box2Container}>
              <div className={styles.box2textContainer}>
                <a className={styles.link} alt="" href="https://hanoifc.com.vn/">
                  <p1 className={styles.box2text}>View Club Page</p1>
                </a>
                <a className={styles.link} alt="" href="https://hanoifc.com.vn/">
                  <img src="/icon/arrow-right.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerBodyExtra} />
      </div>
    </>
  );
}
