import { useSelector } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Data from "./pages/Data";
// import ContactUs from "./pages/ContactUs";

function App() {
  const themeState = useSelector((state) => state.theme);


  return (
    <div className={`App ${themeState.value ? " dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:plName" element={<Data />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </div>
  )
}

export default App