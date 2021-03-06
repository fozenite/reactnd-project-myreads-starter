import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

class Book extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		updateStatus: PropTypes.func.isRequired
	}
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
			this.props.updateStatus(this.props.book.id, value)
		})
	}

	render() {
		const { book } = this.props
		let defaultStatusValue = this.state.value ? this.state.value : 'none'
		let thumbnail = book.imageLinks !== undefined ? book.imageLinks.thumbnail : 'https://vignette.wikia.nocookie.net/theannoyingroleplayers/images/4/47/Placeholder.png/revision/latest?cb=20140715205720'

		return (
			<div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${thumbnail}")` }}></div>
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
              {book.authors && book.authors.map((author,index) => (
              	<div key={index} className="book-authors">{author}</div>
              ))}
	        </div>
		)
	}
}

export default Book