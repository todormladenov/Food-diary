import './App.css'
import Login from './components/auth/login/Login';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App
