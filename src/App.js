import './App.css';
import Names from './components/Names';
import { useState } from 'react';

function App() {
  const [fileStructure, setFileStructure] = useState({fileStructure : {
    files: [],
    folders: {}
  }})
  return (
    <div className="App">
      <Names type="folder" name="File Explorer" fileStructure={fileStructure} setFileStructure={(val) => setFileStructure(val)}/>
    </div>
  );
}

export default App;
