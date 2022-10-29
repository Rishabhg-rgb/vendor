import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

export const walletGETByUUID = ( data ) => {

    return (dispatch)=> {

        walletGETByUUIDHelper({ data, dispatch })

    }

}
const walletGETByUUIDHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/wallet/" + data.wallet_uuid
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "wallet_request_data",
                        value: responseJson.data

                    }

                })
            }

        })

    } catch (err) {

        console.log("error")

    }

}
