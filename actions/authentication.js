import Router from "next/router"

import { base_url } from "./variables"
import { CHANGE_VARIABLE } from "./type"


export const login = ( data ) => {

    return (dispatch)=> {

        loginHelper({ data, dispatch })

    }

}
const loginHelper = async ({ data, dispatch }) => {

    const headers = {

        "Content-Type": "application/json"

    }
    const body = JSON.stringify({

        email: data.email,
        password: data.password,

    })
    const config = {

        body,
        headers,
        method: "POST",

    }
    const url = base_url+"/vendors/login"
    try {

        fetch(url, config)
        .then(response => response.json())
        .then(responseJson => {

            console.log( responseJson )
            if( responseJson.status === 200 ){

                localStorage.setItem( "id", responseJson.data.id )
                // localStorage.setItem( "token_refresh", responseJson.token_refresh )
                // localStorage.setItem( "name", responseJson.name )
                localStorage.setItem( "uuid", responseJson.data.uuid )
                // localStorage.setItem( "role", responseJson.role )
                Router.push(`/products/${localStorage.getItem("uuid")}`)

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

export const logout = () => {

    return (dispatch)=> {

        logoutHelper({ dispatch })

    }

}
const logoutHelper = async ({ dispatch }) => {

    await localStorage.clear()
    Router.push("/")

}

export const userDetails = () => {

    return (dispatch)=> {

        userDetailsHelper({ dispatch })

    }

}

const userDetailsHelper = async ({ dispatch }) => {

    const name = await localStorage.getItem("name")
    const role = await localStorage.getItem("role")
    const uuid = await localStorage.getItem("uuid")
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "user_name",
            value: name

        }

    })
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "user_role",
            value: role

        }

    })
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "user_uuid",
            value: uuid

        }

    })

}
