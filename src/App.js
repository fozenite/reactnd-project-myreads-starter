import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }

  componentDidMount() {
    console.log(BooksAPI.search('ioS','5'))
  }

  addNewBook = () => {
    console.log("ADD NEW BOOK")
    BooksAPI.update({id:"a4MjDAAAQBAJ"}, "read")
  }

  consoleNewBook = () => {
    console.log("CONSOLE NEW BOOK")
    BooksAPI.getAll().then((data) => {
      console.log(data)
    })
  }



  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <HomePage/>
        )}/>
        <Route path="/search" render={({ history }) => (
          <SearchBooks/>
        )}/>
        <button onClick={this.addNewBook}>ADD NEW BOOK</button>
        <button onClick={this.consoleNewBook}>CONSOLE NEW BOOK</button>

      </div>
    )
  }
}

export default BooksApp
