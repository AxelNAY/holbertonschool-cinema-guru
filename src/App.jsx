import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Authentication from "./routes/auth/Authentication.jsx";
import Dashboard from "./routes/dashboard/Dashboard.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios.post("/api/auth/", null, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="App">
      {isLoggedIn
        ? <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        : <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      }
    </div>
  );
}

export default App;
