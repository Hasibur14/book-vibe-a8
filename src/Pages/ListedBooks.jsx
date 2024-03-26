
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import dropdown from '../assets/images/Frame (8).png';
import ReadBooks from '../components/ReadBooks';
import Wishlist from '../components/Wishlist';


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    

    return (
        <div>
            <div className="bg-base-200 h-16 text-center rounded-lg mx-24 mt-10">
                <h2 className="text-4xl font-bold">Books</h2>
            </div>
            <div className="mt-6 text-center">
                <div className="dropdown dropdown-right dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-400 text-white text-lg ">Sort By <img src={dropdown} alt="" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
                        <li className="hover:bg-sky-400 rounded-lg"><a>Rating</a></li>
                        <li className="hover:bg-sky-400 rounded-lg"><a>Number of Pages</a></li>
                        <li className="hover:bg-sky-400 rounded-lg"><a>Publisher Year</a></li>
                    </ul>
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
