import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import CreatePost from "../src/components/CreatePost";
import Login from "./components/Login";
import MoviePage from "./components/MoviePage";
import TvPage from "./components/TvPage";
import CreatePost from "./components/CreatePost";
import SearchPage from "./components/SearchPage";
import ShowMovies from "./components/BrouseMovies";
import BrouseTvShows from "./components/BrouseTvShows";
const App = () => {
  const navicate = useNavigate();
  return (
    <Main
    // style={{
    //   backgroundImage:
    //     "url(https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto//patterns/horizontal)",
    //   // backgroundSize: "320% auto",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "repeat",
    // }}
    >
      {/* <a className="w-contact" href="https://wa.me/+963938353816">
        <img src={whatsap} alt="" />
      </a> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <>
              <Header />
              <MoviePage />
            </>
          }
        />

        <Route
          path="/tv/:id"
          element={
            <>
              <Header />
              <TvPage />
            </>
          }
        />
        {/* <Route
          path="/create-post"
          element={
            <>
              <Header />
              <CreatePost />
            </>
          }
        /> */}
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/create-post"
          element={
            <>
              <Header />
              <CreatePost />
            </>
          }
        />
        <Route
          path="/brouse-movies"
          element={
            <>
              <Header />
              <ShowMovies />
            </>
          }
        />
        <Route
          path="/brouse-tv"
          element={
            <>
              <Header />
              <BrouseTvShows />
            </>
          }
        />
        <Route path="/search/:query" element={<SearchPage />} />
      </Routes>
    </Main>
  );
};
const Main = styled.div`
  @media (max-width: 668px) {
    background-size: 320%;
  }

  & .w-contact {
    position: fixed;
    top: 50%;
    right: -35px;
    transform: translateY(-50%);
    color: white;
    border: 1px solid #b89564;
    background: #333333;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 7px;
    & img {
      width: 25px;
      height: 25px;
    }
  }
`;
export default App;
