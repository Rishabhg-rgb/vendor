import Head from "next/head"
import { connect } from "react-redux"

// IMPORT COMPONENTS
import Header from "../components/header"
import HeadMeta from "../components/head"
import Navigation  from "../components/navigation-new"

// IMPORT IMAGES
import products_icon from "../assets/icons/products.png"

const {

	Container

} = require("../styled/common")

const {

	NavigationContainerParent,
	NavigationSubNavigationContainer,
	NavigationSubNavigationItem,

} = require("../styled/navigation")

const Dashboard = () => {

	return(

		<div className="bg-background">
			<HeadMeta
				title = "Dashboard | Shophree"
			/>
			<Header/>
			<div className="container mx-auto px-5">
				<NavigationContainerParent>
					<Navigation
						activeTab="Dashboard"
						activeTabIcon={ products_icon }
					/>
				</NavigationContainerParent>
			</div>
		</div>
	
	)

}

export default connect( null )( Dashboard )
