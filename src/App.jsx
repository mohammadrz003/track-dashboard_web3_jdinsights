import "./App.css";
import Layout from "./components/Layout";
import StatitsticCard from "./components/StatitsticCard";
import {
  PresentationChartLineIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="App bg-[#F8F8FC] min-h-screen">
      <Layout>
        {/* Statitstic cards */}
        <div className="w-full grid grid-cols-3 mt-6 gap-x-6">
          <StatitsticCard
            className="bg-[#1D1F2C]"
            bgImage="/img/ornament1.svg"
            icon={<PresentationChartLineIcon className="text-white w-5 h-5" />}
            number="54"
            title="Interactions"
            label="+3"
          />
          <StatitsticCard
            className="bg-[#883DCF]"
            bgImage="/img/ornament2.svg"
            icon={<CurrencyDollarIcon className="text-white w-5 h-5" />}
            number="$75,500"
            title="Volume"
            label="+10%"
          />
          <StatitsticCard
            className="bg-[#3250FF]"
            bgImage="/img/ornament3.svg"
            icon={<CreditCardIcon className="text-white w-5 h-5" />}
            number="$651"
            title="Fee spent"
            label="+4%"
          />
        </div>
        <div className="w-full flex justify-end mt-6 gap-x-6">
          <div className="w-[40%] p-6 rounded-xl bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
            <h2 className="text-[#1D1F2C] font-semibold text-xl">Activities</h2>
            <div className="flex justify-between text-[#777980] text-sm font-medium mt-1">
              <span>Last activity:</span>
              <span>11 minutes ago</span>
            </div>
            <div className="w-full flex items-center gap-x-[4px] mt-[22px]">
              <div className="w-[45%] rounded-full bg-[#F86624] h-3" />
              <div className="w-[35%] rounded-full bg-[#4ED5BD] h-3" />
              <div className="w-[20%] rounded-full bg-[#EB3D4D] h-3" />
            </div>
            <div className="mt-[22px] flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <span className="inline-block rounded-full w-3 h-3 bg-[#F86624]" />
                  <span className="text-[#667085] text-sm font-medium">
                    Active day(s)
                  </span>
                </div>
                <span className="text-[#1D1F2C] text-base font-medium">
                  27 days
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <span className="inline-block rounded-full w-3 h-3 bg-[#4ED5BD]" />
                  <span className="text-[#667085] text-sm font-medium">
                    Active week(s)
                  </span>
                </div>
                <span className="text-[#1D1F2C] text-base font-medium">
                  10 weeks
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <span className="inline-block rounded-full w-3 h-3 bg-[#EB3D4D]" />
                  <span className="text-[#667085] text-sm font-medium">
                    Active month(s)
                  </span>
                </div>
                <span className="text-[#1D1F2C] text-base font-medium">
                  3 months
                </span>
              </div>
            </div>
          </div>

          <div className="w-[60%] flex flex-col items-center justify-center mx-auto bg-white rounded-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
            <ul className="w-full flex flex-col divide-y divide">
              <li className="flex flex-row">
                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                  <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src="/img/coins/bitcoin.png"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium">Bitcoin</div>
                    <div className="text-sm text-gray-600">Btc</div>
                  </div>
                  <div className="text-base text-gray-600">0.028</div>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                  <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src="/img/coins/bnb-icon2_2x.png"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium">BNB</div>
                    <div className="text-sm text-gray-600">BNB</div>
                  </div>
                  <div className="text-base text-gray-600">2.878</div>
                </div>
              </li>
              <li className="flex flex-row">
                <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                  <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                    <a href="#" className="relative block">
                      <img
                        alt="profil"
                        src="/img/coins/ethereum.png"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-medium">Ethereum</div>
                    <div className="text-sm text-gray-600">ETH</div>
                  </div>
                  <div className="text-base text-gray-600">1.62</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
