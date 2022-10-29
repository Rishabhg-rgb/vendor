import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

export const categoriesFetch = ( data ) => {

    return (dispatch)=> {

        categoriesFetchHelper({ data, dispatch })

    }

}
export const categoriesFetchHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "GET",

    }
    const url = base_url+"/categories/all"
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 200 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "categories_array",
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
