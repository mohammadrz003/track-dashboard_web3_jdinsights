import Header from "./Header";
import GrowingCircleAnimation from "./GrowingCircleAnimation";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Layout = ({ children, protocolName, setProtocolName, isDark, setIsDark }) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamValues = Object.fromEntries([...searchParams]);
  const [address, setAddress] = useState("")

  const selectProtocolHandler = (name) => {
    setProtocolName(name);
    const params = {
      address: searchParamValues?.address,
    };
    const options = {
      pathname: `/${name}`,
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });
  };

  const searchHandler = () => {
    setSearchParams({ 'address': address })
  }


  return (
    <>
      <GrowingCircleAnimation isDark={isDark} />
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        protocolName={protocolName}
        setProtocolName={setProtocolName}
        address={address}
        setAddress={setAddress}
        searchHandler={searchHandler}
        selectProtocolHandler={selectProtocolHandler}
      />
      <div className="container mx-auto max-w-screen-lg p-5 z-10 relative">
        {children}
      </div>
    </>
  );
};

export default Layout;
