import React, { useState } from "react";
import styled from "styled-components";

import Headerr from "./Header";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";
const Home = () => {
  const navicate = useNavigate();
  const tabs = [
    { id: "all", label: "REVIEW ALL" },
    { id: "project", label: "REVIEW BY PROJECT" },
    { id: "category", label: "REVIEW BY CATEGORY" },
  ];

  const [activeTab, setActiveTab] = useState("all");
  return (
    <Main
    // className="pt-40 bg-neutral-1000"
    >
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
        <div className="">
          <PostList />
          {/* <div className="child" onClick={() => navicate(`/product-page`)}>
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
          </div> */}
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  min-height: 100vh;

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
    box-shadow: 0px -6px 70px 0px rgba(184, 149, 100, 0.45);
  }

  .active-tab {
    background-color: white !important;
  }

  .distin {
    color: #b89564;
    margin-right: 8px;
    margin-bottom: 3px;
  }



    .child {
      // border: 1px solid #b89564;
      padding: 1rem;
      box-shadow: 0px -6px 22px 0px rgba(184, 149, 100, 0.45);
      border-radius: 10px;

      img {
        max-width: 100%;
        border-radius: 10px;
      }

      p {
        padding: 1.25rem;
        color: #b89564;
      }
    }
  }
`;

export default Home;
