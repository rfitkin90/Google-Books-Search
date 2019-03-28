import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';

class Saved extends Component {

   render() {
      return (
         <div>
            <Navbar page={'Saved'} />
            <Jumbotron />
         </div>
      );
   }
}

export default Saved;