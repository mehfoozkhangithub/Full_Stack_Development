import React, { useEffect, useState } from "react";
import res_logo from "../../public/restaurant_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";

import CartGif from "./../../public/cart.gif";
import close from "./../../public/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../Redux/Action/Action";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function Navbar() {
  const [price, setPrice] = useState(0);

  const getData = useSelector((state) => state.cartReducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getData.map((el, i) => {
      price += el.price * el.qnty;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <nav className="bg-white text-black  border-2 border-black ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={res_logo} className="h-8" alt="resturant logo" />
            <NavLink to="/">
              <span className="capitalize self-center text-2xl font-semibold whitespace-nowrap md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ">
                zaika darbar
              </span>
            </NavLink>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className=""
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <Badge
                badgeContent={getData.length}
                color="primary"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Badge>
              <Switch />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getData.length ? (
                <div className="main_div p-2 w-96">
                  <div className="head flex justify-center items-center">
                    <p className="capitalize w-[40%]">photo</p>
                    <p className="capitalize w-[60%]">restaurant name</p>
                  </div>
                  <hr className="bg-black h-1" />

                  {/* <img src={getData.img} /> */}
                  {getData.map((el, id) => {
                    return (
                      <div
                        className="data_div py-2 flex justify-center "
                        key={id}
                      >
                        <div className="img_div w-[40%]">
                          <NavLink onClick={handleClose} to={`/card/${el.id}`}>
                            <img className="w-28" src={el.imgdata} />
                          </NavLink>
                        </div>
                        <div className="info w-[60%] flex justify-between px-1">
                          <div className="part_1">
                            <p className="name">
                              <strong className="capitalize">{el.rname}</strong>
                            </p>
                            <p className="price">
                              <strong className="capitalize">price</strong> : ₹{" "}
                              {el.price}
                            </p>
                            <p className="quantity">{el.qnty}</p>
                          </div>
                          <div className="part_2">
                            <p className="capitalize">
                              <DeleteIcon
                                className="text-red-600  cursor-pointer"
                                onClick={() => {
                                  dlt(el.id);
                                }}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <hr className="bg-gray-500 h-[1px]" />

                  <div>
                    <p className="capitalize text-l">
                      <strong>total</strong> : {price}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="main flex justify-center items-center p-5 relative w-96">
                  <img
                    onClick={handleClose}
                    src={close}
                    className="flex justify-center absolute top-2 right-2 size-5 cursor-pointer"
                  ></img>
                  <p className="capitalize size-6 w-[70%]">
                    your cart is empty
                  </p>
                  <img className="w-[30%] p-5" src={CartGif} />
                </div>
              )}
            </Menu>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink to="/">
                  <a
                    href="#"
                    className="block py-2 px-3 text-black  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/card">
                  <a
                    href="#"
                    className="block py-2 px-3 text-black rounded :hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Card Details
                  </a>
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
