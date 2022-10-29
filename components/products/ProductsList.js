import ProductItem from "../product/ProductItem"

const {

	CategoriesContainer

} = require("../../styled/category")

const {

	H4

} = require("../../styled/common")

const ProductsList = ( props ) => {

	const {

		productsData

	} = props

	console.log( productsData )

	return(

		<CategoriesContainer>
			<H4>Products</H4>
			{
				productsData !== null && productsData.map( ( value, index ) => {

					return(

						<ProductItem
							productData={ value }
							isLast={ index === productsData.length - 1 }
							key={ "product-item-" +index }
						/>

					)

				})

			}
		</CategoriesContainer>

	)

}

export default ProductsList
