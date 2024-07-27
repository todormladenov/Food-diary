import './App.css'
import AddFoodSection from './components/add-food/AddFoodSection';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import CaloriesCalculator from './components/calories-calculator/CaloriesCalculator';
import DiarySection from './components/diary/diary-section/DiarySection';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />

      <div className="wrapper">
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/diary/:diaryDate' element={<DiarySection />} />
          <Route path='/add-food/:mealType/:dateId' element={<AddFoodSection />} />
          <Route path='/calories-calculator' element={<CaloriesCalculator />} />
        </Routes>
      </div>
    </>
  );
}

export default App
