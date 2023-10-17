import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, Paper, IconButton } from '@mui/material';
import styled from 'styled-components';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import { useState } from 'react';

const BlockFormControl = styled(FormControl)`
  /* height: 3rem !important; */
  flex-direction: row !important;
`

const MarginalisedTextField = styled(TextField)`
  margin: 0 1rem !important;
`

const CustomPaper = styled(Paper)`
  margin-left: 2.5rem !important;
  width: fit-content !important;
  background-color: #ddd !important;
`

export default function InputForm(props) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(event);
    props.setShowName(true);
    props.setName(inputText);
    props.setShowForm(false);
  };

  const handleChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <CustomPaper>
      <BlockFormControl>
        {/* {alert('props ' + props.addType)} */}
        <IconButton>
          {props.addType === 'file' ?  <InsertDriveFileIcon /> : <FolderIcon />}
        </IconButton>

        <MarginalisedTextField value={inputText} onChange={(e)=>handleChange(e)} ></MarginalisedTextField>
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </BlockFormControl>
    </CustomPaper>
  );
}
