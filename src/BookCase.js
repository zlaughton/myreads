import React from 'react';
import Shelf from './Shelf';

const BookCase = ({books, changeShelf}) => {
  const getBooksOnShelf = (books, shelfName) => (
    books.filter((book) => (book.shelf === shelfName))
  )

  const currentlyReading = getBooksOnShelf(books, 'currentlyReading');
  const wantToRead = getBooksOnShelf(books, 'wantToRead');
  const read = getBooksOnShelf(books, 'read');
      
  return (
    <div className="book-case">
      <Shelf
        books={currentlyReading}
        shelfTitle="Currently Reading"
        changeShelf={changeShelf}
      />
      <Shelf
        books={wantToRead}
        shelfTitle="Want to Read"
        changeShelf={changeShelf}
      />
      <Shelf
        books={read}
        shelfTitle="Read"
        changeShelf={changeShelf}
      />
    </div>
  )
}

export default BookCase