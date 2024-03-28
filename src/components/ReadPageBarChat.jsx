// import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

// const ReadPageBarChat = ({ books }) => {
//     const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

//     // Generate data dynamically from books prop
//     const data = books.map((book, index) => ({
//         name: book.bookName,
//         page: book.pagesRead, // Assuming you have a property named 'pagesRead' in your book object
//         uv: book.pagesRead, // Assuming you have a property named 'pagesRead' in your book object
//         pv: index * 200, // Example value, you can replace it with actual data
//         amt: index * 200, // Example value, you can replace it with actual data
//     }));

//     const TriangleBar = (props) => {
//         const { fill, x, y, width, height } = props;
//         const getPath = `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
//         return <path d={getPath} stroke="none" fill={fill} />;
//     };

//     return (
//         <div>
//             <BarChart className="mt-20"
//                 width={1200}
//                 height={500}
//                 data={data}
//                 margin={{
//                     top: 20,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//                     {data.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//                     ))}
//                 </Bar>
//             </BarChart>
//         </div>
//     );
// };

// export default ReadPageBarChat;