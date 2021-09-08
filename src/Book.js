import React from "react";
import { useState } from "react";

import books from "./bookinfo.js";

const Book = () => {
  let [state, setState] = useState(books);
  let [quantity, setQuantity] = useState(1);
  const AddItems = () => {
    let value=quantity+1;
    setQuantity(value);
    window.localStorage.setItem(JSON.stringify(state), JSON.stringify(value));
  };
  const DecreaseItems = () => {
    let value=quantity-1;
    setQuantity(value);
    window.localStorage.setItem(JSON.stringify(state), JSON.stringify(value));
  };
  const RemoveSingleItem = (id) => {
    let newBook = state.filter((items) => items.id !== id);
    setState(newBook);
  };
  return (
    <>
      {state.map((book) => {
        const { id, img, title, author, qty } = book;
        return (
          <div key={id} className='item'>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <h5>{author}</h5>
            <h6>{quantity}</h6>

            <button type="button" onClick={AddItems}>
              Add Item
            </button>
            <button type="button" onClick={DecreaseItems}>
              Decrease Item
            </button>
            <button type="button" onClick={() => RemoveSingleItem(id)}>
              Remove Single Item
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setState([])}>
        Delete Item
      </button>
    </>
  );
};
export default Book;
