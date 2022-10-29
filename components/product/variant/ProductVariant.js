import React from "react"
import { connect } from "react-redux"

import { Checkbox } from "@chakra-ui/react"

import Select from "react-select"

const {

	InputLabel,
	TextInput,

} = require("../../../styled/input")

const {

	SplitView,

} = require("../../../styled/common")

const {

	ProductModalDetailsAlign,
	ProductModalDetailsByThree

} = require("../../../styled/modal")

// IMPORT ACTIONS
const {

	variationsFetch,
	changeVariable,

} = require("../../../actions")

const ProductVariant = ({

	variations_array,
	modal_product_parent_sku,

	props,

	variationsFetch,
	changeVariable

	}) => {

	const {

		productVariationUUID,
		productParentSKU,

	} = props

	const [ state, updateState ] = React.useState({

		variations: {},
		variation: {},

	})

	React.useEffect(() => {

		if( variations_array === null )
			variationsFetch()
		else {

			var variations = []
			var variation = {}
			variations_array.map( ( value, index ) => {

				variations.push({

					label: value.name,
            		value: value.uuid,

				})
				if( value.uuid === productVariationUUID ){

					variation = {

						label: value.name,
						value: value.uuid

					}

				}

			})

			updateState({

				variations,
				variation,

			})

		}

	}, [ variations_array, productVariationUUID ])

	console.log( props.productIsVariation )

	const toggleCheckBox = () => {

		// console.l
		changeVariable("modal_product_is_variation", !props.productIsVariation )

	}
	const updateSelectValue = ( value ) => {

        changeVariable( "modal_product_variation_uuid", value.value )

    }
	return(

		<ProductModalDetailsAlign>
			<ProductModalDetailsByThree>
				<SplitView center={ true }>
					<InputLabel marginTop={ 0 }>Is Variant?</InputLabel>
					<Checkbox disabled
						name="product_is_variation"
						onChange={ () => toggleCheckBox() }
						placeholder="enter product SKU"
						isChecked={ props.productIsVariation }
					/>
				</SplitView>
			</ProductModalDetailsByThree>
			{

				props.productIsVariation &&
				<ProductModalDetailsByThree>
					<InputLabel marginTop={ 0 }>Select Variation</InputLabel>
					<Select
						isDisabled={"true"}
			            options={ state.variations }
			            onChange={ ( change ) => updateSelectValue( change ) }
			            className="react-select-container"
			            value={ state.variation }
			        />
			    </ProductModalDetailsByThree>

			}
			{

				props.productIsVariation &&
				<ProductModalDetailsByThree noRight={ true }>
					<InputLabel marginTop={ 0 }>Parent SKU</InputLabel>
					<TextInput disabled
						name="product_price"
						onChange={ (event) => changeVariable( "modal_product_parent_sku", event.target.value ) }
						placeholder="enter parent sku code"
						value={ modal_product_parent_sku }
					/>
			    </ProductModalDetailsByThree>

			}
		</ProductModalDetailsAlign>

	)

}

const mapStateToProps = ( state, props ) => {

	const {

		variations_array,
		modal_product_is_variation,
		modal_product_parent_sku

	} = state.variables

	console.log( modal_product_parent_sku )
	return {

		variations_array,
		modal_product_parent_sku,

		props

	}

}

const mapActionsToProps = {

	variationsFetch,
	changeVariable

}

export default connect( mapStateToProps, mapActionsToProps )( ProductVariant )
