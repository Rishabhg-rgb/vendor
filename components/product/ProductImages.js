import React from "react"

import Image from "next/image"

import ProductImage from "./ProductImage"

// STYLING
const {

	ProductImageContainer

} = require("../../styled/product")

const ProductImages = ( props ) => {

	var { images } = props
	console.log( "image is ", images )
	if( typeof images !== "undefined" && images !== "" ){

		return(

			<ProductImageContainer>
				{

					images.map( ( value, index ) => {

						return(
							
							<ProductImage
								image={ value }
								key={ "product-image-"+index }
							/>

						)

					})

				}
			</ProductImageContainer>

		)

	}
	return(

		<div/>

	)

}

export default ProductImages
