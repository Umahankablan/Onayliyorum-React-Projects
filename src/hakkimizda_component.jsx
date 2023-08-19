import React from "react";

function AboutUsPage() {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="pb-5 mb-5">
            <h2 className=" text-secondary mt-5 mb-3 text-center">Hakkında</h2>

            <p className="text-secondary text-center fs-5 w-50 mx-auto">
              OnayVeriyorum.com, Internative Yazılım. A.Ş tarafından, KVKK ve
              veri güvenliği alanında deneyimli ve uzman bir ekip ile
              geliştirilmiştir.
            </p>
          </div>

          <div className="row my-5">
            <div className="col-12 col-lg-5">
              <h2 className="text-dark mb-4">Biz Kimiz?</h2>

              <p className="mb-4 fs-4 text-secondary fw-light">
                Özel yazılım ve ürün geliştirme kurumu olan Internatve Yazılım
                Anonim Şirketi tarafından, KVKK ve veri güvenliği alanında
                deneyimli ve uzman bir ekip ile geliştirilen Verionay.com, güçlü
                ve güvenli altyapısı ile teknolojinin getirdiği avantajlar ve
                mevzuattaki gelişmeler doğrultusunda sürekli güncellenen ve
                gelişen bir platform olarak hizmet vermektedir.
              </p>
              <div className="fs-6 fw-light text-secondary mb-4">
                <p className="mb-4">
                  Hızla gelişen internet ve teknoloji dünyasında kişisel
                  verilerin saklanması ve güvenliği oldukça kritik bir konu
                  olarak ele alınırken, KVKK ve VERBİS sistemi ile kurumların
                  veri yükümlülükleri ve sorumlulukları da artmaktadır.
                </p>

                <p className="mb-4">
                  Müşteri ve kullanıcılardan açık rıza metni onayı ve veri
                  toplama izinleri almak ise uzun, zahmetli ve her kurum ve
                  sektör için değişkenlik gösteren bir süreç. İşte bu noktada,
                  Verionay.com KVKK kapsamındaki açık rıza onay süreçlerinizi
                  dijitalleştirmeye verilerinizi güncel mevzuata uyarlayarak ve
                  VERBİS sistemine uygun şekilde saklamanıza yardımcı olmak
                  amacı ile geliştirilmiş online açık rıza metin onayı ve KVKK
                  yazılımdır.
                </p>

                <p className="mb-4">
                  Verionay.com olarak her kurum ve her sektör için uygun tek bir
                  çözüm olmadığını biliyoruz ve KVKK hiçbir zaman sadece birkaç
                  kutuyu işaretlemekle ilgili bir durum olmayacak. Biz de bu
                  doğrultuda KVKK onaylarının, müşteri verilerinin, izin
                  formlarının ve veri güvenliğinin yönetilmesine yardımcı olan
                  çözümlerimizi geliştirmeye devam edeceğiz.
                </p>
              </div>
            </div>

            <div className="col-lg-7  col-xl-6 d-flex align-items-center d-none d-lg-flex ">
              <div className="col-12 p-lg-5  w-100">
                <img
                  className="h-100 img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/bgimage2.jpg"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
