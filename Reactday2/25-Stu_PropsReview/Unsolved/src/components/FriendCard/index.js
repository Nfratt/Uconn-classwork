import React from "react";
import "./style.css";
import { isCompositeComponent } from "react-dom/test-utils";

function FriendCard(props) {
   console.log(props.friend)
   const {image,name,occupation,location,}=props.friend
  return (
    <div className="card">
      <div className="img-container">
        <img alt="friend1"
        src={image} />
        
      </div>
      <div className="content">
        <ul>
          <li>
          <strong>Name:</strong> 
           {name}
          </li>
          <li>
            <strong>Occupation:</strong> {occupation}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
