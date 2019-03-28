import React, { Component } from "react";
import '../style.css';
import BookDiv from './BookDiv';

class BookList extends Component {

   render() {
      return (
         <div>
            {this.props.books.map((elem, i) => (
               <BookDiv
                  key={elem._id}
                  id={elem._id}
                  title={elem.title}
                  authors={elem.authors}
                  description={elem.description}
                  image={elem.image}
                  link={elem.link}
                  date={elem.date}
               />
            ))}
         </div>
      );
   }
}

export default BookList;