import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const couponsGET = () => {

    return ( dispatch ) => {

        couponsGETHelper({ dispatch })

    }

}
export const couponsGETHelper = async ({ dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/coupons"
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            // console.log( responseJson )
            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "coupons",
                        value: responseJson.data

                    }

                })

            } else {



            }

        })

    } catch (err) {

        console.log("error")

    }

}
