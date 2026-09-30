import ReadButton from "@/conponent/detailsPage/ReadButton";
import WishlistButton from "@/conponent/detailsPage/Wishlish";
import Image from "next/image";
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

const pageDetails = async ({ params }) => {
  const { id } = await params;

  const bookdata = await getData();

  const book = bookdata.find(
    (book) => book.bookId === parseInt(id)
  );

  // Book না পাওয়া গেলে
  if (!book) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <h1 className="text-2xl font-bold">
          Book Not Found
        </h1>
      </div>
    );
  }

  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex flex-col md:flex-row">

        {/* ================= LEFT : BOOK IMAGE ================= */}
        <div className="relative flex min-h-80 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-base-200 via-base-100 to-base-300 p-6 md:min-h-[420px] md:w-2/5">

          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

          <Image
            src={book.image}
            alt={book.bookName}
            width={190}
            height={260}
            className="relative z-10 h-72 w-48 rounded-xl object-cover shadow-2xl transition duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <span className="absolute left-5 top-5 z-20 rounded-full bg-base-100/90 px-4 py-1.5 text-xs font-bold shadow backdrop-blur">
            {book.category}
          </span>

          {/* Rating */}
          <span className="absolute right-5 top-5 z-20 rounded-full bg-base-100/90 px-4 py-1.5 text-sm font-bold shadow backdrop-blur">
            ⭐ {book.rating}
          </span>
        </div>

        {/* ================= RIGHT : BOOK DETAILS ================= */}
        <div className="flex flex-1 flex-col p-6 md:p-8">

          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {book.bookName}
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Written by{" "}
              <span className="font-semibold text-base-content">
                {book.author}
              </span>
            </p>
          </div>

          {/* Review */}
          <p className="mt-5 line-clamp-4 text-sm leading-7 text-base-content/70">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* ================= BOOK INFORMATION ================= */}
          <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-base-200/50 p-4 sm:grid-cols-4">

            <div>
              <p className="text-xs text-base-content/50">
                Pages
              </p>

              <p className="mt-1 font-semibold">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">
                Published
              </p>

              <p className="mt-1 font-semibold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">
                Publisher
              </p>

              <p className="mt-1 truncate font-semibold">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">
                Rating
              </p>

              <p className="mt-1 font-semibold">
                ⭐ {book.rating}
              </p>
            </div>

          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-auto flex justify-end gap-3 pt-6">

            {/* Read / Details */}
            <ReadButton book={book} />

            {/* Wishlist */}
            <WishlistButton book={book} />

          </div>

        </div>
      </div>
    </div>
  );
};

export default pageDetails;