import React from "react";
import { logoNav } from "./navbar_component";
import { Link } from "react-router-dom";
import SignUp from "./signup_component";
function Footer() {
  // const SocailMediaIcons = [
  // ]

  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row m-0">
          <div className="col-12 mb-5">
            <div
              style={{ borderBottom: "1px solid whitesmoke" }}
              className="row py-5 d-flex"
            >
              <div className="col-12 col-sm-8">
                <h2 className="text-white">
                  KVKK uyum sürecinizi başlatmakta geç kalmayın hemen iletişime geçin
                </h2>
              </div>
              <div className="col-12 col-sm-4 mt-3 mt-lg-0">
                <Link
                  to="signup_component.js"
                  className="btn btn-success float-sm-end float-none px-4 fs-5 py-2 rounded-5 createacc"
                >
                  Hesap Oluştur
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 text-white">
            <div className="row text-center text-lg-start ">
              <div className="col-12 py-lg-5 col-sm-6 pe-lg-5 col-lg-3">
                <div className="footerLogo">
                  <img className="navbarLogo" src={logoNav} />
                </div>
                <p className="mt-4 fw-light">
                  © 2023 OnayVeriyorum.com Tüm hakları saklıdır.
                </p>
                <div className="socialMedia my-3 my-lg-0 d-flex w-100 justify-content-lg-between  justify-content-around ">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div className="col-12 py-lg-5 col-sm-6  col-lg-3 fw-light">
                <h5 className="mb-4">Bize Ulaşın</h5>
                <p className="mb-4 pe-lg-5 w-100 lh-lg">
                  Yıldırım Beyazıt Mh. Örs sk. No /3 43020 KÜTAHYA MERKEZ
                </p>
                <p className=" pe-lg-5">
                  destek@OnayVeriyorum.com (274) 343 43 43
                </p>
              </div>
              <div className="col-12 py-lg-5 col-sm-6 pe-lg-5 col-lg-3 fw-light">
                <h5 className="mb-4">Linkler</h5>
                <ul className="list-unstyled text-decoration-none   lh-lg  ">
                  <li>
                    <a href="#" className="my-2 nav-link ">
                      OnayVeriyorum nedir ?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="my-2 nav-link ">
                      Fiyatlar & Planlar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="my-2 nav-link ">
                      Sık Sorulan Sorular
                    </a>
                  </li>
                  <li>
                    <a href="#" className="my-2 nav-link ">
                      Blog
                    </a>
                  </li>
                  <li>
                    <Link className="nav-link" to="/iletisim">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 py-lg-5 col-sm-6 pe-lg-5 col-lg-3">
                <h5 className="mb-4">E-Bülten</h5>
                <p className="mb-4">
                  KVKK ile ilgili güncel bilgiler almak için e-bültenimize kayıt
                  olun.
                </p>
                <div class="input-group mb-3 ">
                  <input
                    id="signupemail"
                    style={{ color: "#fff" }}
                    type="text"
                    class="form-control bg-transparent"
                    placeholder="E-Posta Adresi..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span class=" p-0" id="basic-addon2">
                    <Link
                      to="/signup"
                      className="btn btn-outline-success rounded-0"
                    >
                      Kaydol
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
