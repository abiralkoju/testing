import React from "react";

const List = (props) => {
  return (
    <div>
      <li>{props.text}</li>
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        x
      </button>
    </div>
  );
};

export default List;
