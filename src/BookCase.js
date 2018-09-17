import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class BookCase extends Component {
    getBooksOnShelf = (books, shelfName) => (
        books.filter((book) => (book.shelf == shelfName))
    )

    render() {
        const books = this.props.books
        const currentlyReading = this.getBooksOnShelf(books, 'currentlyReading');
        const wantToRead = this.getBooksOnShelf(books, 'wantToRead');
        const read = this.getBooksOnShelf(books, 'read');
        const shelves = [currentlyReading, wantToRead, read];
        
        return (
          <div className="book-case">
            <Shelf books={currentlyReading} shelfTitle="Currently Reading"/>
            <Shelf books={wantToRead} shelfTitle="Want to Read"/>
            <Shelf books={read} shelfTitle="Read"/>
          </div>
        )
    }
}

export default BookCase