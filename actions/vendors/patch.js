import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { vendorsFetchHelper } from "./get-all"
import { hideModalHelper } from "../modal/hide"

export const vendorUpdate = ( data ) => {

    return (dispatch)=> {

        vendorUpdateHelper({ data, dispatch })

    }

}
const vendorUpdateHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        address: data.vendor_address,
        city: data.vendor_city,
        email: data.vendor_email,
        gst: data.vendor_gst,
        is_active: data.vendor_is_active,
        mobile: data.vendor_mobile,
        name: data.vendor_name,
        pincode: data.vendor_pincode,
        state: data.vendor_state,

    })
    const config = {

        body,
        headers,
        method: "PATCH",

    }
    const url = base_url+"/vendors/" + data.vendor_uuid

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 200 ){

                hideModalHelper({ dispatch })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: true

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification",
                        value: responseJson.message

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: false

                    }

                })
                vendorsFetchHelper({ data, dispatch })

            } else {

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: true

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification",
                        value: responseJson.message

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: false

                    }

                })

            }

        })

    } catch (err) {

        console.log("error")

    }

}
