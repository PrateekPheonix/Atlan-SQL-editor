import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TABLE_NAMES from "../helper/constants";

import { queryData, queryData2, queryData3, queryData4 } from "../helper/data";

const useData = (tableName) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [queryRuntime, setQueryRuntime] = useState("");

  useEffect(() => {
    const fetchData = (tableName) => {
      setData([]);
      const name = TABLE_NAMES.find((name) => name === tableName);
      if (name) {
        setError(false);

        if (name === "categories") {
          setData(queryData);
          toast.success("Query was successfull");
        }
        if (name === "customers") {
          setData(queryData2);
          toast.success("Query was successfull");
        }
        if (name === "territories") {
          setData(queryData3);
          toast.success("Query was successfull");
        }
        if (name === "big_data") {
          setData(queryData4);
          toast.success("Query was successfull");
        }
      } else {
        setError(true);
        toast.error("Please enter a valid query");
      }
    };
    let t0 = performance.now();
    fetchData(tableName);
    let t1 = performance.now();
    setQueryRuntime(t1 - t0);
  }, [tableName]);

  return { data, queryRuntime, error };
};

export default useData;
