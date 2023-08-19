import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

function AskedQuestion() {
  const Styles = {
    transition: ".6s ease-in-out",
  };

  function HandleClick(event) {
    const clickedItem = event.currentTarget;

    if (
      (clickedItem.tagName == "A" || clickedItem.tagName == "I") &&
      clickedItem.querySelector("i").style.transform === ""
    ) {
      clickedItem.querySelector("i").style.transform = "rotate(180deg)";
    } else {
      clickedItem.querySelector("i").style.transform = "";
    }
  }

  // const IconStyle = {
  //   transform:!isActive ? "" : "rotate(180deg)",
  //   transition:"transform .6s ease-in-out"
  // }

  return (
    <>
      <div className="text-center text-secondary mb-5">
        <h1 className="mt-5  mb-4">sık sorulan sorular</h1>
        <p className="">
          KVKK, açık rıza onay süreçleri, VERBİS, veri güvenliği konuları ile
          ilgili sık sorulan sorular.
        </p>
      </div>
      <div className="QuestionOne my-4">
        <p class="d-flex gap-1 align-content-center">
          <a
            onClick={HandleClick}
            style={{ fontSize: "1.2rem" }}
            class="text-dark text-decoration-none fw-light fw-medium"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            <i
              style={Styles}
              className="fa fa-chevron-down text-success me-3 mt-1"
            ></i>
            Satın alınan paketlerin iptal durumunda iade süreci nasıldır ?
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body border-success ">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
                <h6 className="mt-3">
                  {" "}
                  <a href="#" className="nav-link text-sucess">
                    Detaylı İncele <i className="fa fa-chevron-right ms-2"></i>{" "}
                  </a>{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="QuestionTwo my-4">
        <p class="d-flex gap-1 align-content-center">
          <a
            onClick={HandleClick}
            style={{ fontSize: "1.2rem" }}
            class="text-dark text-decoration-none fw-light fw-medium"
            data-bs-toggle="collapse"
            href="#multiCollapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            <i
              style={Styles}
              className="fa fa-chevron-down text-success me-3 mt-1"
            ></i>
            Satın alınan paketlerin iptal durumunda iade süreci nasıldır ?
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body  border-success ">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
                <h6 className="mt-3">
                  {" "}
                  <a href="#" className="nav-link text-sucess">
                    Detaylı İncele <i className="fa fa-chevron-right ms-2"></i>{" "}
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="QuestionThree my-4">
        <p class="d-flex gap-1 align-content-center">
          <a
            onClick={HandleClick}
            style={{ fontSize: "1.2rem" }}
            class="text-dark text-decoration-none fw-light fw-medium"
            data-bs-toggle="collapse"
            href="#multiCollapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample3"
          >
            <i
              style={Styles}
              className="fa fa-chevron-down text-success me-3 mt-1"
            ></i>
            Satın alınan paketlerin iptal durumunda iade süreci nasıldır ?
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample3">
              <div class="card card-body border-success ">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
                <h6 className="mt-3">
                  {" "}
                  <a href="#" className="nav-link text-sucess">
                    Detaylı İncele <i className="fa fa-chevron-right ms-2"></i>{" "}
                  </a>{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="QuestionFour my-4">
        <p class="d-flex gap-1 align-content-center">
          <a
            onClick={HandleClick}
            style={{ fontSize: "1.2rem" }}
            class="text-dark text-decoration-none fw-light fw-medium"
            data-bs-toggle="collapse"
            href="#multiCollapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample4"
          >
            <i
              style={Styles}
              className="fa fa-chevron-down text-success me-3 mt-1"
            ></i>
            Satın alınan paketlerin iptal durumunda iade süreci nasıldır ?
          </a>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample4">
              <div class="card card-body  border-success ">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
                <h6 className="mt-3">
                  {" "}
                  <a href="#" className="nav-link text-sucess">
                    Detaylı İncele <i className="fa fa-chevron-right ms-2"></i>{" "}
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AskedQuestion;
