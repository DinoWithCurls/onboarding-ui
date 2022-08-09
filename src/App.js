import React from "react";
import ProgressBar from "./components/progressBar";
import SubmitButton from "./components/submitButton";
function App() {
  return (
    <div className="bg-background flex items-center justify-center">
      <div className="bg-white flex flex-col w-4/5 ">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <ProgressBar noOfScreens={2} />
        <div className="w-1/3">
          <SubmitButton>Enter</SubmitButton>
        </div>
      </div>
    </div>
  );
}

export default App;
