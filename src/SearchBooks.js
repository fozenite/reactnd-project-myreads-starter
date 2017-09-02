import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    books: [],
    shelfBooks:[],
    shelfAddedToBooks:[],
    query:''
  }

  componentWillMount() {
    // let unfilteredBooks
    // BooksAPI.search('ioS',2).then((books) => {
    //   console.log('SEARCH BOOKS RESULTS',books)
    //   this.setState({ books })
    // })
    // BooksAPI.getAll().then((shelfBooks) => {
    //     console.log('SHELF BOOKS RESULTS',shelfBooks)
    //   this.setState({ shelfBooks })
    // })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    BooksAPI.search(this.state.query,20).then((books) => {
      console.log('SEARCH BOOKS RESULTS',books)
      this.setState({ books })
    })
    BooksAPI.getAll().then((shelfBooks) => {
        console.log('SHELF BOOKS RESULTS',shelfBooks)
      this.setState({ shelfBooks })
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

	render() {
    let books = this.state.books
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
                              this.state.shelfBooks.map((shelfBook, index) => {

                                if(shelfBook.title === book.title) {
                                book.shelf = shelfBook.shelf
                                } else {
                                  book.shelf === 'none'
                                }
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



// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import './App.css'
// import * as BooksAPI from './BooksAPI'
// import Book from './Book'

// class CurrentlyReading extends Component {

//   render() {
//     const { books, updateStatus } = this.props
//     return (
//         <div className="bookshelf">
//                     <h2 className="bookshelf-title">Currently Reading</h2>
//                     <div className="bookshelf-books">
//                       <ol className="books-grid">
//                           {books[0] && (books.map((book, index) =>
//                             (
//                               <li key={index}>
//                                 <Book book={book} updateStatus={updateStatus}/>
//                               </li>
//                             )))
//                         }
//                       </ol>
//                     </div>
//             </div>
//     )
//   }
// }

// export default CurrentlyReading