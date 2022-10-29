import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { vendorsFetchHelper } from "./get-all"
import { hideModalHelper } from "../modal/hide"

export const vendorAdd = ( data ) => {

    return (dispatch)=> {

        vendorAddHelper({ data, dispatch })

    }

}
const vendorAddHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        address: data.vendor_address,
        city: data.vendor_city,
        contact_mobile: data.vendor_contact_mobile,
        contact_name: data.vendor_contact_name,
        email: data.vendor_email,
        gst: data.vendor_gst,
        mobile: data.vendor_mobile,
        name: data.vendor_name,
        pincode: data.vendor_pincode,
        state: data.vendor_state,

    })
    const config = {

        body,
        headers,
        method: "POST",

    }
    const url = base_url+"/vendors"

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 201 ){

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
