const StatitsticCard = ({ icon, bgImage, className, title, number, label }) => {
  return (
    <div
      className={`p-5 rounded-xl bg-center bg-cover flex flex-col gap-y-4 ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-2 rounded-lg bg-white/20 w-fit">{icon}</div>
      <h3 className="text-base text-white/75 font-medium">{title}</h3>
      <div className="flex items-center gap-x-2">
        <h2 className="text-[28px] font-semibold text-white">{number}</h2>
        <div className="py-[2px] px-[6px] bg-white/20 font-semibold text-xs text-white rounded-[4px]">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatitsticCard;
