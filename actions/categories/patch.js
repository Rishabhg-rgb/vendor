import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { categoriesFetchHelper } from "./get-all"

import { createStandaloneToast } from '@chakra-ui/toast'
const { toast } = createStandaloneToast()

export const categoryUpdate = ( data ) => {

    return (dispatch)=> {

        categoryUpdateHelper({ data, dispatch })

    }

}
const categoryUpdateHelper = async ({ data, dispatch }) => {

    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = JSON.stringify({

        category_image: data.category_image,
        category_is_active: data.category_is_active,
        category_masthead: data.category_masthead,
        category_name: data.category_name,
        category_on_home: data.category_on_home,
        category_order: +data.category_order,
        category_uuid: data.category_selected,
        Metadescription:data.Metadescription
    })

    console.log( body )
    const config = {

        body,
        headers,
        method: "PATCH",

    }
    const url = base_url+"/categories/" + data.category_uuid

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
                categoriesFetchHelper({ data, dispatch })
                toast({

                    title: responseJson.message,
                    status: "success",
                    duration: 5000,
                    isClosable: false,
                    position: "top-right"

                })

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
                toast({

                    title: responseJson.message,
                    status: "error",
                    duration: 5000,
                    isClosable: false,
                    position: "top-right"

                })

            }

        })

    } catch (err) {

        console.log("error")

    }

}
