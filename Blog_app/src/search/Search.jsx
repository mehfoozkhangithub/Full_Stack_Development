import { useRef } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { searchElement } from "../Redux/Features/SearchSlicer";
import { filterDataBySearch } from "../Redux/Features/ApiSlice";

export const Search = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData.value);

  const handleSubmit = () => {
    if (inputElement.current.value === "") {
      alert("please enter the value!");
    } else {
      // console.log(inputElement.current.value);
      dispatch(searchElement(inputElement.current.value));
      inputElement.current.value = "";
      dispatch(filterDataBySearch(searchData));
    }
  };

  return (
    <>
      <div className="search_main">
        <input
          className="input_search"
          type="text"
          placeholder="please search..."
          ref={inputElement}
        />
        <button className="btn_search" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </>
  );
};
