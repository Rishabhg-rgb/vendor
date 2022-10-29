import { CHANGE_VARIABLE } from "../type"

export const processingDisableHelper = async ({ dispatch }) => {

    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key:"processing",
            value: false,

        } 
    
    })

}
