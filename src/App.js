import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import styled from "styled-components";
import CreatePost from "../src/components/CreatePost";

const App = () => {
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
          path="/product-page"
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
`;
export default App;
