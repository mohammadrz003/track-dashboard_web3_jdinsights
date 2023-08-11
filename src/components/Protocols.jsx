const Protocols = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-slate-800 duration-[300ms] rounded-lg shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mt-8">
      <table className="table">
        {/* head */}
        <thead className="bg-slate-200 dark:bg-slate-700 divide-yellow-600">
          <tr className="dark:text-slate-50">
            <th>Protocols</th>
            <th>Interactions</th>
            <th>Last activity</th>
            <th>Volume in $</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.protocols.map((item) => (
            <tr key={item.name} className="dark:border-b-slate-600">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-circle w-12 h-12">
                      <img src={item.image_url} alt={item.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold dark:text-slate-100">
                      {item.name}
                    </div>
                    <div className="text-sm opacity-50 dark:text-slate-300">
                      {item.activity.active_days} active day
                      {item.activity.active_days > 1 && "s"}
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-normal dark:text-slate-200">
                {item.interactions}
              </td>
              <td>
                {item.activity.active_days === 0 &&
                item.activity.last_activity === 0 ? (
                  <span className="badge badge-outline badge-error badge-md whitespace-nowrap">
                    No activity
                  </span>
                ) : (
                  <span className="badge badge-outline badge-success badge-md whitespace-nowrap">
                    {`${item.activity.last_activity} day${
                      item.activity.last_activity > 1 ? "s" : ""
                    } ago`}
                  </span>
                )}
              </td>
              <th className="font-normal dark:text-slate-100">
                {item.volume.toFixed(2)}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Protocols;
