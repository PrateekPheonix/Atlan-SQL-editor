import React, { useState, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./assets/output.css";
// import "./App.css"
import Loader from "./components/reusable/Loader";
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const Sideabr = React.lazy(() => import("./components/sidebar/Sidebar"));
const Input = React.lazy(() => import("./components/input/Input"));
const TableSection = React.lazy(() =>
  import("./components/table/TableSection")
);

const App = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Toaster
        position="top-right"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 2000,
          style: {
            background: "#ffffff",
            color: "#8A4374",
          },
          success: {
            duration: 2000,
            iconTheme: {
              primary: "#4661E6",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#D73737",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <div className="min-h-screen font-Poppins">
        <Suspense fallback={<Loader />}>
          <Sideabr
            setQuery={setQuery}
            setValue={setValue}
            setIsOpen={setIsOpen}
          />
          <div className="ml-72 content">
            <Navbar />
            <div className="min-h-fit px-10 py-8 ctn">
              <Input setQuery={setQuery} value={value} setValue={setValue} />
              {query ? <TableSection query={query} isOpen={isOpen} /> : null}
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default App;
