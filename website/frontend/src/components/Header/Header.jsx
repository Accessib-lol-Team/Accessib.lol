import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="page--header">
            <Link to="/" className="logo--link">
                <h1 className="logo">Accessib.lol</h1>
            </Link>
            <button>Login</button>
        </header>
    );
};

export default Header;
