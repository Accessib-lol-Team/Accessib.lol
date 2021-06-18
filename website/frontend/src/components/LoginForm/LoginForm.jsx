import AuthCard from "../AuthCard";
import "./LoginForm.css";

const LoginForm = ({ handleLogInSubmit }) => {
    return (
        <AuthCard>
            <h3 className="login--header">Welcome Back</h3>
            <form
                className="login--form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogInSubmit(e.target[0].value, e.target[1].value);
                }}
            >
                <input
                    className="login--form--input login--form--textbox"
                    type="email"
                    placeholder="email"
                />

                <input
                    className="login--form--input login--form--textbox"
                    type="password"
                    placeholder="password"
                />

                <button className="login--form--submit" type="submit">
                    Login
                </button>
            </form>
        </AuthCard>
    );
};

export default LoginForm;
