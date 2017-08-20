import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import * as BooksAPI from './BooksAPI'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
class BookShelf extends Component {

	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
	      this.setState({ books })
	      console.log("RAW",this.state.books)
	      console.log("currentlyReading",this.state.books.filter((book) => book.shelf==="currentlyReading"))
	      console.log("wantToRead",this.state.books.filter((book) => book.shelf==="wantToRead"))
	      console.log("read",this.state.books.filter((book) => book.shelf==="read"))

	    })
	}

	updateStatus = (id, newStatus) => {
		BooksAPI.update({id}, newStatus)
	}

	render() {
		return (
				<div>
					<CurrentlyReading books={this.state.books.filter((book) => book.shelf==="currentlyReading")} updateStatus={this.updateStatus}/>
					<WantToRead books={this.state.books.filter((book) => book.shelf==="wantToRead")}/>
					<Read books={this.state.books.filter((book) => book.shelf==="read")}/>
	            </div>
	    )
	}

}

export default BookShelf