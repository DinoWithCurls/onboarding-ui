import React from "react";
import {InputBox} from "../components/inputBox";
import SubmitButton from "../components/submitButton";
import InputHeader from '../components/inputHeader';

const ScreenUno = () => {
  return (
    <div className="h-1/2 w-4/5 flex flex-col items-center justify-center top-0">
      <div className="w-1/3">
        <InputHeader>Full Name</InputHeader>
        <InputBox placeholder={"Steve Jobs"} />
        <InputHeader>Display Name</InputHeader>
        <InputBox placeholder={"Steve"} />
        <SubmitButton>Create Workspace</SubmitButton>
      </div>
    </div>
  );
};

export default ScreenUno;