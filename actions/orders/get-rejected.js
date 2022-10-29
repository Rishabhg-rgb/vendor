import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const ordersFetchRejected = () => {

    return (dispatch)=> {

        ordersFetchRejectedHelper({ dispatch })

    }

}
export const ordersFetchRejectedHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/orders/rejected"

    console.log( url )
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "orders_array_rejected",
                        value: responseJson.data

                    }

                })

        })

    } catch (err) {

        console.log( err )

    }

}
