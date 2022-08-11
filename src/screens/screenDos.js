import React from "react";

import {
  InputBox,
  EmailInputBox,
  SubmitButton,
  InputHeader,
  BlockHeader,
} from "../components";

const WorkspaceInput = ({ getToNextPage, setName, setUrl }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center top-0">
      <div className="w-1/4">
        <InputHeader>Workspace Name</InputHeader>
        <InputBox setValue={setName} placeholder={"Eden"} />
        <InputHeader>
          Workspace URL <div className="text-gray ml-1">(optional)</div>
        </InputHeader>
        <EmailInputBox setValue={setUrl} placeholder={"Example"} />
        <SubmitButton onPressAction={getToNextPage}>
          Create Workspace
        </SubmitButton>
      </div>
    </div>
  );
};

const WorkspaceTab = ({ func, setWorkspaceName, setWorkspaceUrl }) => {
  return (
    <div className="w-full h-full">
      <div className="mt-20 w-9/10">
        <BlockHeader
          header={"Let's setup a home for all your work"}
          subheader={"You can always create another workspace later."}
        />
      </div>
      <div className="h-1/2 w-9/10">
        <WorkspaceInput
          getToNextPage={func}
          setName={setWorkspaceName}
          setUrl={setWorkspaceUrl}
        />
      </div>
    </div>
  );
};

export default WorkspaceTab;
