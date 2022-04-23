export const getNumOfDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
}