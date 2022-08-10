import React from "react";
import ScreenUno from "./screens/screenUno";
import Header from "./components/header";
import BlockHeader from "./components/blockHeader";
import ScreenDos from "./screens/screenDos";
function App() {
  return (
    <div className="bg-background flex items-center h-screen w-screen justify-center">
      <InsideBlock2 />
    </div>
  );
}

export default App;

const InsideBlock1 = () => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header />
      <div className="mt-10 w-9/10">
        <BlockHeader
          header={"Welcome! First things first..."}
          subheader={"You can always change them later."}
        />
      </div>
      <ScreenUno />
    </div>
  );
};

const InsideBlock2 = () => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header />
      <div className="mt-10 w-9/10">
        <BlockHeader
          header={"Let's setup a home for all your work"}
          subheader={"You can always create another workspace later."}
        />
      </div>
      <ScreenDos />
    </div>
  );
};