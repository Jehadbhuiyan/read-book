
import React from "react";
import BookCard from "../../conponent/BookCard";

const getData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/booksData.json`);

  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data = await response.json();

  return data;
};

const BookPage = async () => {
  const books = await getData();

  return (
    <section className="bg-base-200 px-4 py-12">
      <div className="container mx-auto">

        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Explore Our Books
          </h1>

          <p className="mt-2 text-base-content/60">
            Find your next favorite book
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default BookPage;

