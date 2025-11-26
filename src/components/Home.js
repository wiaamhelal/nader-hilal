import React, { useState } from "react";
import styled from "styled-components";
import phone from "../img/phone-call-alt-1-svgrepo-com.svg";
import whatsap from "../img/whatsapp-svgrepo-com.svg";
import focebook from "../img/facebook-176-svgrepo-com.svg";
import linkedien from "../img/linkedin-161-svgrepo-com.svg";
import instgram from "../img/instagram-svgrepo-com.svg";
import language from "../img/earth-8-svgrepo-com.svg";

import Headerr from "./Header";
const Home = () => {
  const tabs = [
    { id: "all", label: "REVIEW ALL" },
    { id: "project", label: "REVIEW BY PROJECT" },
    { id: "category", label: "REVIEW BY CATEGORY" },
  ];

  const [activeTab, setActiveTab] = useState("all");
  return (
    <Main
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto//patterns/horizontal)",
        // backgroundSize: "320% auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        // minWidth: " 1000px",
      }}
      // className="pt-40 bg-neutral-1000"
    >
      <div className="contacnt">
        <div className="box">
          <img src={focebook} alt="" />
          <img src={linkedien} alt="" />
          <img src={instgram} alt="" />
          <img src={phone} alt="" />
          <img src={whatsap} alt="" />

          <div className="d-flex align-items-center">
            <span className="distin">|</span>
            <img src={language} alt="" /> <span className="lang">EN AR</span>
          </div>

          {/* <img src={focebook} alt="" />
          <img src={focebook} alt="" /> */}
        </div>
      </div>
      <Headerr />
      <div className="container">
        {/* <span>Home Page | Interior Design Work</span> */}
        <h2 className="fw-bold text-golden text-center mt-5 pt-5">
          OUR DESIGN WORK
        </h2>
        {/* <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between mt-5 pt-4 group-bottons">
          <span className="">REVIEW ALL</span>
          <span class="">REVIEW BY PROJECT</span>

          <span class=" ">REVIEW BY CATEGORY</span>
        </div> */}
        <div className="cate-title">Interior Design Work</div>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between pt-4 group-bottons">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-item ${activeTab === tab.id ? "active-tab" : ""}`}
            >
              {tab.label}
            </span>
          ))}
        </div>
        <div className="holder">
          <div className="child">
            <img
              src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
              alt=""
            />
            <p>
              Ultra-exclusive luxury residence interior design in Doha – Villa
              Project
            </p>
          </div>
          <div className="child">
            <img
              src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
              alt=""
            />
            <p>
              Ultra-exclusive luxury residence interior design in Doha – Villa
              Project
            </p>
          </div>
          <div className="child">
            <img
              src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/psc16ewfoqsaehk8hp2u"
              alt=""
            />
            <p>
              Ultra-exclusive luxury residence interior design in Doha – Villa
              Project
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  @media (max-width: 668px) {
    background-size: 320%;
  }

  min-height: 100vh;

  .contacnt {
    height: 28px;
    background: #000000;
    display: flex;
    justify-content: center;
  }

  .box {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    img {
      width: 15px;
      height: 15px;
    }
  }

  .header {
  }

  .group-bottons {
    gap: 5px;

    span {
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: #b89564;
      margin-bottom: 5px;
      width: 100%;
      border: 1px solid #eee;
      cursor: pointer;
    }
  }

  h2 {
    font-size: 2.25rem;
    color: #b89564;
    font-weight: 800;
  }

  .cate-title {
    height: 112px;
    background: #b89564;
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
  }

  .active-tab {
    background-color: white !important;
  }

  .lang {
    color: #b89564;
    font-size: 13px;
    margin-left: 7px;
  }

  .distin {
    color: #b89564;
    margin-right: 8px;
    margin-bottom: 3px;
  }

  .holder {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    margin-top: 40px;
    gap: 20px;

    .child {
      border: 1px solid #b89564;
      padding: 1rem;

      img {
        max-width: 100%;
      }

      p {
        padding: 1.25rem;
        color: #b89564;
      }
    }
  }
`;

export default Home;
