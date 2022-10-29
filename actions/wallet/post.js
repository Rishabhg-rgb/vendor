import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const addAmountToWallet = ( data ) => {

    return (dispatch)=> {

        addAmountToWalletHelper({ data, dispatch })

    }

}
const addAmountToWalletHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        amount: data.wallet_amount,
        user_uuid: data.user_uuid,

    })
    const config = {

        body,
        headers,
        method: "POST",

    }
    const url = base_url+"/wallet"

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )

        })

    } catch (err) {

        console.log("error")

    }

}
