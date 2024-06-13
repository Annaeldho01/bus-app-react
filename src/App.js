import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';
import AddBus from './components/AddBus';
import Search from './components/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/reg" element={<AddUser/>}/>
      <Route path="/" element={<LoginUser/>}/>
      <Route path="/add" element={<AddBus/>}/>
      <Route path="/search" element={<Search/>}/>
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
