import AuthCard from "../AuthCard";

const SignUpForm = ({ handleSignUpSubmit }) => {
    return (
        <AuthCard>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignUpSubmit(
                        e.target[0].value,
                        e.target[1].value,
                        e.target[2].value,
                        e.target[3].value,
                        e.target[4].value
                    );
                }}
            >
                <input type="text" placeholder="username" />

                <input type="email" placeholder="email" />

                <input type="password" placeholder="password" />

                <input type="text" placeholder="League of Legends Username" />

                <input type="text" placeholder="Pronouns" />

                <button type="submit">Sign Up</button>
            </form>
        </AuthCard>
    );
};

export default SignUpForm;
