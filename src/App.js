import React from 'react';

import Temapp from './component/Temapp';
import{Routes,Route} from 'react-router-dom'
import Search from './component/Search';



function App() {
  return (
    <>
     
     
    <Routes>
      <Route path='/' element={<Temapp />}/>
      <Route path='/search' element={<Search />}/>
    </Routes>
    
     
    </>
  );
}


export default App;
