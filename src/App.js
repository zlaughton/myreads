import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './BookCase'
import Search from './Search'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
    state = {
      books: []
    }
    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books
        })
      })
    }

    changeShelf = (book, newShelf) => {
      BooksAPI.update(book, newShelf).then(this.componentDidMount())
    }

    render() {
      return (
        <div className="app">
          <Route path="/search" render={() => (
            <Search 
              books={ this.state.books }
              changeShelf={ this.changeShelf }
            />
          )}/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookCase
                books={ this.state.books }
                changeShelf={ this.changeShelf }
              />
              <div className="open-search">
                <Link to="/search" className="open-search">Search</Link>
              </div>
            </div>
          )}/>
        </div>
      )
    }
}

export default BooksApp
