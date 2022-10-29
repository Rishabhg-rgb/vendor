import { earth_base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const headerAnalytics = ( data ) => {

    return (dispatch)=> {

        headerAnalyticsHelper({ data, dispatch })

    }

}
export const headerAnalyticsHelper = async ({ data, dispatch }) => {

    const headers = {

        "Content-Type": "application/json",

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = earth_base_url+"/header"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_header_clicks",
                    value: responseJson.count

                }

            })

        })

    } catch (err) {

        console.log("error")

    }

}
