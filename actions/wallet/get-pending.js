import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const walletGetPending = ( data ) => {

    return (dispatch)=> {

        walletGetPendingHelper({ data, dispatch })

    }

}
const walletGetPendingHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/wallet"

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "wallet_pending_requests",
                        value: responseJson.data

                    }

                })
            }
            console.log( responseJson )

        })

    } catch (err) {

        console.log("error")

    }

}
