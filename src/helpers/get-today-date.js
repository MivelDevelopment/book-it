export const getTodayDate = () => {
    return {today: new Date().getDate(),  todayMonth: new Date().getMonth(), todayYear: new Date().getFullYear() }
}