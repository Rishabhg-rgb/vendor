import React from "react"

import Image from "next/image"

import { connect } from "react-redux"

// STYLING
const {

	InputLabel,

} = require("../../styled/input")

const {

	AlignView

} = require("../../styled/common")

const {

	CategoryImageContainer

} = require("../../styled/category")

// ACTIONS
const {

	changeVariable,

} = require("../../actions")

const RenderProductImages = ( props ) => {

	const { image } = props
	if( typeof image !== "undefined" && image !== "" ){

		return(

			<CategoryImageContainer>
				<Image
					src={ image }
					layout={"fill"}
					objectFit={'contain'}
					alt={ "category-image" }
					unoptimized={ true }
				/>
			</CategoryImageContainer>

		)

	}
	return(

		<div/>

	)

}

const CategoryImage = ({

	image,

	changeVariable

	}) => {

	if( image !== null )
		return(

			<>
				<InputLabel marginTop={ 10 }>Image</InputLabel>
				<RenderProductImages
					image={ image }
				/>
			</>

		)
	return(

		<div/>

	)

}

const mapStateToProps = ( state, props ) => {

	const {

		image

	} = props

	console.log( image )

	return{

		image

	}

}

const mapActionsToProps = {

	changeVariable,

}

export default connect( mapStateToProps, mapActionsToProps )( CategoryImage )
