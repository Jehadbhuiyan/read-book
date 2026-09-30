import React from "react";
import BookCard from "../../conponent/BookCard";
import fs from "fs/promises";
import path from "path";

const getData = async () => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "booksData.json"
    );

    const file = await fs.readFile(filePath, "utf-8");

    return JSON.parse(file);
  } catch (error) {
    console.error("Error fetching books data:", error);
    throw error;
  }
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
            <BookCard
              key={book.bookId}
              book={book}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default BookPage;