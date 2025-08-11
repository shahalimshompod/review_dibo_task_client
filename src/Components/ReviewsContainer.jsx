import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewDetailsModal from "./ReviewDetailsModal";
import toast from "react-hot-toast";

const ReviewsContainer = ({ reviews, setReviews }) => {
  const [selectedReview, setSelectedReview] = useState(null);

  // handle delete reviews
  const handleDelete = (id) => {
    console.log(id);
    const reviewsStr = localStorage.getItem("reviews");
    let storedReviews = reviewsStr ? JSON.parse(reviewsStr) : [];

    storedReviews = storedReviews.filter((review) => review.id !== id);

    localStorage.setItem("reviews", JSON.stringify(storedReviews));

    setReviews(storedReviews);
    toast.success("Review Successfully Deleted!");
  };

  return (
    <div className="mx-auto pt-28">
      {reviews?.length === 0 ? (
        <p className="text-gray-500 text-center">No reviews yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews?.map((review) => (
            <ReviewCard
              key={review.id}
              shopName={review.shopName}
              reviewText={review.reviewText}
              rating={review.rating}
              date={review.date}
              onDelete={() => handleDelete(review.id)}
              onDetails={() => setSelectedReview(review)}
            />
          ))}
        </div>
      )}
      <ReviewDetailsModal
        selectedReview={selectedReview}
        setSelectedReview={setSelectedReview}
      />
    </div>
  );
};

export default ReviewsContainer;
