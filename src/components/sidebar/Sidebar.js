import React from "react";
import TABLE_NAMES from "../../helper/constants";

const Sidebar = ({ setQuery, setValue }) => {
  const handleQuery = (queryName) => {
    setQuery(queryName);
    setValue(`select * from ${queryName}`);
  };

  const convertToNormalString = (str) => {
    var i,
      frags = str.split("_");
    for (i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(" ");
  };
  return (
    <>
      <nav className="col-start-2 col-end-3 row-start-1 row-end-2  shadow">
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="w-full flex justify-center items-center">
              <div className="flex items-center text-black font-bold text-2xl align-middle">
                SQL Editor - Atlan Task
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative col-start-1 col-end-2 row-start-1 row-end-5">
        <div className="bg-secondary-dark text-white w-72 px-2 fixed top-0 bottom-0 z-50 min-h-screen overflow-y-auto">
          <p className="p-5  text-center border-b-2 text-base text-gray-200">Select pre-defined queries from the given list below</p>
          <aside className="p-5">
            {TABLE_NAMES.map((name) => {
              const finalName = convertToNormalString(name);
              return (
                <button
                  className="p-2 my-6 transition-colors text-secondary-light hover:text-black hover:bg-blue-100 duration-200 rounded-lg "
                  key={name}
                  onClick={() => {
                    handleQuery(name);
                  }}
                >
                  <span className="mx-4 text-sm font-semibold">
                    Select * from {finalName}
                  </span>
                </button>
              );
            })}
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
