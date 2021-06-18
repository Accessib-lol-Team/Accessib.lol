import { Link } from "react-router-dom";
import "./HeroHeader.css";

const HeroHeader = () => {
    return (
        <Link className="hero--link" to="/">
            <h1 className="hero--header">Accessib.lol</h1>
        </Link>
    );
};

export default HeroHeader;
