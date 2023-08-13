import { useEffect, useState } from "react";
import Layout from "../components/Layout"
import { useQuery } from "@tanstack/react-query";
import { getProtocolData } from "../services/protocols";
import matchProtocols from "../utils/matchProtocols";
import HomePageLoading from "../components/HomePageLoading";
import StatitsticCards from "../components/statitstic-cards/StatitsticCards";
import Activities from "../components/Activities";
import Tokens from "../components/Tokens";
import Protocols from "../components/Protocols";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Data = ({ isDark, setIsDark }) => {
    const [searchParams] = useSearchParams();
    const searchParamValues = Object.fromEntries([...searchParams]);
    const navigate = useNavigate()
    let { plName } = useParams();
    const [protocolName, setProtocolName] = useState(plName || "zkevm");
    const address = searchParamValues?.address

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
        if (plName !== "base" && plName !== "zkevm") {
            navigate("/");
        }
        if (!protocolDataIsLoading && !protocolDataError) {
            setData(matchProtocols({ data: protocolData?.data, protocolName }));
            console.log(matchProtocols({ data: protocolData?.data, protocolName }))
            setIsDataSet(true);
        }
    }, [
        protocolData?.data,
        protocolDataError,
        protocolDataIsLoading,
        protocolName,
        plName,
        navigate
    ]);

    return (
        <Layout protocolName={protocolName} setProtocolName={setProtocolName} isDark={isDark} setIsDark={setIsDark}>
            {protocolDataIsLoading || !isDataSet ? (
                <HomePageLoading />
            ) : protocolDataError ? (
                <div className="mx-auto flex justify-center items-center flex-col">
                    <img src="https://moonfo-files.storage.iran.liara.space/jsinsights/logos/sad-etherium.gif" alt="sad ether" className="w-56 h-56 transform translate-y-12" />
                    <p className="text-center text-red-500">Something went wrong</p>
                </div>
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
    )
}

export default Data