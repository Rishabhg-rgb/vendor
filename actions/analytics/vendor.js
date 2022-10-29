import { earth_base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const vendorAnalytics = ( data ) => {

    return (dispatch)=> {

        vendorAnalyticsHelper({ data, dispatch })

    }

}
export const vendorAnalyticsHelper = async ({ data, dispatch }) => {

    const headers = {

        "Content-Type": "application/json",

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = earth_base_url+"/vendor"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_vendors",
                    value: responseJson.statistics

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_vendors_count",
                    value: responseJson.count

                }

            })

        })

    } catch (err) {

        console.log("error")

    }

}
