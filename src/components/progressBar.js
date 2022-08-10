import React, { useState } from "react";

const Circle = ({ num, isActive }) => {
  return (
    <div
      className={`w-[35px] h-[35px] rounded-[50%] flex justify-center bottom-0 text-bold items-center ${
        isActive === true
          ? "bg-appblue text-[color:white] "
          : " border bg-white border-bordercolor"
      }`}
    >
      {num}
    </div>
  );
};

const ProgressLine = ({ isActive }) => {
  return (
    <div className="absolute top-[50%] left-0 h-1 w-[100%] translate-y-[50%] -z-1">
      -
    </div>
  );
};

const ProgressBar = ({ noOfScreens, onPressButton }) => {
  const [itemState, setItemState] = useState(false);
  return (
    <div className="flex justify-center items-center flex-row mt-10">
      <Circle num={1} isActive={true} />
      <ProgressLine isActive={true} />
      <Circle num={2} isActive={true} />
      <ProgressLine isActive={true} />
      <Circle num={3} isActive={false} />
      <ProgressLine isActive={true} />
      <Circle num={4} isActive={false} />
    </div>
  );
};

export default ProgressBar;
