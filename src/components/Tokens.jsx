import { FaceFrownIcon } from "@heroicons/react/24/outline";

const Tokens = ({ data }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-[60%] flex flex-col items-center justify-center mx-auto bg-white dark:bg-slate-800 duration-[300ms] rounded-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <ul className="w-full flex flex-col divide-y divide dark:divide-slate-600 max-h-[260px] overflow-y-auto">
        {data.balance.length === 0 ? (
          <div className="w-full flex justify-center items-center flex-col gap-y-1">
            <FaceFrownIcon className="w-10 h-10 fill-yellow-500" />
            <p className="dark:text-slate-200">No tokens found</p>
          </div>
        ) : (
          data.balance.map((item) => (
            <li key={item.token_name} className="flex flex-row">
              <div className="flex items-center flex-1 p-4 cursor-pointer select-none">
                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src={item.image_url ? item.image_url : "https://files.moonfo.com/jdinsights/Blue_question_mark_icon.svg.png"}
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                </div>
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium dark:text-slate-200">
                    {item.token_name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">
                    {item.token_symbol}
                  </div>
                </div>
                <div className="flex flex-col justify-end text-right">
                  <div className="text-base text-gray-600 dark:text-slate-400">
                    {item.amount.toFixed(6)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">
                    ${item.usd_amount.toFixed(2)}
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Tokens;
