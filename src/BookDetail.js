import React from "react";
const BookDetail = ({ books, AddItems, DecreaseItems, RemoveSingleItem }) => {
  return books.map((book) => {
    const { id, img, title, author, qty } = book;
    return (
      <div key={id} className="container">
        <img src={img} alt="" />
        <h4>{title}</h4>
        <h5>{author}</h5>
        <h5>{qty}</h5>

        <button type="button" className="btn" onClick={() => AddItems(id)}>
          Add Item
        </button>
        <button type="button" className="btn" onClick={() => DecreaseItems(id)}>
          Decrease Item
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => RemoveSingleItem(id)}
        >
          Remove Single Item
        </button>
      </div>
    );
  });
};
export default BookDetail;
