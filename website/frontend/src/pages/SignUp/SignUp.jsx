import { useHistory, Link } from "react-router-dom";
import AuthPage from "../../components/AuthPage";
import SignUpForm from "../../components/SignUpForm";
import { postSignUp, postLogin } from "../../services/api.services.js";
import "./SignUp.css";

const SignUp = ({ setToken }) => {
    const history = useHistory();

    const SignUp = async (username, email, password, lolUsername, pronouns) => {
        const data = await postSignUp({
            username: username,
            email: email,
            password: password,
            lolUsername: lolUsername,
            pronouns: pronouns,
        });

        if (data.id) {
            history.push("/profile");
        } else {
            alert("Incorrect form info");
        }
    };

    const handleSignUpSubmit = (
        username,
        email,
        password,
        lolUsername,
        pronouns
    ) => {
        SignUp(username, email, password, lolUsername, pronouns);
    };

    return (
        <AuthPage>
            <SignUpForm handleSignUpSubmit={handleSignUpSubmit} />
            <div className="signup--alt-link">
                Have an account? <Link to="login">Log In</Link>
            </div>
        </AuthPage>
    );
};

export default SignUp;
