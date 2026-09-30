'use client';
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";
import { toast } from 'react-toastify';

const WishlistButton = ({ book }) => {
    const {wishlistBooks, setWishlistBooks} = useContext(BooksContext);
    const handleWishlistClick = () => {
        // Handle the wishlist button click event here
        console.log(`Wishlist button clicked for book: ${book.bookName}`);
        setWishlistBooks([...wishlistBooks, book]);
        toast.success(`You have added "${book.bookName}" to your wishlist!`);
    }
 
  return (
    <button onClick={()=>handleWishlistClick()}
      type="button"
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-100 px-5 py-3 font-semibold text-rose-600 shadow-md shadow-pink-100 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:from-rose-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-rose-200 active:scale-95"
    >
      {/* Heart Icon */}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-rose-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
          />
        </svg>
      </span>

      <span className="text-sm tracking-wide">
        Wishlist
      </span>

      {/* Arrow */}
      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
};

export default WishlistButton;