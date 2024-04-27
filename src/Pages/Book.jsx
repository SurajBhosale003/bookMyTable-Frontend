import { useState } from 'react';
import { submitReview } from '../Api';
import { ToastContainer, toast } from 'react-toastify'; // Import toast container and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
import RatingStars from './Components/RatingStars';

function Book() {
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    email: '',
    designation: '',
    rating: 0,
    image: null
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const reviewData = {
            quote: formData.quote,
            author: formData.author,
            email: formData.email,
            designation: formData.designation,
            rating: formData.rating,
            image: formData.image
        };

        await submitReview(reviewData);
        toast.success('Review submitted successfully!'); // Show success toast
        resetForm();
    } catch (error) {
        console.error(error);
        toast.error('Error submitting review!'); // Show error toast
    }
};

const resetForm = () => {
    setFormData({
        quote: '',
        author: '',
        email: '',
        designation: '',
        rating: 0,
        image: null
    });
};

  return (
    <section className="book" id="book">
      <h1 className="heading">Feedback <span>Review </span></h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Quote"
          className="box"
          name="quote"
          value={formData.quote}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          className="box"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="box"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Designation"
          className="box"
          name="designation"
          value={formData.designation}
          onChange={handleInputChange}
        />
        <RatingStars onChange={handleRatingChange} />
        <input
          type="file"
          className="box"
          name="image"
          onChange={handleImageChange}
        />
        <input type="submit" value="Review" className="btn" />
      </form>
      <ToastContainer /> {/* Add ToastContainer at the bottom of your component */}
    </section>
  );
}

export default Book;
