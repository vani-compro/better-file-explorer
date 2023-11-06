import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFile';
import { Typography, IconButton } from '@mui/material';
import styled from 'styled-components';
import OneFolder from './OneFolder';

const InlineTypography = styled(Typography)`
  display: inline;
`
const WhiteIconButton = styled(IconButton)`
  color: white !important;
`
function RenderFiles( props ){
  return (
    <>
      {props.fileStructure.map((ele) => <li>
      {ele.type==='file' ? <><WhiteIconButton><InsertDriveFileOutlinedIcon /></WhiteIconButton> <InlineTypography>{ele.name}</InlineTypography></> : null }
      </li>)}
    </> 
  )
}
function RenderFolders( props ){
  return (
    <>
      {props.fileStructure.map((ele) => <li>
      {ele.type==='folder' ? <OneFolder ele={ele} fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val) }/> : null }
      </li>)}
    </>
  )
}

export default function RenderFileStructure(props){

  props.fileStructure.sort((a, b) => {
    // Use the localeCompare() method to compare strings
    return a.name.localeCompare(b.name);
  });

  return (


    <>
      {/* {props.fileStructure.map((ele) => <li>
        {ele.type==='file' ? <><WhiteIconButton><InsertDriveFileOutlinedIcon /></WhiteIconButton> <InlineTypography>{ele.name}</InlineTypography></> : <OneFolder ele={ele} fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val) }/>}
      </li>)} */}
      <RenderFiles fileStructure={props.fileStructure}/>
      <RenderFolders  fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val) }/>
    </>
  )
}