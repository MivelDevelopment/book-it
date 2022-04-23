export const goToNextMonth = (dispatch, month, year) => {
    if (month === 11) {
        dispatch({type: 'SET_YEAR', payload: year + 1});
        dispatch({type: 'SET_MONTH', payload: 0});
    } else {
        dispatch({type: 'SET_MONTH', payload: month + 1});
    }
}