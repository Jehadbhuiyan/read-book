'use client';
import { useState } from "react";
import { createContext } from "react";
export const BooksContext = createContext({});

 export const BooksProvider = ({ children }) => {

    const [ readBook, setReadBooks ] = useState([]);
    const [ wishlistBooks, setWishlistBooks ] = useState([]);
    const sharedState = {
        readBook,
        setReadBooks,
        wishlistBooks,
        setWishlistBooks
    };

    return (<BooksContext.Provider value={sharedState}>
        {/* Your components that need access to the context */}
        {children}
    </BooksContext.Provider>);
};

export default BooksProvider;