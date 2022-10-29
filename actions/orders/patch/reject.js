import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

import { ordersFetchPendingHelper } from "../get-pending"
import { hideModalHelper } from "../../modal/hide"
import { notificationHelper } from "../../notification"

import { createToast } from "../../toast/create"

export const orderRejectPATCH = ( order_uuid, rejection_reason, onClose ) => {

    return ( dispatch ) => {

        orderRejectPATCHHelper({ order_uuid, rejection_reason, onClose, dispatch })

    }

}
export const orderRejectPATCHHelper = async ({ order_uuid, rejection_reason, onClose, dispatch }) => {

    notificationHelper({ message: "processing...", dispatch })
    const token = await localStorage.getItem("token")
    const body = {

        rejection_reason: rejection_reason

    }
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        body: JSON.stringify( body),
        headers,
        method: "PATCH",

    }
    console.log( config )
    const url = base_url+"/orders/reject/" + order_uuid
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            // notificationHelper({ message: responseJson.message, dispatch })
            
            if( responseJson.status === 200 ){

                createToast( responseJson.message, "success")
                hideModalHelper({ dispatch })
                ordersFetchPendingHelper({ dispatch })
                onClose()

            } else {

                createToast( responseJson.message, "error")

            }

        })

    } catch (err) {

        console.log("error")

    }

}
