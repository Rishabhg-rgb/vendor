import React from "react"
import Image from "next/image"

import Switch from "react-switch"

import { connect } from "react-redux"

// IMPORT IMAGE/S
import close_icon from "../../assets/close.png"

import ProductImages from "./ProductImages"

const {

	ModalCloseIconContainer,
	ModalContainer,
	ModalTab,
	ModalTabsContainer,
	ModalView,

} = require("../../styled/modal")

const {

	AlignView,
	SplitView,
	Title,

} = require("../../styled/common")

const {

	ButtonSave

} = require("../../styled/button")

const {

	InputLabel,
	TextInput,

} = require("../../styled/input")

const {

	productImageContainer

} = require("../../styled/product")

// IMPORT ACTIONS
const {

	productUpdate,
	hideModal,
	uploadFiles,
	changeVariable,

} = require("../../actions")

import ProductCategory from "./category/ProductCategory"
import ProductVariant from "./variant/ProductVariant"

const OverViewTab = ({

	productCategoryUUID,
	productCategoryTwoUUID,
	productCategoryThreeUUID,
	productDescription,
	productDescriptionShort,
	productName,
	productSKU,
	productIsVariation,
	productVariationUUID,
	productParentSKU,
	productIsActive,
	productStock,

	updateValue,
	changeVariable

	}) => {

		const toggleSwitch = () => {

	    	changeVariable( "modal_product_is_active", !productIsActive )

	    }

		return(

			<div>
				<div className="grid grid-cols-2 gap-5">
					<label>
						<InputLabel marginTop={ 20 }>product Name</InputLabel>
						<TextInput
							name="product_name"
							onChange={ (event) => updateValue(event) }
							placeholder="enter product name"
							value={ productName }
							disabled
						/>
					</label>
					<label>
						<InputLabel marginTop={ 20 }>product SKU</InputLabel>
						<TextInput
							name="product_sku"
							onChange={ (event) => updateValue(event) }
							placeholder="enter product SKU"
							value={ productSKU }
							disabled
						/>
					</label>
				</div>
				<InputLabel marginTop={ 20 }>product short description</InputLabel>
				<TextInput
					name="product_description_short"
					onChange={ (event) => updateValue(event) }
					placeholder="enter product short description"
					value={ productDescriptionShort }
					disabled
				/>
				<InputLabel marginTop={ 20 }>product description</InputLabel>
				<TextInput
					name="product_description"
					onChange={ (event) => updateValue(event) }
					placeholder="enter product description"
					value={ productDescription }
					disabled
				/>
				<ProductCategory
					productCategoryUUID={ productCategoryUUID }
					productCategoryTwoUUID={ productCategoryTwoUUID }
					productCategoryThreeUUID={ productCategoryThreeUUID }
				/>
				<div className="grid grid-cols-2 gap-5 mt-5">
					<ProductVariant
						updateValue={ updateValue }
						productIsVariation={ productIsVariation }
						productVariationUUID={ productVariationUUID }
						productParentSKU={ productParentSKU }
					/>
					{/* <div className="flex">
				        <div className="mr-5 text-xs text-slate-600 uppercase">Is Active</div>
				        <div>
				        	<Switch onChange={ () => toggleSwitch() } checked={ productIsActive } />
				        </div>
			      	</div> */}
			    </div>
			    <div className="grid grid-cols-2 gap-5 mt-5">
			    	<div>
					    <InputLabel>product stock  </InputLabel>
						<TextInput
							name="product_stock"
							onChange={ (event) => updateValue(event) }
							placeholder="enter product stock"
							value={ productStock }
						/>
					</div>
				</div>
			</div>

		)

	}

const PriceTab = ({

	productPrice,
	productFullPrice,

	updateValue

	}) => {

	return(

		<>
			<InputLabel marginTop={ 20 }>product price</InputLabel>
			<TextInput
				disabled
				name="product_price"
				onChange={ (event) => updateValue(event) }
				placeholder="enter product name"
				value={ productPrice }
			/>
			<InputLabel marginTop={ 20 }>product full price</InputLabel>
			<TextInput
				disabled
				name="product_price_full"
				onChange={ (event) => updateValue(event) }
				placeholder="enter product description"
				value={ productFullPrice }
			/>
		</>

	)

}

const DimensionsTab = ({

	productDimensionHeight,
	productDimensionLength,
	productDimensionWidth,
	productDimensionWeight,

	updateValue,

	}) => {

	return(

		<>
			<InputLabel marginTop={ 20 }>product height</InputLabel>
			<TextInput
				name="product_dimension_height"
				onChange={ (event) => updateValue(event) }
				placeholder="enter product name"
				value={ productDimensionHeight }
			/>
			<InputLabel marginTop={ 20 }>product length</InputLabel>
			<TextInput
				name="product_dimension_length"
				onChange={ (event) => updateValue(event) }
				placeholder="enter product description"
				value={ productDimensionLength }
			/>
			<InputLabel marginTop={ 20 }>product width</InputLabel>
			<TextInput
				name="product_dimension_width"
				onChange={ (event) => updateValue(event) }
				placeholder="enter product short description"
				value={ productDimensionWidth }
			/>
			<InputLabel marginTop={ 20 }>product weight</InputLabel>
			<TextInput
				name="product_dimension_weight"
				onChange={ (event) => updateValue(event) }
				placeholder="enter product short description"
				value={ productDimensionWeight }
			/>
		</>

	)

}

const ProductUpdateModal = ({

	modal_product_image,
	modal_product_name,
	modal_product_uuid,
	modal_display_flag,
	modal_display_type,
	modal_product_description,
	modal_product_short_description,
	modal_product_price,
    modal_product_price_full,
    modal_product_off_percentage,
    modal_product_dimension_height,
    modal_product_dimension_length,
    modal_product_dimension_width,
    modal_product_dimension_weight,
    modal_product_category_uuid,
    modal_product_vendor_uuid,
    modal_product_sku,
	image,
	image_id,
	files,
	modal_product_category_two_uuid,
	modal_product_category_three_uuid,
	modal_product_is_variation,
	modal_product_variation_uuid,
	modal_product_parent_sku,
	modal_product_is_active,
	modal_product_stock,
	modal_page_id,

	// ACTIONS
	productUpdate,
	hideModal,
	uploadFiles,
	changeVariable,

	}) => {

	const input_reference = React.useRef()

	const [ state, updateState ]  = React.useState({

		product_images: [],
		product_name: "",
		product_uuid: "",
		product_description: "",
		product_description_short: "",
		product_price: "",
	    product_price_full: "",
	    product_dimension_height: "",
	    product_dimension_length: "",
	    product_dimension_width: "",
	    product_dimension_weight: "",
	    product_category_uuid: "",
	    product_category_two_uuid: "",
	    product_category_three_uuid: "",
	    product_vendor_uuid: "",
	    product_stock: "",
		image_id: "",
		active_tab: 1,
		page_id: "",

	})

	React.useEffect( () => {

		if( modal_product_name !== "" )

			console.log( "image is ", modal_product_image )
			updateState({

				...state,
				product_images: typeof modal_product_image !== "undefined" && modal_product_image.length > 0 ? modal_product_image.split(",") : [],
				product_name: modal_product_name,
				product_uuid: modal_product_uuid,
				product_description: modal_product_description,
				product_description_short: modal_product_short_description,
				product_price: modal_product_price,
			    product_price_full: modal_product_price_full,
			    product_dimension_height: modal_product_dimension_height,
			    product_dimension_length: modal_product_dimension_length,
			    product_dimension_width: modal_product_dimension_width,
			    product_dimension_weight: modal_product_dimension_weight,
			    product_category_uuid: modal_product_category_uuid,
			    product_category_two_uuid: modal_product_category_two_uuid,
			    product_category_three_uuid: modal_product_category_three_uuid,
    			product_vendor_uuid: modal_product_vendor_uuid,
    			product_sku: modal_product_sku,
    			product_is_variation: modal_product_is_variation,
    			product_variation_uuid: modal_product_variation_uuid,
    			product_parent_sku: modal_product_parent_sku,
    			product_is_active: modal_product_is_active,
    			product_stock: modal_product_stock,
    			page_id: modal_page_id,

			})

			console.log( "trigger this change")

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ modal_product_name, modal_product_image, modal_product_uuid, modal_product_description, modal_product_short_description, modal_product_category_uuid, modal_product_category_two_uuid, modal_product_category_three_uuid, modal_product_is_variation, modal_product_parent_sku, modal_product_variation_uuid, modal_product_is_active ])

	React.useEffect( () => {

		if ( files !== null ){

			console.log("we are here", files )

			var images = []
			if( files.length > 0 ){

				files.map( ( value, index ) => {

					images.push( value.cloudflare_url )

				})

			} else {

				images.push( files.cloudflare_url )

			}

			console.log( images )

			updateState({

				...state,
				product_images: images

			})

		}

	}, [ files ])

	// React.useEffect( () => {

	// 	if( image !== null )
	// 		updateState({

	// 			...state,
	// 			// product_image: image,
	// 			image_id

	// 		})

	// }, [ image ])

	const updateValue = (event) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }

    // UPLOAD IMAGE
	const uploadFilesFunction = ( event ) => {

	    uploadFiles( event.target.files )

	}
	
	const ImagesTab = () => {

		return(

			<>
				<ProductImages
					images={ state.product_images }
				/>
				{/* <InputLabel marginTop={ 10 }>Upload Image</InputLabel> */}
				{/* <input type="file" onChange={ ( files ) => uploadFilesFunction( files ) } multiple={ true } ref={ input_reference } style={{ marginTop: "5px" }}/> */}
			</>

		)
	}
	const Tabs = () => {

		return(
			
			<ModalTabsContainer>
				<ModalTab isActive={ state.active_tab === 1 } onClick={ () => updateState( { ...state, active_tab: 1 } ) }>Overview</ModalTab>
				<ModalTab isActive={ state.active_tab === 2 } onClick={ () => updateState( { ...state, active_tab: 2 } ) }>Pricing</ModalTab>
				<ModalTab isActive={ state.active_tab === 3 } onClick={ () => updateState( { ...state, active_tab: 3 } ) }>Dimensions</ModalTab>
				<ModalTab isActive={ state.active_tab === 4 } onClick={ () => updateState( { ...state, active_tab: 4 } ) }>Images</ModalTab>
			</ModalTabsContainer>

		)

	}

	if( modal_display_flag && modal_display_type === "product-update")
		return(

			<ModalContainer>
				<ModalView>
					<SplitView center={ true }>
						<AlignView center={ true }>
							<ModalCloseIconContainer onClick={ () => hideModal() }>
								<Image
									height={ 20 }
									src={ close_icon }
									width={ 20 }
									unoptimised={ true }
								/>
							</ModalCloseIconContainer>
							<Title>Product Update </Title><div className="text-red text-sm ml-2"> (Currently You can only update Stock and Dimensions) </div>
						</AlignView>
						<ButtonSave marginLeft={ 20 } onClick={ () => productUpdate( state ) }>save</ButtonSave>
					</SplitView>
					<Tabs />
					{
						state.active_tab === 1 &&
						<OverViewTab
							productName={ state.product_name }
							updateValue={ updateValue }
							productDescription={ state.product_description }
							productDescriptionShort={ state.product_description_short }
							productSKU={ state.product_sku }
							productCategoryUUID={ state.product_category_uuid }
							productCategoryTwoUUID = { state.product_category_two_uuid }
							productCategoryThreeUUID={ state.product_category_three_uuid }
							productIsVariation={ state.product_is_variation }
							productVariationUUID={ state.product_variation_uuid }
							productParentSKU={ state.product_parent_sku }
							productIsActive={ modal_product_is_active }
							changeVariable={ changeVariable }
							productStock={ state.product_stock }
						/>
					}
					{
						state.active_tab === 2 &&
						<PriceTab
							productPrice={ state.product_price }
							productFullPrice={ state.product_price_full }
							updateValue={ updateValue }
						/>
					}
					{
						state.active_tab === 3 &&
						<DimensionsTab
							productDimensionHeight={ state.product_dimension_height }
							productDimensionLength={ state.product_dimension_length }
							productDimensionWidth={ state.product_dimension_width }
							productDimensionWeight={ state.product_dimension_weight }
							updateValue={ updateValue }
						/>
					}
					{
						state.active_tab === 4 &&
						<ImagesTab />
					}
				</ModalView>
			</ModalContainer>

		)
	return(

		<div />

	)

}

const mapStateToProps = ( state ) => {

	const {

		modal_product_image,
		modal_product_name,
		modal_product_uuid,
		modal_display_flag,
		modal_display_type,
		modal_product_description,
		modal_product_short_description,
		modal_product_price,
	    modal_product_price_full,
	    modal_product_off_percentage,
	    modal_product_dimension_height,
	    modal_product_dimension_length,
	    modal_product_dimension_width,
	    modal_product_dimension_weight,
	    modal_product_category_uuid,
    	modal_product_vendor_uuid,
    	modal_product_sku,
    	modal_product_category_two_uuid,
    	modal_product_category_three_uuid,
    	modal_product_is_variation,
    	modal_product_stock,
    	modal_product_variation_uuid,
    	modal_product_parent_sku,
    	modal_product_is_active,
    	modal_page_id,
		image,
		image_id,
		files,

	} = state.variables

	return{

		modal_product_image,
		modal_product_name,
		modal_product_uuid,
		modal_display_flag,
		modal_display_type,
		modal_product_description,
		modal_product_short_description,
		modal_product_price,
	    modal_product_price_full,
	    modal_product_off_percentage,
	    modal_product_dimension_height,
	    modal_product_dimension_length,
	    modal_product_dimension_width,
	    modal_product_dimension_weight,
	    modal_product_category_uuid,
	    modal_product_stock,
    	modal_product_vendor_uuid,
    	modal_product_sku,
		image,
		image_id,
		files,
		modal_product_category_two_uuid,
    	modal_product_category_three_uuid,
    	modal_product_is_variation,
    	modal_product_variation_uuid,
    	modal_product_parent_sku,
    	modal_product_is_active,
    	modal_page_id,

	}

}

const mapActionsToProps = {

	productUpdate,
	hideModal,
	uploadFiles,
	changeVariable,

}

export default connect( mapStateToProps, mapActionsToProps )( ProductUpdateModal )
