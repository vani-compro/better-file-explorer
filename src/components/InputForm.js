import { TextField, Button } from "@mui/material"
import styled from "styled-components";
import { useState } from "react";

const StyledTextField = styled(TextField)`
  background-color: #ddd !important;
  border-radius: 0.3rem;
`
const FlexForm = styled.form`
  display: flex;
  margin-left: 2rem;
`
const StyledButton = styled(Button)`
  color: white !important;
`
export default function InputForm(props){
  const [inputText, setInputText] = useState('');
  const handleChange = (e) => {
    setInputText(e.target.value);
  }
  const handleSubmit = (e) => {
    // alert('submitted');
    let location = props.fileStructure;
    if(props.addType === 'file'){
      location.files.push(inputText);
    }else{
      location.folders[inputText] = {files: [], folders: {}};
    }
    props.setFileStructure(location);
    props.setShowForm(false);
    props.setShowName(true);
    props.setCurrFolder(inputText);
    console.log(props.fileStructure);
  }
  return (
    <FlexForm onSubmit="handleSubmit">
      <StyledTextField value={inputText} onChange={(e)=>handleChange(e)} ></StyledTextField>
      <StyledButton onClick={handleSubmit}>Add</StyledButton>
    </FlexForm>
  );
}