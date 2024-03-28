
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ReadBooks from '../components/ReadBooks';
import { getReadBooks, getWishlistBooks } from '../components/Utility';
import Wishlist from '../components/Wishlist';


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [sortOption, setSortOption] = useState('rating');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const readBooks = getReadBooks();
        const wishlistBooks = getWishlistBooks();
        const allBooks = [...readBooks, ...wishlistBooks];
        setBooks(allBooks);

    }, []);

     console.log("listed form option",books)

     const sortBooks = (option) => {
        let sortedBooks = [...books]; // Make a copy of the books array
        switch (option) {
            case "rating":
                sortedBooks.sort((a, b) => b.rating - a.rating);
                break;
            case "pages":
                sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
                break;
            case "year":
                sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;
            default:
                // No sorting
                break;
        }
        setBooks(sortedBooks);
    };

    return (
        <div>
            <div className="bg-base-200 h-16 text-center rounded-lg mx-24">
                <h2 className="text-4xl font-bold">Books</h2>
            </div>
            <div className="mt-6 text-center">
                <div className="dropdown dropdown-right dropdown-bottom ">
                    <select value={sortOption} className='m-1 bg-green-400 text-white text-lg p-2 rounded-md ' onChange={(e) => { setSortOption(e.target.value); sortBooks(e.target.value); }}>
                        <option value="rating">Sort by Rating</option>
                        <option value="pages">Sort by Pages</option>
                        <option value="year">Sort by Year</option>
                    </select>
                </div>
            </div>

            {/* Tab */}
            <div className="flex items-center mx-24 overflow-x-auto overflow-y-hidden  flex-nowrap ">

                <Link to={`readBooks`} onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 text-green-400 font-semibold' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books
                    </span>
                </Link>

                <Link to={`wishlistBooks`} onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2   ${tabIndex === 1 ? 'border border-b-0 text-green-400 font-semibold' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Routes>
                <Route path="readBooks" element={<ReadBooks />} />
                <Route path="wishlistBooks" element={<Wishlist />} />
            </Routes>
        </div>
    );
};

export default ListedBooks;
