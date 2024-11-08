import React, { useContext } from "react";
import { Context } from "./GlobalContext/Context";
import "./css/ReviewGraph.css";

function ReviewGraph() {
  const { ReviewSet } = useContext(Context);

  // Initialize count array with 0 values for each rating 1 through 5
  const ratingCounts = Array(5).fill(0);

  // Count occurrences of each rating
  ReviewSet.forEach((review) => {
    const rating = parseInt(review.rating); // Convert rating to integer
    if (rating >= 1 && rating <= 5) {
      ratingCounts[rating - 1] += 1;
    }
  });

  return (
    <div className="ReviewGraph">
      <h2>Rating Distribution</h2>
      <div className="BarChart">
        {ratingCounts.map((count, index) => (
          <div key={index} className="BarContainer">
            <div
              className="Bar"
              style={{
                height: `${count * 20}px`, // Scale height for better visualization
                backgroundColor: "gold", // Yellow color for the bars
              }}
            ></div>
            <span className="BarLabel">Rating {index + 1}</span>
            <span className="CountLabel">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewGraph;
