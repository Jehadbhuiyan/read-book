import Image from "next/image";

const BookDetails = ({ book }) => {
  return (
    <div
      key={book.bookId}
      className="group overflow-hidden rounded-3xl bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-base-200 to-base-300 p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={190}
          height={260}
          className="h-60 w-44 rounded-lg object-cover shadow-xl transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-base-100 px-3 py-1 text-xs font-semibold shadow">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-base-100 px-3 py-1 text-sm font-bold shadow">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="line-clamp-1 text-xl font-bold">{book.bookName}</h2>

        <p className="mt-1 text-sm text-base-content/60">by {book.author}</p>

        {/* Review */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/70">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-base-200 pt-4">
          <div>
            <p className="text-xs text-base-content/50">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Publisher</p>
            <p className="font-semibold">{book.publisher}</p>
          </div>

          <div>
            <p className="text-xs text-base-content/50">Rating</p>
            <p className="font-semibold">{book.rating} / 5</p>
          </div>
        </div>

        {/* Button */}
        <button className="btn btn-primary mt-5 w-full rounded-xl">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
