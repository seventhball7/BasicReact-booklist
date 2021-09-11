import React from "react";
import { useState } from "react";

import "./index.css";
import books from "./bookinfo.js";
import BookDetail from "./BookDetail";

const Book = () => {
  let [state, setState] = useState(books);
  console.log(state);
  const AddItems = (id) => {
    let newState = state.map((item) => {
      console.log(item);

      if (item.id === id) item.qty = item.qty + 1;
      return item;
    });

    setState(newState);
  };
  const DecreaseItems = (id) => {
    let newState = state.map((item) => {
      console.log(item);

      if (item.id === id && item.qty > 0) item.qty = item.qty - 1;
      return item;
    });

    setState(newState);
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
      {/* <section style={{ margin: "4rem 0", textAlign: "center" }}>
        <button type="button" className="btn" onClick={() => setState([])}>
          Delete Item
        </button>
      </section> */}
    </>
  );
};
export default Book;
