import React from "react";

const InputBox = ({ setValue, inputType }) => {
  return (
    <div className="mb-3 pt-0">
      <input
        type="text"
        placeholder={inputType}
        class="px-3 py-3 relative border rounded text-sm w-full border-bordercolor focus:border-appblue mb-5"
        onChange={text => setValue(text)}
      />
    </div>
  );
};

export default InputBox;
