import React, { Component } from 'react';
import Shelf from './Shelf';

class BookCase extends Component {
    getBooksOnShelf = (books, shelfName) => (
        books.filter((book) => (book.shelf === shelfName))
    )

    render() {
        const { books, changeShelf } = this.props
        const currentlyReading = this.getBooksOnShelf(books, 'currentlyReading');
        const wantToRead = this.getBooksOnShelf(books, 'wantToRead');
        const read = this.getBooksOnShelf(books, 'read');
        
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
}

export default BookCase