import { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import useUserId from "../../hooks/useUserId";
import { getUserById, patchUser } from "../../services/api.services";
import getPronouns from "../../services/pronouns.services";
import "./Profile.css";

const pronounsList = getPronouns();

const Profile = ({ setToken }) => {
    const { token } = useToken();
    const { userId } = useUserId();

    const [userData, setUserData] = useState();

    const loadUser = async (token, userId) => {
        const data = await getUserById(token, userId);

        if (data.id) {
            setUserData(data);
        }
    };

    const updateUser = async (
        username,
        email,
        password,
        lolUsername,
        pronouns
    ) => {
        if (!password) {
            alert("Please enter your password");
        } else {
            const data = await patchUser(token, userId, {
                username,
                email,
                password,
                lolUsername,
                pronouns,
            });

            if (data.id) {
                alert("Profile updated");
            } else {
                alert("Incorrect form info");
            }
        }
    };

    const handleUpdateUser = (
        username,
        email,
        password,
        lolUsername,
        pronouns
    ) => {
        updateUser(username, email, password, lolUsername, pronouns);
    };

    useEffect(() => {
        loadUser(token, userId);
    }, [token, userId]);

    return (
        <section className="profile--content">
            <h3 className="profile--header">Your Details</h3>
            <form
                className="profile--form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdateUser(
                        e.target[0].value,
                        e.target[1].value,
                        e.target[2].value,
                        e.target[3].value,
                        e.target[4].value
                    );
                }}
            >
                <label className="profile--form--label">
                    Name:
                    <input
                        className="profile--form--input profile--form--textbox"
                        type="text"
                        placeholder="Username"
                        defaultValue={userData ? userData.username : ""}
                    />
                </label>

                <label className="profile--form--label">
                    Email:
                    <input
                        className="profile--form--input profile--form--textbox"
                        type="email"
                        placeholder="Email"
                        defaultValue={userData ? userData.email : ""}
                    />
                </label>

                <label className="profile--form--label">
                    Password:
                    <input
                        className="profile--form--input profile--form--textbox"
                        type="password"
                        placeholder="Password"
                        defaultValue={""}
                    />
                </label>

                <label className="profile--form--label">
                    League of Legends Username:
                    <input
                        className="profile--form--input profile--form--textbox"
                        type="text"
                        placeholder="League of Legends Username"
                        defaultValue={userData ? userData.lolUsername : ""}
                    />
                </label>

                {userData && userData.pronouns && (
                    <label className="profile--form--label">
                        Pronouns:
                        <select
                            className="profile--form--input"
                            defaultValue={
                                userData
                                    ? pronounsList.find(
                                          (pronoun) =>
                                              pronoun.toLowerCase() ===
                                              userData.pronouns.toLowerCase()
                                      )
                                    : "They/Them"
                            }
                        >
                            {userData &&
                                userData.pronouns &&
                                pronounsList.map((pronoun) => {
                                    return (
                                        <option key={pronoun}>{pronoun}</option>
                                    );
                                })}
                        </select>
                    </label>
                )}

                <button className="profile--form--submit" type="submit">
                    Update
                </button>
            </form>
        </section>
    );
};

export default Profile;
