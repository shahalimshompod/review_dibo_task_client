// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ReviewDetailsModal = ({ selectedReview, setSelectedReview }) => {
  if (!selectedReview) return null;

  const { shopName, reviewText, rating, date } = selectedReview;

  return (
    <AnimatePresence>
      {selectedReview && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedReview(null)}
        >
          {/* Modal Card */}
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6"
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inside click
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <h2
              id="modal-title"
              className="text-2xl font-bold mb-4 text-gray-900"
            >
              {shopName}
            </h2>

            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`h-5 w-5 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-700 font-semibold">
                {rating} / 5
              </span>
            </div>

            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap mb-6">
              {reviewText}
            </p>

            <p className="text-sm text-gray-500 mb-6">Reviewed on: {date}</p>

            <button
              onClick={() => setSelectedReview(null)}
              className="mt-auto cursor-pointer font-semibold bg-green-400 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewDetailsModal;
