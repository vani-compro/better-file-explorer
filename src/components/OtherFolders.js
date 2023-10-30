import styled from "styled-components"
import NoteAdd from "@mui/icons-material/NoteAdd"
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';import { IconButton, Button, Typography } from "@mui/material"
import { useState } from "react"
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowRight } from "@mui/icons-material";
import InputForm from "./InputForm";
import Names from "./Names";

const WhiteNoteAdd = styled(NoteAdd)`
  color: white !important;
`
const WhiteCreateNewFolderIcon = styled(CreateNewFolderIcon)`
  color: white !important;
`

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  padding-left: 0;
  background-color: transparent;
  border: none;
  color: white !important;
`
const StyledIconButton = styled(IconButton)`
  color: white !important;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function OtherFolders(props){
  const [arrow, setArrow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [addType, setAddType] = useState('');
  const [showName, setShowName] = useState(false);
  const [currFolder, setCurrFolder] = useState(props.currFolder);

  function nameButtonClicked(){
    setArrow(!arrow);
  }
  function createNew(type){
    console.log('create new ' + type);
    setShowForm(true);
    setAddType(type);
  }
  return (
    <div>
      <FlexDiv>
        <StyledButton onClick={()=>nameButtonClicked()}>
          <StyledIconButton>
            {arrow === false ? <KeyboardArrowRight /> : <KeyboardArrowDown />}
          </StyledIconButton>
          <Typography>{props.folder}</Typography>
        </StyledButton>
        <span>
          <StyledIconButton onClick={()=>createNew('file')}>
            <WhiteNoteAdd />
          </StyledIconButton>
          <StyledIconButton onClick={()=>createNew('folder')}>
            <CreateNewFolderIcon />
          </StyledIconButton>
        </span>
      </FlexDiv>
      {arrow && showForm && <InputForm fileStructure={props.fileStructure.folders[props.currFolder]} setFileStructure={(val) => props.setFileStructure(val)} addType={addType} setShowForm={(val)=>setShowForm(val) } setShowName={(val) => setShowName(val) } setCurrFolder={(val)=>setCurrFolder(val) }/>}
      {arrow && showName && <Names addType={addType} fileStructure={props.fileStructure.folders[props.currFolder]} setFileStructure={(val)=>props.setFileStructure(val) } currFolder={currFolder} />}
    </div>

  );
}