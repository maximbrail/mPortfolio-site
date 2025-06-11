import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    console.log("All Users: ", users);
    console.log("Entered: ", { email, password });
    console.log("User found: ", user);

    if (user) {
      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/dashboard");
        window.dispatchEvent(new Event("storage"));
      }
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-btn">
          Login
        </button>
        {errorMsg && <p className="auth-error">{errorMsg}</p>}
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="auth-link">
          Register!
        </Link>
      </p>
    </div>
  );
};

export default Login;
