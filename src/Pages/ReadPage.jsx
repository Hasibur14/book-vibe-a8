import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"; // Import only necessary components
import { getReadBooks } from "../components/Utility";

const ReadPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getReadBooks();
        setBooks(storedBooks);
    }, []);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
       <div className="pt-28">
         <div className="bg-base-200 p-10 mx-28 rounded-xl ">
            {books && books.length > 0 ? (
                <BarChart
                    width={1200}
                    height={500}
                    data={books.map(book => ({ name: book.bookName, pages: book.totalPages }))}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {books.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            ) : (
                <div>No data available</div>
            )}
        </div>
       </div>
    );
};

export default ReadPage;
