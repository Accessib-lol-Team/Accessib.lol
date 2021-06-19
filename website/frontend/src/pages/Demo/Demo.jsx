import "./Demo.css";

const Demo = () => {
    return (
        <section className="demo--content">
            <h3 className="demo--header">Demo Video</h3>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Xeds_n0SROU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </section>
    );
};

export default Demo;
