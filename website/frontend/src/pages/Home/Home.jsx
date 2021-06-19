import LinkButton from "../../components/LinkButton";
import "./Home.css";

const Home = () => {
    return (
        <section className="home--content">
            <div>
                <p className="home--description">
                    Accessib.lol was created to address lack of inclusion and
                    accessibility features across many modern esports titles.
                    Both the communities of these games--as well as the
                    accessibility tools available within--aren't able to reach
                    the needs of every potential player.{" "}
                    <strong>Video games are for everyone </strong>
                    and this project seeks to augment inclusion and access in
                    one of the world's biggest titles: League of Legends.
                </p>
            </div>

            <div className="external-buttons">
                <LinkButton
                    href="https://github.com/Accessib-lol-Team/Accessib.lol/blob/main/overwolf-dist.zip"
                    external
                >
                    Overwolf App
                </LinkButton>

                <LinkButton
                    href="https://github.com/Accessib-lol-Team/Accessib.lol"
                    external
                >
                    Github Repo
                </LinkButton>

                <LinkButton
                    href="https://devpost.com/software/accessib-lol"
                    external
                >
                    Devpost Link
                </LinkButton>
            </div>
        </section>
    );
};

export default Home;
