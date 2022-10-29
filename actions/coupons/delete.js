import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { createStandaloneToast } from '@chakra-ui/toast'
const { toast } = createStandaloneToast()

import { couponsGETHelper } from "./get"

import { processingDisableHelper } from "../processing/disable"
import { processingEnableHelper } from "../processing/enable"

export const couponDELETE = ( data ) => {

    return ( dispatch ) => {

        couponDELETEHelper({ data, dispatch })

    }

}
export const couponDELETEHelper = async ({ data, dispatch }) => {

    processingEnableHelper({ dispatch })
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const config = {

        headers,
        method: "DELETE",

    }
    const url = base_url+"/coupons/" + data.uuid

    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            processingDisableHelper({ dispatch })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {
        
                    key:"modal_flag",
                    value: false,
        
                } 
            
            })
            if( responseJson.status === 200 ){

                couponsGETHelper({ dispatch })
                toast({

                    title: responseJson.message,
                    status: "success",
                    duration: 5000,
                    isClosable: false,
                    position: "top-right"

                })

            } else {

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
