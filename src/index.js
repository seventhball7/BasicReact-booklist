import React from "react"; //if we want to create a component we have to import react
import reactDom from "react-dom";

//CSS
import "./index.css";

import Book from "./Book.js";

//always return JSX
function Booklist() {

  return (
    <section className="booklist ">
      <h1>Books</h1>
      <Book/>

    </section>
  );
 
}

reactDom.render(<Booklist />, document.getElementById("root")); 
