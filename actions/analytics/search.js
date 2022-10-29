import { earth_base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const searchAnalytics = ( data ) => {

    return (dispatch)=> {

        searchAnalyticsHelper({ data, dispatch })

    }

}
export const searchAnalyticsHelper = async ({ data, dispatch }) => {

    const searchs = {

        "Content-Type": "application/json",

    }
    const config = {

        searchs,
        method: "GET",

    }
    const url = earth_base_url+"/search"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_search_clicks",
                    value: responseJson.count

                }

            })

        })

    } catch (err) {

        console.log("error")

    }

}
