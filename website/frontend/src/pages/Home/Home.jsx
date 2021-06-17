import ContentPage from "../../components/ContentPage";
import "./Home.css";

const Home = () => {
    return (
        <ContentPage>
            <section className="home--content">
                <div>
                    <p className="home--description">
                        Accessib.lol was inspired by the lack of inclusive and
                        accessibility features in many modern esports titles.
                        Accessib.lol seeks to augment the League of Legends
                        in-game experience to provide validation to members of
                        the LGBTQ+ community and other minority groups.
                    </p>
                </div>

                <div className="external-buttons">
                    <button className="external-button">Download App</button>

                    <a
                        className="external-button"
                        href="https://github.com/Accessib-lol-Team/Accessib.lol"
                    >
                        Github Repo
                    </a>

                    <a
                        className="external-button"
                        href="https://pridemakers.devpost.com/"
                    >
                        Devpost Link
                    </a>
                </div>
            </section>
        </ContentPage>
    );
};

export default Home;
