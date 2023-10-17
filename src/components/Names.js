// import {Box} from '@mui/material';
import {Button, Typography} from '@mui/material';
import {IconButton} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import styled from 'styled-components';

const FolderName = styled(Typography)`
  font-weight: 800 !important;
  color: #ddd !important;
`
const FileName = styled(Typography)`
  color: #ddd !important;
`
const WhiteIconButton = styled(IconButton)`
  color: #ddd !important;
`

export default function Names(props){
  return (
    <Button>
      {props.type === "folder" ?
        <>
          <WhiteIconButton>
            <ArrowForwardIosIcon />
            <FolderIcon />
          </WhiteIconButton>
          <FolderName>{props.name}</FolderName>
        </> :
        <>
        <WhiteIconButton>
          <InsertDriveFileIcon />
        </WhiteIconButton>
        <FileName>{props.name}</FileName>
        </>
      }



    </Button>
  )
}