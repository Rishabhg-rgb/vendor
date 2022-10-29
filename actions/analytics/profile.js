import { earth_base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const profileAnalytics = ( data ) => {

    return (dispatch)=> {

        profileAnalyticsHelper({ data, dispatch })

    }

}
export const profileAnalyticsHelper = async ({ data, dispatch }) => {

    const profiles = {

        "Content-Type": "application/json",

    }
    const config = {

        profiles,
        method: "GET",

    }
    const url = earth_base_url+"/profile"

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "analytics_profile_clicks",
                    value: responseJson.count

                }

            })

        })

    } catch (err) {

        console.log("error")

    }

}
