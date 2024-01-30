import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Calculator from './component/Calculator';
import Data from './component/Data';
import Nav from './component/Nav';
import About from './component/About';
import Opr from './component/Opr'; 
import API1 from './component/API1';
import API2 from './component/API2';
import Raj from './component/Raj';
import API3 from './component/API3';
import API4 from './component/API4';
import Insert from './component/Insert';
import Del from './component/Del';
import Edit from './component/Edit';
function app() {


return (
  <div>
<center><h1>App component</h1></center><hr/>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='calculator' element={<Calculator/>}/>
  <Route path='data' element={<Data/>}/>
  <Route path='opr' element={<Opr/>}/>
  <Route path='API1' element={<API1/>}/>
  <Route path='nav' element={<Nav/>}/>
  <Route path='API2' element={<API2/>}/>
  <Route path='Raj' element={<Raj/>}/>
  <Route path='api3' element={<API3/>}/>
  <Route path='API4' element={<API4/>}/>
  <Route path='insert' element={<Insert/>}/>
  <Route path='delete/:id' element={<Del/>}/>
  
  <Route path='edit/:id/:name/:course' element={<Edit/>}/>
  </Routes>
  </BrowserRouter>
  </div>

 
 
 );
}
export default app;


