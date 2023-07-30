import React from "react";
import { Button } from "../reusable/Button";

const Input = ({ setQuery, value, setValue }) => {
  const onChange = (newValue) => {
    setValue(newValue);
  };

  const handelSubmit = () => {
    var inputValue = value
      .toLowerCase()
      .slice(value.indexOf("from") + "from".length);
    setQuery(inputValue.split(" ")[1]);
  };

  return (
    <main className="search-bar">
      <label htmlFor="editor">
        <input
          id="editor"
          className="
        form-control
        block
        w-full
        h-10
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder="Enter a valid query or select from Sidebar"
        />
      </label>
      <div>
        <Button className="flex justify-between items-center mt-6" handleClick={handelSubmit}>
          <div> Execute</div>
        </Button>
      </div>

    </main>
  );
};

export default Input;
