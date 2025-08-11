import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import ReviewsContainer from "./Components/ReviewsContainer";
import { Toaster } from "react-hot-toast";

const App = () => {
  // add review modal trigger button state
  const [isOpen, setIsOpen] = useState(false);

  // add review function
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const addReview = (review) => {
    const updated = [review, ...reviews];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
  };
  return (
    <div className="flex flex-col gap-5">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} addReview={addReview} />

      <ReviewsContainer reviews={reviews} setReviews={setReviews} />
      <Toaster />
    </div>
  );
};

export default App;
