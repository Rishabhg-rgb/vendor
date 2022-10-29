import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const productsSearchByVendor = ( vendor_uuid, search ) => {

    return ( dispatch ) => {

        productsSearchByVendorHelper({ vendor_uuid, search, dispatch })

    }

}
export const productsSearchByVendorHelper = async ({ vendor_uuid, search, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = {

        vendor_uuid,
        search,

    }
    const config = {

        body: JSON.stringify( body ),
        headers,
        method: "POST",

    }
    const url = base_url+"/search/vendor-products"
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "products_search_array",
                        value: responseJson.data

                    }

                })

            }

        })

    } catch (err) {

        console.log("error")

    }

}
