import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowRight } from "@mui/icons-material";
import { IconButton, Typography, Button } from "@mui/material"
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import styled from "styled-components";

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
export default function FileExplorer(props){
  return (
    <FlexDiv>
      <StyledButton onClick={()=>props.nameButtonClicked()}>
        <StyledIconButton>
          {props.arrow === false ? <KeyboardArrowRight /> : <KeyboardArrowDown />}
        </StyledIconButton>
        <Typography>File Explorer</Typography>
      </StyledButton>
      <span>
        <StyledIconButton onClick={()=>props.createNew('file')}>
          <NoteAddIcon />
        </StyledIconButton>
        <StyledIconButton onClick={()=>props.createNew('folder')}>
          <CreateNewFolderIcon />
        </StyledIconButton>
      </span>
    </FlexDiv>
  )
}