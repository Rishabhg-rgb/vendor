import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

export const walletGETAccepted = ( data ) => {

    return (dispatch)=> {

        walletGETAcceptedHelper({ data, dispatch })

    }

}
const walletGETAcceptedHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/wallet/accepted"

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "wallet_accepted_requests",
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
