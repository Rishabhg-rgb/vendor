import React from "react"

import dynamic from "next/dynamic"
import Image from "next/image"

import { connect } from "react-redux"

// IMPORT IMAGES
import analytics_icon from "../../assets/icons/analytics.png"
import categories_icon from "../../assets/icons/categories.png"
import products_icon from "../../assets/icons/products.png"
import orders_icon from "../../assets/icons/orders.png"

import {
	
	CurrencyRupeeIcon,
	LogoutIcon

} from "@heroicons/react/solid"

const NavigationMenu = dynamic( () => import("./NavigationItem") )

const {

	NavigationContainer,
	NavigationCurrentLocation,
	NavigationCurrentLocationImage,
	NavigationExpand,

} = require("../../styled/navigation")

const {

	SplitView,
	Underline,

} = require("../../styled/common")

const Navigation = ({

	activeTab,
	activeTabIcon,

	}) => {

	const [ expand, updateExpand ] = React.useState( false )

	return(

		<NavigationContainer onMouseEnter={ () => updateExpand( true ) } onMouseLeave={ () => updateExpand( false ) }>
			<NavigationCurrentLocation>
				<NavigationCurrentLocationImage>
					<Image
						src={ activeTabIcon }
						width={ 20 }
						height={ 20 }
						alt={ "navigation icon"}
					/>
				</NavigationCurrentLocationImage>
				{ activeTab }
			</NavigationCurrentLocation>
			{

				expand &&
				<NavigationExpand onMouseEnter={ () => updateExpand( true ) }>
					<NavigationMenu
						navigationIcon={ analytics_icon }
						navigationLink={ "dashboard" }
						navigationName={ "Dashboard" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "dashboard navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ products_icon }
						navigationLink={ "products" }
						navigationName={ "Products" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "products navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ analytics_icon }
						navigationLink={ "vendors" }
						navigationName={ "Vendors" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "vendors navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ categories_icon }
						navigationLink={ "categories" }
						navigationName={ "Categories" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "categories navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ orders_icon }
						navigationLink={ "orders" }
						navigationName={ "Orders" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "orders navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ analytics_icon }
						navigationLink={ "payments" }
						navigationName={ "Payments" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "payments navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ analytics_icon }
						navigationLink={ "variations" }
						navigationName={ "Variations" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "variations navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ analytics_icon }
						navigationLink={ "analytics" }
						navigationName={ "Analytics" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "analytics navigation icon" }
					/>
					<NavigationMenu
						navigationIcon={ analytics_icon }
						navigationLink={ "coupons" }
						navigationName={ "Coupons" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "analytics navigation icon" }
						isImageComponent={ true }
						IconComponent={ CurrencyRupeeIcon }
					/>
					<NavigationMenu
						navigationIcon={ analytics_icon }
						navigationLink={ "logout" }
						navigationName={ "Logout" }
						navigationActiveTab={ activeTab }
						navigationIconAlt={ "logout navigation icon" }
						isImageComponent={ true }
						IconComponent={ LogoutIcon }
					/>
				</NavigationExpand>

			}
		</NavigationContainer>

	)

}

const mapStateToProps = ( state, props  ) => {


	const {

		activeTab,
		activeTabIcon

	} = props

	return{

		activeTab,
		activeTabIcon

	}

}

export default connect( mapStateToProps )( Navigation )
