import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled, { css } from "styled-components";
import './../App.css';

const WhiteTextField = styled(TextField)`
  background-color: #fff;
  @keyframes shake {
  0% { transform: translateX(0); }
  10% { transform: translateX(-5px); }
  20% { transform: translateX(5px); }
  30% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  60% { transform: translateX(5px); }
  70% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  90% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
  /* if(!validated){
    border: 2px solid rgb(240, 0, 0);
    animation: shake 1.5s ease-in-out infinite;
  } */
  /* border: '2px solid red !important'; */
  /* border: ${props => !props.validated && '2px solid rgb(240, 0, 0)'};
  animation: ${props => !props.validated && 'shake 1.5s ease-in-out 1'}; */
  ${props => !props.validated && css`
    border: 2px solid rgb(240, 0, 0) !important;
    animation: shake 1.5s ease-in-out;
  `}
`
const WhiteButton = styled(Button)`
    background: transparent;
    color: white !important;
`
const FlexForm = styled.form`
  display: flex;
`
export default function InputForm(props){
  console.log(props.fileStructure);
  const [inputName, setInputName] = useState('');
  const [validated, setValidated] = useState(true);
  const [failingValidation, setFailingValidation] = useState('Please enter the correct name.');
  function validations(){
    if (inputName === ''){
      setFailingValidation('Please enter a name.')
      return false;
    }else{
      return true;
    }
  }

  function formSubmitted(e){
    e.preventDefault();
    setValidated(true);
    if(validations()){
      props.setFormVisible(false);
      let newEntry;
      if(props.type === 'file'){
        newEntry = {
          name: `${inputName}`,
          type: 'file',
        }
      }else{
        newEntry = {
          name: `${inputName}`,
          type: 'folder',
          children: []
        }
      }
      let found=false;
      function pushInFolder(fs){
        if(found){
          return;
        }
        for(let i in fs){
          if(fs[i].name === props.currentFolder){
            fs[i].children.push(newEntry);
            found=true;
            return;
          }
        }
        for(let i in fs){
          if(fs[i].type === 'folder'){
            pushInFolder(fs[i].children);
          }
        }
      }
      if(props.currentFolder === 'File Explorer'){
        let location = props.fileStructure;
        location.push(newEntry);
        props.setFileStructure(location);
      }else{
        pushInFolder(props.fileStructure);
      }
    }else{
      setValidated(false);
    }
  }
  const handleChange = (e) => {
    setInputName(e.target.value);
  }
  return (
    <li>
      <FlexForm onSubmit={(e)=>formSubmitted(e)}>
        <WhiteTextField validated={validated} title={validated ? null : failingValidation} value={inputName} onChange={(e)=>handleChange(e)} placeholder="Enter name"></WhiteTextField>
        <WhiteButton type="submit">Add</WhiteButton>
      </FlexForm>
    </li>
  )
}