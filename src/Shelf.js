import React from 'react';
import Book from './Book'

const Shelf = ({books, shelfTitle, changeShelf}) => {
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

export default Shelf