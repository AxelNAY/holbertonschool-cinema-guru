import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faClock, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Activity from "../Activity";
import "./navigation.css";

function SideBar() {
    const [selected, setSelected] = useState("Home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);
        if (pageName === "Home") navigate("/home");
        else if (pageName === "Favorites") navigate("/favorites");
        else if (pageName === "Watch Later") navigate("/watchlater");
    };

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        axios.get("/api/activity", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => setActivities(response.data))
            .catch(() => {});
    }, []);

    return (
        <nav className={`sidebar ${small ? "sidebar-small" : "sidebar-large"}`}
            onMouseEnter={() => { setSmall(false); setShowActivities(true); }}
            onMouseLeave={() => { setSmall(true); setShowActivities(false); }}
        >
            <ul className="sidebar-nav">
                <li className={`sidebar-item ${selected === "Home" ? "sidebar-item-active" : ""}`}
                    onClick={() => setPage("Home")}>
                    <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                    {!small && <span>Home</span>}
                    {!small && selected === "Home" && <FontAwesomeIcon icon={faChevronRight} className="sidebar-arrow" />}
                </li>
                <li className={`sidebar-item ${selected === "Favorites" ? "sidebar-item-active" : ""}`}
                    onClick={() => setPage("Favorites")}>
                    <FontAwesomeIcon icon={faStar} className="sidebar-icon" />
                    {!small && <span>Favorites</span>}
                    {!small && selected === "Favorites" && <FontAwesomeIcon icon={faChevronRight} className="sidebar-arrow" />}
                </li>
                <li className={`sidebar-item ${selected === "Watch Later" ? "sidebar-item-active" : ""}`}
                    onClick={() => setPage("Watch Later")}>
                    <FontAwesomeIcon icon={faClock} className="sidebar-icon" />
                    {!small && <span>Watch Later</span>}
                    {!small && selected === "Watch Later" && <FontAwesomeIcon icon={faChevronRight} className="sidebar-arrow" />}
                </li>
            </ul>
            {showActivities && activities.length > 0 && (
                <div className="sidebar-activities">
                    <h2>Latest Activities</h2>
                    <ul>
                        {activities.slice(0, 10).map((activity, index) => (
                            <Activity key={index} activity={activity} />
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default SideBar;
