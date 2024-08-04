import { Link } from 'react-router-dom';
import logo from '../../assets/3d-old-text-2-1-1024x1024.png';
import './Header.css';
import { getTodayDate } from '../../utils/get-dates';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Goals from './Goals/Goals';

export default function Header() {
    const [isShown, setIsShown] = useState(false);
    const todayDate = getTodayDate();
    const authContext = useContext(AuthContext);

    const showGoal = () => {
        setIsShown(true);
    }

    const hideGoal = () => {
        setIsShown(false);
    }

    return (
        <>

            <div className="header">
                {isShown && <Goals nutritionGoal={authContext?.nutritionGoal} onHide={hideGoal} />}
                <div className="logo">
                    <img src={logo} alt="Food Diary" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <Link className="link" to='/'>HOME</Link>
                        </li>
                        {authContext.isAuth
                            ?
                            (<>
                                <li>
                                    <Link className="link" to={`/diary/${todayDate}`} >DIARY</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/create-food">CREATE FOOD</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/my-created-foods">MY CREATED FOODS</Link>
                                </li>
                            </>)
                            :
                            (<>
                                <li>
                                    <Link className="link" to='/auth/login' >LOGIN</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/auth/register">REGISTER</Link>
                                </li>
                            </>)
                        }
                        <li>
                            <Link className="link" to="/calories-calculator">CALORIES CALCULATOR</Link>
                        </li>
                    </ul>
                </div>
                {authContext.isAuth
                    &&
                    (<div className="user-info">
                        <span>Hi, {authContext.username}</span>
                        <span onClick={showGoal}>Goals</span>
                        <span onClick={authContext.logoutUser}>Logout</span>
                    </div>)
                }
            </div >
        </>
    );
}