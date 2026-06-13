import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import TranslateWidget from "./TranslateWedgit";
import menuToggle from "../img/menu-alt-1-svgrepo-com.svg";
import axios from "axios";
const Headerr = () => {
  const closeMenu = () => {
    const menu = document.getElementById("navbarSupportedContent");
    menu.classList.remove("show");
  };

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (search.trim().length < 2) {
        setResults([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=5cb3971f2ed6c001df1ae772ee291eb2&query=${search}`
        );

        setResults(response.data.results.slice(0, 6));
      } catch (err) {
        console.log(err);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  console.log(results);
  return (
    <Main
      style={{
        background: "transparent",
        position: "absolute",
        zIndex: "999999",
        right: "0",
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-dark my-nav"
        style={{ background: "#171717", background: "transparent" }}
      >
        <div className="container-fluid">
          {/* LOGO */}
          {/* <img
            className="logo-img"
            src={logo}
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

              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={closeMenu}
                  to="/create-post"
                >
                  Popular Movies
                </Link>
              </li>

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
            {/* <form className="d-flex ms-lg-3 mt-3 mt-lg-0">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn my-botton" type="submit">
                Search
              </button>
            </form> */}
            <form
              // onSubmit={searchHandler}
              className="d-flex ms-lg-3 mt-3 mt-lg-0"
            >
              {/* <input 
                className="form-control me-2"
                type="search"
                placeholder="Search movies or TV shows..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ background: "transparent", borderColor: "#b89564" }}
              /> */}
              <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search movies or TV shows..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  background: "transparent",
                  borderColor: "#b89564",
                  color: "white",
                }}
              />

              <button className="btn my-botton" type="submit">
                Search
              </button>
            </form>
            <div className="search-results">
              {results.map((item) => (
                <Link
                  onClick={() => {
                    setSearch("");
                    setResults([]);
                  }}
                  key={item.id}
                  to={
                    item.media_type === "movie"
                      ? `/movie/${item.id}`
                      : `/tv/${item.id}`
                  }
                  className="result-item"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w92${
                      item.poster_path || item.profile_path
                    }`}
                    alt=""
                  />

                  <div>
                    <p>{item.title || item.name}</p>

                    <small>{item.media_type}</small>
                  </div>
                </Link>
              ))}
            </div>
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
  position: relative;
  z-index: 9999999;

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
    width: 70px;
    object-fit: contain;
    margin-left: 10px;
    height: 65px;
    border-radius: 5px;
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

  & .search-results {
    position: absolute;
    width: 100%;
    background: #111;
    z-index: 999;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
    @media (min-width: 668px) {
      margin-top: 630px;
    }
  }

  & .result-item {
    display: flex;
    gap: 10px;
    padding: 10px;
    text-decoration: none;
    color: white;
  }

  & .result-item:hover {
    background: #222;
  }

  & .result-item img {
    width: 50px;
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
