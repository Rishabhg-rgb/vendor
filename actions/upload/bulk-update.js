import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import FormData from "form-data"

const { createToast } = require("../toast")

const axios = require("axios")


export const bulkUpdateProductsUpload = ( file, onClose ) => {

    return ( dispatch ) => {

        bulkUpdateProductsUploadHelper({ file, onClose, dispatch })

    }

}
const bulkUpdateProductsUploadHelper = async ({ file, onClose, dispatch }) => {

    try {

        var formData  = new FormData()
        for( var i = 0; i < file.length; i++ ){

            console.log( "file", file[ i ])
            formData.append("files",file[i] )

        }
        // console.log( file )
        const url = base_url+"/uploads/update-products"
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
                    createToast("uploaded", "info")

            },

        }
        const response = await axios.post( url, formData, config)

        console.log( response )
        if( response.data.status === 201 ){

            createToast(`Success : ${ response.data.log.success }\nFailed : ${ response.data.log.failed }\nTotal : ${ response.data.log.total }`, "success")
            onClose()

        }
    } catch (err) {

        console.log( err )
        // console.log("error")
        createToast( err.message, "error" )

    }

}
