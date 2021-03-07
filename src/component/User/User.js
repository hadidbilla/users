import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./User.css";

const User = (props) => {
  const { name, id, email, money, img } = props.user;
  const handleAddUser = props.handleAddUser;
  return (
    <div className="user">
      <div className="user-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="user-details">
        <div className="">
          <p>Name: {name}</p>
          <p>ID: {id}</p>
          <p>Email: {email}</p>
          <p>Money: ${money}</p>
        </div>
        <div onClick={() => handleAddUser(props.user)} className="btn">
          <button type="submit">
            <FontAwesomeIcon className="icon" icon={faUserPlus} />
            Add Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
