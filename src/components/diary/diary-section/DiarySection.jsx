import { useParams } from "react-router-dom";
import DiaryDate from "./diary-date/DiaryDate";
import './DiarySection.css'
import DiaryBreakfast from "./diary-breakfast/DiaryBreakfast";

export default function DiarySection() {
    const { diaryDate } = useParams();

    return (
        <>
            <DiaryDate diaryDate={diaryDate} />

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

                        <DiaryBreakfast />

                    </tbody>
                </table>
            </section>
        </>

    );
}