import Header from "../../components/Header";
import "./ContentPage.css";

const ContentPage = (props) => {
    return (
        <div>
            <Header />

            <main class="content">{props.children}</main>
        </div>
    );
};

export default ContentPage;
