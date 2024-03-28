import { useEffect, useState } from "react";
import ReadWishlistBooks from "./ReadWishlistBooks";
import { getReadBooks } from "./Utility";

const ReadBooks = () => {

    const [readBooks, setReadBooks] = useState([]);
  
    useEffect(() => {
        const storedReadBooks =getReadBooks();
       setReadBooks(storedReadBooks);
    }, []);


    return (                                  
        <div>
           {
               readBooks.map(book =><ReadWishlistBooks key={book.id} book={book}></ReadWishlistBooks> )
            }
        </div>
    );
};

export default ReadBooks;