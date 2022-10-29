import { base_url } from "./variables"
import { CHANGE_VARIABLE } from "./type"
import FormData from "form-data"

const axios = require("axios")

export const uploadFile = ( file ) => {

    return ( dispatch ) => {

        uploadFileHelper({ file, dispatch })

    }

}
const uploadFileHelper = async ({ file, dispatch }) => {

    try {

        var formData  = new FormData()
        for( var i = 0; i < file.length; i++ ){

            formData.append("files",file[i] )

        }
        const url = base_url+"/uploads/file"
        const config = {

            headers: { "content-type": "multipart/form-data" },
            onUploadProgress: (event) => {

                console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total))
                const progress = Math.round((event.loaded * 100) / event.total)
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification",
                        value: "uploading -" + progress +"%"

                    }

                })
                dispatch({

                    type: CHANGE_VARIABLE,
                    payload: {

                        key: "notification_flag",
                        value: true

                    }

                })
                if( +progress === 100 )
                    dispatch({

                        type: CHANGE_VARIABLE,
                        payload: {

                            key: "notification",
                            value: "processing.."

                        }

                    })

            },

        }
        const response = await axios.post( url, formData, config)

        // FILE COMPLETED PROCESSING
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {

                key: "notification",
                value: "File Uploaded."

            }

        })
        setTimeout( () => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "notification",
                    value: `Success : ${ response.data.log.success }\nFailed : ${ response.data.log.failed }\nTotal : ${ response.data.log.total }`

                }

            })

        }, 2000 )
        setTimeout( () => {

            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "notification_flag",
                    value: false

                }

            })
            dispatch({

                type: CHANGE_VARIABLE,
                payload: {

                    key: "modal_display",
                    value: false

                }

            })

        }, 5000 )

    } catch (err) {

        // console.log( err )
        console.log("error")

    }

}
