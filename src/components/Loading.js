import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingScreen>
      <div className="loader">
        <div className="circle"></div>
        <h2>Loading</h2>
      </div>
    </LoadingScreen>
  );
};
const LoadingScreen = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 78%;
  .loader {
    text-align: center;
  }

  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid rgba(184, 149, 100, 0.2);
    border-top: 5px solid #b89564;
    animation: spin 1s linear infinite;
    margin: auto;
  }

  h2 {
    color: #b89564;
    margin-top: 20px;
    letter-spacing: 5px;
    animation: glow 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes glow {
    0% {
      opacity: 0.4;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0.4;
    }
  }
`;
export default Loading;
