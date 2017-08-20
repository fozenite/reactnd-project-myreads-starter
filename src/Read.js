import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Read extends Component {

	render() {
		const { books, updateStatus } = this.props
		return (
			<div className="bookshelf">
	         	<h2 className="bookshelf-title">Read</h2>
	          	<div className="bookshelf-books">
		            <ol className="books-grid">
		            	{books[0] && (books.map((book, index) =>
		              		(
		              			<li key={index}>
		              				<Book book={book} updateStatus={updateStatus} />
		              			</li>
		              		)))
		          	  	}
		            </ol>
	          	</div>
            </div>
		)
	}
}

export default Read