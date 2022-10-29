import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const hideModal = () => {

    return (dispatch)=> {

        hideModalHelper({ dispatch })

    }

}
export const hideModalHelper = async ({ dispatch }) => {

    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "modal_display_flag",
            value: false

        }

    })

    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "modal_display_type",
            value: null

        }

    })
}
