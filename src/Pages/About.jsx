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
                    <p>Our coffee stands out due to the meticulous selection of premium beans sourced from sustainable farms worldwide. Each batch is expertly roasted to perfection, unlocking rich flavors and enticing aromas that captivate the senses. We prioritize quality at every step, ensuring a delightful coffee experience with every sip.</p>
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
