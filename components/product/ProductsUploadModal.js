import React from "react"

import { connect } from "react-redux"

import ProcessingButton from "../processing/Button"

import { XIcon } from "@heroicons/react/solid"

// ACTIONS
const {

	changeVariable,
	uploadFile,

} = require("../../actions")

const ProductsUploadModal = ({

	modal_display,
	modal_display_type,
	processing,

	changeVariable,
	uploadFile,

	}) => {

	const [ state, updateState ] = React.useState({

		file: [],
		property_uuid: null,

	})

	// UPLOAD IMAGE
	const uploadFilesFunction = ( event ) => {

	    uploadFile( event.target.files )

	}

	const hideModal = () => {

    	changeVariable( "modal_display", false )

    }

	if( !modal_display )
		return(

			<div/>

		)
	if( modal_display_type === "modal-file-post" )
		return(

			<div className="w-full h-full fixed top-0 left-0 bg-slate-50/80">
				<div className="flex justify-center items-center h-screen">
					<div className="w-1/3 p-5 bg-white border rounded border-slate-300 mx-auto shadow-md">
						<div className="flex items-center">
							<XIcon
								className="h-6 w-6 cursor-pointer mr-2.5"
								onClick={ () => hideModal() }
							/>
							<div className="text-xl font-bold text-slate-900">Upload File</div>
						</div>
						{

							state.file.length === 0 &&
							<label className="flex flex-col block mt-2.5">
								<span className="text-xs text-grey uppercase font-medium mt-5">Upload Products File</span>
								<input type="file" onChange={ ( files ) => uploadFilesFunction( files ) } multiple={ true } className="mt-5" />
							</label>

						}
						{

							!processing &&
							<div className="bg-purple-700 cursor-pointer mt-5 px-8 py-4 rounded select-none text-center text-white text-xs uppercase hover:bg-purple-900"  onClick={ () => filesPOST( state ) }>Add Files</div>

						}
						{

							processing &&
							<ProcessingButton />
						}
					</div>
				</div>
			</div>

		)
	return(

		<div />

	)

}

const mapStateToProps = ( state, props ) => {

	const {

		files,
		modal_display,
		modal_display_type,
		processing,

	} = state.variables

	const {

		propertyUUID

	} = props

	return{

		files,
		modal_display,
		modal_display_type,
		processing,

		propertyUUID,

	}

}

const mapActionsToProps = {

	changeVariable,
	uploadFile,

}

export default connect( mapStateToProps, mapActionsToProps )( ProductsUploadModal )
