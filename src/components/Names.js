import NoteAdd from "@mui/icons-material/NoteAdd"
import { IconButton, ListItem, ListItemText, Collapse } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import OtherFolders from "./OtherFolders";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { InsertDriveFile } from "@mui/icons-material";
const WhiteNoteAdd = styled(NoteAdd)`
  color: white !important;
`

export default function Names(props){
  // const [thisType, setThisType] = useState(props.addType);
  // setThisType(props.addType);
  const [arrow, setArrow] = useState(false); // 0 = right, 1 = down
  const [showForm, setShowForm] = useState(false);
  const [addType, setAddType] = useState('');

  function nameButtonClicked(){
    setArrow(!arrow);
  }
  function createNew(type){
    console.log('create new ' + type);
    setShowForm(true);
    setAddType(type);
  }
  return (
    <>
      {props.fileStructure.files.map((file)=><p><IconButton><WhiteNoteAdd /></IconButton>{file}</p>)}

      {Object.keys(props.fileStructure.folders).map((folder) => <OtherFolders folder={folder} fileStructure={props.fileStructure} setFileStructure={props.setFileStructure} currFolder={props.currFolder} />)}

      {/* {Object.keys(props.fileStructure.folders).map((folder) => <RenderFolders folder={folder} fileStructure={props.fileStructure}/>)} */}

    </>
  )
}