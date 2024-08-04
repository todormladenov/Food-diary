import { Link, useNavigate } from 'react-router-dom';
import './Goals.css'

export default function Goals({ nutritionGoal, onHide }) {
    const navigator = useNavigate();

    const navigateToCalculator = () => {
        onHide();
        navigator("/calories-calculator");
    }

    return (
        <div className="overlay">
            <div className="backdrop" onClick={onHide}></div>
            <div className="modal">
                <div className="modal-content">
                    <header className="headers">
                        <h2>Nutrition Goals</h2>
                        <button className="close-btn" onClick={onHide}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </header>
                    {nutritionGoal
                        ?
                        (<div className="goals-info">
                            <p>Calories <strong>{nutritionGoal.calories}</strong></p>
                            <p>Carbs <strong>{nutritionGoal.carbs}</strong></p>
                            <p>Fats <strong>{nutritionGoal.fat}</strong></p>
                            <p>Protein <strong>{nutritionGoal.protein}</strong></p>
                        </div>)
                        :
                        (<div className='no-goals'>
                            <h3>You didn't set your goals yet</h3>
                            <button onClick={navigateToCalculator}>Calculate your calories here</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}