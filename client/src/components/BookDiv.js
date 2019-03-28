import React, { Component } from "react";
import '../style.css'

class BookDiv extends Component {

   saveBook = event => {
      console.log(event.target.id)
      var savesArr = [];
      // get saves ids from localStorage
      savesArr = JSON.parse(localStorage.getItem('saves'));
      // if there are none, redfine to empty arr
      if (!savesArr) savesArr = [];
      // push the new id to the arr(if it's not already there)
      if (!savesArr.includes(event.target.id)) savesArr.push(event.target.id);
      // convert arr to JSON and place back in localStorage
      localStorage.setItem('saves', JSON.stringify(savesArr));
   }

   deleteBook = event => {
      console.log(event.target.id);
      var savesArr = [];
      savesArr = JSON.parse(localStorage.getItem('saves'));
      const i = savesArr.indexOf(event.target.id);
      savesArr.splice(i, 1);
      localStorage.setItem('saves', JSON.stringify(savesArr));
      this.props.populateSaves(savesArr);
   }

   renderStorageBtn = () => {
      if (this.props.page === 'Search') {
         return <button onClick={this.saveBook} className="btn btn-primary save-btn" id={this.props.id}>Save</button>
      } else if (this.props.page === 'Saved') {
         return <button onClick={this.deleteBook} className="btn btn-primary delete-btn" id={this.props.id}>Delete</button>
      }
   }

   render() {
      return (
         <div className="book-div">

            <div className="row first-book-row">
               <div className="col-md-9">
                  <h3>{this.props.title}</h3>
                  <span>Written by {this.props.authors}</span>
               </div>
               <div className="col-md-3">
                  <div className="book-buttons-div d-flex justify-content-end">
                     <a className="btn btn-primary view-btn" href={this.props.link} target="blank">View</a>
                     {this.renderStorageBtn()}
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img className="book-image" src={this.props.image} alt={this.props.title} />
               </div>
               <div className="col-md-9">
                  <span>{this.props.description}</span>
               </div>
            </div>
         </div>
      );
   }
}

export default BookDiv;