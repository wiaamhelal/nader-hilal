import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import styled from "styled-components";
import CreatePost from "../src/components/CreatePost";
import whatsap from "./img/whatsapp-svgrepo-com.svg";
const App = () => {
  const navicate = useNavigate();
  return (
    <Main
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto//patterns/horizontal)",
        // backgroundSize: "320% auto",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <a className="w-contact" href="https://wa.me/+963938353816">
        <img src={whatsap} alt="" />
      </a>
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
          path="/product-page/:id"
          element={
            <>
              <Header />
              <ProductPage />
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
