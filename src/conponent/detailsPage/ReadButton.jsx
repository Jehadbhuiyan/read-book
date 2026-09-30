'use client';
import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";
import { toast } from 'react-toastify';

export const ReadButton = ({ book }) => {
    const {readBook, setReadBooks} = useContext(BooksContext);
    const handleReadClick = () => {
        // Handle the read button click event here
        console.log(`Read button clicked for book: ${book.bookName}`);
        setReadBooks([...readBook, book]);

        toast.success(`You have marked "${book.bookName}" as read!`);

    }
    return (
    <button onClick={handleReadClick}
      type="button"
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-100 px-5 py-3 font-semibold text-emerald-700 shadow-md shadow-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:from-emerald-600 hover:to-teal-500 hover:text-white hover:shadow-lg hover:shadow-emerald-200 active:scale-95"
    >
      {/* Book Icon */}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7v14m0-14C10.5 5.8 8.5 5 6 5H3v14h4c2 0 3.8.7 5 2m0-14c1.5-1.2 3.5-2 6-2h3v14h-4c-2 0-3.8.7-5 2"
          />
        </svg>
      </span>

      <span className="text-sm tracking-wide">
        Read
      </span>

      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
};

export default ReadButton;
