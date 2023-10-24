import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectAllUsers } from "../../store/usersSlice";
import "./MainPage.css"

function UsersRequest() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      {users.map((user) => (
        <div className="users-card" key={user.id}>
          <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="user"></img>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersRequest;
