import React from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { useState } from "react";
import { Add } from "../action/action";
import { useDispatch } from "react-redux/es/exports";
const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const AddTodo = () => {
    dispatch(Add(search));
    setSearch("");
  };

  return (
    <>
      <div className="form py-3 bg-light">
        <div className="form-container w-50 mx-auto">
          <input
            type="search"
            className="form-control   mx-auto"
            placeholder="Add Todo"
            id="search"
            maxLength={32}
            onChange={(event) => setSearch(event.target.value)}
            value={search}
            autoComplete="off"
          />
          <BsPlusSquareDotted className="fa-plus" onClick={() => AddTodo()} />
        </div>
      </div>
    </>
  );
};

export default Search;
