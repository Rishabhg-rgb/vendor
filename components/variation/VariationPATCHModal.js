import React from "react"
import Image from "next/image"

import Switch from "react-switch"
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

	variationPATCH,
	hideModal,

} = require("../../actions")

const VariationPATCHModal = ({

	modal_display_flag,
	modal_display_type,
	modal_variation_is_active,
	modal_variation_name,
	modal_variation_uuid,

	// ACTIONS
	variationPATCH,
	hideModal,

	}) => {

	const [ state, updateState ]  = React.useState({

		variation_is_active: "",
		variation_name: "",
		variation_uuid: "",

	})

	React.useEffect( () => {

		updateState({

			...state,
			variation_is_active: modal_variation_is_active,
			variation_name: modal_variation_name,
			variation_uuid: modal_variation_uuid,

		})


	}, [ modal_display_flag ])

	const updateValue = (event) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }

	const clearVariablesAndClose = () => {

    	updateState({

    		...state,
    		variation_name: "",

		})

		hideModal()

    }

    const toggleSwitch = () => {

    	updateState({

			...state,
			variation_is_active: !state.variation_is_active

		})

    }

	if( modal_display_flag && modal_display_type === "variation-patch")
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
							<Title>Variation Update</Title>
						</AlignView>
						<ButtonSave marginLeft={ 20 } onClick={ () => variationPATCH( state ) }>save</ButtonSave>
					</SplitView>
					<InputLabel marginTop={ 20 }>Variation Name</InputLabel>
					<TextInput
						name="variation_name"
						onChange={ (event) => updateValue(event) }
						placeholder="enter variation name"
						value={ state.variation_name }
					/>
					<div>
				        <InputLabel marginTop={ 20 }>Is Active</InputLabel>
				        <div style={{ marginTop: "10px" }}>
				        	<Switch onChange={ () => toggleSwitch() } checked={ state.variation_is_active }/>
				        </div>
			      	</div>
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
		modal_variation_is_active,
		modal_variation_name,
		modal_variation_uuid,

	} = state.variables

	return{

		modal_display_flag,
		modal_display_type,
		modal_variation_is_active,
		modal_variation_name,
		modal_variation_uuid,

	}

}

const mapActionsToProps = {

	variationPATCH,
	hideModal,

}

export default connect( mapStateToProps, mapActionsToProps )( VariationPATCHModal )
