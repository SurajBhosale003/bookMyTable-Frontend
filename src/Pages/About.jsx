import '../App.css'

function About() {
    return (
        <section className="about" id="about">
            <h1 className="heading">about us <span>why choose us</span></h1>
            <div className="row">
                <div className="image">
                    <img src="image/about-img.png" alt="" />
                </div>
                <div className="content">
                    <h3 className="title">what s make our coffee special!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum laboriosam reprehenderit ipsa id
                        repellat odio illum, voluptas, necessitatibus assumenda adipisci. Hic, maiores iste? Excepturi illo
                        dolore mollitia qui quia.</p>
                    <a href="#" className="btn">read more</a>
                    <div className="icons-container">
                        <div className="icons">
                            <img src="image/about-icon-1.png" alt="" />
                            <h3>quality coffee</h3>
                        </div>
                        <div className="icons">
                            <img src="image/about-icon-2.png" alt="" />
                            <h3>our branches</h3>
                        </div>
                        <div className="icons">
                            <img src="image/about-icon-3.png" alt="" />
                            <h3>free delivery</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
