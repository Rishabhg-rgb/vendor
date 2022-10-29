import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const productsFetch = ( data ) => {

    return (dispatch)=> {

        productsFetchHelper({ data, dispatch })

    }

}
export const productsFetchHelper = async ({ data, dispatch }) => {
    const headers = {

        "Content-Type": "application/json",

    }
    const config = {

        headers,
        method: "GET",

    }
    const uuid = localStorage.getItem("uuid")
    const url = base_url+`/products/vendor/${uuid}/1`
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "products_array",
                        value: responseJson.data

                    }

                })

            } else {

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "error",
                        value: true

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "error_message",
                        value: responseJson.message

                    }

                })

            }

        })

    } catch (err) {

        console.log("error")

    }

}
