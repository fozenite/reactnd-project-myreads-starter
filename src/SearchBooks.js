import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    books: [],
    shelfBooks:[],
    query:''
  }


  handleSubmit = (event) => {
    event.preventDefault();
    BooksAPI.search(this.state.query,20).then((books) => {
      this.setState({ books })
    })

  }

  updateQuery = (query) => {
    this.setState({query})
  }


  updateStatus = (id, newStatus) => {
    BooksAPI.update({id: id}, newStatus)
    .then((res) =>{

    })
  }

  componentWillMount() {
    BooksAPI.getAll().then((shelfBooks) => {
      this.setState({ shelfBooks })
    })
  }

	render() {
    let { books, shelfBooks } = this.state
    const { query } = this.state
		return (
			<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/"></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </form>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books[0] && (books.map((book, index) =>
                            {
                              shelfBooks.map((shelfBook, index) => {

                                if(shelfBook.title === book.title) {
                                  book.shelf = shelfBook.shelf
                                }
                                return true
                              })
                              return (<li key={index}>
                                <Book book={book} updateStatus={this.updateStatus}/>
                              </li>)
                            }))
                }
              </ol>
            </div>
          </div>
		)
	}


}

export default SearchBooks