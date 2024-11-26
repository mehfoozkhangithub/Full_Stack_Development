import React, { useEffect, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DLT, ADD, REMOVE } from "../Redux/Action/Action";

function CardDetails() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useNavigate();

  const notify_error = () => {
    toast.error("Item Delete!", {
      position: "top-left",
    });
  };

  const getData = useSelector((state) => state.cartReducer.carts);

  const comapire = () => {
    let compaireData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compaireData);
  };

  const sendData = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    notify_error();

    setTimeout(() => {
      history("/");
    }, 5000);
  };

  const Dec = (e) => {
    dispatch(REMOVE(e));
  };

  useEffect(() => {
    comapire();
  }, [id]);

  return (
    <div className="">
      <ToastContainer />
      <h1 className="capitalize text-center font-bold text-3xl">
        item details pages
      </h1>
      {data.map((element, id) => {
        return (
          <section
            className="card_section mt-3 w-[70%] flex justify-center items-center gap-2 rounded m-auto h-[15rem] shadow-lg"
            key={id}
          >
            <div className="image_card">
              <img className="h-52" src={element.imgdata} />
            </div>
            <div className="info_section p-1">
              <table>
                <tr className="flex gap-2">
                  <td className="grid grid-flow-row gap-4">
                    <p className="capitalize">
                      <strong className="capitalize">resturent</strong> :
                      {element.rname}
                    </p>
                    <p className="capitalize">
                      <strong className="capitalize">price</strong> : ₹{" "}
                      {element.price}
                    </p>
                    <p className="capitalize">
                      <strong className="capitalize">dish</strong> :{" "}
                      {element.address}
                    </p>
                    <p className="capitalize">
                      <strong className="capitalize">total</strong> : ₹{" "}
                      {element.price * element.qnty}
                    </p>
                  </td>
                  <td className="grid gap-2 ">
                    <p className="capitalize    ">
                      <strong className="capitalize ">rating :</strong> :{" "}
                      <span className="bg-green-700 rounded p-1">
                        {element.rating} ★
                      </span>
                    </p>
                    <p className="capitalize ">
                      <strong className="capitalize">order review :</strong> :{" "}
                      {element.somedata}
                    </p>
                    <p className="capitalize" onClick={() => dlt(element.id)}>
                      <strong className="capitalize">remove :</strong>
                      <DeleteIcon className="text-red-600  cursor-pointer" />
                    </p>
                  </td>
                </tr>
                <div className="pahination mt-2 flex justify-start items-center gap-3 ">
                  <span
                    className="py-1 px-5 rounded hover:bg-transparent hover:text-black hover:border-blue-500 hover:border bg-blue-600 text-white"
                    onClick={
                      element.qnty <= 1
                        ? () => dlt(element.id)
                        : () => Dec(element)
                    }
                  >
                    -
                  </span>
                  <span className="">{element.qnty}</span>
                  <span
                    className="py-1 px-5 rounded hover:bg-transparent hover:text-black hover:border-blue-500 hover:border bg-blue-600 text-white"
                    onClick={() => sendData(element)}
                  >
                    +
                  </span>
                </div>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default CardDetails;
