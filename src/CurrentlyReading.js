import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class CurrentlyReading extends Component {

	render() {
		const { books } = this.props
		return (
			  <div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      	{books[0] && (books.map((book, index) =>
	                      		(
	                      			<li key={index}>
	                      				<Book book={book}/>
	                      			</li>
	                      		)))
	                  		}
	                    </ol>
	                  </div>
	          </div>
		)
	}
}

export default CurrentlyReading









