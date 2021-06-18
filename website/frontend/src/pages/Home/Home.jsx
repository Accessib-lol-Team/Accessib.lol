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
                    <a
                        href="https://www.youtube.com/watch?v=RWQcuBigOj0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Video games are for everyone{" "}
                    </a>
                    and this project seeks to augment inclusion and access in
                    one of the world's biggest titles: League of Legends.
                </p>
            </div>

            <div className="external-buttons">
                <button className="external-button">Download App</button>

                <LinkButton
                    href="https://github.com/Accessib-lol-Team/Accessib.lol"
                    external
                >
                    Github Repo
                </LinkButton>

                <LinkButton href="https://pridemakers.devpost.com/" external>
                    Devpost Link
                </LinkButton>
            </div>
        </section>
    );
};

export default Home;
