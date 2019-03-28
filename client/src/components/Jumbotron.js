import React, { Component } from "react";
import '../style.css'

class Jumbotron extends Component {

   render() {
      return (
         <div class="jumbotron jumbotron-fluid">
            <div class="container">
               <h1>React Google Books Search</h1>
               <p>Search for and save books of interest.</p>
            </div>
         </div>
      );
   }
}

export default Jumbotron;