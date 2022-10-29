import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { categoriesFetchHelper } from "./get-all"

export const categoryAdd = ( data ) => {

    return (dispatch)=> {

        categoryAddHelper({ data, dispatch })

    }

}
const categoryAddHelper = async ({ data, dispatch }) => {

    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "notification_flag",
            value: true

        }

    })
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "notification",
            value: "updating category..."

        }

    })
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        category_name: data.category_name,
        category_image: data.category_image,
        category_uuid: data.category_selected,

    })
    const config = {

        body,
        headers,
        method: "POST",

    }
    const url = base_url+"/categories"

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 201 ){

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: true

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification",
                        value: responseJson.message

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: false

                    }

                })
                categoriesFetchHelper({ data, dispatch })

            } else {

                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: true

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification",
                        value: responseJson.message

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: false

                    }

                })

            }

        })

    } catch (err) {

        console.log("error")

    }

}
