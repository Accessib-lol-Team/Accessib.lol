import { useHistory, Link } from "react-router-dom";
import AuthPage from "../../components/AuthPage";
import SignUpForm from "../../components/SignUpForm";

const SignUp = () => {
    const history = useHistory();

    const SignUp = async (username, email, password, lolUsername, pronouns) => {
        const data = {
            username: username,
            email: email,
            password: password,
            lolUsername: lolUsername,
            pronouns: pronouns,
        };

        if (data.id) {
            history.push("/login");
        } else {
            alert("Incorrect form info");
        }
    };

    const handleSignUpSubmit = (email, password) => {
        SignUp(email, password);
    };

    return (
        <AuthPage>
            <SignUpForm handleSignUpSubmit={handleSignUpSubmit} />
            Have an account? <Link to="login">Log In</Link>
        </AuthPage>
    );
};

export default SignUp;
