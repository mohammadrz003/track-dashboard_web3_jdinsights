import StatitsticCard from "./StatitsticCard";
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

const StatitsticCards = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-x-6">
      <StatitsticCard
        className="bg-[#1D1F2C] dark:bg-[#77037B]"
        bgImage="/img/ornament1.svg"
        icon={<PresentationChartLineIcon className="text-white w-5 h-5" />}
        number={data.interactions.interactions}
        title="Interactions"
        label={`+${data.interactions.last_week}`}
      />
      <StatitsticCard
        className="bg-[#883DCF]"
        bgImage="/img/ornament2.svg"
        icon={<CurrencyDollarIcon className="text-white w-5 h-5" />}
        number={`$${parseInt(data.volume.total_volume)}`}
        title="Volume"
        label={`+$${parseInt(data.volume?.last_week_volume) || "No data"}`}
      />
      <StatitsticCard
        className="bg-[#3250FF] md:col-span-2 lg:col-span-1"
        bgImage="/img/ornament3.svg"
        icon={<CreditCardIcon className="text-white w-5 h-5" />}
        number={`$${Number(data.fee.total_fee).toFixed(2)}`}
        title="Fee spent"
        label={`+$${Number(data.fee.last_week_fee).toFixed(2)}`}
      />
    </div>
  );
};

export default StatitsticCards;
