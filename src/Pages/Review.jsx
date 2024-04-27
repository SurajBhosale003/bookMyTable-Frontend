import '../App.css'
import { useEffect,useState } from 'react';
import Swiper from 'swiper';
import { getTopReviews } from '../Api';

function Review() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchTopReviews = async () => {
            try {
                const topReviews = await getTopReviews(); // Fetch top reviews from API
                setReviews(topReviews); // Update state with fetched reviews
            } catch (error) {
                console.error('Error fetching top reviews:', error);
            }
        };

        fetchTopReviews(); // Call fetchTopReviews function on component mount
    }, []);

    useEffect(() => {
        const swiper = new Swiper(".review-slider", {
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                }
            },
        });
        
        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section className="review" id="review">
            <h1 className="heading">reviews <span>what people says</span></h1>
            <div className="swiper review-slider">
                <div className="swiper-wrapper">
                    {reviews.map(review => (
                        <div className="swiper-slide box" key={review._id}>
                            <i className="fas fa-quote-left"></i>
                            <i className="fas fa-quote-right"></i>
                            <img src={review.image} alt="" />
                            <div className="stars">
                                {Array.from({ length: review.rating }, (_, index) => (
                                    <i className="fas fa-star" key={index}></i>
                                ))}
                            </div>
                            <p>{review.quote}</p>
                            <h3>{review.author}</h3>
                            <span>{review.designation}</span>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}

export default Review;
