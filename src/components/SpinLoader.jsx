import LoadingSpin from "react-loading-spin";

const SpinLoader = () => {
  return (
    <div className="w-full h-full mt-[10rem] grid place-items-center">
      <LoadingSpin size="200px" />
    </div>
  );
};

export default SpinLoader;
