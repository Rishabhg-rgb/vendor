import React from "react"

import Head from "next/head"
import Link from "next/link"
import dynamic from "next/dynamic"

import { connect } from "react-redux"

// IMPORT COMPONENTS
import Footer from "../components/footer"
import Header from "../components/header"
import HeadMeta from "../components/head"
import Navigation  from "../components/navigation-new"
import ProductsList from "../components/product/ProductsList"
import Notification from "../components/notification"
import VariationsList from "../components/variations/VariationsList"

// IMPORT IMAGES
import products_icon from "../assets/icons/products.png"


const VariationAddModal = dynamic( () => import("../components/variation/VariationAddModal") )
const VariationUpdateModal = dynamic( () => import("../components/variation/VariationPATCHModal") )

const {

	AlignView,
	ContainerMain,
	Container

} = require("../styled/common")

const {

	NavigationContainerParent,
	NavigationSubNavigationContainer,
	NavigationSubNavigationItem,

} = require("../styled/navigation")

const {

	VendorName,
	VendorsNameContainer

} = require("../styled/vendor")

const {

	changeVariable,
	variationsFetch,

} = require("../actions")

const Variations = ({

	variations_array,

	changeVariable,
	variationsFetch,

	}) => {

	React.useEffect( () => {

		if( variations_array === null )
			variationsFetch()

	}, [ variations_array ])

	const displayAddVariationModal = () => {

		changeVariable( "modal_display_flag", true )
		changeVariable( "modal_display_type", "variation-add" )

	}

	return(

		<>
			<HeadMeta
				title = "Variations | Shophree"
			/>
			<Header/>
			<Container>
				<NavigationContainerParent>
					<Navigation
						activeTab="Variations"
						activeTabIcon={ products_icon }
					/>
					<NavigationSubNavigationContainer>
						<NavigationSubNavigationItem isActive={ true }>Overview</NavigationSubNavigationItem>
						<NavigationSubNavigationItem onClick={ () => displayAddVariationModal() }>Add New</NavigationSubNavigationItem>
					</NavigationSubNavigationContainer>
				</NavigationContainerParent>
				<VariationsList
					variationsData={ variations_array }
				/>
			</Container>
			<VariationAddModal />
			<VariationUpdateModal />
			<Notification />
		</>
	
	)

}

const mapStateToProps = ( state ) => {

	const {

		variations_array,

	} = state.variables

	return{

		variations_array,

	}

}

const mapActionsToProps = {

	changeVariable,
	variationsFetch,

}

export default connect( mapStateToProps, mapActionsToProps )( Variations )
