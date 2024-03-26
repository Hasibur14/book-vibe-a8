import { useLoaderData } from "react-router-dom";
import Book from "./Book";



const Books = () => {
    const { books } = useLoaderData();


    return (
        <div className="lg:px-24">
            <h1 className="text-4xl font-bold text-center my-10">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {books.map(book => <Book key={book.id} book={book}></Book>)}
            </div>
        </div>
    );
};

export default Books;
