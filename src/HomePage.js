import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'


class HomePage extends Component {



	render() {
		return (
			<div className="list-books">
	            <div className="list-books-title">
	            	<h1>MyReads</h1>
	            </div>
	            <div className="list-books-content">
					<BookShelf/>
	            </div>
	            <div className="open-search">
	              <Link to="/search"></Link>
	            </div>
	        </div>
	    )
	}

}

export default HomePage