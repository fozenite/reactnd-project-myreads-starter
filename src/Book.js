import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
	// static propTypes = {
	// 	book: PropTypes.object.isRequired
	// }
	state = {
		value: this.props.book.shelf,
		book : this.props.book
	}

	changeState = (value) => {
		return new Promise((resolve, reject) => {
		this.setState({value: value})
		resolve(value)
		})
	}

	handleChange = (event) => {
		this.changeState(event.target.value).then((value) => {
			console.log(value)
			this.props.updateStatus(this.props.book.id, value)
		})

	}

	render() {
		const { book } = this.props
		console.log("THIS BOOK: ",book)
		let defaultStatusValue = this.state.value ? this.state.value : 'none'
		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                <div className="book-shelf-changer">
                  <select value={defaultStatusValue} onChange={this.handleChange}>
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