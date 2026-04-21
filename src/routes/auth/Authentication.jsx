import { useState } from "react";
import "./auth.css";
import axios from "axios";
import Button from "../../components/general/Button.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return;
    const route = _switch ? "/api/auth/login" : "/api/auth/register";
    axios.post(route, { username, password })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch(() => {});
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-header">
          <Button
            label="Sign In"
            className={`auth-btn ${_switch ? "auth-btn-active" : "auth-btn-inactive"}`}
            onClick={() => setSwitch(true)}
          />
          <Button
            label="Sign Up"
            className={`auth-btn ${!_switch ? "auth-btn-active" : "auth-btn-inactive"}`}
            onClick={() => setSwitch(false)}
          />
        </div>
        <div className="auth-body">
          {_switch
            ? <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
            : <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
          }
        </div>
      </form>
    </div>
  );
}

export default Authentication;
