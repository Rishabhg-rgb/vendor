import { earth_base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const bagAnalytics = ( data ) => {

    return (dispatch)=> {

        bagAnalyticsHelper({ data, dispatch })

    }

}
export const bagAnalyticsHelper = async ({ data, dispatch }) => {

    const bags = {

        "Content-Type": "application/json",

    }
    const config = {

        bags,
        method: "GET",

    }
    const url = earth_base_url+"/bag"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_bag_clicks",
                    value: responseJson.count

                }

            })

        })

    } catch (err) {

        console.log("error")

    }

}
