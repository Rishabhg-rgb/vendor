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

	ProductsImageContainer

} = require("../../styled/products")

// ACTIONS
const {

	changeVariable,

} = require("../../actions")

const RenderProductImages = ( props ) => {

	console.log( props )
	const { images } = props
	if( typeof images !== "undefined" ){

		const images_array = []
		images.map( ( value, index ) => {

			images_array.push(
				<ProductsImageContainer key={ "product-image-"+index }>
					<Image
						src={ value.file_url }
						layout={"fill"}
						objectFit={'contain'}
						alt={ "product-image-"+index }
					/>
				</ProductsImageContainer>
			)
			return true
			
		})

		return(

			<AlignView>
				{ images_array }
			</AlignView>

		)

	}
	return(

		<div/>

	)

}

const ProductImages = ({

	files,

	changeVariable

	}) => {

	if( files !== null )
		return(

			<>
				<InputLabel marginTop={ 10 }>Images</InputLabel>
				<RenderProductImages
					images={ files }
				/>
			</>

		)
	return(

		<div/>

	)

}

const mapStateToProps = ( state ) => {

	const {

		files

	} = state.variables

	return{

		files

	}

}

const mapActionsToProps = {

	changeVariable,

}

export default connect( mapStateToProps, mapActionsToProps )( ProductImages )
