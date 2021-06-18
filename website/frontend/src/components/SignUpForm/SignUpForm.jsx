import AuthCard from "../AuthCard";
import getPronouns from "../../services/pronouns.services";
import "./SignUpForm.css";

const pronounsList = getPronouns();

const SignUpForm = ({ handleSignUpSubmit }) => {
    return (
        <AuthCard>
            <h3 className="signup--header">
                Hi There{" "}
                <span role="img" aria-label="waving hand">
                    👋
                </span>
            </h3>
            <form
                className="signup--form"
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
                <input
                    className="signup--form--input signup--form--textbox"
                    type="text"
                    placeholder="username"
                />

                <input
                    className="signup--form--input signup--form--textbox"
                    type="email"
                    placeholder="email"
                />

                <input
                    className="signup--form--input signup--form--textbox"
                    type="password"
                    placeholder="password"
                />

                <input
                    className="signup--form--input signup--form--textbox"
                    type="text"
                    placeholder="League of Legends Username"
                />

                <select className="signup--form--input">
                    {pronounsList.map((pronoun) => {
                        return <option key={pronoun}>{pronoun}</option>;
                    })}
                </select>

                <button className="signup--form--submit" type="submit">
                    Sign Up
                </button>
            </form>
        </AuthCard>
    );
};

export default SignUpForm;
