import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { Typography, IconButton } from '@mui/material';
import styled from 'styled-components';
import OneFolder from './OneFolder';

const InlineTypography = styled(Typography)`
  display: inline;
`


const WhiteIconButton = styled(IconButton)`
  color: white !important;
`

export default function RenderFileStructure(props){

  return (

    <>
      {props.fileStructure.map((ele) => <li>
        {ele.type==='file' ? <><WhiteIconButton><InsertDriveFileOutlinedIcon /></WhiteIconButton> <InlineTypography>{ele.name}</InlineTypography></> : <OneFolder ele={ele} fileStructure={props.fileStructure} setFileStructure={(val)=>props.setFileStructure(val) }/>}
      </li>)}
    </>
  )
}