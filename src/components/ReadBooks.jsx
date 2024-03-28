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
           <div>
           {readBooks.map(book => <ReadWishlistBooks key={book.bookId} book={book} />)}
        </div>
        </div>
    );
};

export default ReadBooks;