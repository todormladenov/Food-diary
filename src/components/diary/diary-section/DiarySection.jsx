import { useParams } from "react-router-dom";
import DiaryDate from "./diary-date/DiaryDate";
import './DiarySection.css'
import DiaryBreakfast from "./diary-breakfast/DiaryBreakfast";
import DiaryLunch from "./diary-lunch/DiaryLunch";
import DiaryDinner from "./diary-dinner/DiaryDinner";
import DiarySnack from "./diary-snack/DiarySnack";
import { useDiary } from "../../../hooks/useDiary";

export default function DiarySection() {
    const { diaryDate } = useParams();
    const { diary, deleteFoodFromDiary } = useDiary();

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
                            onDelete={deleteFoodFromDiary}
                        />

                        <DiaryLunch
                            dateId={diary.objectId}
                            lunch={diary.lunch || []}
                            onDelete={deleteFoodFromDiary}
                        />

                        <DiaryDinner
                            dateId={diary.objectId}
                            dinner={diary.dinner || []}
                            onDelete={deleteFoodFromDiary}
                        />

                        <DiarySnack
                            dateId={diary.objectId}
                            snack={diary.snack || []}
                            onDelete={deleteFoodFromDiary}
                        />

                    </tbody>
                </table>
            </section>
        </>

    );
}