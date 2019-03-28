import React, { Component } from "react";
import '../style.css'

class Booklist extends Component {

   render() {
      return (
         <form className="d-flex flex-column">
            <div className="form-group">
               <label for="bookInput">Search Books</label>
               <input type="text" className="form-control" id="bookInput" placeholder="On the Origin of Species" name="bookInput" />
            </div>
            <button type="submit" className="btn btn-primary align-self-end">Submit</button>
         </form>
      );
   }
}

export default Booklist;