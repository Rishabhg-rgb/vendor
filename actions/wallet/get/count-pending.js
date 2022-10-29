import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

export const walletGETPendingCount = () => {

    return (dispatch)=> {

        walletGETPendingCountHelper({ dispatch })

    }

}
const walletGETPendingCountHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/wallet/pending-count"

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "wallet_pending_requests_count",
                        value: responseJson.count

                    }

                })
            }
            console.log( responseJson )

        })

    } catch (err) {

        console.log("error")

    }

}
