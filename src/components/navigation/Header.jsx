import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <nav className="header">
      <p className="header-title">Cinema Guru</p>
      <div className="header-user">
        <img src="https://picsum.photos/100/100" alt="avatar" className="header-avatar" />
        <p className="header-welcome">Welcome, {userUsername}!</p>
        <span className="header-logout" onClick={logout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </span>
      </div>
    </nav>
  );
}

export default Header;
