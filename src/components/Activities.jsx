import percentRound from "percent-round";

const Activities = ({ data }) => {
  const activePercent = percentRound([
    data.activity.num_days,
    data.activity.num_weeks,
    data.activity.num_months,
  ]);

  return (
    <div className="w-full md:w-1/2 lg:w-[40%] p-6 rounded-xl bg-white dark:bg-slate-800 duration-[300ms] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <h2 className="text-[#1D1F2C] font-semibold text-xl dark:text-slate-100">
        Activities
      </h2>
      <div className="flex justify-between text-[#777980] dark:text-slate-400 text-sm font-medium mt-1">
        <span>Last activity:</span>
        <span>{data.activity.last_activity.split(".")[0]}</span>
      </div>
      <div className="w-full flex items-center gap-x-[4px] mt-[22px]">
        <div
          className={`rounded-full bg-[#F86624] h-3`}
          style={{ width: `${activePercent[0]}%` }}
        />
        <div
          className={`rounded-full bg-[#4ED5BD] h-3`}
          style={{ width: `${activePercent[1]}%` }}
        />
        <div
          className={`rounded-full bg-[#EB3D4D] h-3`}
          style={{ width: `${activePercent[2]}%` }}
        />
      </div>
      <div className="mt-[22px] flex flex-col gap-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <span className="inline-block rounded-full w-3 h-3 bg-[#F86624]" />
            <span className="text-[#667085] dark:text-slate-400 text-sm font-medium">
              Active day(s)
            </span>
          </div>
          <span className="text-[#1D1F2C] dark:text-slate-100 text-base font-medium">
            {data.activity.num_days} days
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <span className="inline-block rounded-full w-3 h-3 bg-[#4ED5BD]" />
            <span className="text-[#667085] dark:text-slate-400 text-sm font-medium">
              Active week(s)
            </span>
          </div>
          <span className="text-[#1D1F2C] dark:text-slate-100 text-base font-medium">
            {data.activity.num_weeks} weeks
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <span className="inline-block rounded-full w-3 h-3 bg-[#EB3D4D]" />
            <span className="text-[#667085] dark:text-slate-400 text-sm font-medium">
              Active month(s)
            </span>
          </div>
          <span className="text-[#1D1F2C] dark:text-slate-100 text-base font-medium">
            {data.activity.num_months} months
          </span>
        </div>
      </div>
    </div>
  );
};

export default Activities;
