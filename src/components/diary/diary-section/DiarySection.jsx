import { useParams } from "react-router-dom";
import DiaryDate from "./diary-date/DiaryDate";
import './DiarySection.css'
import DiaryBreakfast from "./diary-breakfast/DiaryBreakfast";
import DiaryLunch from "./diary-lunch/DiaryLunch";
import DiaryDinner from "./diary-dinner/DiaryDinner";
import DiarySnack from "./diary-snack/DiarySnack";
import { useEffect, useState } from "react";
import { createDiaryDate, getOneDiaryDate } from "../../../services/dateAPI";

export default function DiarySection() {
    const [diary, setDiary] = useState({});
    const { diaryDate } = useParams();

    useEffect(() => {
        (async () => {
            const result = await getOneDiaryDate('PCwMKhyzR1', diaryDate);
            let diary = result.results[0]

            if (diary == undefined) {
                diary = { userId: 'PCwMKhyzR1', diaryDate };
                const newDiary = await createDiaryDate(diary);

                diary = { ...diary, ...newDiary };
            }
            setDiary(diary);
        })();

    }, [diaryDate]);

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

                        <DiaryBreakfast
                            dateId={diary.objectId}
                            breakfast={diary.breakfast || []}
                        />

                        <DiaryLunch
                            dateId={diary.objectId}
                            lunch={diary.lunch || []}
                        />

                        <DiaryDinner
                            dateId={diary.objectId}
                            dinner={diary.dinner || []}
                        />

                        <DiarySnack
                            dateId={diary.objectId}
                            snack={diary.snack || []}
                        />

                    </tbody>
                </table>
            </section>
        </>

    );
}