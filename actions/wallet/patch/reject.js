import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

export const walletRejectRequest = ( data ) => {

    return (dispatch)=> {

        walletRejectRequestHelper({ data, dispatch })

    }

}
const walletRejectRequestHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "PATCH",

    }
    const url = base_url+"/wallet/reject/"+ data.wallet_request_uuid

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
