import { useState, useEffect } from "react";
import axios from "axios";

import img from "./assets/react.svg";

import "./App.css";
import { Search } from "./search/Search";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "./Redux/Features/ApiSlice";

function App() {
  // selector -> catch data
  const dataComingFromStore = useSelector((state) => state.fetchData);
  // const flag = useSelector((state) => state.searchData.flag);
  // console.log(flag, "this is flag");

  // dispatch -> send data
  const dispatch = useDispatch();
  // url
  const url = "https://jsonplaceholder.typicode.com/albums";
  // const url = "https://jsonplaceholder.typicode.com/albums/1/photos";

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      dispatch(apiCall(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Search />
      <div className="main">
        {dataComingFromStore &&
          dataComingFromStore.map((el, id) => (
            <div className="card" key={id}>
              <img src={img} alt="image_user" className="image" />
              <label htmlFor={el.title} className="name">
                {el.title}
              </label>
              <button className="btn">submit</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
