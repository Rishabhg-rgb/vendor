import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

import { ordersFetchPendingHelper } from "../get-pending"
import { hideModalHelper } from "../../modal/hide"
import { notificationHelper } from "../../notification"

export const orderAcceptPATCH = ( order_uuid ) => {

    return ( dispatch ) => {

        orderAcceptPATCHHelper({ order_uuid, dispatch })

    }

}
export const orderAcceptPATCHHelper = async ({ order_uuid, dispatch }) => {

    notificationHelper({ message: "processing...", dispatch })
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "PATCH",

    }
    const url = base_url+"/orders/accept/" + order_uuid
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            notificationHelper({ message: responseJson.message, dispatch })
            if( responseJson.status === 200 ){

                hideModalHelper({ dispatch })
                ordersFetchPendingHelper({ dispatch })

            }
            

        })

    } catch (err) {

        console.log("error")

    }

}
