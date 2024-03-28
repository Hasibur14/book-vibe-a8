import { useEffect, useState } from "react";
import ReadWishlistBooks from "./ReadWishlistBooks";
import { getWishlistBooks } from "./Utility";


const Wishlist = () => {

    const [wishlistBook, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedWishlistBooks = getWishlistBooks();
        setWishlistBooks(storedWishlistBooks);
    }, []);


    return (
        <div>
            {
                wishlistBook.map(book => <ReadWishlistBooks key={book.id} book={book}></ReadWishlistBooks>)
            }

        </div>
    );
};

export default Wishlist;