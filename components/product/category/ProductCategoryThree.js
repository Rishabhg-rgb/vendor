import React from "react"

import { connect } from "react-redux"

import Select from "react-select"

const {

	InputLabel

} = require("../../../styled/input")

const {

	ProductModalDetailsByThree

} = require("../../../styled/modal")

// ACTIONS
const {

	changeVariable,

} = require("../../../actions")

const ProductCategoryThree = ({

	categories,
	categoryThree,

	changeVariable,

	}) => {

	const updateSelectValue = ( value ) => {

        changeVariable( "modal_product_category_three_uuid", value.value )

    }
	return(

		<ProductModalDetailsByThree noRight={ true }>
			<InputLabel marginTop={ 20 }>product Category Three</InputLabel>
			<Select
	            options={ categories }
	            onChange={ ( change ) => updateSelectValue( change ) }
	            className="react-select-container"
	            value={ categoryThree }
				isDisabled={"true"}
	        />
		</ProductModalDetailsByThree>

	)

}

const mapActionsToProps = {

	changeVariable,

}

export default connect( null, mapActionsToProps )( ProductCategoryThree )
