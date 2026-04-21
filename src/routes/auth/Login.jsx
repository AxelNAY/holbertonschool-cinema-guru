import "./auth.css";
import Input from "../../components/general/Input.jsx";
import Button from "../../components/general/Button.jsx";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-body-content">
      <h2>Sign in with your account</h2>
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
        <Button label="Sign In" icon={faKey} className="auth-submit-btn" type="submit" />
      </div>
    </div>
  );
}

export default Login;
