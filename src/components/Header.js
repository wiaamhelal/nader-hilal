import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import TranslateWidget from "./TranslateWedgit";
import Logo from "../img/WhatsApp_Image_2025-11-18_at_01.33.12_1e0bf741-removebg-preview.png";
import menuToggle from "../img/menu-alt-1-svgrepo-com.svg";
const Headerr = () => {
  const dispatch = useDispatch();

  return (
    // <Main className="">
    //   <nav
    //     className="navbar navbar-expand-lg navbar-dark my-nav"
    //     style={{ background: "#171717" }}
    //   >
    //     <img src={Logo} alt="" />
    //     <div className="container-fluid justify-content-end">
    //       <button
    //         className="navbar-toggler "
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon "></span>
    //       </button>

    //       <div
    //         className="collapse navbar-collapse d-flex justify-content-between"
    //         id="navbarSupportedContent"
    //       >
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/products2">
    //               Brouse
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link
    //               className="nav-link"
    //               to="/contactus"
    //               tabindex="-1"
    //               aria-disabled="true"
    //             >
    //               Contact Us
    //             </Link>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <Link
    //               className="nav-link dropdown-toggle"
    //               to="#"
    //               id="navbarDropdown"
    //               role="button"
    //               data-bs-toggle="dropdown"
    //               aria-expanded="false"
    //             >
    //               Language
    //             </Link>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //               <li>
    //                 <LanguageSwitcher />
    //                 <TranslateWidget />
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </Main>
    <Main>
      <nav
        className="navbar navbar-expand-lg navbar-dark my-nav"
        style={{ background: "#171717" }}
      >
        <div className="container-fluid">
          <img className="logo-img" src={Logo} alt="" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <img className=" toggle-img" src={menuToggle} alt="" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products2">
                  Browse
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  // <Link
                  //   className="nav-link"
                  //   to="/contactus"
                  //   tabIndex="-1"
                  //   aria-disabled="true"
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
          </div>
        </div>
      </nav>
    </Main>
  );
};
const Main = styled.div`
  height: 96px;
  background-color: #171717;
  margin-top: -1px;

  & .logo-img {
    width: 150px;
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
`;
const Basket = styled.div`
  position: relative;
  width: fit-content;
  cursor: pointer;
  & span {
    position: absolute;
    bottom: -3px;
    right: -4px;
    color: white;
    background-color: red;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // & img {
  //   width: 30px;
  //   margin-left: 5px;
  //   margin-top: 5px;
  // }
`;
export default Headerr;
