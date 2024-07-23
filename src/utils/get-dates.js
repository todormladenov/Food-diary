export function getTodayDate() {
    const todayDate = new Date();

    return todayDate.toDateString();
}

export function getNextDate(currentDate) {
    const date = new Date(currentDate);
    const nextDate = date.getDate() + 1;

    date.setDate(nextDate)
    return date.toDateString();
}

export function getPreviousDate(currentDate) {
    const date = new Date(currentDate);
    const previousDate = date.getDate() - 1;
    
    date.setDate(previousDate)
    return date.toDateString();
}