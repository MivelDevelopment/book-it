export const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
}