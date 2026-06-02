import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import TranslateWidget from "./TranslateWedgit";
import Logo from "../img/WhatsApp_Image_2025-11-18_at_01.33.12_1e0bf741-removebg-preview.png";
import menuToggle from "../img/menu-alt-1-svgrepo-com.svg";
import phone from "../img/phone-call-alt-1-svgrepo-com.svg";
import whatsap from "../img/whatsapp-svgrepo-com.svg";
import focebook from "../img/facebook-176-svgrepo-com.svg";
import linkedien from "../img/linkedin-161-svgrepo-com.svg";
import instgram from "../img/instagram-svgrepo-com.svg";
import language from "../img/earth-8-svgrepo-com.svg";
const Headerr = () => {
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const closeMenu = () => {
    const menu = document.getElementById("navbarSupportedContent");
    menu.classList.remove("show");
  };
  return (
    <Main>
      {/* <div className="contacnt">
    <div className="box">
      <a href="https://www.facebook.com/naderhilalo">
        <img src={focebook} alt="" />
      </a>

      <a href="https://ae.linkedin.com/in/nader-hilal">
        <img src={linkedien} alt="" />
      </a>

      <a href="https://www.instagram.com/nader.hilal/">
        <img src={instgram} alt="" />
      </a>

      <a href="tel:+971547330801">
        <img src={phone} alt="" />
      </a>

      <a className="w-contact" href="https://wa.me/+963938353816">
        <img src={whatsap} alt="" />
      </a>

      <div className="d-flex align-items-center">
        <span className="distin">|</span>
        <img src={language} alt="" />
        <span className="lang">EN AR</span>
      </div>
    </div>
  </div> */}

      <nav
        className="navbar navbar-expand-lg navbar-dark my-nav"
        style={{ background: "#171717" }}
      >
        <div className="container-fluid">
          {/* LOGO */}
          {/* <img
        className="logo-img"
        src={Logo}
        alt=""
        onClick={() => navigate("/")}
      /> */}

          {/* TOGGLE BUTTON */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img className="toggle-img" src={menuToggle} alt="" />
          </button>

          {/* NAVBAR CONTENT */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* NAV LINKS */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" onClick={closeMenu} to="/">
                  Trending Movies
                </Link>
              </li>

              {user && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={closeMenu}
                    to="/create-post"
                  >
                    Popular Movies
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" onClick={closeMenu} to="/about">
                  Top Rated
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" onClick={closeMenu} to="/about">
                  Upcoming
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" onClick={closeMenu} to="/about">
                  TV Shows
                </Link>
              </li>

              {/* LANGUAGE DROPDOWN */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <LanguageSwitcher />
                    <TranslateWidget />
                  </li>
                </ul>
              </li>
            </ul>

            {/* SEARCH FORM */}
            <form className="d-flex ms-lg-3 mt-3 mt-lg-0">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn my-botton" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Main>
  );
};
const Main = styled.div`
  // height: 96px;
  background-color: #171717;
  margin-top: -1px;

  .contacnt {
    height: 33px;
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
  & .lang {
    color: #b89564;
    font-size: 13px;
    margin-left: 7px;
  }

  & .logo-img {
    width: 120px;
    object-fit: contain;
    margin-left: 10px;
  }
  & .toggle-img {
    width: 40px;
  }
  & .nav-link {
    color: #b89564;
  }
  // & .my-nav {
  //   position: fixed;
  //   width: 100%;
  //   z-index: 99999;
  //   top: 0;
  //   // opacity: 0.9;
  // }
  // & .distin {
  //   display: flex;
  //   margin-right: 5px;
  //   margin-bottom: 3px;
  // }
  & .my-botton {
    --bs-btn-color: #b89564;
    --bs-btn-border-color: #b89564;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #b89564;
    --bs-btn-hover-border-color: #b89564;
    --bs-btn-focus-shadow-rgb: 25, 135, 84;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #b89564;
    --bs-btn-active-border-color: #b89564;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #b89564;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #b89564;
    --bs-gradient: none;
  }
`;
// const Basket = styled.div`
//   position: relative;
//   width: fit-content;
//   cursor: pointer;
//   & span {
//     position: absolute;
//     bottom: -3px;
//     right: -4px;
//     color: white;
//     background-color: red;
//     width: 14px;
//     height: 14px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// & img {
//   width: 30px;
//   margin-left: 5px;
//   margin-top: 5px;
// }
// `;
export default Headerr;
