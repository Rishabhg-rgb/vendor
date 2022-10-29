import { base_url } from "./variables"
import { CHANGE_VARIABLE } from "./type"
import FormData from "form-data"

const axios = require("axios")

export const uploadFiles = ( file ) => {

    return (dispatch)=> {

        uploadFilesHelper({ file, dispatch })

    }

}
const uploadFilesHelper = async ({ file, dispatch }) => {

    try {

        var formData  = new FormData()
        for( var i = 0; i < file.length; i++ ){

            formData.append("files",file[i] )

        }
        const url = base_url+"/uploads"
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

                key: "files",
                value: response.data.files

            }

        })
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {

                key: "image",
                value: response.data.files.cloudflare_url

            }

        })
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {

                key: "image_id",
                value: response.data.files.cloudflare_id

            }

        })
        console.log("response", response.data)

    } catch (err) {

        // console.log( err )
        console.log("error")

    }

}

export const uploadMasthead = ( file ) => {

    return (dispatch)=> {

        uploadMastheadHelper({ file, dispatch })

    }

}
const uploadMastheadHelper = async ({ file, dispatch }) => {

    try {

        var formData  = new FormData()
        for( var i = 0; i < file.length; i++ ){

            formData.append("files",file[i] )

        }
        const url = base_url+"/uploads"
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

                key: "files",
                value: response.data.files

            }

        })
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {

                key: "masthead",
                value: response.data.files.cloudflare_url

            }

        })
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {

                key: "image_id",
                value: response.data.files.cloudflare_id

            }

        })
        console.log("response", response.data)

    } catch (err) {

        // console.log( err )
        console.log("error")

    }

}
