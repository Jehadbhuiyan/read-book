import React from 'react';
import { Link } from 'next/link';
import { Image } from 'next/image';

const HomePage  = ({book}) => {
      return (
  
    <div className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10">
      
      {/* Top Image Section */}
      <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-base-200/80 via-base-200/50 to-base-300/60 p-4">
        <Image
          src={book?.image}
          alt={book?.bookName || "Book cover"}
          width={180}
          height={250}
          priority
          className="h-56 w-36 rounded-md object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Rating Badge on Image */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-base-100/90 px-3 py-1 text-xs font-semibold backdrop-blur-md shadow-sm border border-base-200">
          <span className="text-amber-400">★</span>
          <span>{book?.rating ? book.rating.toFixed(1) : 'N/A'}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5 flex flex-1 flex-col justify-between">
        <div>
          {/* Dynamic Tags */}
          <div className="flex flex-wrap gap-2">
            {book?.tags?.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Book Title */}
          <h2 className="mt-3 line-clamp-1 text-xl font-bold tracking-tight text-base-content transition-colors group-hover:text-primary">
            {book?.bookName}
          </h2>

          {/* Author Name */}
          <p className="mt-1 text-sm text-base-content/70">
            By : <span className="font-medium text-base-content">{book?.author}</span>
          </p>
        </div>

        {/* Footer Info & Button */}
        <div className="mt-6 border-t border-dashed border-base-200 pt-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5 font-medium text-base-content/80">
              <span className="opacity-60">📖</span>
              <span>{book?.category}</span>
            </div>

            <div className="flex items-center gap-1 font-semibold text-base-content">
              <span>{book?.rating ? book.rating.toFixed(2) : '0.00'}</span>
              <span className="text-base-content/70">☆</span>
            </div>
          </div>

          {/* Details Button */}
          <Link href={`/books/${book?.bookId}`} className="mt-5 block">
            <button className="btn btn-primary w-full rounded-2xl font-semibold shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30">
              View Details
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default HomePage;