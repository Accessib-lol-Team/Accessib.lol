import "./AuthCard.css";

const AuthCard = (props) => {
    return <section className="auth--content">{props.children}</section>;
};

export default AuthCard;
