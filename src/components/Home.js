import React, { useDebugValue, useEffect, useState } from "react";
import styled from "styled-components";

import Headerr from "./Header";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/apiCalls/authApiCall";
import star from "../img/star-svgrepo-com (2).svg";
const Home = () => {
  useEffect(() => {
    fetch("http://localhost:8000/api/movies/trending")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const navicate = useNavigate();
  const dispatch = useDispatch();
  const tabs = [
    { id: "all", label: "REVIEW ALL" },
    { id: "Hall Apartment", label: "REVIEW BY PROJECT" },
    { id: "One Room", label: "REVIEW BY CATEGORY" },
  ];
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Main>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ marginTop: "10px" }}>
          <div
            className="carousel-item active position-relative"
            style={{ maxHeight: "600px" }}
          >
            <img
              className="d-block w-100"
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt="First slide"
            />

            <div
              className="movie-details"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="head-div">
                {" "}
                <span className="rate">
                  <img src={star} alt="*" />
                  <span className="the-number">7.2</span>
                </span>{" "}
                <span className="year d-sm-none">
                  the texes chainsaw masacre
                </span>
                <span className="year">1988</span>
              </div>
              <h2 className="d-none d-sm-block">the texes chainsaw masacre</h2>
              <p className="d-none d-sm-block">
                matt murder a blid laijdid ijifj ijdifjidf ijijidf ijijijdf
                ijjijijifd ijijijidf ijijijidf ijijijdf ijijijijdf ijijijfi{" "}
              </p>
            </div>
          </div>

          <div className="carousel-item" style={{ maxHeight: "600px" }}>
            <img
              className="d-block w-100"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjE4YmF0Y2g5LW15bnQtNjMuanBn.jpg"
              alt="Second slide"
            />
            <div
              className="movie-details"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="head-div">
                {" "}
                <span className="rate">
                  <img src={star} alt="*" />
                  <span className="the-number">7.2</span>
                </span>{" "}
                <span className="year d-sm-none">
                  the texes chainsaw masacre 2
                </span>
                <span className="year">1988</span>
              </div>
              <h2 className="d-none d-sm-block">
                the texes chainsaw masacre 2
              </h2>
              <p className="d-none d-sm-block">
                matt murder a blid laijdid ijifj ijdifjidf ijijidf ijijijdf
                ijjijijifd ijijijidf ijijijidf ijijijdf ijijijijdf ijijijfi{" "}
              </p>
            </div>
          </div>

          <div className="carousel-item" style={{ maxHeight: "600px" }}>
            <img
              className="d-block w-100"
              src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-background/sta-je-background.jpg"
              alt="Third slide"
            />
            <div
              className="movie-details"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="head-div">
                {" "}
                <span className="rate">
                  <img src={star} alt="*" />
                  <span className="the-number">7.2</span>
                </span>{" "}
                <span className="year d-sm-none">
                  the texes chainsaw masacre 3
                </span>
                <span className="year">1988</span>
              </div>
              <h2 className="d-none d-sm-block">
                the texes chainsaw masacre 3
              </h2>
              <p className="d-none d-sm-block">
                matt murder a blid laijdid ijifj ijdifjidf ijijidf ijijijdf
                ijjijijifd ijijijidf ijijijidf ijijijdf ijijijijdf ijijijfi{" "}
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <h4>Trending Now</h4>
      <div className="my-slider">
        <div className="the-slide">
          <div className="box">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <div className="details">
              <h3> the texas chainsaw </h3>
              <p>horor</p>
            </div>
          </div>
          <div className="box">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <div className="details">
              <h3> the texas chainsaw </h3>
              <p>horor</p>
            </div>
          </div>
          <div className="box">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <div className="details">
              <h3> the texas chainsaw </h3>
              <p>horor</p>
            </div>
          </div>

          <div className="box">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <div className="details">
              <h3> the texas chainsaw </h3>
              <p>horor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-movies">
        <h4>latest movies</h4>
        <div className="movies-container row">
          <div className="box col-5 col-sm-4 col-md-2">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <p className="time">1h 56m 2026</p>
            <p className="title">Moral kombat 2</p>
            <div className="type-container">
              <span>Action</span>
              <span>Movie</span>
            </div>
          </div>
          <div className="box col-5 col-sm-4 col-md-2">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <p className="time">1h 56m 2026</p>
            <p className="title">Moral kombat 2</p>
            <div className="type-container">
              <span>Action</span>
              <span>Movie</span>
            </div>
          </div>
          <div className="box col-5 col-sm-4 col-md-2">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <p className="time">1h 56m 2026</p>
            <p className="title">Moral kombat 2</p>
            <div className="type-container">
              <span>Action</span>
              <span>Movie</span>
            </div>
          </div>
          <div className="box col-5 col-sm-4 col-md-2">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <p className="time">1h 56m 2026</p>
            <p className="title">Moral kombat 2</p>
            <div className="type-container">
              <span>Action</span>
              <span>Movie</span>
            </div>
          </div>
          <div className="box col-5 col-sm-4 col-md-2">
            <img
              src="https://image.tmdb.org/t/p/original/e9UvRjJAqn2hLXDfMHU1LFMEKGv.jpg"
              alt=""
            />
            <p className="time">1h 56m 2026</p>
            <p className="title">Moral kombat 2</p>
            <div className="type-container">
              <span>Action</span>
              <span>Movie</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
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
      {user ? (
        <botton className="delete-btn" onClick={() => dispatch(logoutUser())}>
          Logout
        </botton>
      ) : (
        <botton className="delete-btn" onClick={() => navicate("/login")}>
          Login
        </botton>
      )} */}
    </Main>
  );
};
const Main = styled.div`
  min-height: 100vh;
    margin-right: 20px;
    margin-left: 20px;
    @media(max-width:668px) {
         margin-right: 10px;
        margin-left: 10px;

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
      color: white;
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
      & .delete-btn {
    padding: 5px;
    color: #b89564;
    border: 1px solid #b89564;
    border-radius: 6px;
    display: flex;
    width: fit-content;
    margin: 0px 10px 10px auto;
    margin-top: 10px;
    cursor: pointer;
  }

  & .carousel-inner {
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px -6px 22px 0px rgba(184, 149, 100, 0.45);
    background: rgb(23, 23, 23);
    & img {
        object-fit: cover;
    }
  }
    & .movie-details {
    color: #b89564;
    background: #eeeeee00;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
     width: 100%;

     & .head-div {
      & .rate {
      & img {
    width: 15px;
    margin-right: 5px;
    margin-bottom: 3px;
      }
      span {
      }
      }
      & .year {
          margin-left: 15px;
      }
     }
    }
          h4 {
    color: #b89564;
    margin: auto;
    width: fit-content;
    padding: 10px 0 10px 0;
    margin-top: 10px;
    margin-bottom: 10px;
     }
     & .my-slider {
     & .details {
    position: absolute;
      top: 80px;
    left: 10px;
     }
       overflow: auto;
     & .the-slide {
     display: flex;
    align-items: center;
    gap: 20px;
        margin-bottom: 15px;
     }

     & .box {
         position: relative;
      img {
          max-width: 300px;
      }
      h3 {
  
    margin-bottom: 3px;
    color: white;
    font-size: 23px;
    font-weight: bold;

      }
      p {
    //  position: absolute;
    // top: 137px;
    // left: 11px;
    color: #b89564;
    font-size: 17px;
    font-weight: bold;
      }
     }
     }
 & .latest-movies {
  h4 {
  }
  & .movies-container {
  color:white;
      gap: 15px;
    justify-content: center;

  & .box {
      background: rgb(23, 23, 23);
    padding: 10px;
    border-radius: 10px;
  img {
      max-width: 100%;
         height: 225px;
    object-fit: cover;
        border-radius: 10px;
  }
  & .time {
      text-align: center;
    margin-top: 15px;
    color: #ffffff80;
    margin-bottom: 3px;
  }
  & .title {
      text-align: center;
    font-size: 17px;
    margin-bottom: 6px;
  }
  & .type-container {
      display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
   color: #ffffff80;
   span {
   }
  }
  }
  }
 }

`;

export default Home;

// display: grid;
// grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// gap: 20px;
// }
