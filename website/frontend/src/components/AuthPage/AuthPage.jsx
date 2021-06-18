import HeroHeader from "../HeroHeader/HeroHeader";
import "./AuthPage.css";

const AuthPage = (props) => {
    return (
        <main className="auth-content">
            <HeroHeader />
            {props.children}
        </main>
    );
};

export default AuthPage;
