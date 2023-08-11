import Header from "./Header";
import { useState } from "react";
import { getInitialTheme } from "../utils/fileManager.utils";
import GrowingCircleAnimation from "./GrowingCircleAnimation";

const Layout = ({ children, protocolName, setProtocolName }) => {
  const [isDark, setIsDark] = useState(getInitialTheme());

  return (
    <>
      <GrowingCircleAnimation isDark={isDark} />
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        protocolName={protocolName}
        setProtocolName={setProtocolName}
      />
      <div className="container mx-auto max-w-screen-lg p-5 z-10 relative">
        {children}
      </div>
    </>
  );
};

export default Layout;
