import VariationItem from "../variation/VariationItem"

const {

	CategoriesContainer

} = require("../../styled/category")

const {

	H4

} = require("../../styled/common")

const VariationsList = ( props ) => {

	const {

		variationsData

	} = props

	console.log( variationsData )

	return(

		<CategoriesContainer>
			<H4>Variations</H4>
			{
				variationsData !== null && variationsData.map( ( value, index ) => {

					return(

						<VariationItem
							variationData={ value }
							isLast={ index === variationsData.length - 1 }
							key={ "variation-item-" +index }
						/>

					)

				})

			}
		</CategoriesContainer>

	)

}

export default VariationsList
