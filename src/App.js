import React from "react";
import { useState } from "react";

import './index.css';
import books from "./bookinfo.js";
import BookDetail from './BookDetail'
 
const Book = () => {
  let [state, setState] = useState(books);
   console.log(state)
  const AddItems = (id) => {
    let tempCart = state.find((cartItem) => cartItem.id === id);
    setState({ ...state, qty: tempCart.qty + 1 });
  };
  const DecreaseItems = () => {
    
  };
  const TotalItems = () => {
  
  };

  const RemoveSingleItem = (id) => {
    let removeBook = state.filter((items) => items.id !== id);
    setState(removeBook);
  };
  return (
    <>
      <BookDetail
       books={books}
         AddItems={AddItems}
        DecreaseItems={DecreaseItems}
        RemoveSingleItem={RemoveSingleItem}
       
      />
      <section style={{ margin: "4rem 0", textAlign: "center" }}>
        <button type="button" className="btn" onClick={() => setState([])}>
          Delete Item
        </button>
        <button type="button" className="btn" onClick={TotalItems}>
          Total Items
        </button>
      </section>
    </>
  );
};
export default Book;
