import React from "react";
import {InputBox, EmailInputBox} from "../components/inputBox";
import SubmitButton from "../components/submitButton";
import InputHeader from "../components/inputHeader";
const ScreenDos = () => {
  return (
    <div className="h-1/2 w-4/5 flex flex-col items-center justify-center top-0">
      <div className="w-1/3">
        <InputHeader>Workspace Name</InputHeader>
        <InputBox placeholder={"Eden"} />
        <InputHeader>
          Workspace URL <div className="text-gray ml-1">(optional)</div>
        </InputHeader>
        <EmailInputBox placeholder={'Example'}/>
        <SubmitButton>Create Workspace</SubmitButton>
      </div>
    </div>
  );
};

export default ScreenDos;
