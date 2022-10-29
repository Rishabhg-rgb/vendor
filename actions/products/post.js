import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { categoriesFetchHelper } from "./get-all"

export const productAdd = ( data ) => {

    return (dispatch)=> {

        productAddHelper({ data, dispatch })

    }

}
const productAddHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        category_uuid: data.category_uuid,
        description: data.description,
        description_short: data.description_short,
        details_height: data.details_height,
        details_length: data.details_length,
        details_weight: data.details_weight,
        details_width: data.details_width,
        full_price: +data.full_price,
        has_colors: false,
        has_size: false,
        images: "https://shophree.sgp1.cdn.digitaloceanspaces.com/uploads/132c6528-408e-4ec1-bdf3-793700c38ffe-1646628481259.jpg,https://shophree.sgp1.cdn.digitaloceanspaces.com/uploads/0441d5de-5d4e-4979-b0d0-6e4fdef2b062-1646628481286.jpg,https://shophree.sgp1.cdn.digitaloceanspaces.com/uploads/aca2b74b-924c-4fc8-a79d-a242ed79508e-1646628481292.jpg,https://shophree.sgp1.cdn.digitaloceanspaces.com/uploads/c1387031-0b56-42f9-aa7f-8bbd9d1935a9-1646628481295.jpg,https://shophree.sgp1.cdn.digitaloceanspaces.com/uploads/967c8ac4-4956-489b-bad1-bb5fb732ae61-1646628481297.jpg",
        is_perishable: data.is_perishable,
        off_percentage: +data.off_percentage,
        price: +data.price,
        sub_category_uuid: data.sub_category_uuid,
        sub_sub_category_uuid: data.sub_sub_category_uuid,
        title: data.title,
        vendor_uuid: data.vendor_uuid,

    })
    const config = {

        body,
        headers,
        method: "POST",

    }
    const url = base_url+"/products"

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 201 ){

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
