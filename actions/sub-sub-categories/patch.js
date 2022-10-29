import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { subSubCategoriesFetchHelper } from "./get-all"

export const subSubCategoryUpdate = ( data ) => {

    return (dispatch)=> {

        subSubCategoryUpdateHelper({ data, dispatch })

    }

}
const subSubCategoryUpdateHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        sub_sub_category_name: data.sub_sub_category_name,

    })
    const config = {

        body,
        headers,
        method: "PATCH",

    }
    const url = base_url+"/sub-sub-categories/" + data.sub_sub_category_uuid

    console.log( config )

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 200 ){

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
                subSubCategoriesFetchHelper({ data, dispatch })

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
