import toast from 'react-hot-toast';

// Read Books
export const getReadBooks = () => {
  let read = [];
  const storedReadBooks = localStorage.getItem('readBooks');
  if (storedReadBooks) {
    read = JSON.parse(storedReadBooks);
  }
  return read;
};

export const saveReadBook = (book, readBooks) => {
  const storedReadBooks = getReadBooks();

  const isExist = storedReadBooks.find(b => b.bookId === book.bookId) || readBooks.find(b => b.bookId === book.bookId);

  if (isExist) {
    return toast.error('Already added to read books!');
  }

  storedReadBooks.push(book);
  localStorage.setItem('readBooks', JSON.stringify(storedReadBooks));
  toast.success('Added to read books successfully!');
};


// Wishlist Books
export const getWishlistBooks = () => {
  let wishlist = [];
  const storedWishlistBooks = localStorage.getItem('wishlistBooks');
  if (storedWishlistBooks) {
    wishlist = JSON.parse(storedWishlistBooks);
  }
  return wishlist;
};

export const saveWishlistBook = (book, wishlistBooks) => {
  const storedWishlistBooks = getWishlistBooks();

  const isExist = storedWishlistBooks.find(b => b.bookId === book.bookId) || wishlistBooks.find(b => b.bookId === book.bookId);

  if (isExist) {
    return toast.error('Already added to wishlist!');
  }

  storedWishlistBooks.push(book);
  localStorage.setItem('wishlistBooks', JSON.stringify(storedWishlistBooks));
  toast.success('Added to wishlist successfully!');
};
