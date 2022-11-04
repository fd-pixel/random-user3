import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  //https://randomuser.me/api/?results=5

  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="Userslist">
      <ul>
        {users.map((user, id) => {
          return (
            <div className="single-user" key={id}>
              <img src={user.picture.medium} />
              <div className="userinfo">
                {" "}
                {user.name.first}
                {user.name.last}
                <p className="user-mail">{user.email}</p>
                <p className="user-location">{user.location.country}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Users;
