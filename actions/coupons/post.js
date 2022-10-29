import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"

import { createStandaloneToast } from '@chakra-ui/toast'
const { toast } = createStandaloneToast()

import { couponsGETHelper } from "./get"

import { processingDisableHelper } from "../processing/disable"
import { processingEnableHelper } from "../processing/enable"

export const couponPOST = ( data ) => {

    return ( dispatch ) => {

        couponPOSTHelper({ data, dispatch })

    }

}

const couponPOSTHelper = async ({ data, dispatch }) => {

    processingEnableHelper({ dispatch })
    const token = await localStorage.getItem("token")
    const headers = {

        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`

    }
    const body = {

        description: data.description,
        amount: data.amount,
        quantity: data.quantity,
        code: data.code,

    }
    const config = {

        body: JSON.stringify( body),
        headers,
        method: "POST",

    }
    const url = base_url+"/coupons/"

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
            if( responseJson.status === 201 ){

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
