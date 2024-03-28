import PropTypes from 'prop-types';
import location from '../assets/images/location.png';
import page from '../assets/images/page.png';
import publisherImg from '../assets/images/publisher.png';

const ReadWishlistBooks = ({ book }) => {
    const { image, bookName, tags, author, category, rating, totalPages, publisher,yearOfPublishing} = book;


    const handleViewDetails = () => {
        history.push(`/book/${book.bookId}`);
    };


    return (
        <>
            <div className="lg:mx-24 pt-20">
                <div className="flex  card lg:card-side bg-base-100 shadow-md justify-between space-x-10 lg:h-72 border-2">
                    <div className="bg-base-200 m-4 lg:w-60 rounded-lg">
                        <figure>
                            <img className="lg:w-28 mt-10" src={image} alt={bookName} />
                        </figure>
                    </div>
                    <div className="card-body space-y-3 lg:space-y-0">
                        <h2 className="card-title text-2xl">{bookName}</h2>
                        <p>By:  {author}</p>
                        <hr />
                        <div className="lg:flex">
                            <div className="flex ">
                                <div className="flex space-x-8">
                                    <p className="font-bold">Tag:</p>

                                    {
                                        tags.map((tag, index) => (
                                            <div key={index} className="bg-green-50 text-green-400 rounded-xl p-2 font-semibold mr-2">#{tag}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <p className='flex'><img src={location} alt="" /> Year of Publishing : <span className="font-bold">{yearOfPublishing}</span></p>
                            </div>
                        </div>
                        <div className="space-x- flex">
                            <p className='flex'><img src={publisherImg} alt="" /> Publisher: {publisher}</p>
                            <p className='flex'> <img src={page} alt="" /> Pages :  <span className="font-bold">{totalPages}</span></p>


                        </div>
                        <div className="flex space-x-5">
                            <div className="bg-sky-100 p-2 rounded-md">
                                <p className="text-sky-400">Category: {category}</p>
                            </div>
                            <div className="bg-orange-100 p-2 rounded-md">
                                <p className="text-orange-400">Rating: {rating}</p>
                            </div>
                            <div onClick={handleViewDetails} className="btn bg-green-400 text-white">View Details</div>
                             </div>
                    </div>
                </div>
            </div>
        </>
    );
};



ReadWishlistBooks.propTypes = {
    book: PropTypes.shape({
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired,
        publisher: PropTypes.string.isRequired
    }).isRequired
};

export default ReadWishlistBooks;
