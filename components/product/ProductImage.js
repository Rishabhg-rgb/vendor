import React from "react"

import Image from "next/image"

// STYLING
const {

	ProductImageView

} = require("../../styled/product")

const ProductImage = ( props ) => {

	const { image } = props
	if( typeof image !== "undefined" && image !== "" ){

		return(

			<ProductImageView>
				<Image
					src={ image }
					layout={"fill"}
					objectFit={'contain'}
					alt={ "category-image" }
					unoptimized={ true }
				/>
			</ProductImageView>

		)

	}
	return(

		<div/>

	)

}

export default ProductImage
