import React, {useState} from "react";
import SubmitButton from "../components/submitButton";
import Item from "../components/item";
import groups from "../utils/data.json";
const ScreenTres = () => {
  const [selectValue, onSelectValue] = useState('');
  return (
    <div className="h-1/2 w-4/5 flex flex-row items-center justify-center top-0">
      <div className="w-1/3">
        <div className="flex flex-row w-full justify-between mb-2">
          {groups.map((groupType) => {
            return <Item key={groupType.id} prop={groupType} onSelect={onSelectValue} val={selectValue} />;
          })}
        </div>
        <SubmitButton>Create Workspace</SubmitButton>
      </div>
    </div>
  );
};

export default ScreenTres;
