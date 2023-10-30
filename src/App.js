import { useState } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer';
import InputForm from './components/InputForm';
import Names from './components/Names';

function App() {
  const [fileStructure, setFileStructure] = useState({files:[], folders:{}});
  const [arrow, setArrow] = useState(false); // 0 = right, 1 = down
  const [showForm, setShowForm] = useState(false);
  const [addType, setAddType] = useState('');
  const [showName, setShowName] = useState(false);
  const [currFolder, setCurrFolder] = useState('fileExplorer');

  function nameButtonClicked(){
    setArrow(!arrow);
  }
  function createNew(type){
    console.log('create new ' + type);
    setShowForm(true);
    setAddType(type);
  }
  return (
    <div>
      <FileExplorer fileStructure={fileStructure} setFileStructure={(val) => setFileStructure(val)} arrow={arrow} setArrow={(val)=>setArrow(val)} nameButtonClicked={()=>nameButtonClicked()} createNew={(type)=>createNew(type)} />
      {arrow && showForm && <InputForm fileStructure={fileStructure} setFileStructure={(val) => setFileStructure(val)} addType={addType} setShowForm={(val)=>setShowForm(val) } setShowName={(val) => setShowName(val) } setCurrFolder={(val)=>setCurrFolder(val) } />}
      {arrow && showName && <Names addType={addType} fileStructure={fileStructure} setFileStructure={(val)=>setFileStructure(val) }currFolder={currFolder} />}
    </div>

  )

}

export default App;
