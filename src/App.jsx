import { useSelector } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Data from "./pages/Data";
import { getInitialTheme } from "./utils/fileManager.utils";
import { useState } from "react";

function App() {
  const themeState = useSelector((state) => state.theme);

  const [isDark, setIsDark] = useState(getInitialTheme());


  return (
    <div className={`App ${themeState.value ? " dark" : ""}`}>
      <Routes>
        <Route path="/" element={<Search isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/:plName" element={<Data isDark={isDark} setIsDark={setIsDark} />} />
      </Routes>
    </div>
  )
}

export default App