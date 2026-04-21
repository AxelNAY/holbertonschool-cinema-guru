import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./dashboard.css";
import Header from "../../components/navigation/Header.jsx";
import SideBar from "../../components/navigation/SideBar.jsx";
import HomePage from "./HomePage.jsx";
import Favorites from "./Favorites.jsx";
import WatchLater from "./WatchLater.jsx";

function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-body">
          <SideBar />
          <div className="dashboard-content">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
