import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

const {

	notificationHelper

} = require("../../notification")

const {

    variationsFetchHelper

} = require("../get")

export const variationPOST = ( data ) => {

    return ( dispatch ) => {

        variationPOSTHelper({ data, dispatch })

    }

}
export const variationPOSTHelper = async ({ data, dispatch }) => {

	notificationHelper({ message: "adding product variation..", dispatch })
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        name: data.variation_name

    })
    const config = {

        body,
        headers,
        method: "POST",

    }
    const url = base_url+"/variations"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            // console.log( responseJson )
            notificationHelper({ message: responseJson.message, dispatch })

            if( responseJson.status === 201 ){

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
