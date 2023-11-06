import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const WhiteTextField = styled(TextField)`
  background-color: #fff;
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

  function formSubmitted(){
    // console.log(props.fileStructure);
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
    // console.log(props.fileStructure);
  }
  const handleChange = (e) => {
    setInputName(e.target.value);
  }
  return (
    <li>
      <FlexForm onSubmit={formSubmitted}>
        <WhiteTextField value={inputName} onChange={(e)=>handleChange(e)} label="Enter name"></WhiteTextField>
        <WhiteButton type="submit">Add</WhiteButton>
      </FlexForm>
    </li>
  )
}