import { Link, useParams } from "react-router-dom";
import DiaryDate from "./diary-date/DiaryDate";
import './DiarySection.css'

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

                        <tr className="meal-top">
                            <td className="first">Breakfast</td>
                            <td>Calories</td>
                            <td>Carbs</td>
                            <td>Fat</td>
                            <td>Protein</td>
                        </tr>

                        <tr>
                            <td className="first">Banana | 1 servings</td>
                            <td>90</td>
                            <td>20</td>
                            <td>0</td>
                            <td>1</td>
                            <td>Remove</td>
                        </tr>

                        <tr>
                            <td className="first">Banana | 1 servings</td>
                            <td>90</td>
                            <td>20</td>
                            <td>0</td>
                            <td>1</td>
                            <td>Remove</td>
                        </tr>

                        <tr className="meal-bottom">
                            <td className="first">
                                <Link to={`/add-food/mealType/${diaryDate}/dateId`}>Add Food</Link>
                            </td>
                            <td>180</td>
                            <td>40</td>
                            <td>0</td>
                            <td>1</td>
                            <td />
                        </tr>

                    </tbody>
                </table>
            </section>
        </>

    );
}