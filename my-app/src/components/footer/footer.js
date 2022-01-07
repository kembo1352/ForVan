import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <MDBFooter className={styles.footer} color="purple">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <div className={styles.com}>
              <h3 className={styles.h3}>Football Fantasy</h3>
            </div>
            <div className={styles.infolinecontainer}>
              <div>
                <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} alt="" src="/icon/building.svg" />
                    <span className={styles.spaninfo}>
                      ĐƠN VỊ CHỦ QUẢN
                      <br />
                      Công ty cổ phần bóng đá chuyên nghiệp việt nam (VPF)
                    </span>
                  </div>
                </div>
                <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} alt="" src="/icon/adress.svg" />
                    <span className={styles.spaninfo}>
                      ĐỊA CHỈ
                      <br />
                      Tầng 3, Tòa nhà Handico, Khu đô thị mới Mễ Trì Hạ, đường Phạm Hùng, quận Nam Từ Liêm, TP.Hà Nội.
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} alt="" src="/icon/laisun.svg" />
                    <p className={styles.spaninfo}>
                      GIẤY PHÉP
                      <br />
                      Giấy phép số 4593/GP-TTĐT do sở TT&TT Hà Nội cấp ngày 31/10/2017
                    </p>
                  </div>
                </div>
                <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} alt="" src="/icon/noidung.svg" />
                    <span className={styles.spaninfo}>
                      NGƯỜI CHỊU TRÁCH NHIỆM NỘI DUNG
                      <br />
                      Nguyễn Thị Thu Huyền (Trưởng phòng Truyền Thông - 02437858457 (máy lẻ 126))
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} alt="" src="/icon/telephone.svg" />
                    <p className={styles.spaninfo}>
                      LIÊN LẠC
                      <br />
                      024.3785.8457/58 - FAX: 024.3785.8462
                    </p>
                  </div>
                </div>
                <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} alt="" src="/icon/globe.svg" />
                    <span className={styles.spaninfo}>
                      Website Owner
                      <br />
                      Tuan Minh Nguyen Vu - Developer Reactjs
                    </span>
                  </div>
                </div>
                {/* <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} alt="" src="/icon/telephone.svg" />
                    <span className={styles.spaninfo}>
                      LIÊN LẠC
                      <br />
                      024.3785.8457/58 - FAX: 024.3785.8462
                    </span>
                  </div>
                </div> */}
                {/* <div className={styles.infoline}>
                  <div className={styles.footerinfo}>
                    <img className={styles.imginfo} width="20px" height="20px" alt="" src="/icon/globe.svg" />
                    <span className={styles.spaninfo}>
                      <a className={styles.lastlinelink} href="www.vpf.vn">
                        www.vpf.vn
                      </a>
                      <a className={styles.lastlinelink} href="www.vnleague.com">
                        www.vnleague.com
                      </a>
                      <a className={styles.lastlinelink} href="info@vpf.vn">
                        info@vpf.vn
                      </a>{" "}
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
        <div className={styles.logoline}>
          <a href="https://www.facebook.com/V.League.VPF">
            <input type="image" className={styles.logo} alt="" src="/socialmedia/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/v.league_vpf/?hl=vi">
            <input type="image" className={styles.logo} alt="" src="/socialmedia/instagram.svg" />
          </a>
          <a href="https://www.youtube.com/user/Vpfmedia">
            <input type="image" className={styles.logo} alt="" src="/socialmedia/youtube.svg" />
          </a>
        </div>
        <div className={styles.lastline}>
          <div className={styles.container}>
            <a className={styles.lastlinetext} href="https://vpf.vn/">
              {" "}
              Vleague.com{" "}
            </a>
            <img className={styles.lastlinelogo} alt="" src="/logo_clb/vleague.svg" />
          </div>
        </div>
      </MDBFooter>
    </div>
  );
}
