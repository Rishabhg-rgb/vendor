import { CHANGE_VARIABLE } from "../type"

export const processingEnableHelper = async ({ dispatch }) => {

    console.log("jajaja")
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key:"processing",
            value: true,

        } 
    
    })

}
