import { base_url } from "../../variables"
import { CHANGE_VARIABLE } from "../../type"

export const productsFetchByVendor = ( vendor_uuid, page ) => {

    return ( dispatch ) => {

        productsFetchByVendorHelper({ vendor_uuid, page, dispatch })

    }

}
export const productsFetchByVendorHelper = async ({ vendor_uuid, page, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/products/vendor/"+ vendor_uuid + "/" + page
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            // console.log( responseJson )
            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "products_array",
                        value: responseJson.data

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "products_pages",
                        value: responseJson.pages

                    }

                })

            } else {

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "error",
                        value: true

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "error_message",
                        value: responseJson.message

                    }

                })

            }

        })

    } catch (err) {

        console.log("error")

    }

}
