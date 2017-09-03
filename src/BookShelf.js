import React, { Component } from 'react'
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
	    })
	}

	updateStatus = (id, newStatus) => {
		BooksAPI.update({id: id}, newStatus)
		.then((res) =>{
		  BooksAPI.getAll()
		  .then((books) => {
	      this.setState({ books })
		  })
		})
	}

	render() {
		return (
				<div>
					<CurrentlyReading books={this.state.books.filter((book) => book.shelf==="currentlyReading")} updateStatus={this.updateStatus}/>
					<WantToRead books={this.state.books.filter((book) => book.shelf==="wantToRead")} updateStatus={this.updateStatus}/>
					<Read books={this.state.books.filter((book) => book.shelf==="read")} updateStatus={this.updateStatus}/>
	            </div>
	    )
	}

}

export default BookShelf