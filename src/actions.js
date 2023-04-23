export const Inaction = () => async dispatch => {
    dispatch({
        type:"INCREMENT"
    });
};
export const Decaction = () => async dispatch => {
    dispatch({
        type:"DECREMENT"
    });
};