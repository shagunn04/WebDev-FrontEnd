import React, { useContext } from "react";
import { Context } from "./GlobalContext/Context";
import ReviewCard from "./ReviewCard";
import ReviewGraph from "./ReviewGraph"; // Import the ReviewGraph component

function Reviews() {
  const { ReviewSet } = useContext(Context);

  const ReviewList = Array.isArray(ReviewSet)
    ? ReviewSet.map((Review) => (
        <ReviewCard
          key={Review.id}
          id={Review.id}
          title={Review.Title}
          Rating={Review.rating}
          Review={Review.ReviewArea}
          OneWord={Review.OneWord}
        />
      ))
    : null;

  return (
    <div className="Review-Page">
      <div className="Review-Graph">
        <ReviewGraph /> {/* Display the graph here */}
      </div>
      <div className="Review-List">
      <h1
  style={{
    marginLeft: 120,   
    fontSize: 60,         
    fontFamily: 'Georgia', 
  }}
>
  Reviews
</h1>

        {ReviewList.length == 0 ? <h1 style={{
    marginLeft: 120,   
    fontSize: 60,         
    fontFamily: 'monospace', 
    color:"darkgoldenrod"
  }}>Oops, there's no review</h1> : ReviewList}
      </div>
    </div>
  );
}

export default Reviews;
