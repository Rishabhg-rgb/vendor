import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const ordersFetchCancelled = () => {

    return (dispatch)=> {

        ordersFetchCancelledHelper({ dispatch })

    }

}
export const ordersFetchCancelledHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/orders/cancelled"

    console.log( url )
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "orders_array_cancelled",
                        value: responseJson.data

                    }

                })

        })

    } catch (err) {

        console.log( err )

    }

}
