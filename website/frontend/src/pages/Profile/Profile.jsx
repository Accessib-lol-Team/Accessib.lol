import { useState, useEffect } from "react";
import ContentPage from "../../components/ContentPage";
import useToken from "../../hooks/useToken";
import { getUserById, patchUser } from "../../services/api.services";
import "./Profile.css";

const Profile = () => {
    const { token } = useToken();
    const [userData, setUserData] = useState();

    useEffect(() => {
        const data = getUserById(token, "id");
        setUserData(data);
    }, [token]);

    return (
        <ContentPage>
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
                    />

                    <input
                        className="profile--form--input"
                        type="password"
                        placeholder="password"
                    />

                    <input
                        className="profile--form--input"
                        type="text"
                        placeholder="League of Legends Username"
                    />

                    <input
                        className="profile--form--input"
                        type="text"
                        placeholder="Pronouns"
                    />

                    <button type="submit">Update</button>
                </form>
            </section>
        </ContentPage>
    );
};

export default Profile;
