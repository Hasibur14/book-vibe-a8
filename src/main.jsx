import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import ListedBooks from './Pages/ListedBooks'
import MainLayout from './Root/MainLayout'
import BookDetails from './components/BookDetails'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`/data.json`).then(res => res.json())
            .then(data => data.books.find(book => book.bookId === parseInt(params.bookId)))
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
