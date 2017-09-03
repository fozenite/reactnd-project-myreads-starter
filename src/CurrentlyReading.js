import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Book from './Book'

class CurrentlyReading extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		updateStatus: PropTypes.func.isRequired
	}

	render() {
		const { books, updateStatus } = this.props
		return (
			  <div className="bookshelf">
	                  <h2 className="bookshelf-title">Currently Reading</h2>
	                  <div className="bookshelf-books">
	                    <ol className="books-grid">
	                      	{books[0] && (books.map((book, index) =>
	                      		(
	                      			<li key={index}>
	                      				<Book book={book} updateStatus={updateStatus}/>
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









