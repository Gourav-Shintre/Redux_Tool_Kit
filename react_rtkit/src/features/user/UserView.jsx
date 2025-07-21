import React from "react";
import { useSelector } from "react-redux";

const UserView = () => {
  const res = useSelector((state) => state.users);
  console.log(res, "res");
  if (res.isLoading) {
    return "loading...";
  }
  return (
    <div>
      UserView
      <p>Users .id {res.users.map((user) => user.id)} </p>
    </div>
  );
};

export default UserView;
