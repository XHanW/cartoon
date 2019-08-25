import React from "react";

const ListContent = ({
  content,
  handleMouseOver,
  className
}) => {
  return (
    <li className={className}>
      <a onMouseOver={handleMouseOver}>
        {content}
      </a>
    </li>
  );
};
export default ListContent;
