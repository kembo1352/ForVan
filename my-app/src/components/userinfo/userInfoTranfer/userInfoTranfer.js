import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "../userinfo.module.css";

export default function UserInfoTranfer(props) {
  const { userInfo, favClub } = props;

  return (
    <>
      <div className={styles.contianer}>
        <div className={styles.firstLineTextContainer}>
          {userInfo?.map((el) => (
            <Link key={el._id} to="/profile">
              <img
                className="rounded-circle p-1"
                width="80"
                height="80"
                key={el.avatar}
                src={`http://localhost:3080${el.avatar}`}
                alt=""
              />
              <span key={el.lastName} className={styles.firstLineText}>
                {el.name}
              </span>
            </Link>
          ))}
        </div>
        <div className={styles.containerBody}>
          <div>
            <div className={styles.statusBox}>
              <div className={styles.userNameContainer}>
                {userInfo?.map((el) => (
                  <p1 key={el.name} className={styles.textline1}>
                    {el.firstName} {el.lastName}
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
            <div className={styles.statusBox}>
              <div className={styles.userNameContainer}>
                <p1 className={styles.textline1}>Favorite Club</p1>
                {favClub?.map((el) => (
                  <span key={el.name} className={styles.favoriteClubText}>
                    {el.name}
                  </span>
                ))}
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
