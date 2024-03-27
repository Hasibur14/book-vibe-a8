// Utility.js

import toast from 'react-hot-toast';

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBook = (book, readBooks,wishlistBooks) => {
  const storedBooks = getBooks();


  const isExist = storedBooks.find(b => b.bookId
    === book.bookId
  ) || readBooks.find(b => b.bookId
    === book.bookId
  );

  if (isExist) {
    return toast.error('Already Listed Book!');
  }

  // If not exist and not marked as "Read", add it to the list
  storedBooks.push(book);
  localStorage.setItem('books', JSON.stringify(storedBooks));
  toast.success('Listed Book Successfully!');
};
