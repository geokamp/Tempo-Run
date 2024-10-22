import React from "react";

const PrimaryBtn = ({ type, id, children, className }) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`text-base text-gray-200 bg-red-700 font-medium px-3 py-1.5 rounded gap-x-1 hover:bg-red-700 ease-out duration-500 ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryBtn;
