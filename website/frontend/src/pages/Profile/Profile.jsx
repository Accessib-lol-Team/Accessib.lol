import { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";
import useUserId from "../../hooks/useUserId";
import { getUserById, patchUser } from "../../services/api.services";
import "./Profile.css";

const Profile = ({ setToken }) => {
    const { token } = useToken();
    const { userId } = useUserId();

    const [userData, setUserData] = useState();

    const loadUserData = async (token, userId) => {
        const data = await getUserById(token, userId);

        if (data.id) {
            setUserData(data);
        }
    };

    useEffect(() => {
        loadUserData(token, userId);
    }, [token, userId]);

    return (
        <section className="profile--content">
            <h3 className="profile--header">Your Details</h3>
            <form
                className="profile--form"
                onSubmit={(e) => {
                    e.preventDefault();
                    // Update account
                }}
            >
                <input
                    className="profile--form--input"
                    type="text"
                    placeholder="username"
                    defaultValue={userData ? userData.username : ""}
                />

                <input
                    className="profile--form--input"
                    type="email"
                    placeholder="email"
                    defaultValue={userData ? userData.email : ""}
                />

                <input
                    className="profile--form--input"
                    type="password"
                    placeholder="Password"
                    defaultValue={""}
                />

                <input
                    className="profile--form--input"
                    type="text"
                    placeholder="League of Legends Username"
                    defaultValue={userData ? userData.lolUsername : ""}
                />

                <input
                    className="profile--form--input"
                    type="text"
                    placeholder="Pronouns"
                    defaultValue={userData ? userData.pronouns : ""}
                />

                <button type="submit">Update</button>
            </form>
        </section>
    );
};

export default Profile;
