import styled from "styled-components";
import { Button, IconButton, Typography } from "@mui/material"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { useState } from "react";
import InputForm from "./InputForm";
import RenderFileStructure from "./RenderFileStructure";

const WhiteButton = styled(Button)`
    background: transparent;
    color: white !important;
`

const WhiteIconButton = styled(IconButton)`
  color: white !important;
`
const LightDiv = styled.div`
  background-color: #333;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function Header(props){
  const [arrow, setArrow] = useState(false); // 0 = right
  const [type, setType] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [currentFolder, setCurrentFolder] = useState('');

  function nameBtnClicked(){
    setArrow(!arrow);
  }
  function createNew(e, type, level){
    if(!arrow){
      setArrow(!arrow);
    }
    console.log(e.currentTarget.parentElement.parentElement.firstChild.firstChild.nextSibling.innerHTML);
    // setCurrentFolder(e.currentTarget.parentElement.parentElement.classList[2]);
    setCurrentFolder(e.currentTarget.parentElement.parentElement.firstChild.firstChild.nextSibling.innerHTML);
    setType(type);
    setFormVisible(true);

  }
  let folderNumber = "folder" + Math.ceil(Math.random()*10000);
  return (
    <LightDiv>
      <FlexDiv className={folderNumber} >
        <WhiteButton onClick={nameBtnClicked}>
          <WhiteIconButton>
            {arrow ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon />}
          </WhiteIconButton>
          <Typography>File Explorer</Typography>
        </WhiteButton>
        <span>
        <WhiteIconButton onClick={(e)=>createNew(e, "file", 0)}>
          <NoteAddOutlinedIcon />
        </WhiteIconButton>
        <WhiteIconButton onClick={(e)=>createNew(e, "folder", 0)}>
          <CreateNewFolderOutlinedIcon />
        </WhiteIconButton>
        </span>
      </FlexDiv>
      {arrow && <ul id="level0">
        {formVisible && <InputForm setFormVisible={(val)=>setFormVisible(val)} type={type} fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val)} currentFolder={currentFolder}/>}
        <RenderFileStructure fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val)}/>
      </ul>}
    </LightDiv>
  )
}