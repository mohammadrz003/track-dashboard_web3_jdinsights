import Skeleton from "./Skeleton";

const HomePageLoading = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-x-6">
        <Skeleton>
          <div className="w-full p-5 rounded-xl bg-center bg-cover flex flex-col gap-y-4 h-[174px]"></div>
        </Skeleton>
        <Skeleton>
          <div className="w-full p-5 rounded-xl bg-center bg-cover flex flex-col gap-y-4 h-[174px]"></div>
        </Skeleton>
        <Skeleton className="md:!col-span-2 lg:!col-span-1">
          <div className="w-full p-5 rounded-xl bg-center bg-cover flex flex-col gap-y-4 h-[174px]"></div>
        </Skeleton>
      </div>
      <div className="w-full flex flex-col gap-y-6 md:flex-row mt-6 gap-x-6">
        <Skeleton className="w-full md:w-1/2 lg:w-[40%] p-6 rounded-xl h-[260px]" />
        <Skeleton className="w-full md:w-1/2 lg:w-[60%] p-6 rounded-xl h-[260px]" />
      </div>
    </>
  );
};

export default HomePageLoading;
