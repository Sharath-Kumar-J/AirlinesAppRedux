import { interreducer } from "../Interface/Interface";
import { types } from "../types/types";

const initialState = {
    loading: true,
    data: [],
    error: " ",
   
}

export const reducer = (state = initialState, action: interreducer) => {

    switch (action.type) {

        case types.LOADING: {
            return {
                loading: true,
                data: [],
                error: " "
            }
        }

        case types.FETCH_SUCCESS: {
            return {
                loading: false,
                data: action.payload,
                error: " "
            }
        }
        case types.FETCH_ERROR: {
            return {
                loading: false,
                data: [],
                error: "Error"
            }
        }
        default:
            return state;
    }
}