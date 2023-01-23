import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {
  return (
    < ul className="list-group w-100" >
      <li
        onClick={() => onItemSelect({ _id: "", name: "All Genres" },)}
        className={
          selectedItem.name == "All Genres" ? "list-group-item active" : "list-group-item"
        }
      >
        All Genres
      </li>
      {
        items.map(item => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem ? "list-group-item active" : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))
      }
    </ul >
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
