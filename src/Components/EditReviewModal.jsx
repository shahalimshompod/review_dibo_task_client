import { useForm } from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useEffect } from "react";

const EditReviewModal = ({
  selectedReviewForEdit,
  setSelectedReviewForEdit,
  onSubmit,
}) => {
  !selectedReviewForEdit && null;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      shopName: selectedReviewForEdit?.shopName,
      reviewText: selectedReviewForEdit?.reviewText,
      rating: selectedReviewForEdit?.rating,
    },
  });

  useEffect(() => {
    reset({
      shopName: selectedReviewForEdit?.shopName,
      reviewText: selectedReviewForEdit?.reviewText,
      rating: selectedReviewForEdit?.rating,
    });
  }, [selectedReviewForEdit, reset]);

  const submitHandler = (data) => {
    const updatedReview = {
      id: Date.now(),
      shopName: data.shopName,
      reviewText: data.reviewText,
      rating: Number(data.rating),
      date: new Date().toLocaleString(),
    };

    onSubmit(updatedReview);
    reset();
    setSelectedReviewForEdit(null);
    toast.success("Review Edited Successfully!");
  };

  return (
    <AnimatePresence>
      {selectedReviewForEdit && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Card */}
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6"
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-xl font-semibold">Edit Shop Review</h2>
              <button
                onClick={() => setSelectedReviewForEdit(false)}
                className="text-red-500 hover:text-red-700 border-none cursor-pointer btn btn-circle bg-red-100 hover:bg-red-200 "
              >
                &times;
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
              {/* Shop Name */}
              <div>
                <input
                  type="text"
                  placeholder="Shop Name"
                  {...register("shopName", {
                    required: "Shop name is required",
                  })}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                />
                {errors.shopName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.shopName.message}
                  </p>
                )}
              </div>

              {/* Review Text */}
              <div>
                <textarea
                  placeholder="Write your review..."
                  rows="4"
                  {...register("reviewText", {
                    required: "Review is required",
                  })}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                />
                {errors.reviewText && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.reviewText.message}
                  </p>
                )}
              </div>

              {/* Rating */}
              <div>
                <select
                  {...register("rating", { required: true })}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select rating</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num > 1 && "s"}
                    </option>
                  ))}
                </select>
                {errors.rating && (
                  <p className="text-red-500 text-sm mt-1">
                    Rating is required
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-400 font-semibold text-white py-2 rounded hover:bg-green-700 transition cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditReviewModal;
