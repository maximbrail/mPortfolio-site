import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (isAuth !== "true" || !currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("storage"));
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Welcome{user ? `, ${user.email}` : ""}!</h2>
      <p>You have logged into your dashboard.</p>
      <button onClick={() => navigate('/')} className="auth-btn">Return to main page</button>
      <button className="auth-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
