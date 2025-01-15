import { useContext } from "react";
import { Button } from "@mui/material/Button";

export const Item = (props) => {
  return (
    <>
      <div className="item_card">
        <h1>{props.name}</h1>
        <p>Price ${props.price}</p>
        <Button>Add to Cart </Button>
      </div>
    </>
  );
};
