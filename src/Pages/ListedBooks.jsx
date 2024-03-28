import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ReadBooks from '../components/ReadBooks';
import { getReadBooks } from '../components/Utility';
import Wishlist from '../components/Wishlist';

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [books, setBooks] = useState([]);
    const [sortOption, setSortOption] = useState('rating'); // Initialize with a default sort option

    useEffect(() => {
        const storedReadBooks = getReadBooks();
        const sortedReadBooks = sortReadBooks(storedReadBooks, sortOption); 
        setBooks(sortedReadBooks);
    }, [sortOption]); // Trigger useEffect whenever sortOption changes

    const sortReadBooks = (books, criteria) => {
        let sortedBooks = [...books];
        switch (criteria) {
            case 'rating':
                sortedBooks.sort((a, b) => b.rating - a.rating);
                break;
            case 'pages':
                sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
                break;
            case 'year':
                sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                break;
            default:
                break;
        }
        return sortedBooks;
    };

    const handleBooksFilter = (filter) => {
        if (['pages', 'rating', 'year'].includes(filter)) {
            setSortOption(filter);
        }
    };

    return (
        <div>
            <div className="bg-base-200 h-16 text-center rounded-lg mx-24">
                <h2 className="text-4xl font-bold">Books</h2>
            </div>
            <div className="mt-6 text-center">
                <div className="dropdown dropdown-right dropdown-bottom">
                    <select value={sortOption} className='m-1 bg-green-400 text-white text-lg p-2 rounded-md' onChange={(e) => handleBooksFilter(e.target.value)}>
                        <option value="rating">Sort by Rating</option>
                        <option value="pages">Sort by Pages</option>
                        <option value="year">Sort by Year</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center mx-24 overflow-x-auto overflow-y-hidden flex-nowrap">
                <Link to={``} onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 text-green-400 font-semibold' : 'border-b'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>

                <Link to={`wishlistBooks`} onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 text-green-400 font-semibold' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Routes>
                <Route path="" element={<ReadBooks />} />
                <Route path="wishlistBooks" element={<Wishlist />} />
            </Routes>
        </div>
    );
};

export default ListedBooks;
