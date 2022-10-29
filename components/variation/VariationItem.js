import { connect } from "react-redux"

// IMPORT ACTIONS
const {

	changeVariable

} = require("../../actions")

const {

	CategoryContainer,
	CategoryID,
	CategoryName,

} = require("../../styled/category")

const VariationItem = ({

	props,

	changeVariable

	}) => {

	const {

		variationData,
		isLast,

	} = props
	
	const {

		id,
		name,
		uuid,
		is_active,

	} = variationData

	const displayVariationUpdateModal = () => {

		changeVariable( "modal_variation_name", name )
		changeVariable( "modal_variation_uuid", uuid )
		changeVariable( "modal_variation_is_active", is_active )
		changeVariable( "modal_display_type", "variation-patch" )
		changeVariable( "modal_display_flag", true )

	}

	return(

		<CategoryContainer isLast={ isLast } onClick={ () => displayVariationUpdateModal() }>
			<CategoryName>{ name }</CategoryName>
			<CategoryID>Variation Code : { id }</CategoryID>
			{

				!is_active &&
				<CategoryID>Variation Disabled</CategoryID>

			}
		</CategoryContainer>

	)

}

const mapStateToProps = ( state, props ) => {


	return{

		props

	}

}

const mapActionsToProps = {

	changeVariable

}

export default connect( mapStateToProps, mapActionsToProps )( VariationItem )
