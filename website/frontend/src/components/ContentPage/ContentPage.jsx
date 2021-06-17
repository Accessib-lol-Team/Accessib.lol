import Header from "../../components/Header";
import "./ContentPage.css";

const ContentPage = (props) => {
    return (
        <div>
            <Header />

            <main className="content">{props.children}</main>
        </div>
    );
};

export default ContentPage;
