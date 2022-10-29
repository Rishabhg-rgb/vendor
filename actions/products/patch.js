import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { categoriesFetchHelper } from "./get-all"
import { productsFetchByVendorHelper } from "./get/by-vendor"

export const productUpdate = ( data ) => {

    return (dispatch)=> {

        productUpdateHelper({ data, dispatch })

    }

}
const productUpdateHelper = async ({ data, dispatch }) => {

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
            value: "updating product..."

        }

    })
    // console.table( data )
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`

    }

    // console.log( data )
    const body = JSON.stringify({

        // category_uuid: data.product_category_uuid,
        // category_two_uuid: data.product_category_two_uuid,
        // category_three_uuid: data.product_category_three_uuid,
        // description: data.product_description,
        // description_short: data.product_description_short,
        details_height: data.product_dimension_height,
        details_length: data.product_dimension_length,
        details_weight: data.product_dimension_weight,
        details_width: data.product_dimension_width,
        // full_price: +data.product_price_full,
        // has_colors: false,
        // has_size: false,
        // images: data.product_images.toString(),
        // is_active: data.product_is_active,
        // is_perishable: false,
        // price: +data.product_price,
        // sku: data.product_sku,
        // title: data.product_name,
        // vendor_uuid: data.product_vendor_uuid,
        stock_available: data.product_stock,

        // is_variant: data.product_is_variation,
        // variant_uuid: data.product_variation_uuid,
        // parent_sku: data.product_parent_sku,

    })

    // console.log({

    //     is_variant: data.product_is_variation,
    //     variant_uuid: data.product_variation_uuid,
    //     parent_sku: data.product_parent_sku,

    // })
    const config = {

        body,
        headers,
        method: "PATCH",

    }
    const url = base_url+"/products/vendor/"+ data.product_uuid

    // console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            // console.log( responseJson )
            if( responseJson.status === 200 ){

                productsFetchByVendorHelper({ vendor_uuid: data.product_vendor_uuid, page: data.page_id, dispatch })
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
