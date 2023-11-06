import { Button, TextField, Tooltip } from "@mui/material";
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

  function checkEmptyNames(){
    if (inputName === ''){
      setFailingValidation(`Please enter a ${props.type} name.`)
      return false;
    }else{
      return true;
    }
  }
  function checkFileExtensions(){
    //regex wow
    // let x = /(?:\.([^.]+))?$/;
    // let ext = x.exec(inputName)[1];
    // console.log(ext);

    let fileExt = inputName.split('.').pop();
    console.log(fileExt);
    if(fileExt === 'txt' || fileExt === 'htm' || fileExt === 'html' || fileExt === 'css' || fileExt === 'js'){
      return fileExt;
    }
    setFailingValidation(`Please enter a valid ${props.type} extension.`)
    return false;
  }
  function validations(){
    const emptyNames = checkEmptyNames();
    if(!emptyNames){
      return false;
    }
    let fileExtensions = true;
    if(props.type==='file'){
      fileExtensions = checkFileExtensions();
      if(!fileExtensions){
        return false;
      }
    }
    return true;
  }

  function formSubmitted(e){
    e.preventDefault();
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
        <Tooltip title={validated ? null : failingValidation}>
        <WhiteTextField validated={validated} value={inputName} onChange={(e)=>handleChange(e)} placeholder={"Enter " + props.type + " name."}></WhiteTextField>
        </Tooltip>
        <WhiteButton type="submit">Add</WhiteButton>
      </FlexForm>
    </li>
  )
}