import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { Typography, IconButton, Button } from '@mui/material';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import { useState } from 'react';
import InputForm from './InputForm';

const InlineTypography = styled(Typography)`
  display: inline;
`
const WhiteButton = styled(Button)`
    background: transparent;
    color: white !important;
    padding: 0 !important;
`

const WhiteIconButton = styled(IconButton)`
  color: white !important;
`
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function RenderFileStructure(props){
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
  return (

    <>
      {console.log(props.fileStructure)}
      {props.fileStructure.map((ele) => <li>
        {ele.type==='file' ? <><WhiteIconButton><InsertDriveFileOutlinedIcon /></WhiteIconButton> <InlineTypography>{ele.name}</InlineTypography></> : <><FlexDiv><WhiteButton onClick={nameBtnClicked}>
          <WhiteIconButton>
            {arrow ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon />}
          </WhiteIconButton>
          <Typography>{ele.name}</Typography>
        </WhiteButton>
        <span>
        <WhiteIconButton onClick={(e)=>createNew(e, "file", 0)}>
          <NoteAddOutlinedIcon />
        </WhiteIconButton>
        <WhiteIconButton onClick={(e)=>createNew(e, "folder", 0)}>
          <CreateNewFolderOutlinedIcon />
        </WhiteIconButton>
        </span></FlexDiv>{arrow && <ul id="level0">
        {formVisible && <InputForm setFormVisible={(val)=>setFormVisible(val)} type={type} fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val)} currentFolder={currentFolder}/>}
        <RenderFileStructure fileStructure={ele.children}/>
      </ul>}</>}
      </li>)}
    </>
  )
}

/*
<WhiteButton><WhiteIconButton><KeyboardArrowRightIcon /></WhiteIconButton><WhiteIconButton><FolderOutlinedIcon /></WhiteIconButton><InlineTypography>{ele.name}</InlineTypography></WhiteButton>
*/





/*

[{},{ [] },{},{},{},{ [] },{}]

*/