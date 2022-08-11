import React from "react";
import { SubmitButton, BlockHeader } from "../components";

const AcknowledgementTab = ({ func, displayName }) => {
  return (
    <div className="w-full h-full">
      <div className="mt-20 w-9/10 flex flex-col flex-wrap items-center">
        <div>
          <img alt="eden" src={require("../icons/tickmark.jpg")} />
        </div>
        <BlockHeader
          header={`Congratulations, ${displayName}!`}
          subheader={"You have completed onboarding, you can start using Eden!"}
        />
      </div>
      <div className="h-1/2 w-full flex flex-col items-center justify-center">
        <div className="w-1/4">
          <SubmitButton onPressAction={func}>Launch Eden</SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default AcknowledgementTab;
