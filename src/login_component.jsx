import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsInputValid(value.length >= 6); // kullanıcı için karakter sınırını buradan değiştirebilirsin
  };

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const passChange = (event) => {
    const pass = event.target.value;
    setPasswordValue(pass);
    setPasswordValid(pass.length >= 6); // password şifre kontrolü sınırı için
  };

   return (
    <>
      <div className="MainLoginBlog mt-5 col-10 col-sm-7 col-lg-5 mx-auto">
        <h3 className="text-center mb-5">Giriş Yap</h3>

        <div className="mt-5">
          <form action="">
            <label className="fw-bold  text-secondary opacity-75 " htmlFor="">
              GİRİŞ YAPIN
            </label>
            <p className="mt-3 fw-medium opacity-75">
              Hali hazırda bir verionay hesabınız var mı? Hesabınıza ait
              kullanıcı adı ve şifrenizi girerek hesabınıza giriş
              yapabilirsiniz.
            </p>
            <div className="mt-4 position-relative">
              <input
                onInput={handleChange}
                value={inputValue}
                type="text"
                className="form-control py-2"
                placeholder="Kullanıcı Adınız"
              />
              {!isInputValid && inputValue.length > 0 && (
                <p style={{ fontSize: "10px", color: "red" }}>
                  Minimum 6 Karakter Giriniz
                </p>
              )}

              {isInputValid && (
                <p
                  style={{ right: "10px", top: "10px" }}
                  className="position-absolute"
                >
                  {" "}
                  <i className="fa fa-check text-success "></i>{" "}
                </p>
              )}
            </div>

            {/* <p style={{fontSize:"10px",color:"red"}}>Minimum 6 Karakter Giriniz</p> */}

            {/* <p style={{right:"10px",top:"10px"}} className="position-absolute"> <i className="fa fa-check text-success "></i> </p> */}
            <div className="mt-4 position-relative">
              <input
                type="password"
                onChange={passChange}
                value={passwordValue}
                className="form-control py-2"
                placeholder="Şifreniz"
              />
              {!passwordValid && passwordValue.length > 0 && (
                <p style={{ fontSize: "10px", color: "red" }}>
                  Minimum 6 Karakter Giriniz
                </p>
              )}

              {passwordValid && (
                <p
                  style={{ right: "10px", top: "10px" }}
                  className="position-absolute"
                >
                  {" "}
                  <i className="fa fa-check text-success"></i>{" "}
                </p>
              )}
            </div>
            <button
              disabled={!isInputValid || !passwordValid}
              type="button"
              className="btn btn-success w-100 rounded-5 mt-5 py-2 mb-4"
            >
              Giriş Yap
            </button>

            <a href="#" className="text-center nav-link ">
              Şifreinizi mi unuttunuz ?
            </a>

            <div className="mt-3 text-center mb-4">
              Veri yöneticisi Hesabınız Yok mu?
              <Link
                className="d-inline-block ps-4 text-center text-decoration-none nav-link"
                to="/signup"
              >
                Kayıt Ol
              </Link>
            </div>
          </form>

          <h6 className="opacity-75 text-center">Ziyaret Etmeyi Unutmayın</h6>

          <div className="mt-4 mb-4">
            <ul className="d-flex list-unstyled fs-5 justify-content-around w-50 mx-auto socailMediaLoginPageAnimation">
              <li>
                <a href="#" className="d-inline-block">
                  <i className="fab fa-twitter  bg-info p-2 rounded-5  text-light"></i>
                </a>
              </li>

              <li>
                <a href="#" className="d-inline-block">
                  <i
                    style={{ backgroundColor: " #3b5998" }}
                    className="fab fa-facebook p-2 rounded-5  text-light"
                  ></i>
                </a>
              </li>

              <li>
                <a href="#" className="d-inline-block">
                  <i
                    className="fab fa-linkedin p-2 rounded-5  text-light"
                    style={{ backgroundColor: "  #007bb6" }}
                  ></i>
                </a>
              </li>

              <li>
                <a href="#" className="d-inline-block">
                  <i
                    className="fab fa-instagram p-2 rounded-5  text-light"
                    style={{ backgroundColor: " #c32aa3" }}
                  ></i>
                </a>
              </li>

              <li>
                <a href="#" className="d-inline-block">
                  <i
                    className="fab fa-youtube p-2 rounded-5  text-light"
                    style={{ backgroundColor: " #FF0000" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
