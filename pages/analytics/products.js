import React from "react"

import Link from "next/link"

import { connect } from "react-redux"

import Navigation  from "../../components/navigation-new"
import Head from "../../components/head"
import Header from "../../components/header"


// IMPORT IMAGES
import analytics_icon from "../../assets/icons/analytics.png"

const {

	productAnalytics,

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

const AnalyticsProducts = ({

	analytics_products,
	analytics_products_count,

	productAnalytics,

	}) => {

	React.useEffect( () => {

		productAnalytics()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	var max = 0
	analytics_products !== null && analytics_products.map( ( value, index ) => {

		if( max < value.count )
			max = value.count

	})
	return(

		<>
			<Head
				title={ "Analytics Products | Shophree" }
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
						<Link href="/analytics/cart" passHref>
							<a>
								<NavigationSubNavigationItem>Cart</NavigationSubNavigationItem>
							</a>
						</Link>
						<NavigationSubNavigationItem isActive={ true }>Products</NavigationSubNavigationItem>
						<Link href="/analytics/vendors" passHref>
							<a>
								<NavigationSubNavigationItem>Vendors</NavigationSubNavigationItem>
							</a>
						</Link>
					</NavigationSubNavigationContainer>
				</NavigationContainerParent>
				<Title>Product Analytics</Title>
				<AnalyticsContainerFull>
					<SplitView center={ true }>
						<AnalyticsTitle>Products</AnalyticsTitle>
						<AnalyticsSubTitle>{ analytics_products_count }</AnalyticsSubTitle>
					</SplitView>
					<AnalyticsBucketContainer>
						{
							analytics_products !== null && analytics_products.map( ( value, index ) => {

								return(
									<AnalyticsBucketItem center={ true } key={ "analytics-product-"+index }>
										<AnalyticsBucket widthDynamic={ ( value.count/ max ) * 80 }><div>{ value.product }</div></AnalyticsBucket>
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

		analytics_products,
		analytics_products_count,

	} = state.variables

	return{

		analytics_products,
		analytics_products_count,

	}

}

const mapActionsToProps = {

	productAnalytics,

}

export default connect( mapStateToProps, mapActionsToProps )( AnalyticsProducts )
