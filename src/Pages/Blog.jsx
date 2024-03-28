import { useEffect, useState } from "react";
import Profile from "../components/Profile";

const Blog = () => {

    const [authors, setAuthor] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAuthor(data.books))
    }, []);


    return (
        <div className="lg:px-24 pt-28">
            <div>
                <h1 className='text-5xl font-bold'></h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between">
                {
                    authors.map(item => <Profile key={item.bookId} profile={item}></Profile>)
                }
            </div>
        </div>
    );
};

export default Blog;