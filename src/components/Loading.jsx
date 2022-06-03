import React from "react";
import LoadingSpin from "react-loading-spin";
const Loading = () => {
  return (
    <div className="w-full h-full grid place-items-center ">
      <LoadingSpin size={"200px"} />
    </div>
  );
};

export default Loading;
