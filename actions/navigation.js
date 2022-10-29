import { CHANGE_VARIABLE } from "./type"

export const navigationUpdate = ( data ) => {

    return (dispatch)=> {

        navigationUpdateHelper({ data, dispatch })

    }

}
const navigationUpdateHelper = async ({ data, dispatch }) => {

    localStorage.setItem("navigation_expand", data.state)
    localStorage.setItem("navigation_expand_type", data.type)

}


export const navigationFetch = () => {

    return (dispatch)=> {

        navigationFetchHelper({ dispatch })

    }

}
const navigationFetchHelper = async ({ dispatch }) => {

    const navigation_expand = localStorage.getItem("navigation_expand")
    const navigation_expand_type = localStorage.getItem("navigation_expand_type")

    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "navigation_expand",
            value: navigation_expand === "true" ? true : false

        }

    })
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "navigation_expand_type",
            value: navigation_expand_type

        }

    })

}
