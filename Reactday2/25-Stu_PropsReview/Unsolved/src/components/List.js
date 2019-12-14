import React from "react";


function List(props) {
  return (
    <ul className="list-group">
      {props.groceries
      .filter(item=>item.purchased)
      .map((item,idx)=><li 
      className='list-group-item'
      key={idx}>
        {item.name}
        </li>)
}
    </ul>
  );
}

export default List;
