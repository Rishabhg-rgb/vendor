import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

const {

	notificationHelper

} = require("../../notification")

export const variationsFetch = () => {

    return (dispatch) => {

        variationsFetchHelper({ dispatch })

    }

}
export const variationsFetchHelper = async ({ dispatch }) => {

	notificationHelper({ message: "fetching product variations", dispatch })
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/variations"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            notificationHelper({ message: responseJson.message, dispatch })

            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "variations_array",
                        value: responseJson.data

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
