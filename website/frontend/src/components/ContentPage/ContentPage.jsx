const ContentPage = (props) => {
    return (
        <div>
            {/* Header */}
            <main>{props.children}</main>
        </div>
    );
};

export default ContentPage;
