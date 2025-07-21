import React from "react";
import { useSelector } from "react-redux";

const CakeView = () => {
  const noofCakes = useSelector((state) => state.cake.noOfCakes);
  return (
    <div>
      Cake
      <h4>No. of Cakes {noofCakes} </h4>
      <h4>No. of order</h4>
      <h4>No. of restock</h4>
    </div>
  );
};

export default CakeView;
