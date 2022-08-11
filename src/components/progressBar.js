import React from "react";
const Circle = ({ num, isActive }) => {
  return (
    <div
      className={` w-[35px] h-[35px] rounded-[50%] flex justify-center bg-opacity-100 bottom-0 text-bold items-center ${
        isActive === true
          ? "bg-appblue text-[color:white] "
          : " border bg-white border-bordercolor"
      }`}
    >
      {num}
    </div>
  );
};

const ProgressBar = ({ screenNo }) => {
  return (
    <div className="relative flex w-full bg-center mt-10 justify-center items-center">
      <div className="flex justify-between flex-row w-1/4">
        <Circle num={1} isActive={true} />
        <Circle num={2} isActive={screenNo >= 2 ? true : false} />
        <Circle num={3} isActive={screenNo >= 3 ? true : false} />
        <Circle num={4} isActive={screenNo >= 4 ? true : false} />
      </div>
    </div>
  );
};

export default ProgressBar;

//
