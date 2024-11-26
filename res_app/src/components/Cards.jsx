import React, { useEffect, useState } from "react";
import CardData from "./CardData";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ADD } from "../Redux/Action/Action";

function Cards() {
  const [data, setData] = useState(CardData);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const notify_success = () => {
    toast.success("Successfully Add On Cart !", {
      position: "top-center",
    });
  };

  const sendData = (e) => {
    dispatch(ADD(e));
    notify_success();
  };

  setInterval(() => {
    setIsLoading(true);
  }, 3000);

  return (
    <div className="mt-3">
      <ToastContainer />
      <h1 className="text-center capitalize font-bold text-3xl">
        add the cart project
      </h1>
      <div className="card_div mt-2 mx-3 grid grid-cols-3 gap-4">
        {data.map((element, id) => {
          return (
            <div key={id}>
              <Card className="w-full">
                {isLoading ? (
                  <CardMedia
                    sx={{ height: 250 }}
                    image={element.imgdata}
                    title="green iguana"
                  />
                ) : (
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={250}
                  />
                )}

                <CardContent>
                  {isLoading ? (
                    <>
                      <Typography gutterBottom variant="h5" component="div">
                        {element.rname}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Price: ₹ {element.price}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={false} />
                    </>
                  )}
                </CardContent>
                <CardActions>
                  {isLoading ? (
                    <>
                      <Button
                        className="capitalize hover:bg-red-600 hover:text-white"
                        onClick={() => sendData(element)}
                        size="small"
                      >
                        add to cart
                      </Button>
                    </>
                  ) : (
                    <>
                      <Skeleton animation="wave" width="4rem" />
                    </>
                  )}
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
