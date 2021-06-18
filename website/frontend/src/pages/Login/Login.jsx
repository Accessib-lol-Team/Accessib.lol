import { useHistory, Link } from "react-router-dom";
import AuthPage from "../../components/AuthPage";
import LoginForm from "../../components/LoginForm";
import { postLogin } from "../../services/api.services";
import "./Login.css";

const Login = ({ setToken, setUserId }) => {
    const history = useHistory();

    const logIn = async (email, password) => {
        const data = await postLogin({
            email: email,
            password: password,
        });

        if (data.accessToken) {
            setToken(data.accessToken);
            setUserId(data.userId);
            history.push("/profile");
        } else {
            alert("Incorrect login credentials");
        }
    };

    const handleLogInSubmit = (email, password) => {
        logIn(email, password);
    };

    return (
        <AuthPage>
            <LoginForm handleLogInSubmit={handleLogInSubmit} />
            <div className="login--alt-link">
                Don't have an account? <Link to="signup">Sign Up</Link>
            </div>
        </AuthPage>
    );
};

export default Login;
