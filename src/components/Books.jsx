import { useLoaderData } from "react-router-dom";
import ratingImg from '../assets/images/Frame (7).png';
const Books = () => {
    const { books } = useLoaderData();


    // if (!books) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="lg:px-24">
            <h1 className="text-4xl font-bold text-center my-10">Books</h1>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {books.map(book => (
                <div key={book.bookId} className="card lg:w-96 bg-base-100 shadow-md border-2 p-2 lg:p-0">
                    <div className="bg-base-200 m-4 h-64 rounded-lg">
                        <figure>
                            <img className="w-32 h-44  mt-10 " src={book.image} alt={book.bookName} />
                        </figure>
                    </div>
                    <div className="card-body ">
                        <div className="flex justify-around">
                            {
                                book.tags.map(tag => (
                                    <div key={tag} className="badge badge-success text-white mr-2">{tag}</div>
                                ))
                            }
                        </div>
                        <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
                        <p className=" italic">By:   {book.author}</p>
                        <hr />
                        <div className="flex lg:ml-14">
                            <p>{book.category}</p>
                            <p className="flex">{book.rating} <img className="w-4 ml-2" src={ratingImg} alt="" /></p>
                        </div>
                    </div>
                </div>
            ))}
           </div>
        </div>
    );
};

export default Books;
