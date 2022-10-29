import { connect } from "react-redux"

// IMPORT ACTIONS
const {

	changeVariable

} = require("../../actions")

const CategoryItem = ({

	props,

	changeVariable

	}) => {

	const {

		categoryData,
		isLast,

	} = props
	
	const {

		id,
		image,
		is_active,
		masthead,
		name,
		on_home,
		order,
		parent,
		uuid,
		Metadescription,
		Metatitle
	} = categoryData

	const displayCategoryUpdateModal = ( name, image ) => {

		// console.log( "cd is ", categoryData )
		changeVariable( "modal_category_image", image )
		changeVariable( "modal_category_is_active", is_active )
		changeVariable( "modal_category_masthead", masthead )
		changeVariable( "modal_category_name", name )
		changeVariable( "modal_category_on_home", on_home )
		changeVariable( "modal_category_uuid", uuid )
		changeVariable( "modal_display_flag", true )
		changeVariable( "modal_category_parent", parent )
		changeVariable( "modal_category_order", order )
		changeVariable( "modal_display_type", "category-update" )
		changeVariable("Metadescription",Metadescription)
		changeVariable("Metatitle",Metatitle)
	}

	return(

		<div className="bg-slate-100 shadow border rounded border-slate-200 p-2.5 cursor-pointer" isLast={ isLast } onClick={ () => displayCategoryUpdateModal( name, image ) }>
			<div className="text-slate-900 text-base font-bold">{ name }</div>
			<div className="text-xs text-slate-600 mt-1">Category Code : { id }</div>
			{

				!is_active &&
				<div className="text-xs text-slate-600 mt-1">Category Disabled</div>

			}
		</div>

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

export default connect( mapStateToProps, mapActionsToProps )( CategoryItem )
