import { Link } from "react-router-dom";

export default function DiarySection() {
    return (
        <>
            <section className="date-diary">
                <h1>Your Food Diary For:</h1>
                <div className="date">
                    <Link to="/diary/previousDate">back</Link>
                    <p>23 July 2024</p>
                    <Link to="/diary/nextDate">next</Link>
                </div>
            </section>

            <section className="food-diary">
                <table className="diary">
                    <colgroup>
                        <col className="col-one" />
                        <col className="col-two" />
                        <col className="col-two" />
                        <col className="col-two" />
                        <col className="col-two" />
                        <col className="col-six" />
                    </colgroup>
                    <tbody>

                    </tbody>
                </table>
            </section>
        </>

    );
}