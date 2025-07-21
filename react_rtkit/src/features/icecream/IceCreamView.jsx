import React from "react";
import { useSelector } from "react-redux";
const IceCreamView = () => {
  const noOfIcecreams = useSelector((state) => state.icecream.nooficecream);
  console.log(noOfIcecreams, "ICE");

  return <div>IceCreamView :{noOfIcecreams}</div>;
};

export default IceCreamView;
