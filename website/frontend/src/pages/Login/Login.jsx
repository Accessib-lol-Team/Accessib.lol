import { useHistory, Link } from "react-router-dom";
import AuthPage from "../../components/AuthPage";
import LoginForm from "../../components/LoginForm";

const Login = () => {
    const history = useHistory();

    const logIn = async (email, password) => {
        const data = {
            email: email,
            password: password,
        };

        if (data.accessToken) {
            // write token to storage
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
            Don't have an account? <Link to="signup">Sign Up</Link>
        </AuthPage>
    );
};

export default Login;
