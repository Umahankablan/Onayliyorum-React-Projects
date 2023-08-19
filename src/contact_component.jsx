import React from "react";

function ContactPage() {
  return (
    <>
      <div className="MainLoginBlog mt-5 col-10 col-lg-10 mx-auto">
        <h3 className="text-center my-5 opacity-75 ">İletişim</h3>

        <div className="GoogleMapsAddr row">
          <div className="col-12 col-lg-8">
            <iframe
              style={{ width: "100%", border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12319.397252381457!2d30.0282155!3d39.4727328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c94fcbc7759b9d%3A0x67467dad9a5e5a76!2sK%C3%BCtahya%20Tasar%C4%B1m%20Teknokent!5e0!3m2!1str!2str!4v1691364298746!5m2!1str!2str"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-12 col-lg-4 p-lg-5 p-1 mt-3 mt-lg-0">
            <div className="d-flex justify-content-between  mb-3">
              <i className="fa fa-location-dot text-success fs-5"></i>
              <div className="ms-3">
                <h4>Adres</h4>
                <p>Yıldırım Beyazıt Mh. Örs sk. No /3 43020 KÜTAHYA MERKEZ</p>
              </div>
            </div>

            <div className="d-flex  mb-3">
              <i className="fa fa-phone fs-5 text-success"></i>
              <div className="ms-2 w-100">
                <h4>Telefon</h4>
                <p>
                  {" "}
                  <a href="#" className="nav-link">
                    0274 343 43 43
                  </a>
                </p>
              </div>
            </div>

            <div className="d-flex  mb-3">
              <i className="fa fa-envelope text-success  fs-5"></i>
              <div className="ms-2">
                <h4>E-mail</h4>
                <p className="">
                  <a href="#" className="nav-link">
                    info@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="my-5">
            <h2 className="opacity-75 text-center">Bize Ulaşın</h2>
            <p className="text-center fw-bold text-secondary ">
              Aklınıza takılan her türlü konu ve sorularınız için bize aşağıdaki
              formu doldurarak ulaşabilirsiniz. İlgili ekibimiz sizinle en kısa
              sürede iletişime geçecektir.
            </p>
            <div className="col-12">
              <form>
                <div className="col-12 col-lg-8 mx-auto ">
                  <input
                    type="text"
                    placeholder="Adınız ve Soyadınız *"
                    className="form-control"
                  />
                </div>

                <div className="col-12 col-lg-8 mt-4 mx-auto">
                  <input
                    type="email"
                    placeholder="E-Posta adresiniz *"
                    className="form-control"
                  />
                </div>
                <div className="col-12 col-lg-8 mx-auto">
                  <textarea
                    style={{ minHeight: "300px" }}
                    className="form-control mt-4"
                    placeholder="Mesajınız..."
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center mt-4 ">
                  <button
                    type="button"
                    className="btn btn-success rounded-5 px-4 mx-auto d-inline-block py-2 "
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
