import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Teacher from './components/Teacher';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditForm from './components/EditForm';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Nav></Nav>
      <Routes>
        {/* <Route path='/' element={<Teacher></Teacher>}> </Route> */}
        <Route path='/' element={<Read></Read>}></Route>
        <Route path='/Form' element={<EditForm data={{id:'',name:'',Grade:''}} method="post" />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
