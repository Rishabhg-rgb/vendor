import { earth_base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const cartAnalytics = ( data ) => {

    return (dispatch)=> {

        cartAnalyticsHelper({ data, dispatch })

    }

}
export const cartAnalyticsHelper = async ({ data, dispatch }) => {

    const header = {

        "Content-Type": "application/json",

    }
    const config = {

        header,
        method: "GET",

    }
    const url = earth_base_url+"/cart"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_cart",
                    value: responseJson.statistics

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_cart_count",
                    value: responseJson.count

                }

            })

        })

    } catch (err) {

        console.log("error")

    }

}
