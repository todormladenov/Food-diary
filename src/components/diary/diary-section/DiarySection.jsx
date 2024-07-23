import DiaryDate from "./diary-date/DiaryDate";

export default function DiarySection() {
    return (
        <>
            <DiaryDate />

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