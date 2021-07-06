import axios from "axios"
import { QUOTE_REQUEST, QUOTE_SUCCESS } from "../constants"

export const getRandomQuotes = () => async (dispatch) => {
    dispatch({
        type: QUOTE_REQUEST
    })

    const response = await axios.get("https://type.fit/api/quotes");
    

    dispatch({
        type: QUOTE_SUCCESS,
        quotes: response.data
    })
}