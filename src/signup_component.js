import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <>
      <div className="MainLoginBlog mt-5 col-10 col-sm-7 col-lg-5 mx-auto">
        <h3 className="text-center mb-5">Kayıt Ol</h3>

        <div className="mt-5">
          <form action="">
            <label className="fw-bold  text-secondary opacity-75 " htmlFor="">
              Kayıt Olun
            </label>
            <p className="mt-3 fw-medium opacity-75">
              Hali hazırda bir verionay hesabınız var mı? Hesabınıza ait
              kullanıcı adı ve şifrenizi girerek hesabınıza giriş
              yapabilirsiniz.
            </p>

            <input
              type="text"
              className="form-control py-2 my-4"
              placeholder="Adınız"
            />
            <input
              type="text"
              className="form-control py-2 my-4"
              placeholder="Soyadınız"
            />

            <input
              type="email"
              className="form-control py-2 my-4"
              placeholder="E-mail"
            />

            <input
              type="text"
              className="form-control py-2"
              placeholder="Şifreniz"
            />

            <button
              type="button"
              className="btn btn-success w-100 rounded-5 mt-5 py-2 mb-4"
            >
              Kayıt Ol
            </button>

            <a href="#" className="text-center nav-link ">
              Şifreinizi mi unuttunuz ?
            </a>

            <div className="mt-3 text-center mb-4">
              Veri yöneticisi Hesabınız Yok mu?
              <Link
                to="/login"
                className="d-inline-block ps-4 text-center text-decoration-none nav-link"
              >
                Zaten Hesabınız Varmı ?
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

export default SignUp;
