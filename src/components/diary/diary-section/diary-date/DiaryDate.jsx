import { Link } from "react-router-dom";
import './DiaryDate.css'

export default function DiaryDate() {
    return (
        <section className="date-diary">
            <h1>Your Food Diary For:</h1>
            <div className="date">
                <Link to="/diary/previousDate">back</Link>
                <p>23 July 2024</p>
                <Link to="/diary/nextDate">next</Link>
            </div>
        </section>
    );
}