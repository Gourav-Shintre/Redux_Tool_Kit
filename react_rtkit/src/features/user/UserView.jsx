import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userslice";

const UserView = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError } = useSelector((state) => state.users);
  console.log(users, "res");
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (isLoading) {
    return "loading...";
  }
  return (
    <div>
      UserView
      <p>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}{" "}
      </p>
    </div>
  );
};

export default UserView;
