import AuthCard from "../AuthCard";

const LoginForm = ({ handleLogInSubmit }) => {
    return (
        <AuthCard>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogInSubmit(e.target[0].value, e.target[1].value);
                }}
            >
                <input type="email" placeholder="email" />

                <input type="password" placeholder="password" />

                <button type="submit">Login</button>
            </form>
        </AuthCard>
    );
};

export default LoginForm;
