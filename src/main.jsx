import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import ListedBooks from './Pages/ListedBooks'
import MainLayout from './Root/MainLayout'
import BookDetails from './components/BookDetails'

import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import ReadPage from './Pages/ReadPage'
import ErrorPage from './components/ErrorPage'
import ReadBooks from './components/ReadBooks'
import Wishlist from './components/Wishlist'
import './index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
            .then(data => data.books.find(book => book.bookId === parseInt(params.bookId))),
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
           index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wishlistBooks',
            element: <Wishlist></Wishlist>
          }
        ]
      },
      {
        path: '/readPage',
        element: <ReadPage></ReadPage>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
        // loader: () => fetch(`/data.json`).then(res => res.json())
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>,
)
