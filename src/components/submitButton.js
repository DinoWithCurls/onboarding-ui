import React from "react";

const SubmitButton = ({ children, onPressAction }) => {
  return (
    <button
      onClick={onPressAction}
      type="submit"
      className="inline-flex items-center px-10 py-2 bg-appblue rounded-md font-medium text-[color:white] "
    >
      {children}
    </button>
  );
};

export default SubmitButton;
