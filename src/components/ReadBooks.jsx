import { useEffect, useState } from "react";
import ReadWishlistBooks from "./ReadWishlistBooks";
import { getBooks } from "./Utility";

const ReadBooks = () => {

    const [books, setBooks] = useState([]);
    console.log(books)

    useEffect(() => {
        const storedBooks = getBooks();
        setBooks(storedBooks);
    }, []);


    return (                                  
        <div>
           {
                books.map(book =><ReadWishlistBooks key={book.id} book={book}></ReadWishlistBooks> )
            }
        </div>
    );
};

export default ReadBooks;