import React from "react"

import { connect } from "react-redux"

import Select from "react-select"

const {

	InputLabel

} = require("../../../styled/input")

// ACTIONS
const {

	changeVariable,

} = require("../../../actions")

const {

	ProductModalDetailsByThree

} = require("../../../styled/modal")

const ProductCategoryTwo = ({

	categories,
	categoryTwo,

	changeVariable,

	}) => {

	console.log( categoryTwo )

	const updateSelectValue = ( value ) => {

		console.log( value )
        changeVariable( "modal_product_category_two_uuid", value.value )

    }
	return(

		<ProductModalDetailsByThree>
			<InputLabel marginTop={ 20 }>product Category Two</InputLabel>
			<Select
	            options={ categories }
	            onChange={ ( change ) => updateSelectValue( change ) }
	            className="react-select-container"
	            value={ categoryTwo }
				isDisabled={"true"}
	        />
		</ProductModalDetailsByThree>

	)

}

const mapActionsToProps = {

	changeVariable,

}

export default connect( null, mapActionsToProps )( ProductCategoryTwo )
