import React from "react";

import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";

const Item = ({ prop, onSelect, val }) => {
  return (
    <button
      className="border-2 w-5/12 h-full rounded-md break-normal p-4 border-bordercolor text-left focus:border-appblue focus:text-appblue"
      onClick={onSelect(prop.id)}
    >
      <div className="mt-2 mb-2">
        {prop.id === 1 ? (
          <UserIcon class="h-6 w-6" />
        ) : (
          <UserGroupIcon class="h-6 w-6" />
        )}
      </div>
      <div className="text-xl font-medium mb-2 text-appheader">
        {prop.title}
      </div>
      <div className="text-gray">{prop.text}</div>
    </button>
  );
};

export default Item;

//text-appblue