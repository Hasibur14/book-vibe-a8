
import { useEffect, useState } from "react";
import AuthorInfo from "../components/AuthorInfo";

const Contact = () => {

    const [authors, setAuthor] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAuthor(data.books))
    }, []);


    return (
        <div className="lg:px-24 pt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    authors.map(item => <AuthorInfo key={item.nameId} author={item}></AuthorInfo>)
                }
            </div>
        </div>
    );
};

export default Contact;