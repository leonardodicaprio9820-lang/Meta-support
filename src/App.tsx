import React from 'react';
import BlockChain from './views/Home';
import { Routes, Route} from "react-router-dom"
import Connect from './views/Connect/indext';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<BlockChain/>}/>
        <Route path="/Connect-wallet" element={<Connect/>}/>
      </Routes>
    </div>
  );
}

export default App;
