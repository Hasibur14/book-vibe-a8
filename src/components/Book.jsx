
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ratingImg from '../assets/images/Frame (7).png';

const Book = ({ book }) => {

    const { image, bookName,  tags, author, category, rating } = book;

    return (
        <>
            <div className="card lg:w-96 bg-base-100 shadow-md border-2 p-2 lg:p-0">
                <Link to={`/book/${book.bookId}`}>
                    <div className="bg-base-200 m-4 h-64 rounded-lg">
                        <figure>
                            <img className="w-32 h-44 mt-10" src={image} alt={bookName} />
                        </figure>
                    </div>
                    <div className="card-body ">
                        <div className="flex justify-around">
                            {
                                tags.map(tag => (
                                    <div key={tag} className="badge badge-success text-white mr-2">{tag}</div>
                                ))
                            }
                        </div>
                        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                        <p className="italic">By: {author}</p>
                        <hr />
                        <div className="flex lg:ml-14">
                            <p>{category}</p>
                            <p className="flex">{rating} <img className="w-4 ml-2" src={ratingImg} alt="" /></p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};



Book.propTypes = {
    book: PropTypes.shape({
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired
};

export default Book;
