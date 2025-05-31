import React from "react";
import "./LoadingScreen.css";

export const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <div className="loading-text">🕓 Please wait...</div>
      </div>
  );
};

export default LoadingScreen;
