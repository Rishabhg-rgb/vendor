import React from "react"

import Link from "next/link"

import { connect } from "react-redux"

import Navigation  from "../../components/navigation-new"
import Head from "../../components/head"
import Header from "../../components/header"

// IMPORT IMAGES
import analytics_icon from "../../assets/icons/analytics.png"

const {

	cartAnalytics

} = require("../../actions")

const {

	AlignView,
	Container,
	SplitView,
	Title,

} = require("../../styled/common")

const {

	AnalyticsBucket,
	AnalyticsBucketCount,
	AnalyticsContainerFull,
	AnalyticsContainerHalf,
	AnalyticsSubTitle,
	AnalyticsTitle,
	AnalyticsBucketContainer,
	AnalyticsBucketItem,

} = require("../../styled/analytics")

const {

	NavigationContainerParent,
	NavigationSubNavigationContainer,
	NavigationSubNavigationItem,

} = require("../../styled/navigation")

const AnalyticsCart = ({

	analytics_cart_count,
	analytics_cart,

	cartAnalytics

	}) => {

	React.useEffect( () => {

		cartAnalytics()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	var max = 0
	analytics_cart !== null && analytics_cart.map( ( value, index ) => {

		if( max < value.count )
			max = value.count

	})
	return(

		<>
			<Head
				title={ "Analytics Cart | Shophree" }
			/>
			<Header/>
			<Container>
				<NavigationContainerParent>
					<Navigation
						activeTab="Analytics"
						activeTabIcon={ analytics_icon }
					/>
					<NavigationSubNavigationContainer>
						<Link href="/analytics" passHref>
							<a>
								<NavigationSubNavigationItem>Overview</NavigationSubNavigationItem>
							</a>
						</Link>
						<NavigationSubNavigationItem isActive={ true }>Cart</NavigationSubNavigationItem>
						<Link href="/analytics/products" passHref>
							<a>
								<NavigationSubNavigationItem>Products</NavigationSubNavigationItem>
							</a>
						</Link>
						<Link href="/analytics/vendors" passHref>
							<a>
								<NavigationSubNavigationItem>Vendors</NavigationSubNavigationItem>
							</a>
						</Link>
					</NavigationSubNavigationContainer>
				</NavigationContainerParent>
				<Title>Cart Analytics</Title>
				<AnalyticsContainerFull>
					<SplitView center={ true }>
						<AnalyticsTitle>Products</AnalyticsTitle>
						<AnalyticsSubTitle>{ analytics_cart_count }</AnalyticsSubTitle>
					</SplitView>
					<AnalyticsBucketContainer>
						{

							analytics_cart !== null && analytics_cart.map( ( value, index ) => {

								return(
									<AnalyticsBucketItem center={ true } key={ "analytics-product-"+index }>
										<AnalyticsBucket widthDynamic={ ( value.count / max ) * 80 }><div>{ value.product }</div></AnalyticsBucket>
										<AnalyticsBucketCount>{ value.count }</AnalyticsBucketCount>
									</AnalyticsBucketItem>
								)

							})
						}
					</AnalyticsBucketContainer>
				</AnalyticsContainerFull>
			</Container>
		</>

	)

}

const mapStateToProps = ( state ) => {

	const {

		analytics_cart_count,
		analytics_cart,

	} = state.variables

	return{

		analytics_cart_count,
		analytics_cart,

	}

}

const mapActionsToProps = {

	cartAnalytics


}

export default connect( mapStateToProps, mapActionsToProps )( AnalyticsCart )
