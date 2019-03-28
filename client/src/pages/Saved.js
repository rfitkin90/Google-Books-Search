import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import BookList from '../components/BookList';
import axios from "axios";

class Saved extends Component {
   constructor(props) {
      super(props);
      this.state = {
         books: []
      };
   }

   componentDidMount() {

   }

   populateSaves = savesArr => {
      axios.get('/api/books/' + searchTerm)
         .then(res => this.setState({ books: res.data }))
         .catch(err => console.log(err));
   }

   render() {
      return (
         <div>
            <Navbar page={'Saved'} />
            <Jumbotron />
            <BookList
               books={this.state.books}
            />
         </div>
      );
   }
}

export default Saved;