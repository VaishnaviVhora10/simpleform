import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';


function App() {
  return (
    <>
 <Router>
  {/* <Header/> */}
  <Routes>
    <Route path='/' element={<Form/>}></Route>
    <Route path='/list' element={<List/>}></Route>
  </Routes>
 </Router>
    </>
  );
}

export default App;
