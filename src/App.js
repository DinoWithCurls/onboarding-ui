//Try to add animations so that it looks better.
//Deploy it on Netlify

import React, { useState } from "react";
import {
  NameTab,
  WorkspaceTab,
  UsertypeTab,
  AcknowledgementTab,
} from "./screens";
import { Header } from './components'

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageValue = () => setCurrentPage((val) => val + 1);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("Not Provided");
  const [userType, setUserType] = useState("");
  const returnData = () => {
    //Will return the input data for now, you can add functionality to it later.
    console.log("Full Name: ", fullName);
    console.log("Display Name: ", displayName);
    console.log("Workspace Name: ", workspaceName);
    console.log("Workspace URL: ", workspaceUrl);
    console.log("User Type: ", userType);
  };
  return (
    <div className="bg-background flex items-center h-screen w-screen justify-center">
      <div className="h-4/5 w-4/5 bg-[#fff] shadow-md">
        <Header page={currentPage} />
        {currentPage === 1 ? (
          <NameTab
            func={setCurrentPageValue}
            setFullName={setFullName}
            setDisplayName={setDisplayName}
          />
        ) : currentPage === 2 ? (
          <WorkspaceTab
            func={setCurrentPageValue}
            setWorkspaceName={setWorkspaceName}
            setWorkspaceUrl={setWorkspaceUrl}
          />
        ) : currentPage === 3 ? (
          <UsertypeTab
            func={setCurrentPageValue}
            setUserType={setUserType}
          />
        ) : (
          <AcknowledgementTab
            func={returnData}
            displayName={displayName}
          />
        )}
      </div>
    </div>
  );
}
export default App;
