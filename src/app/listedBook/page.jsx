'use client';

import React, { useContext, useState } from 'react';
import { BooksContext } from '../../context/BooksContext';
import Image from 'next/image';

const ListedBookPage = () => {
  const { readBook = [], wishlistBooks = [] } = useContext(BooksContext);
  const [activeTab, setActiveTab] = useState('read'); // 'read' or 'wishlist'

  const booksToDisplay = activeTab === 'read' ? readBook : wishlistBooks;

  const [sortby, setSortby] = useState('rating');

  const sortedBooks = [...booksToDisplay].sort((a, b) => {
    if (sortby === 'rating') {
      return b.rating - a.rating; // Sort by rating in descending order 
    }
    if (sortby === 'pages') {
      return b.totalPages - a.totalPages; // Sort by number of pages in descending order
    }
    if (sortby === 'year') {
      return a.yearOfPublishing - b.yearOfPublishing; // Sort by publisher year in descending order
    }
    return 0;
  });
  const sortedReadBooks = useState(sortedBooks);
  const setSortedBooks = useState(sortedBooks);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* ১. হেডার সেকশন */}
      <div className="bg-base-200 rounded-2xl py-8 mb-8 text-center">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      {/* ২. ফিল্টার / সর্ট ড্রপডাউন (DaisyUI Dropdown) */}
     <div className="flex min-h-[250px] items-center justify-center">
  <div className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-lg">
    <label className="mb-3 block text-center text-sm font-semibold text-base-content/70">
      Select Sort Order
    </label>

    <select
    value={sortby}
    onChange={(e) => setSortby(e.target.value)}
      className="select select-success w-64 rounded-xl bg-base-100 font-medium shadow-sm outline-none transition-all duration-300 focus:shadow-md"
    >
      <option disabled>Sort by</option>
      <option value="rating">Rating</option>
      <option value="pages">Number of Pages</option>
      <option value="year">Publisher Year</option>
    </select>
  </div>
</div>

      {/* ৩. ট্যাবস (Read Books vs Wishlist Books) */}
      <div className="role-tablist tabs tabs-lifted mb-8">
        <button
          role="tab"
          onClick={() => setActiveTab("read")}
          className={`tab text-lg font-medium ${activeTab === "read" ? "tab-active font-bold text-success" : "text-gray-500"}`}
        >
          Read Books ({readBook.length})
        </button>
        <button
          role="tab"
          onClick={() => setActiveTab("wishlist")}
          className={`tab text-lg font-medium ${activeTab === "wishlist" ? "tab-active font-bold text-success" : "text-gray-500"}`}
        >
          Wishlist Books ({wishlistBooks.length})
        </button>
      </div>

      {/* ৪. বইয়ের কার্ড লিস্ট */}
      <div className="space-y-6">
        {sortedBooks.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-base-100 rounded-3xl border border-dashed border-gray-200">
            No books found in this list.
          </div>
        ) : (
          sortedBooks.map((book) => (
            <div
              key={book.bookId}
              className="bg-base-100 rounded-3xl border border-gray-100 p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* বইয়ের ছবি */}
              <div className="col-span-1 md:col-span-4 bg-base-200 rounded-2xl p-6 flex justify-center items-center">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={150}
                  height={220}
                  className="h-52 w-36 object-contain shadow-md rounded-md"
                />
              </div>

              {/* বইয়ের বিস্তারিত তথ্য */}
              <div className="col-span-1 md:col-span-8 flex flex-col gap-4">
                <div>
                  <h2 className="text-2xl font-bold font-serif mb-1">
                    {book.bookName}
                  </h2>
                  <p className="text-sm text-gray-600 font-medium">
                    By : {book.author}
                  </p>
                </div>

                {/* ট্যাবস ও পাবলিশিং বছর */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-bold text-gray-800">Tag</span>
                  {book.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="badge badge-success badge-outline font-medium px-3 py-3"
                    >
                      #{tag}
                    </span>
                  ))}
                  <div className="flex items-center gap-1 text-gray-500 ml-auto md:ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span>Year of Publishing: {book.yearOfPublishing}</span>
                  </div>
                </div>

                {/* পাবলিশার ও পেজ সংখ্যা */}
                <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-b border-dashed border-gray-200 pb-4">
                  <div className="flex items-center gap-2">
                    <span>Publisher: {book.publisher}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Page: {book.totalPages}</span>
                  </div>
                </div>

                {/* নিচের ব্যাজ এবং ভিউ বাটন */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="badge badge-info badge-soft text-blue-600 bg-blue-50 px-4 py-3">
                    Category: {book.category}
                  </span>
                  <span className="badge badge-warning badge-soft text-amber-600 bg-orange-50 px-4 py-3">
                    Rating: {book.rating}
                  </span>
                  <button className="btn btn-success text-white rounded-full px-6 min-h-0 h-10 ml-auto md:ml-0">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListedBookPage;