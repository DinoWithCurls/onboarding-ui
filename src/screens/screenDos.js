import React from "react";
import {InputBox, EmailInputBox} from "../components/inputBox";
import SubmitButton from "../components/submitButton";
import InputHeader from "../components/inputHeader";
const ScreenDos = ({getToNextPage, setName, setUrl}) => {
  return (
    <div className="h-1/2 w-4/5 flex flex-col items-center justify-center top-0">
      <div className="w-1/3">
        <InputHeader>Workspace Name</InputHeader>
        <InputBox setValue={setName} placeholder={"Eden"} />
        <InputHeader>
          Workspace URL <div className="text-gray ml-1">(optional)</div>
        </InputHeader>
        <EmailInputBox setValue={setUrl} placeholder={'Example'}/>
        <SubmitButton onPressAction={getToNextPage}>Create Workspace</SubmitButton>
      </div>
    </div>
  );
};

export default ScreenDos;
