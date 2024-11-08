import React, { useContext, useState} from "react";
import { Context } from "./GlobalContext/Context";
import { Link,useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./css/WriteReview.css";


function WriteReview() {
    const {id}=useParams();
  const [Reviewstate, setReviewstate] = useState(false);
  const [Review, setReview] = useState({
    Title: "",
    ReviewArea: "",
    OneWord: "",
    rating: 0,
    id:id
  });

  const { addReview } = useContext(Context);

  const [value, setValue] = useState(0);

  function handleChange(e) {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
    if (name === "rating") setValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addReview(Review);
    setReviewstate(true);
  }

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= value ? 'gold' : 'gray'}
        />
      );
    }
    return stars;
  };

  console.log({ value });

  return (
    <div className="Comment">
      <Link to="/Host/Income"  style={{ textDecoration: 'none' }}>
        <h1>← Back to Income</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="Write-Review-section">
          {Reviewstate ? (
            <h1>Thanks for sharing your experience</h1>
          ) : (
            <>
              <h1>Tell us about your experience</h1>

              <label htmlFor="Title">Title</label>
              <input
                id="Title"
                type="text"
                placeholder="Give your adventure a Title"
                name="Title"
                onChange={handleChange}
                value={Review.Title}
              />

              <label htmlFor="Review">Review</label>
              <textarea
                name="ReviewArea"
                id="Review"
                placeholder="Elaborate your adventure"
                onChange={handleChange}
                value={Review.ReviewArea}
              ></textarea>

              <label htmlFor="One-Word">One-Word</label>
              <input
                name="OneWord"
                id="One-Word"
                placeholder="Your adventure in One word"
                type="text"
                onChange={handleChange}
                value={Review.OneWord}
              />

              <label htmlFor="range">Give your experience a rating</label>
              <input
                name="rating"
                type="range"
                id="range"
                min="0"
                max="5"
                step="1"
                value={value}
                onChange={handleChange}
              />
              <p>{renderStars()}</p>
              <button>Submit your Review</button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default WriteReview;
