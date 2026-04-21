import "./auth.css";
import Input from "../../components/general/Input.jsx";
import Button from "../../components/general/Button.jsx";
import { faUser, faKey, faPlus } from "@fortawesome/free-solid-svg-icons";

function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-body-content">
      <h2>Create a new account</h2>
      <Input
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
        icon={faKey}
      />
      <div className="auth-submit">
        <Button label="Sign Up" icon={faPlus} className="auth-submit-btn" type="submit" />
      </div>
    </div>
  );
}

export default Register;
