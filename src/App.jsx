import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/Layout";
import StatitsticCards from "./components/statitstic-cards/StatitsticCards";
import Activities from "./components/Activities";
import Tokens from "./components/Tokens";
import { useQuery } from "@tanstack/react-query";
import { getProtocolData } from "./services/protocols";
import { useEffect, useState } from "react";
import matchProtocols from "./utils/matchProtocols";
import Protocols from "./components/Protocols";

function App() {
  const themeState = useSelector((state) => state.theme);
  const [protocolName, setProtocolName] = useState("zkevm");
  const [address, setaddress] = useState(
    "0x621abAa3172Fac358b327975FE493add18E790e2"
  );
  const [isDataSet, setIsDataSet] = useState(false);
  const [data, setData] = useState(null);

  const {
    data: protocolData,
    isLoading: protocolDataIsLoading,
    isError: protocolDataError,
  } = useQuery({
    queryFn: () => {
      return getProtocolData({ protocolName, address });
    },
    queryKey: [protocolName, address],
  });

  useEffect(() => {
    if (!protocolDataIsLoading && !protocolDataError) {
      setData(matchProtocols({ data: protocolData?.data, protocolName }));
      setIsDataSet(true);
    }
  }, [
    protocolData?.data,
    protocolDataError,
    protocolDataIsLoading,
    protocolName,
  ]);

  return (
    <div className={`App ${themeState.value ? " dark" : ""}`}>
      <Layout protocolName={protocolName} setProtocolName={setProtocolName}>
        {protocolDataIsLoading || !isDataSet ? (
          <p className="text-center">Loading...</p>
        ) : protocolDataError ? (
          <p className="text-center text-red-500">Something went wrong</p>
        ) : (
          <>
            <StatitsticCards data={data} />
            <div className="w-full flex flex-col gap-y-6 md:flex-row mt-6 gap-x-6">
              <Activities data={data} />
              <Tokens data={data} />
            </div>
            <Protocols data={data} />
          </>
        )}
      </Layout>
    </div>
  );
}

export default App;
