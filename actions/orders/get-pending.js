import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const ordersFetchPending = () => {

    return (dispatch)=> {

        ordersFetchPendingHelper({ dispatch })

    }

}
export const ordersFetchPendingHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/orders/pending"
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "orders_array_pending",
                        value: responseJson.data

                    }

                })

        })

    } catch (err) {

        console.log("error")

    }

}
