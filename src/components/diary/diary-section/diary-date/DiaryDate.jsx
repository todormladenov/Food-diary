import { Link } from "react-router-dom";
import { getNextDate, getPreviousDate } from "../../../../utils/get-dates";
import './DiaryDate.css'

export default function DiaryDate({ diaryDate }) {
    const previousDate = getPreviousDate(diaryDate);
    const nextDate = getNextDate(diaryDate);

    return (
        <section className="date-diary">
            <h1>Your Food Diary For:</h1>
            <div className="date">
                <Link to={`/diary/${previousDate}`}>back</Link>
                <p>{diaryDate}</p>
                <Link to={`/diary/${nextDate}`}>next</Link>
            </div>
        </section>
    );
}