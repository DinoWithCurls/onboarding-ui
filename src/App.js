import React from "react";
import ScreenUno from "./screens/screenUno";
import Header from "./components/header";
import BlockHeader from "./components/blockHeader";
import ScreenDos from "./screens/screenDos";
import ScreenTres from "./screens/screenTres";
import ScreenCuatro from "./screens/screenCuatro";
function App() {
  return (
    <div className="bg-background flex items-center h-screen w-screen justify-center">
      <InsideBlock4 />
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

const InsideBlock3 = () => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header />
      <div className="mt-10 w-9/10">
        <BlockHeader
          header={"How are you planning to use Eden?"}
          subheader={"We'll streamline your setup experience accordingly."}
        />
      </div>
      <ScreenTres />
    </div>
  );
};

const InsideBlock4 = () => {
  return (
    <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md justify-center items-center flex flex-col">
      <Header />
      <div className="mt-10 mb-0 w-9/10 flex flex-col flex-wrap items-center">
        <div className="">
          <img alt="eden" src={require("./icons/tickmark.jpg")} />
        </div>
        <BlockHeader
          header={"Congratulations, Eren!"}
          subheader={"You have completed onboarding, you can start using Eden!"}
        />
      </div>
      <ScreenCuatro />
    </div>
  );
};
