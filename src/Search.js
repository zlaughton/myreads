import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
    state = {
        query: '',
        showingBooks: []
    }

    /**
     * Find books in search results that match books on shelf
     * @param {array} searchResults
     * @return {array} shelvedSearchResults - array of bookid:shelfname object pairs
     */
    getShelvedBooks = (searchResults) => {
        const { shelvedBooks } = this.props

        let shelvedSearchResults = searchResults.map((searchedBook) => {
            for (let shelvedBook of shelvedBooks) {
                if (shelvedBook.id === searchedBook.id) {
                    searchedBook.shelf = shelvedBook.shelf;
                    return searchedBook;
                }
            }
            searchedBook.shelf = 'none';
            return searchedBook;
        })

        return shelvedSearchResults;
    }

    updateSearchResults = (query) => {
        BooksAPI.search(query).then((results) => {
            let shelvedResults;

            if (results) {
                shelvedResults = this.getShelvedBooks(results)
            }

            this.setState({
                showingBooks: shelvedResults
            })
        })
    }

    render() {
        const { changeShelf } = this.props
        const { showingBooks } = this.state

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={(event) => this.updateSearchResults(event.target.value)}
                />
           
              </div>
              
            </div>
            <div className="search-books-results">
            <ol className='books-grid'>
                {showingBooks !== undefined && showingBooks.length > 0 && (showingBooks.map((book) => (
                    <li key={ book.id }>
                        <Book book={ book } changeShelf={ changeShelf }/>
                    </li>
                )))}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search