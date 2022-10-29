import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

const {

	notificationHelper

} = require("../../notification")

const {

    variationsFetchHelper

} = require("../get")

export const variationPATCH = ( data ) => {

    return ( dispatch ) => {

        variationPATCHHelper({ data, dispatch })

    }

}
export const variationPATCHHelper = async ({ data, dispatch }) => {

	notificationHelper({ message: "updating product variation..", dispatch })
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        is_active: data.variation_is_active,
        name: data.variation_name,

    })
    const config = {

        body,
        headers,
        method: "PATCH",

    }
    const url = base_url+"/variations/" + data.variation_uuid

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            // console.log( responseJson )
            notificationHelper({ message: responseJson.message, dispatch })

            if( responseJson.status === 200 ){

                variationsFetchHelper({ dispatch })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "modal_display_flag",
                        value: false

                    }

                })

            } else {

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "error",
                        value: true

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "error_message",
                        value: responseJson.message

                    }

                })

            }

        })

    } catch (err) {

        console.log("error")

    }

}
