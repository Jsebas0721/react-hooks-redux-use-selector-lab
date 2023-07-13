import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";



function Users() {

  const usersList = useSelector((state) => state.users)
  return (
    <div>
      <ul>
        Users!
        <br/>
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {usersList.map((user) => (
          <li>{user.username}</li>
          ))}
        {/* In addition, display the total number of users curently in the store */}
        <p>Total Users: {usersList.length}</p>
        </ul>
    </div>
  );
}

export default Users;
