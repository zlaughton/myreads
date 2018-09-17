import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
    render() {
        const { books, shelfTitle, changeShelf } = this.props
        return(
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book, index) => (
                        <li key={index}>
                          <Book
                            book={ book }
                            changeShelf={ changeShelf }
                          />
                        </li>
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
        )
    }
}

export default Shelf