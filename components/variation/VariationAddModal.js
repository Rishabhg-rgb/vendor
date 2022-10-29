import React from "react"
import Image from "next/image"

import { connect } from "react-redux"

// IMPORT IMAGE/S
import close_icon from "../../assets/close.png"

const {

	ModalCloseIconContainer,
	ModalContainer,
	ModalView,

} = require("../../styled/modal")

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

const {

	CategoryImageContainer

} = require("../../styled/category")

// IMPORT ACTIONS
const {

	variationPOST,
	hideModal,

} = require("../../actions")

const VariationAddModal = ({

	modal_display_flag,
	modal_display_type,

	// ACTIONS
	variationPOST,
	hideModal,

	}) => {

	const [ state, updateState ]  = React.useState({

		variation_name: "",

	})

	const updateValue = (event) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }

	const clearVariablesAndClose = () => {

    	updateState({

    		variation_name: "",

		})

		hideModal()

    }

	if( modal_display_flag && modal_display_type === "variation-add")
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
							<Title>Variation Add</Title>
						</AlignView>
						<ButtonSave marginLeft={ 20 } onClick={ () => variationPOST( state ) }>save</ButtonSave>
					</SplitView>
					<InputLabel marginTop={ 20 }>Variation Name</InputLabel>
					<TextInput
						name="variation_name"
						onChange={ (event) => updateValue(event) }
						placeholder="enter variation name"
						value={ state.variation_name }
					/>
				</ModalView>
			</ModalContainer>

		)
	return(

		<div />

	)

}

const mapStateToProps = ( state ) => {

	const {

		modal_display_flag,
		modal_display_type,

	} = state.variables

	return{

		modal_display_flag,
		modal_display_type,

	}

}

const mapActionsToProps = {

	variationPOST,
	hideModal,

}

export default connect( mapStateToProps, mapActionsToProps )( VariationAddModal )
