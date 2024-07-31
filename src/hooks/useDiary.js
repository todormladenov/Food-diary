import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { createDiaryDate, getOneDiaryDate } from "../services/dateAPI";
import { SnackbarContext } from "../contexts/SnackbarContext";

export const useDiary = () => {
    const [diary, setDiary] = useState({});
    const { diaryDate } = useParams();
    const { userId } = useContext(AuthContext);
    const snackbar = useContext(SnackbarContext);

    useEffect(() => {
        (async () => {
            try {
                const result = await getOneDiaryDate(userId, diaryDate);
                let diary = result.results[0]

                if (diary == undefined) {
                    diary = await createNewDiary();
                }

                setDiary(diary);
            } catch (error) {
                snackbar.showSnackbar(error.message);
            }
        })();

    }, [diaryDate]);

    async function createNewDiary() {
        try {
            const newDiary = { userId, diaryDate };
            const createdDiary = await createDiaryDate(newDiary);

            return { ...createdDiary, ...newDiary };
        } catch (error) {
            snackbar.showSnackbar(error.message);
        }
    }

    return {
        diary
    }
}