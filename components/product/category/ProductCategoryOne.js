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

const ProductCategoryOne = ({

	categories,
	categoryOne,

	changeVariable,

	}) => {

	const updateSelectValue = ( value ) => {

		console.log( value )
        changeVariable( "modal_product_category_uuid", value.value )

    }
	return(

		<ProductModalDetailsByThree>
			<InputLabel marginTop={ 20 } >product Category One</InputLabel>
			<Select
	            options={ categories }
	            onChange={ ( change ) => updateSelectValue( change ) }
	            className="react-select-container"
	            value={ categoryOne }
				isDisabled={"true"}
	        />
		</ProductModalDetailsByThree>

	)

}

const mapActionsToProps = {

	changeVariable,

}

export default connect( null, mapActionsToProps )( ProductCategoryOne )
