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
    shelfAddedToBooks:[]
  }

  componentWillMount() {
    let unfilteredBooks
    BooksAPI.search('ioS',2).then((books) => {
      console.log('SEARCH BOOKS RESULTS',books)
      this.setState({ books })
    })
    BooksAPI.getAll().then((shelfBooks) => {
        console.log('SHELF BOOKS RESULTS',shelfBooks)
      this.setState({ shelfBooks })
    })
  }


  updateStatus = (id, newStatus) => {
    BooksAPI.update({id: id}, newStatus)
    .then((res) =>{
      BooksAPI.search('ioS',2).then((books) => {
      console.log('SEARCH BOOKS RESULTS',books)
      this.setState({ books })
    })
    })
  }

	render() {
    let books = this.state.books
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
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books[0] && (books.map((book, index) =>
                            {
                              this.state.shelfBooks.map((shelfBook, index) => {

                                if(shelfBook.title === book.title) {
                                book.shelf = shelfBook.shelf
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