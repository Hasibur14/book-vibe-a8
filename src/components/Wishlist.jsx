import { useEffect, useState } from "react";
import { getBooks } from "./Utility";

const Wishlist = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getBooks();
        setBooks(storedBooks);
    }, []);


    return (
        <div>
            {/* {
                books.map(book =><ReadWishlistBooks key={book.id}></ReadWishlistBooks> )
            } */}
           
        </div>
    );
};

export default Wishlist;