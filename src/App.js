import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
