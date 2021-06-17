import "./LinkButton.css";

const LinkButton = (props) => {
    return (
        <a
            className="link-button"
            href={props.href}
            target={props.external ? "_blank" : ""}
            rel="noreferrer"
        >
            {props.children}
        </a>
    );
};

export default LinkButton;
