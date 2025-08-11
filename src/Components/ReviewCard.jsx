import { FaStar } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ReviewCard = ({
  shopName,
  reviewText,
  rating,
  date,
  onDetails,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 border border-gray-100 w-96">
      {/* Header */}
      <div className="flex items-center justify-between gap-6">
        <h3 className="text-lg font-semibold text-gray-800">{shopName}</h3>
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{rating} / 5</span>
        </div>
      </div>

      <span className="text-xs text-gray-500">{date}</span>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
        {reviewText}
      </p>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-700 bg-red-100 hover:underline text-sm btn btn-circle border-none"
          >
            <MdDeleteForever size={25} />
          </button>
        </div>

        <div>
          <button onClick={onDetails} className="btn btn-circle border-none">
            <IoInformationCircle size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
