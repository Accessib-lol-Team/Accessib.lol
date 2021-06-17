import ContentPage from "../../components/ContentPage";
import "./Profile.css";

const Profile = () => {
    return (
        <ContentPage>
            <section className="profile--content">
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
