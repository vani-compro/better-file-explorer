import AbcIcon from '@mui/icons-material/Abc';import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

import { Typography, IconButton } from '@mui/material';
import styled, { css } from 'styled-components';
import OneFolder from './OneFolder';

const InlineTypography = styled(Typography)`
  display: inline;
`
const WhiteIconButton = styled(IconButton)`
  color: white !important;
  ${props => (props.fileExt === "html" || props.fileExt === "htm") && css`color: #E5532D !important`}
  ${props => (props.fileExt === "css" ) && css`color: #3D9CD9 !important`}
  ${props => (props.fileExt === "js" ) && css`color: #FAB337 !important`}
  ${props => (props.fileExt === "txt" ) && css`color: #66DF5B !important`}
`
function RenderFiles( props ){
  let fileExt;
  function findExt(ele){
    console.log(ele);
    fileExt = ele.split('.').pop();
  }
  function fileIcon(){
    if (fileExt === "html" || fileExt === "htm"){
      return <HtmlIcon />
    }else if(fileExt === "css"){
      return <CssIcon />
    }else if(fileExt === "js"){
      return <JavascriptIcon/>
    }else if(fileExt==='txt'){
      return <AbcIcon/>
    }
  }
  return (
    <>
      {props.fileStructure.map((ele) => <li>{findExt(ele.name)}
      {ele.type==='file' ? <><WhiteIconButton fileExt={fileExt}>{fileIcon()}</WhiteIconButton> <InlineTypography>{ele.name}</InlineTypography></> : null }
      {/* {ele.type==='file' ? <><WhiteIconButton><InsertDriveFileOutlinedIcon /></WhiteIconButton> <InlineTypography>{ele.name}</InlineTypography></> : null } */}
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
      <RenderFiles fileStructure={props.fileStructure} fileType={props.fileType}/>
      <RenderFolders  fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val) }/>
    </>
  )
}