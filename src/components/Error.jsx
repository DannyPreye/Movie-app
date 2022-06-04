import React from "react";

const Error = ({ error }) => {
  return (
    <div className="w-full h-full grid place-items-center text-lg text-white">
      {error}
    </div>
  );
};

export default Error;
