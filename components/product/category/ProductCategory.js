import React from "react"
import { connect } from "react-redux"

import ProductCategoryOne from "./ProductCategoryOne"
import ProductCategoryTwo from "./ProductCategoryTwo"
import ProductCategoryThree from "./ProductCategoryThree"


const {

	ProductModalDetailsAlign

} = require("../../../styled/modal")

// IMPORT ACTIONS
const {

	categoriesFetch,
	changeVariable,

} = require("../../../actions")

const ProductCategory = ({

	categories_array,

	props,

	categoriesFetch,
	changeVariable,

	}) => {

	const {

		productCategoryUUID,
		productCategoryTwoUUID,
		productCategoryThreeUUID,

	} = props

	const [ state, updateState ] = React.useState({

		categories: null,
		category_one: {},
		category_two: {},
		category_three: {},

	})

	React.useEffect( () => {

		if( categories_array === null )
			categoriesFetch()
		else {

			var categories_select = []
			var category_one = ""
			var category_two = ""
			var category_three = ""
			categories_array.map( ( value, index) => {

				if( productCategoryUUID === value.uuid ){

					category_one = {

						label: value.name,
	            		value: value.uuid,

					}

				}
				if( productCategoryTwoUUID === value.uuid ){

					category_two = {

						label: value.name,
	            		value: value.uuid,

					}

				}
				if( productCategoryThreeUUID === value.uuid ){

					category_three = {

						label: value.name,
	            		value: value.uuid,

					}

				}
				categories_select.push({

					label: value.name,
            		value: value.uuid,

				})
				return true

			})
			updateState({

				...state,
				categories: categories_select,
				category_one: category_one,
				category_two: category_two,
				category_three: category_three,

			})

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ categories_array, productCategoryUUID, productCategoryTwoUUID, productCategoryThreeUUID ])

	return(

		<ProductModalDetailsAlign>
			<ProductCategoryOne
				categories={ state.categories }
				categoryOne={ state.category_one }
			/>
			<ProductCategoryTwo
				categories={ state.categories }
				categoryTwo={ state.category_two }
			/>
			<ProductCategoryThree
				categories={ state.categories }
				categoryThree={ state.category_three }
			/>
		</ProductModalDetailsAlign>

	)

}

const mapStateToProps = ( state, props ) => {

	const {

		categories_array

	} = state.variables

	return {

		categories_array,

		props

	}

}

const mapActionsToProps = {

	categoriesFetch,
	changeVariable

}

export default connect( mapStateToProps, mapActionsToProps )( ProductCategory )
