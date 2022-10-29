import { connect } from "react-redux"

// IMPORT ACTIONS
const {

	changeVariable

} = require("../../actions")

const {

	ProductContainer,
	ProductName,
	ProductPrice,
	ProductPriceContainer,
	ProductVendorName,

} = require("../../styled/product")

const {

	SplitView

} = require("../../styled/common")

const ProductItem = ({

	props,

	changeVariable

	}) => {

	const {

		productData,
		isLast,
		pageID,

	} = props
	
	const {

		_category,
		_category_three,
		_category_two,
		_vendor,
		description,
		description_short,
		details_height,
		details_length,
		details_weight,
		details_width,
		full_price,
		images,
		is_active,
		is_variant,
		off_percentage,
		parent_sku,
		price,
		sku,
		stock_available,
		title,
		uuid,
		variant,

	} = productData

	// console.log( "product data", productData )

	const displayProductUpdateModal = () => {

		console.log( "is active " + is_active )
		changeVariable( "modal_product_name", title )
		changeVariable( "modal_product_description", description )
		changeVariable( "modal_product_short_description", description_short )
		changeVariable( "modal_product_uuid", uuid )
		changeVariable( "modal_product_price", price )
		changeVariable( "modal_product_price_full", full_price )
		changeVariable( "modal_product_off_percentage", off_percentage )
		changeVariable( "modal_product_dimension_height", details_height )
		changeVariable( "modal_product_dimension_length", details_length )
		changeVariable( "modal_product_dimension_width", details_width )
		changeVariable( "modal_product_dimension_weight", details_weight )
		changeVariable( "modal_product_category_uuid", _category.uuid )
		changeVariable( "modal_product_category_two_uuid", _category_two.uuid )
		changeVariable( "modal_product_category_three_uuid", _category_three.uuid )
		changeVariable( "modal_product_vendor_uuid", _vendor.uuid )
		changeVariable( "modal_product_image", images )
		changeVariable( "modal_product_is_variation", is_variant )
		changeVariable( "modal_product_variation_uuid", variant.uuid )
		changeVariable( "modal_product_parent_sku", parent_sku )
		changeVariable( "modal_product_is_active", is_active )
		changeVariable( "modal_product_sku", sku )
		changeVariable( "modal_product_stock", stock_available )
		changeVariable( "modal_display_type", "product-update" )
		changeVariable( "modal_page_id", pageID )
		changeVariable( "modal_display_flag", true )

	}

	return(

		<div className="p-2.5 bg-white rounded border border-light-grey shadow cursor-pointer bg-slate-100" isLast={ isLast } onClick={ () => displayProductUpdateModal() }>
			<div className="text-slate-900 text-base font-bold">{ title }</div>
			<div className="flex mt-1">
				<div className="text-black text-sm mr-2.5">Price - </div>
				<div className="text-black text-sm mr-2.5">₹{ price }</div>
				<div className="text-black text-sm mr-2.5 line-through">₹{ full_price }</div>
				<div className="text-black text-sm">({ off_percentage }%)</div>
			</div>
			<div className="text-grey text-xs mt-1">Stock - { stock_available }</div>
			<div className="text-grey text-xs mt-1">Vendor - { _vendor.name }</div>
			<div className="text-grey text-xs mt-1">SKU - { sku }</div>
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

export default connect( mapStateToProps, mapActionsToProps )( ProductItem )
