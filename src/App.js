import { useState } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [fileStructure, setFileStructure] = useState([]);
  return (
    <div className="App">
      <Header fileStructure={fileStructure} setFileStructure={(val)=>setFileStructure(val)} />
    </div>
  );
}

export default App;
