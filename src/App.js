import React, {useState} from "react";
import ScreenUno from "./screens/screenUno";
import Header from "./components/header";
import BlockHeader from "./components/blockHeader";
import ScreenDos from "./screens/screenDos";
import ScreenTres from "./screens/screenTres";
import ScreenCuatro from "./screens/screenCuatro";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageValue = () => setCurrentPage((val) => val + 1)
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('Not Provided');
  const [userType, setUserType] = useState('');
  const returnData = () => {
    //Will return the input data for now, you can add functionality to it later.
    console.log('Full Name: ', fullName);
    console.log('Display Name: ', displayName);
    console.log('Workspace Name: ', workspaceName);
    console.log('Workspace URL: ',workspaceUrl);
    console.log('User Type: ', userType);
  }
  return (
    <div className="bg-background flex items-center h-screen w-screen justify-center">
      {
        (currentPage===1) ?
          <InsideBlock1 func={setCurrentPageValue} setFullName={setFullName} setDisplayName={setDisplayName} />
        : (currentPage===2) ?
          <InsideBlock2 func={setCurrentPageValue} page={currentPage} setWorkspaceName={setWorkspaceName} setWorkspaceUrl={setWorkspaceUrl} />
        : (currentPage===3) ?
          <InsideBlock3 func={setCurrentPageValue} page={currentPage} setUserType={setUserType} />
        : <InsideBlock4 func={returnData} page={currentPage} displayName={displayName} />

      }
    </div>
  );
}

export default App;

const InsideBlock1 = ({func, page, setFullName, setDisplayName}) => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header page={page} />
      <div className="mt-10 w-9/10">
        <BlockHeader
          header={"Welcome! First things first..."}
          subheader={"You can always change them later."}
        />
      </div>
      <ScreenUno getToNextPage={func} fullNameSetter={setFullName} dispNameSetter={setDisplayName} />
    </div>
  );
};

const InsideBlock2 = ({func, page, setWorkspaceName, setWorkspaceUrl}) => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header page={page} />
      <div className="mt-10 w-9/10">
        <BlockHeader
          header={"Let's setup a home for all your work"}
          subheader={"You can always create another workspace later."}
        />
      </div>
      <ScreenDos getToNextPage={func} setName={setWorkspaceName} setUrl={setWorkspaceUrl} />
    </div>
  );
};

const InsideBlock3 = ({func, page, setUserType}) => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header page={page} />
      <div className="mt-10 w-9/10">
        <BlockHeader
          header={"How are you planning to use Eden?"}
          subheader={"We'll streamline your setup experience accordingly."}
        />
      </div>
      <ScreenTres getToNextPage={func} setUser={setUserType} />
    </div>
  );
};

const InsideBlock4 = ({func, page, displayName}) => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header page={page} />
      <div className="mt-10 mb-0 w-9/10 flex flex-col flex-wrap items-center">
        <div className="">
          <img alt="eden" src={require("./icons/tickmark.jpg")} />
        </div>
        <BlockHeader
          header={`Congratulations, ${displayName}!`}
          subheader={"You have completed onboarding, you can start using Eden!"}
        />
      </div>
      <ScreenCuatro returnValue={func}  />
    </div>
  );
};
