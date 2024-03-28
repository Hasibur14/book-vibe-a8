import { useState } from "react";
import toast from 'react-hot-toast';
import { useLoaderData } from "react-router-dom";
import { saveReadBook, saveWishlistBook } from "./Utility";

const BookDetails = () => {

    const book = useLoaderData();
    const { image, bookName, tags = [], author, review, rating, totalPages, publisher, yearOfPublishing, category } = book;


    const [readBook, setReadBook] = useState([]);
    const [wishlistBook, setWishlistBook] = useState([]);

    const handleReadBooks = (book) => {
        saveReadBook(book, readBook);
        setReadBook(prevState => [...prevState, book]);

    }
    const handleWishlist = (book) => {
        const isBookInRead = readBook.some(b => b.bookId === book.bookId);
        const isBookInWishlist = wishlistBook.some(b => b.bookId === book.bookId);

        if (isBookInRead) {
            toast.error('This book is already marked as read.');
        } else if (isBookInWishlist) {
            toast.error('This book is already in your wishlist.');
        } else {
            saveWishlistBook(book, wishlistBook);
            setWishlistBook(prevState => [...prevState, book]);
        }
    }


    return (
        <div>
            <div className="lg:mx-24 pt-20">
                <div className="card lg:card-side bg-base-100 shadow-md justify-between">
                    <div className="bg-base-200 m-4 lg:w-96 lg:h-96  rounded-lg">
                        <figure>
                            <img className="w-60 mt-10" src={image} alt={bookName} />
                        </figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{bookName}</h2>
                        <p>By:  {author}</p>
                        <hr />
                        <p>{category}</p>
                        <hr />
                        <p className=""> <span className="font-bold">Review:  </span>{review}</p>
                        <div className="flex ">
                            <div className="flex space-x-8">
                                <p className="font-bold">Tag:</p>

                                {
                                    tags.map(tag => (
                                        <div key={tag} className="badge badge-success text-white mr-2">{tag}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <hr />
                        <div className="space-y-3">
                            <p>Number of Pages :  <span className="font-bold">{totalPages}</span></p>
                            <p>Publisher : <span className="font-bold">{publisher}</span></p>
                            <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                            <p>Rating: {rating}</p>
                        </div>
                        <div className="card-actions justify-start">

                            <button onClick={() => handleReadBooks(book)} className="btn w-24 bg-white hover:bg-green-500 hover:text-white border-2 border-green-400">READ</button>

                            <button onClick={() => handleWishlist(book)} className="btn w-24 bg-sky-400 text-white hover:text-black">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
