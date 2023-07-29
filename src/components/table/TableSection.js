import React, { useMemo } from "react";
import useData from "../../hooks/useData";
import Table from "./Table";

import Loader from "../../assets/loader.svg";

const TableSection = React.memo(({ query }) => {
  const { data, queryRuntime, error } = useData(query);

  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        const result = data[0][key];

        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  const queryData = useMemo(() => data.slice(1), [data]);
  if (error)
    return (
      <section className="col-start-2 col-end-3 row-start-3 row-end-4 text-white m-6">
        <h1 className="text-center font-bold text-xl text-primary-dark">
          Something Went Wrong
        </h1>
      </section>
    );
  return (
    <>
      <section className="col-start-2col-end-3 row-start-3 row-end-4 text-white mx-6 my-12 lg:mx-12 overflow-hidden">
        {data.length > 0 ? (
          <>
            <p className="text-primary-dark">
              Query took:{" "}
              <span className="font-bold">{`${queryRuntime.toFixed(
                2
              )} ms`}</span>
            </p>
            <Table
              columns={columns}
              completeData={data}
              data={queryData}
              query={query}
            />
          </>
        ) : (
          <img src={Loader} className="w-20 mx-auto" alt="loader" />
        )}
      </section>
    </>
  );
});

export default TableSection;
