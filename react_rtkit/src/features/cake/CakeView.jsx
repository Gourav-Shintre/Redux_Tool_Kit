import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderedcake, restockCake } from "./cakeSlice";
const CakeView = () => {
  const [value, setValue] = useState(0);
  const noOfCakees = useSelector((state) => state.cake.noOfCakes);
  console.log(noOfCakees, "noOfCakees");

  const dispatch = useDispatch();
  const handleOrder = () => {
    dispatch(orderedcake(value));
  };
  return (
    <div>
      CakeView
      <p>noOfCakees {noOfCakees}</p>
      <button onClick={handleOrder}>order cake</button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(restockCake(value))}>restock cake</button>
    </div>
  );
};

export default CakeView;
