import Header from "./Header";
import GrowingCircleAnimation from "./GrowingCircleAnimation";

const Layout = ({ children, protocolName, setProtocolName, isDark, setIsDark }) => {


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
