import React from "react";

const SecondaryBtn = ({
  type,
  id,
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`text-base text-red-700 bg-red-700/5 font-medium px-3 py-1.5 rounded flex items-center border border-red-600 gap-x-1 hover:border-indigo-600/70 hover:bg-red-700/10 ease-out duration-500 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default SecondaryBtn;
