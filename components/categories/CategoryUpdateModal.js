import React from "react"
import Image from "next/image"

import Switch from "react-switch"

import Select from "react-select"

import { Checkbox } from "@chakra-ui/react"

import { connect } from "react-redux"

// IMPORT IMAGE/S
import close_icon from "../../assets/close.png"

const {

	ModalCloseIconContainer,
	ModalContainer,
	ModalView,

} = require("../../styled/modal")

const {

	ProductModalDetailsAlign,
	ProductModalDetailsByThree

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

	CategoryImageContainer

} = require("../../styled/category")

// IMPORT ACTIONS
const {

	categoryUpdate,
	changeVariable,
	hideModal,
	uploadFiles,
	uploadMasthead,

} = require("../../actions")

const CategoryUpdateModal = ({

	image,
	image_id,
	masthead,
	modal_category_image,
	modal_category_is_active,
	modal_category_masthead,
	modal_category_name,
	modal_category_on_home,
	modal_category_uuid,
	modal_display_flag,
	modal_display_type,
	modal_category_parent,
	modal_category_order,
	Metadescription,
	Metatitle,
	categoriesData,

	// ACTIONS
	categoryUpdate,
	changeVariable,
	hideModal,
	uploadFiles,
	uploadMasthead,

}) => {

	const input_reference = React.useRef()

	const [state, updateState] = React.useState({

		category_image: "",
		category_masthead: "",
		category_name: "",
		category_order: 0,
		category_on_home: false,
		category_uuid: "",
		category_is_active: "",
		image_id: "",
		category_array: [],
		category_selected: null,
		category_object: {},
		Metadescription: "",
		Metatitle:""
	})

	React.useEffect(() => {

		var category_array = []
		var category_selected = null
		var category_object = null
		categoriesData !== null && categoriesData.map((value, index) => {

			if (modal_category_parent !== null && value.uuid === modal_category_parent.uuid) {

				category_object = {

					label: value.name,
					value: value.uuid,

				}

				category_selected = value.uuid

			}

			category_array.push({

				label: value.name,
				value: value.uuid,

			})

		})
		updateState({

			...state,
			category_image: modal_category_image,
			category_masthead: modal_category_masthead,
			category_name: modal_category_name,
			category_on_home: modal_category_on_home,
			category_uuid: modal_category_uuid,
			category_is_active: modal_category_is_active,
			category_array: category_array,
			category_object: category_object,
			category_selected: category_selected,
			category_order: modal_category_order,
			Metadescription:Metadescription,
			Metatitle:Metatitle
		})


	}, [categoriesData, modal_category_parent, modal_category_uuid, modal_category_on_home])

	React.useEffect(() => {

		if (image !== null)
			updateState({

				...state,
				category_image: image,
				image_id

			})

	}, [image])

	React.useEffect(() => {

		if (masthead !== null)
			updateState({

				...state,
				category_masthead: masthead,

			})

	}, [masthead])

	const updateValue = (event) => {

		const variable = event.target.name
		const value = event.target.value
		updateState({ ...state, [variable]: value })

	}

	// UPLOAD IMAGE
	const uploadFilesFunction = (event) => {

		uploadFiles(event.target.files)

	}

	// UPLOAD IMAGE
	const uploadMastheadFunction = (event) => {

		uploadMasthead(event.target.files)

	}

	const clearVariablesAndClose = () => {

		updateState({

			...state,
			category_image: "",
			category_name: "",
			image_id: ""

		})
		hideModal()

	}

	const toggleCheckBox = () => {

		changeVariable("modal_category_on_home", !modal_category_on_home)

	}

	const toggleSwitch = () => {

		updateState({

			...state,
			category_is_active: !state.category_is_active

		})

	}

	const updateSelectValue = (value) => {

		updateState({

			...state,
			category_selected: value.value,
			category_object: value,

		})

	}

	// console.log( state )
	if (modal_display_flag && modal_display_type === "category-update")
		return (

			<ModalContainer onClick={() => clearVariablesAndClose()}>
				<ModalView onClick={(event) => event.stopPropagation()}>
					<SplitView center={true}>
						<AlignView center={true}>
							<ModalCloseIconContainer onClick={() => clearVariablesAndClose()}>
								<Image
									height={20}
									src={close_icon}
									width={20}
									unoptimised={true}
								/>
							</ModalCloseIconContainer>
							<Title>Category Update</Title>
						</AlignView>
						<ButtonSave marginLeft={20} onClick={() => categoryUpdate(state)}>save</ButtonSave>
					</SplitView>
					<div className="grid grid-cols-2 mt-5 gap-5">
						<div>
							<div className="text-xs uppercase text-slate-800">Category Name</div>
							<TextInput
								name="category_name"
								onChange={(event) => updateValue(event)}
								placeholder="enter category name"
								value={state.category_name}
							/>
						</div>
						<div>
							<div className="text-xs uppercase text-slate-800">Category Order</div>
							<TextInput
								name="category_order"
								onChange={(event) => updateValue(event)}
								placeholder="enter category order"
								value={state.category_order}
							/>
						</div>
					</div>
					<div>
						<div className="text-xs uppercase text-slate-800">Meta Description</div>
						<TextInput
							name="Metadescription"
							onChange={(event) => updateValue(event)}
							placeholder="enter category description"
							value={state.Metadescription}
						/>
					</div>
					<div>
						<div className="text-xs uppercase text-slate-800">Meta Description</div>
						<TextInput
							name="Metatitle"
							onChange={(event) => updateValue(event)}
							placeholder="enter Metatitle description"
							value={state.Metatitle}
						/>
					</div>
					<InputLabel marginTop={10}>Category Image</InputLabel>
					{

						state.category_image !== "" &&
						<CategoryImageContainer>
							<Image
								src={state.category_image}
								width={200}
								height={200}
								unoptimised={true}
							/>
						</CategoryImageContainer>

					}
					<InputLabel marginTop={10}>Upload Image</InputLabel>
					<input type="file" onChange={(files) => uploadFilesFunction(files)} multiple={false} ref={input_reference} style={{ marginTop: "5px" }} />
					<InputLabel marginTop={10}>Masthead Image</InputLabel>
					{

						typeof state.category_masthead !== "undefined" && state.category_masthead !== "" && state.category_masthead !== null &&
						<CategoryImageContainer>
							<Image
								src={state.category_masthead}
								width={200}
								height={200}
								unoptimised={true}
							/>
						</CategoryImageContainer>

					}
					<InputLabel marginTop={10}>Upload Masthead Image</InputLabel>
					<input type="file" onChange={(files) => uploadMastheadFunction(files)} multiple={false} ref={input_reference} style={{ marginTop: "5px" }} />
					<ProductModalDetailsByThree>
						<SplitView center={true}>
							<InputLabel marginTop={20}>Is on Home Page?</InputLabel>
							<Checkbox
								name="product_is_variation"
								onChange={() => toggleCheckBox()}
								placeholder="enter product SKU"
								isChecked={state.category_on_home}
							/>
						</SplitView>
					</ProductModalDetailsByThree>
					<div>
						<InputLabel marginTop={20}>Is Active?</InputLabel>
						<div style={{ marginTop: "10px" }}>
							<Switch onChange={() => toggleSwitch()} checked={state.category_is_active} />
						</div>
					</div>
					<InputLabel marginTop={10}>Select Parent Category</InputLabel>
					<Select
						options={state.category_array}
						onChange={(change) => updateSelectValue(change)}
						className="react-select-container"
						value={state.category_object}
					/>
				</ModalView>
			</ModalContainer>

		)
	return (

		<div />

	)

}

const mapStateToProps = (state, props) => {

	const {

		image,
		image_id,
		masthead,
		modal_category_image,
		modal_category_is_active,
		modal_category_masthead,
		modal_category_name,
		modal_category_on_home,
		modal_category_uuid,
		modal_display_flag,
		modal_display_type,
		modal_category_parent,
		modal_category_order,
		Metadescription,
		Metatitle
	} = state.variables

	const {

		categoriesData,

	} = props

	// console.log( "c data ", categoriesData )
	// console.log( "state variables ", modal_category_name )

	return {

		image,
		image_id,
		masthead,
		modal_category_image,
		modal_category_is_active,
		modal_category_masthead,
		modal_category_name,
		modal_category_on_home,
		modal_category_uuid,
		modal_display_flag,
		modal_display_type,
		modal_category_parent,
		modal_category_order,
		Metadescription,
		Metatitle,
		categoriesData,

	}

}

const mapActionsToProps = {

	categoryUpdate,
	changeVariable,
	hideModal,
	uploadFiles,
	uploadMasthead,

}

export default connect(mapStateToProps, mapActionsToProps)(CategoryUpdateModal)
