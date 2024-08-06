import { useNavigate } from 'react-router-dom';
import './Home.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { getTodayDate } from '../../utils/get-dates';

export default function Home() {
    const authState = useContext(AuthContext);
    const navigator = useNavigate();
    const todayDate = getTodayDate();

    const navigateTo = (path) => {
        navigator(path);
    }

    return (
        <div className='home-section'>
            <section className="hero">
                <h1>Welcome to Shape Up</h1>
                <p>Your ultimate fitness and nutrition tracker.</p>
            </section>
            <section className="home-content">
                <div className="card" onClick={() => navigateTo(`/diary/${todayDate}`)}>
                    <h2>Track Your Progress</h2>
                    <p>Keep a detailed diary of your fitness journey.</p>
                </div>
                <div className="card" onClick={() => navigateTo('/create-food')}>
                    <h2>Create Custom Meals</h2>
                    <p>Log your meals and track your calorie intake.</p>
                </div>
                <div className="card" onClick={() => navigateTo('/calories-calculator')}>
                    <h2>Calculate Your Calories</h2>
                    <p>Use our calculator to manage your daily intake.</p>
                </div>
                <div className="card" onClick={() => navigateTo('/foods-catalog')}>
                    <h2>Brows Our Foods Catalog</h2>
                    <p>Have a look on our foods section and add them yo your meals</p>
                </div>
            </section>
        </div>
    );
}