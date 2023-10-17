import { Button, IconButton } from "@mui/material";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import styled from "styled-components";
import InputForm from './InputForm';
import { useState } from "react";
import Names from './Names';

const WhiteIconButton = styled(IconButton)`
  color: #ddd !important;
`
const InlineDiv = styled.div`
  display: inline;
`
export default function AddButton(props){  //fileStructure, setFileStructure, folderExpanded, setFolderExpanded
  const [showForm, setShowForm] = useState(false);
  const [showName, setShowName] = useState(false);
  const [addType, setAddType] = useState();
  const [name, setName] = useState('');

  const createNew = (type) => {
    // alert('create new ' + type);
    props.setFolderExpanded(true);
    setAddType(type);
    setShowForm(true);
  }
  return (
    <>
      <InlineDiv>
        <Button>
          <WhiteIconButton onClick={() => createNew('file')}><NoteAddIcon /></WhiteIconButton>
        </Button>
        <Button>
          <WhiteIconButton onClick={() => createNew('folder')}><CreateNewFolderIcon/></WhiteIconButton>
        </Button>
      </InlineDiv>
      {(showForm && props.folderExpanded) && <InputForm addType={addType} setShowName={(val)=>setShowName(val)} setName={(val) => setName(val)} setShowForm={(val)=>setShowForm(val)} fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val)}/>}
      {(showName && props.folderExpanded) && <Names type={addType} name={name} fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val)}/>}
    </>

  );
}