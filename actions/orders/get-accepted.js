import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const ordersFetchAccepted = () => {

    return (dispatch)=> {

        ordersFetchAcceptedHelper({ dispatch })

    }

}
export const ordersFetchAcceptedHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/orders/accepted"
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "orders_array_accepted",
                        value: responseJson.data

                    }

                })

        })

    } catch (err) {

        console.log("error")

    }

}
