import { Link, useNavigate } from "react-router-dom";
import { getNextDate, getPreviousDate } from "../../../../utils/get-dates";
import './DiaryDate.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

export default function DiaryDate({ diaryDate }) {
    const previousDate = getPreviousDate(diaryDate);
    const nextDate = getNextDate(diaryDate);
    const [selectedDate, setSelectedDate] = useState(new Date(diaryDate));
    const navigator = useNavigate();

    useEffect(() => {
        setSelectedDate(new Date(diaryDate))
    }, [diaryDate])

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const dateString = date.toDateString();

        navigator(`/diary/${dateString}`);
    };
    
    return (
        <section className="date-diary">
            <h1>Your Food Diary For:</h1>
            <div className="date">
                <Link to={`/diary/${previousDate}`}>back</Link>

                <div className="calendar-wrapper">
                    <DatePicker className="calendar"
                        selected={selectedDate}
                        onSelect={handleDateChange}
                        dateFormat="dd-MM-yyyy"
                        showPopperArrow={true}
                        todayButton="Today"
                    />
                    <i className="fa-solid fa-chevron-down"></i>

                    <Link to={`/diary/${nextDate}`}>next</Link>
                </div>
            </div>
        </section>
    );
}