import React from "react";
import { BlockHeader, Item, SubmitButton } from "../components";
import groups from "../utils/data.json";

const UserTypeInput = ({ getToNextPage, setUser }) => {
  const handleChange = (val) => {
    setUser(val);
  };
  return (
    <div className="h-full w-full flex flex-row items-center justify-center top-0">
      <div className="w-1/4">
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

const UsertypeTab = ({ func, setUserType }) => {
  return (
    <div className="w-full h-full">
      <div className="mt-20 w-9/10">
        <BlockHeader
          header={"How are you planning to use Eden?"}
          subheader={"We'll streamline your setup experience accordingly."}
        />
      </div>
      <div className="h-1/2 w-9/10">
        <UserTypeInput getToNextPage={func} setUser={setUserType} />
      </div>
    </div>
  );
};

export default UsertypeTab;
