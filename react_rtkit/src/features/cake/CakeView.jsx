import React from "react";
import { useSelector } from "react-redux";
const CakeView = () => {
  const noOfCakees = useSelector((state) => state.cake.noOfCakes);
  console.log(noOfCakees, "noOfCakees");

  return (
    <div>
      CakeView
      <p>noOfCakees {noOfCakees}</p>
    </div>
  );
};

export default CakeView;
