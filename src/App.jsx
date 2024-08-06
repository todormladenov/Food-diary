import './App.css'
import AddFoodSection from './components/add-food/AddFoodSection';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import CaloriesCalculator from './components/calories-calculator/CaloriesCalculator';
import DiarySection from './components/diary/diary-section/DiarySection';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import Snackbar from './components/snackbar/Snackbar';
import { SnackbarProvider } from './contexts/SnackbarContext';
import Home from './components/home/Home';
import CreateFood from './components/food/create-food/CreateFood';
import AuthenticatedView from './components/route-guards/AuthenticatedView';
import GuestView from './components/route-guards/GuestView';
import EditFood from './components/food/edit-food/EditFood';
import FoodsCatalog from './components/food/my-created-foods/FoodsCatalog';

function App() {

  return (
    <>
      <AuthContextProvider>
        <SnackbarProvider>
          <Snackbar />

          <Header />

          <div className="wrapper">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/calories-calculator' element={<CaloriesCalculator />} />
              <Route path='/foods-catalog' element={<FoodsCatalog />} />

              <Route element={<GuestView />}>
                <Route path='/auth/login' element={<Login />} />
                <Route path='/auth/register' element={<Register />} />
              </Route>

              <Route element={<AuthenticatedView />}>
                <Route path='/diary/:diaryDate' element={<DiarySection />} />
                <Route path='/add-food/:mealType/:dateId' element={<AddFoodSection />} />
                <Route path='/create-food' element={<CreateFood />} />
                <Route path='/edit-food/:foodId' element={<EditFood />} />
              </Route>

            </Routes>
          </div>

        </SnackbarProvider>
      </AuthContextProvider>
    </>
  );
}

export default App
