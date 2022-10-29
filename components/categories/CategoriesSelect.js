import React from "react"

import { connect } from "react-redux"

import Select from "react-select"

// STYLING
const {

	InputLabel,

} = require("../../styled/input")

// ACTIONS
const {

	categoriesFetch,
	changeVariable,

} = require("../../actions")

const CategoriesSelect = ({

	categories_array,

	categoryUUID,

	categoriesFetch,
	changeVariable,

	}) => {

	const [ state, updateState ] = React.useState({

		categories: null,
		category_selected: {},

	})

	console.log( state )

	// FETCH IF NO CATEGORIES EXIST
	React.useEffect( () => {

		if( categories_array === null ){

			categoriesFetch()

		} else if( categories_array.length > 0 ){

			console.log( categories_array )
			const categories_select = []
			categories_array.map( ( value, index) => {

				categories_select.push({

					label: value.name,
            		value: value.uuid,

				})
				return true

			})
			updateState({

				...state,
				categories: categories_select

			})

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[ categories_array ])

	React.useEffect( () => {

		if( typeof categoryUUID !== "undefined" && categories_array !== null && categories_array.length > 0 ){

			var category_select = ""
			const categories_select = []
			categories_array.map( ( value, index) => {

				if( value.uuid === categoryUUID ){

					category_select = {

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
				category_selected: category_select,
				categories: categories_select

			})

			changeVariable("category_selected_uuid", categoryUUID )

		}

	},[ categoryUUID, categories_array ])

	// CLEAR CATEGORY VALUE
	React.useEffect( () => {

		return () => {

			changeVariable( "category_selected_uuid", null )

		}

	},[])

	const updateSelectValue = ( value ) => {

        changeVariable( "category_selected_uuid", value.value )
        changeVariable( "sub_category_selected_uuid", null )
        changeVariable( "sub_sub_category_selected_uuid", null )

    }

	return(

		<>
			<InputLabel marginTop={ 10 }>Select Category</InputLabel>
			<Select
	            options={ state.categories }
	            onChange={ ( change ) => updateSelectValue( change ) }
	            className="react-select-container"
	            value={ state.category_selected }
	        />
	    </>

	)

}

const mapStateToProps = ( state, props ) => {

	const {

		categories_array

	} = state.variables

	const {

		categoryUUID

	} = props

	return{

		categories_array,

		categoryUUID

	}

}

const mapActionsToProps = {

	categoriesFetch,
	changeVariable,

}

export default connect( mapStateToProps, mapActionsToProps )( CategoriesSelect )
