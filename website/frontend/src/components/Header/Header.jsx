import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const history = useHistory();

    return (
        <header className="page--header">
            <nav className="nav">
                <Link to="/" className="nav--link">
                    <h1 className="nav--logo">Accessib.lol</h1>
                </Link>

                <Link to="/profile" className="nav--link nav--links--sub">
                    <h2 className="nav--profile">Profile</h2>
                </Link>
            </nav>

            <button
                onClick={() =>
                    // Remove bearer token
                    history.push("/login")
                }
            >
                Login
            </button>
        </header>
    );
};

export default Header;
