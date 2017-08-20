import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
	// static propTypes = {
	// 	book: PropTypes.object.isRequired
	// }

	render() {
		const { book } = this.props
		console.log("Image Link", book.imageLinks.smallThumbnail)
		console.log(book.authors)
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                <div className="book-shelf-changer">
                  <select defaultValue={book.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors.map((author,index) => (
              	<div key={index} className="book-authors">{author}</div>
              ))}
	        </div>
		)
	}
}

export default Book