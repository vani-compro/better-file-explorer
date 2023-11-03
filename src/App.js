import './App.css';
import { Button, TextField, List, ListItem, IconButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, InsertDriveFile } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';

/// Components
//Input Form
const FlexForm = styled.form`
  display: flex;
  margin-left: 2rem;
`
const WhiteTextField = styled(TextField)`
  background-color: #fff !important;
`
function InputForm(props){
  const [inputText, setInputText] = useState('');

  function inputFormSubmitted(e){
    e.preventDefault();
    alert('submitted');
    let newObj;
    if(props.addType==='file'){
      newObj = {
        name: `${inputText}`,
        type: 'file'
      };
    }else{
      newObj = {
        name: `${inputText}`,
        type: 'folder',
        children: []
      }
    }
    const newFileStructure = props.fileStructure;
    newFileStructure.push(newObj);
    props.setFileStructure(newFileStructure);
    props.setShowForm(false);
    props.setShowName(true);
    console.log(props.fileStructure);
  }
  function inputFormChanged(e){
    setInputText(e.target.value);
  }
  return (
    <FlexForm onSubmit={(e)=>inputFormSubmitted(e)}>
      {props.addType === 'file' ? <WhiteTextField value={inputText} onChange={(e)=>inputFormChanged(e)} label='Enter File Name'></WhiteTextField> : <WhiteTextField value={inputText} onChange={(e)=>inputFormChanged(e)} label='Enter Folder Name'></WhiteTextField>}
      <Button type="submit">Add</Button>
    </FlexForm>
  )
}

//Render List

const WhiteIconButton = styled(IconButton)`
  color: White !important;
`

function RenderList(props){
  // const [openFolders, setOpenFolders] = useState({});
  const [expand, setExpand] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showName, setShowName] = useState(false);
  const [addType, setAddType] = useState("");

  const handleFolderClick = (folderName) => {
    setExpand(!expand);
  };
  const createNew = (addType) => {
    setShowForm(true);
    setAddType(addType);
  }
  const renderTree = (treeData) => {
    return treeData.map((item) => (
      <div key={item.name}>
        <ListItem button onClick={() => handleFolderClick(item.name)}>
          <WhiteIconButton>
            {item.type === 'folder' ? (
              expand ? (
                <ExpandMore />
              ) : (
                <ExpandLess />
              )
            ) : (
              <InsertDriveFile />
            )}
          </WhiteIconButton>
          <ListItemText primary={item.name} />
          {item.type === 'folder' ? <><span>
          <Button onClick={()=>createNew('file')}>Add File</Button>
          <Button onClick={()=>createNew('folder')}>Add Folder</Button>
        </span><div>{showForm && <InputForm addType={addType} fileStructure={props.fileStructure} setShowForm={(val)=>setShowForm(val) }setFileStructure={(val)=>props.setFileStructure(val)} setShowName={(val)=>setShowName(val)}/>}
      {showName && <RenderList fileStructure={props.fileStructure}/>}</div></> : null}
        </ListItem>
        {item.type === 'folder' && (
          <Collapse in={item.name} timeout="auto" unmountOnExit>
            {renderTree(item.children)}
          </Collapse>
        )}
      </div>
    ));
  };
  return (
    <List>
      {renderTree(props.fileStructure)}
    </List>
  )
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {
  // let fileStructure = [];
  const [fileStructure, setFileStructure] = useState([]);
  const [expand, setExpand] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showName, setShowName] = useState(false);
  const [addType, setAddType] = useState("");

  function nameBtnClicked(){
    setExpand(!expand);
  }
  function createNew(type){
    setShowForm(true);
    setAddType(type);
  }
  return (
    <div>
      <FlexDiv>
        <Button onClick={nameBtnClicked}>{expand ? <ExpandMore/> : <ExpandLess/>}File Structure</Button>
        <span>
          <Button onClick={()=>createNew('file')}>Add File</Button>
          <Button   onClick={()=>createNew('folder')}>Add Folder</Button>
        </span>
      </FlexDiv>
      {showForm && <InputForm addType={addType} fileStructure={fileStructure} setShowForm={(val)=>setShowForm(val) }setFileStructure={(val)=>setFileStructure(val)} setShowName={(val)=>setShowName(val)}/>}
      {showName && <RenderList fileStructure={fileStructure} setFileStructure={(val)=>setFileStructure(val)}/>}
    </div>

  )
}

export default App;
