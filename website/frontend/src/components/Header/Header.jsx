import { Link, useHistory } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { getToken, deleteToken } from "../../services/token.services";
import { deleteUserId } from "../../services/userId.services";
import "./Header.css";

const Header = ({ setToken }) => {
    const history = useHistory();
    const { token } = useToken();

    return (
        <header className="page--header">
            <nav className="nav">
                <Link to="/" className="nav--link">
                    <h1 className="nav--logo">Accessib.lol</h1>
                </Link>

                <Link to="/profile" className="nav--link nav--links--sub">
                    <h2 className="nav--subhead">Profile</h2>
                </Link>

                <Link to="/demo" className="nav--link nav--links--sub">
                    <h2 className="nav--subhead">Demo</h2>
                </Link>
            </nav>

            <button
                onClick={() => {
                    if (token) {
                        deleteToken();
                        deleteUserId();
                        setToken(getToken());
                        history.push("/");
                    } else {
                        history.push("/login");
                    }
                }}
            >
                {token ? "Logout" : "Login"}
            </button>
        </header>
    );
};

export default Header;
