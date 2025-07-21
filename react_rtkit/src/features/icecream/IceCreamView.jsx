import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { orderIcecream, restockIcecream } from "./icecreamSlice";
const IceCreamView = () => {
  const noOfIcecreams = useSelector((state) => state.icecream.nooficecream);
  console.log(noOfIcecreams, "ICE");
  const dispatch = useDispatch();
  return (
    <div>
      IceCreamView :{noOfIcecreams}
      <br />
      <button
        onClick={() => dispatch(orderIcecream(5))}
        disabled={noOfIcecreams <= 0  }
      >
        order icecream
      </button>
      <button onClick={() => dispatch(restockIcecream(100))}>
        restock icecream
      </button>
    </div>
  );
};

export default IceCreamView;
