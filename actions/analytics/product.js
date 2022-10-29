import { earth_base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const productAnalytics = ( data ) => {

    return (dispatch)=> {

        productAnalyticsHelper({ data, dispatch })

    }

}
export const productAnalyticsHelper = async ({ data, dispatch }) => {

    const products = {

        "Content-Type": "application/json",

    }
    const config = {

        products,
        method: "GET",

    }
    const url = earth_base_url+"/product"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_products",
                    value: responseJson.statistics

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_products_count",
                    value: responseJson.count

                }

            })

        })

    } catch (err) {

        console.log("error")

    }

}
