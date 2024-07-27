import { Link } from 'react-router-dom';
import logo from '../../assets/3d-old-text-2-1-1024x1024.png';
import './Header.css';
import { getTodayDate } from '../../utils/get-dates';

export default function Header() {
    const todayDate = getTodayDate();

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Food Diary" />
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <Link className="link" to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link className="link active" to={`/diary/${todayDate}`} >DIARY</Link>
                        </li>
                        <li>
                            <Link className="link" to="/create-food">CREATE FOOD</Link>
                        </li>
                        <li>
                            <Link className="link" to="/calories-calculator">CALORIES CALCULATOR</Link>
                        </li>
                    </ul>
                </div>
                <div className="user-info">
                    <span>Hi, Username</span>
                    <span>Goals</span>
                    <span>Log Out</span>
                </div>
            </div >
        </>
    );
}