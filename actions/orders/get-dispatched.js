import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const ordersFetchDispatched = () => {

    return (dispatch)=> {

        ordersFetchDispatchedHelper({ dispatch })

    }

}
export const ordersFetchDispatchedHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/orders/dispatched"
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "orders_array_dispatched",
                        value: responseJson.data

                    }

                })

        })

    } catch (err) {

        console.log("error")

    }

}
