import React from "react";

import {
  BlockHeader,
  InputHeader,
  SubmitButton,
  InputBox,
} from "../components";

const NameTab = ({ func, setFullName, setDisplayName }) => {
  return (
    <div className="w-full h-full">
      <div className="mt-20 w-9/10">
        <BlockHeader
          header={"Welcome! First things first..."}
          subheader={"You can always change them later."}
        />
      </div>
      <div className="h-1/2 w-9/10">
        <NameInput
          getToNextPage={func}
          fullNameSetter={setFullName}
          dispNameSetter={setDisplayName}
        />
      </div>
    </div>
  );
};

const NameInput = ({ getToNextPage, fullNameSetter, dispNameSetter }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center top-0">
      <div className="w-1/4">
        <InputHeader>Full Name</InputHeader>
        <InputBox setValue={fullNameSetter} placeholder={"Steve Jobs"} />
        <InputHeader>Display Name</InputHeader>
        <InputBox setValue={dispNameSetter} placeholder={"Steve"} />
        <SubmitButton onPressAction={getToNextPage}>
          Create Workspace
        </SubmitButton>
      </div>
    </div>
  );
};

export default NameTab;
