import React from "react";

const InputBox = ({ setValue, placeholder }) => {
  return (
    <div className="mb-3 pt-0">
      <input
        type="text"
        placeholder={placeholder}
        class="px-3 py-3 relative border rounded text-sm w-full border-bordercolor focus:border-appblue mb-5"
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
};

const EmailInputBox = ({ setValue, placeholder }) => {
  return (
    <div class="flex mb-3 pt-0">
      <span class="inline-flex items-center px-3 text-sm font-semibold text-gray bg-emailtab rounded-l-md border border-r-0 border-bordercolor mb-5 ">
        www.eden.com/
      </span>
      <input
        type="text"
        id="website-admin"
        class="rounded-none bg-white border text-gray-900 focus:border-appblue block flex-1 min-w-0 w-full text-sm border-bordercolor p-2.5 mb-5"
        placeholder={placeholder}
        onChange={event => setValue('www.eden.com/'+event.target.value)}
      />
    </div>
  );
};

export { InputBox, EmailInputBox };
