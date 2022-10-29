import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

export const walletAcceptRequest = ( data ) => {

    return (dispatch)=> {

        walletAcceptRequestHelper({ data, dispatch })

    }

}
const walletAcceptRequestHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "PATCH",

    }
    const url = base_url+"/wallet/accept/"+ data.wallet_request_uuid

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            // if( responseJson.status === 200 ){

            //     dispatch({

            //         type: CHANGE_VARIABLE,
            //         payload: {

            //             key: "wallet_pending_requests",
            //             value: responseJson.data

            //         }

            //     })
            // }
            console.log( responseJson )

        })

    } catch (err) {

        console.log("error")

    }

}
