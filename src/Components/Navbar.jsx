import React from "react";
import { FaPlus } from "react-icons/fa6";
import ReviewFormModal from "./ReviewFormModal";

const Navbar = ({ isOpen, setIsOpen, addReview }) => {
  return (
    <div className="navbar  bg-base-100 shadow-sm fixed">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className="text-2xl uppercase">Shoppinion</a>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="btn bg-green-400  border-none shadow-none"
            >
              <span className="text-white">
                <FaPlus />
              </span>{" "}
              <span className="text-white font-semibold">Add Shop Reviews</span>
            </button>
          </div>
        </div>
      </div>
      <ReviewFormModal
        onSubmit={addReview}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default Navbar;
