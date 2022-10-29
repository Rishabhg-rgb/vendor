import React from "react"
import Image from "next/image"

import Select from "react-select"

import { connect } from "react-redux"

// IMPORT IMAGE/S
import close_icon from "../../assets/close.png"

const {

	ModalCloseIconContainer,
	ModalContainer,
	ModalView,

} = require("../../styled/modal")

const {

	CategoryImageContainer

} = require("../../styled/category")

const {

	AlignView,
	SplitView,
	Title,

} = require("../../styled/common")

const {

	ButtonSave

} = require("../../styled/button")

const {

	InputLabel,
	TextInput,

} = require("../../styled/input")

// IMPORT ACTIONS
const {

	categoryAdd,
	hideModal,
	uploadFiles,
	changeVariable,

} = require("../../actions")

const CategoryAddModal = ({

	modal_display_flag,
	modal_display_type,
	image,
	image_id,

	categoriesData,

	// ACTIONS
	categoryAdd,
	hideModal,
	uploadFiles,
	changeVariable,

	}) => {

	const input_reference = React.useRef()

	const [ state, updateState ]  = React.useState({

		category_array: [],
		category_image: "",
		category_name: "",
		category_selected: null,
		image_id: "",

	})

	React.useEffect( () => {

		var category_array = []
		categoriesData !== null && categoriesData.map( ( value, index ) => {

			category_array.push({

				label: value.name,
				value: value.uuid,

			})

		})
		updateState({

			...state,
			category_array: category_array

		})

	}, [ categoriesData ])

	React.useEffect( () => {

		if( image !== null )
			updateState({

				...state,
				category_image: image,
				image_id

			})

	}, [ image ])

	const updateValue = (event) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }

    const clearVariablesAndClose = () => {

    	updateState({

			category_image: "",
			category_name: "",
			image_id: ""

		})
		hideModal()

    }

    // UPLOAD IMAGE
	const uploadFilesFunction = ( event ) => {

	    uploadFiles( event.target.files )

	}

	const updateSelectValue = ( value ) => {

    	updateState({

    		...state,
    		category_selected: value.value

    	})

    }

	if( modal_display_flag && modal_display_type === "category-add")
		return(

			<ModalContainer onClick={ () => clearVariablesAndClose() }>
				<ModalView onClick={ ( event ) => event.stopPropagation() }>
					<SplitView center={ true }>
						<AlignView center={ true }>
							<ModalCloseIconContainer onClick={ () => clearVariablesAndClose() }>
								<Image
									height={ 20 }
									src={ close_icon }
									width={ 20 }
									unoptimised={ true }
								/>
							</ModalCloseIconContainer>
							<Title>Category Add</Title>
						</AlignView>
						<ButtonSave marginLeft={ 20 } onClick={ () => categoryAdd( state ) }>save</ButtonSave>
					</SplitView>
					<InputLabel marginTop={ 20 }>Category Name</InputLabel>
					<TextInput
						name="category_name"
						onChange={ (event) => updateValue(event) }
						placeholder="enter category name"
						value={ state.category_name }
					/>
					{

						state.category_image !== "" &&
						<>
						<InputLabel marginTop={ 10 }>Category Image</InputLabel>
							<CategoryImageContainer>
								<Image
									src={ state.category_image }
									width={ 200 }
									height={ 200 }
									unoptimised={ true }
								/>
							</CategoryImageContainer>
						</>

					}
					<InputLabel marginTop={ 10 }>Upload Category Image</InputLabel>
					<input type="file" onChange={ ( files ) => uploadFilesFunction( files ) } multiple={ false } ref={ input_reference } style={{ marginTop: "5px" }}/>
					<InputLabel marginTop={ 10 }>Select Parent Category</InputLabel>
					<Select
			            options={ state.category_array }
			            onChange={ ( change ) => updateSelectValue( change ) }
			            className="react-select-container"
			        />
				</ModalView>
			</ModalContainer>

		)
	return(

		<div />

	)

}

const mapStateToProps = ( state, props ) => {

	const {

		modal_display_flag,
		modal_display_type,
		image,
		image_id,

	} = state.variables

	const {

		categoriesData

	} = props

	return{

		modal_display_flag,
		modal_display_type,
		image,
		image_id,

		categoriesData

	}

}

const mapActionsToProps = {

	categoryAdd,
	hideModal,
	uploadFiles,
	changeVariable,

}

export default connect( mapStateToProps, mapActionsToProps )( CategoryAddModal )
