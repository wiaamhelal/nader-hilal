import React, { useState } from "react";
import styled from "styled-components";

import Headerr from "./Header";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";
const Home = () => {
  const navicate = useNavigate();
  const tabs = [
    { id: "all", label: "REVIEW ALL" },
    { id: "Hall Apartment", label: "REVIEW BY PROJECT" },
    { id: "One Room", label: "REVIEW BY CATEGORY" },
  ];

  const [activeTab, setActiveTab] = useState("all");
  return (
    <Main>
      <div className="container">
        <h2 className="fw-bold text-golden text-center mt-5 pt-5">
          OUR DESIGN WORK
        </h2>
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
          <PostList activeTab={activeTab} />
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
