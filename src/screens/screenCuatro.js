import React from "react";

import SubmitButton from "../components/submitButton";

const ScreenCuatro = ({returnValue}) => {
  return (
    <div className="h-1/2 w-4/5 flex flex-col items-center justify-center top-0">
      <div className="w-1/3">
        <SubmitButton onPressAction={returnValue}>Launch Eden</SubmitButton>
      </div>
    </div>
  );
};

export default ScreenCuatro;
