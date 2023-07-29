import React, { useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import { Button, PageButton } from "../reusable/Button";
import { CSVLink } from "react-csv";
import { exportToJson } from "../../helper/downloadHelper";

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <>
      <label className="flex gap-x-2 items-baseline">
        <span className="text-primary-dark hidden md:inline-block font-semibold">
          Search:{" "}
        </span>
        <input
          type="text"
          className="text-primary-dark rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-primary-dark transition p-2 w-40 md:w-52 "
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </label>
    </>
  );
};

const Table = ({ columns, data, completeData, query }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state,
    setPageSize,
    pageOptions,
    gotoPage,
    pageCount,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const dataforcsv = JSON.stringify(data);

  return (
    <>
      <div className="flex justify-between items-center">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

        <div className="flex items-center">
          <div className="flex">
            <CSVLink
              data={dataforcsv}
              className="bg-primary-dark hover:bg-secondary-dark transition-colors text-white rounded-md font-semibold px-4 py-2 mr-3 shadow-lg flex justify-center items-center"
              filename={`${query}.csv`}
            >Download CSV
            </CSVLink>;
          </div>

          <Button className="flex justify-center items-center" handleClick={() => exportToJson(completeData, query)}>
            Download JSON
          </Button>
        </div>
      </div>
      <p className="text-black text-sm ml-4 mt-4 mb-1"> Sort coloumns by clicking on header</p>
      <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-primary-dark">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white  uppercase tracking-wider border-solid border-2"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <span className=" hover:text-gray-300">
                      {column.render("Header")}
                    </span>
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white text-black divide-y divide-gray-200"
          >
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-solid border-2"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="py-3 flex items-center border-solid border-2 mb-12 bg-white">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button
            handleClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <Button handleClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2">
            <span className="text-sm ml-4 text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <select
              className="text-gray-700 text-sm ml-4 border-gray-300 bg-white border-2 rounded-md cursor-pointer"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <span className="text-gray-700 text-sm align-middle">
            Go to page:{" "}
            <input
              className="text-black text-sm border-2 ml-2 border-gray-300 rounded-md px-2 py-1"
              type="number"
              defaultValue={state.pageIndex + 1}
              onChange={(e) => {
                let pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                if (pageNumber > pageCount) {
                  pageNumber = 0;
                }
                gotoPage(pageNumber);
              }}
            />
          </span>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title id="previousPage">Go to previous page</title>
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title id="nextPage">Go to next page</title>
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title id="lastPage">Go to last page</title>
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;

