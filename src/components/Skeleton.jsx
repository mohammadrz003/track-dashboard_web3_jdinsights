const Skeleton = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg bg-slate-300 dark:bg-slate-700 animate-pulse ${className}`}
    >
      {children}
    </div>
  );
};

export default Skeleton;
