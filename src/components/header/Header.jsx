import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/3d-old-text-2-1-1024x1024.png';
import './Header.css';
import { getTodayDate } from '../../utils/get-dates';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Goals from './Goals/Goals';

export default function Header() {
    const [isShown, setIsShown] = useState(false);
    const location = useLocation();
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
                            <Link className={`link ${location.pathname === '/' && 'active'}`} to='/'>HOME</Link>
                        </li>
                        {authContext.isAuth
                            ?
                            (<>
                                <li>
                                    <Link className={`link ${location.pathname.includes('/diary') && 'active'}`} to={`/diary/${todayDate}`} >DIARY</Link>
                                </li>
                                <li>
                                    <Link className={`link ${location.pathname === '/create-food' && 'active'}`} to="/create-food">CREATE FOOD</Link>
                                </li>
                                <li>
                                    <Link className={`link ${location.pathname === '/my-created-foods' && 'active'}`} to="/my-created-foods">MY CREATED FOODS</Link>
                                </li>
                            </>)
                            :
                            (<>
                                <li>
                                    <Link className={`link ${location.pathname === '/auth/login' && 'active'}`} to='/auth/login' >LOGIN</Link>
                                </li>
                                <li>
                                    <Link className={`link ${location.pathname === '/auth/register' && 'active'}`} to="/auth/register">REGISTER</Link>
                                </li>
                            </>)
                        }
                        <li>
                            <Link className={`link ${location.pathname === '/calories-calculator' && 'active'}`} to="/calories-calculator">CALORIES CALCULATOR</Link>
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