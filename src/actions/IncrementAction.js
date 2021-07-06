import { INCREMENT_REQUEST, INCREMENT_SUCCESS } from "../constants"

export const doIncrement = (dispatch) => {
    dispatch({
        type: INCREMENT_REQUEST
    })
    dispatch({
        type: INCREMENT_SUCCESS,
        increment: 1
    })

}