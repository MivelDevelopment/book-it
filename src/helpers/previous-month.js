export const goToPreviousMonth = (dispatch, month, year) => {
    if (month === 0) {
        dispatch({type: 'SET_YEAR', payload: year - 1});
        dispatch({type: 'SET_MONTH', payload: 11});
    } else {
        dispatch({type: 'SET_MONTH', payload: month - 1});
    }
}