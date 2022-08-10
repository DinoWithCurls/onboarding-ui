import React from "react";
import ScreenUno from "./screens/screenUno";
import Header from "./components/header";
import BlockHeader from "./components/blockHeader";
function App() {
  return (
    <div className="bg-background flex items-center h-screen w-screen justify-center">
      <div className="h-4/5 w-4/5 bg-[#fff] z-20 shadow-md">
        <Header />
        <div className="mt-20"><BlockHeader /></div>
        <ScreenUno />
      </div>
    </div>
  );
}

export default App;