import React from "react";
import InputBox from "../components/inputBox";
import SubmitButton from "../components/submitButton";
import ContentHeader from '../components/inputHeader';

const ScreenUno = () => {
  return (
    <div className="h-1/2 w-full flex flex-col items-center justify-center top-0">
      <div className="w-1/3">
        <ContentHeader>Full Name</ContentHeader>
        <InputBox inputType={"Steve Jobs"} />
        <ContentHeader>Display Name</ContentHeader>
        <InputBox inputType={"Steve"} />
        <SubmitButton>Create Workspace</SubmitButton>
      </div>
    </div>
  );
};

export default ScreenUno;