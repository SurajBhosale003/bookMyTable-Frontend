import '../App.css'
function HomePage() {
    // const handleImageClick = (event) => {
    //     const src = event.target.getAttribute('src');
    //     document.querySelector('.main-home-image').src = src;
    // };
    return (
        <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <h3>fresh coffee in the morning</h3>
                    <a href="#" className="btn">buy one now</a>
                </div>
                <div className="image">
                    <img src="image/home-img-1.png" className="main-home-image" alt="" />
                </div>
            </div>
            <div className="image-slider">
                <img src="image/home-img-1.png" alt="" />
                <img src="image/home-img-2.png" alt="" />
                <img src="image/home-img-3.png" alt="" />
            </div>
        </section>
    );
}

export default HomePage;
