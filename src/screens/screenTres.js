import React from "react";
import SubmitButton from "../components/submitButton";
import Item from "../components/item";
import groups from "../utils/data.json";
const ScreenTres = ({ getToNextPage, setUser }) => {
  const handleChange = (val) => {
    setUser(val);
  };
  return (
    <div className="h-1/2 w-4/5 flex flex-row items-center justify-center top-0">
      <div className="w-1/3">
        <div className="flex flex-row w-full justify-between mb-2">
          {groups.map((groupType) => {
            return (
              <Item
                key={groupType.id}
                prop={groupType}
                onSelect={handleChange}
              />
            );
          })}
        </div>
        <SubmitButton onPressAction={getToNextPage}>
          Create Workspace
        </SubmitButton>
      </div>
    </div>
  );
};

export default ScreenTres;
