import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Form from '../components/Form';

class Search extends Component {

   render() {
      return (
         <div>
            <Navbar page={'Search'} />
            <Jumbotron />
            <div className="container">
               <Form />
               
            </div>
         </div>
      );
   }
}

export default Search;
