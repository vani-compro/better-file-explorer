import AddButton from './AddButton';
import {Button, Typography} from '@mui/material';
import {IconButton} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import styled from 'styled-components';
import { useState } from 'react';

const FolderName = styled(Typography)`
  font-weight: 800 !important;
  color: #ddd !important;
`
const FileName = styled(Typography)`
  color: #ddd !important;
`
const WhiteIconButton = styled(IconButton)`
  color: #ddd !important;
  display: inline !important;
`
const SpacedDiv = styled.div`
  margin-left: 1.5rem;
`
export default function Names(props){ // type, name, fileStructure, setFileStructure
  const [folderExpanded, setFolderExpanded] = useState(false);

  const nameButtonClicked = () => {
    setFolderExpanded(!folderExpanded);
  }

  return (
    <>
      {props.type === "folder" ?
        <SpacedDiv>
          <Button onClick={()=>nameButtonClicked()}>
            <WhiteIconButton>
              {folderExpanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
              <FolderIcon />
            </WhiteIconButton>
            <FolderName>{props.name}</FolderName>
          </Button>
          <AddButton fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val)} folderExpanded={folderExpanded} setFolderExpanded={(val) => setFolderExpanded(val)}/>
        </SpacedDiv> :
        <SpacedDiv>
          <Button>
            <WhiteIconButton>
              <InsertDriveFileIcon />
            </WhiteIconButton>
            <FileName>{props.name}</FileName>
          </Button>
        </SpacedDiv>
      }
    </>
  )
}