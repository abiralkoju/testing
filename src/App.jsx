import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [listItems, setListItems] = useState("");
  const [items, setItems] = useState([]);

  const updateItems = (e) => {
    setListItems(e.target.value);
  };

  const transformOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, listItems];
    });
    setListItems("");
  };

  const deleteItem = (lili) => {
    // console.log(id);
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== lili;
      });
    });
  };

  return (
    <div>
      <input
        type="text"
        value={listItems}
        placeholder="enter texts"
        onChange={updateItems}
      />
      <button onClick={transformOfItems}>+</button>

      <ul>
        {/* <li>{listItems}</li> */}
        {items.map((itemval, index) => {
          return (
            <List text={itemval} key={index} onSelect={deleteItem} id={index} />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
