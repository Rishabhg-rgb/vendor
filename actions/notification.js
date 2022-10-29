import { CHANGE_VARIABLE } from "./type"

export const notificationHelper = async ({ message, dispatch }) => {

	console.log( "called this")
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
            value: message

        }

    })
    setTimeout( () => {
	    dispatch({

	        type: CHANGE_VARIABLE,
	        payload: {

	            key: "notification_flag",
	            value: false

	        }

	    })
	
	}, 1000 )

}