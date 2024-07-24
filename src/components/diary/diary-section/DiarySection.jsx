import { useParams } from "react-router-dom";
import DiaryDate from "./diary-date/DiaryDate";
import './DiarySection.css'
import DiaryBreakfast from "./diary-breakfast/DiaryBreakfast";
import DiaryLunch from "./diary-lunch/DiaryLunch";
import DiaryDinner from "./diary-dinner/DiaryDinner";
import DiarySnack from "./diary-snack/DiarySnack";
import { useEffect, useState } from "react";
import { getOneDate } from "../../../services/dateAPI";

export default function DiarySection() {
    const [diary, setDiary] = useState({});
    const { diaryDate } = useParams();

    useEffect(() => {
        (async () => {
            const result = await getOneDate('PCwMKhyzR1', diaryDate);
            setDiary(result.results[0])
        })()
    }, [])
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

                        <DiaryBreakfast breakfast={diary.breakfast || []} />
                        <DiaryLunch lunch={diary.lunch || []} />
                        <DiaryDinner dinner={diary.dinner || []} />
                        <DiarySnack snack={diary.snack || []} />

                    </tbody>
                </table>
            </section>
        </>

    );
}