import React from "react"

import Link from "next/link"

import { connect } from "react-redux"

import Navigation  from "../../components/navigation-new"
import Head from "../../components/head"
import Header from "../../components/header"

// IMPORT IMAGES
import analytics_icon from "../../assets/icons/analytics.png"

const {

	bagAnalytics,
	cartAnalytics,
	headerAnalytics,
	productAnalytics,
	profileAnalytics,
	searchAnalytics,
	vendorAnalytics,

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
	AnalyticsActionUnderway,
	AnalyticsActionText,

} = require("../../styled/analytics")

const {

	NavigationContainerParent,
	NavigationSubNavigationContainer,
	NavigationSubNavigationItem,

} = require("../../styled/navigation")

const Analytics = ({

	analytics_bag_clicks,
	analytics_cart,
	analytics_cart_count,
	analytics_header_clicks,
	analytics_products,
	analytics_products_count,
	analytics_profile_clicks,
	analytics_search_clicks,
	analytics_vendors_count,
	analytics_vendors,

	bagAnalytics,
	cartAnalytics,
	headerAnalytics,
	productAnalytics,
	profileAnalytics,
	searchAnalytics,
	vendorAnalytics,

	}) => {

	React.useEffect( () => {

		bagAnalytics()
		cartAnalytics()
		headerAnalytics()
		productAnalytics()
		profileAnalytics()
		searchAnalytics()
		vendorAnalytics()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const numbers = [ analytics_header_clicks, analytics_search_clicks, analytics_bag_clicks, analytics_profile_clicks ]
	const max = Math.max( ...numbers )

	// MAX FROM PRODUCTS
	var max_products = 0
	analytics_products !== null && analytics_products.map( ( value, index ) => {

		if( max_products < value.count && index < 4 )
			max_products = value.count

	})

	// MAX FROM PRODUCTS
	var max_cart = 0
	analytics_cart !== null && analytics_cart.map( ( value, index ) => {

		if( max_cart < value.count )
			max_cart = value.count

	})

	// MAX FROM PRODUCTS
	var max_vendors = 0
	analytics_vendors !== null && analytics_vendors.map( ( value, index ) => {

		if( max_vendors < value.count )
			max_vendors = value.count

	})
	return(

		<>
			<Head
				title={ "Analytics | Shophree" }
			/>
			<Header/>
			<Container>
				<NavigationContainerParent>
					<Navigation
						activeTab="Analytics"
						activeTabIcon={ analytics_icon }
					/>
					<NavigationSubNavigationContainer>
						<NavigationSubNavigationItem isActive={ true }>Overview</NavigationSubNavigationItem>
						<Link href="/analytics/cart" passHref >
							<a>
								<NavigationSubNavigationItem>Cart</NavigationSubNavigationItem>
							</a>
						</Link>
						<Link href="/analytics/products" passHref >
							<a>
								<NavigationSubNavigationItem>Products</NavigationSubNavigationItem>
							</a>
						</Link>
						<Link href="/analytics/vendors" passHref >
							<a>
								<NavigationSubNavigationItem>Vendors</NavigationSubNavigationItem>
							</a>
						</Link>
					</NavigationSubNavigationContainer>
				</NavigationContainerParent>
				<Title>Analytics Overview</Title>
				<AlignView>
					<AnalyticsContainerHalf marginRight={ true }>
						<SplitView center={ true }>
							<AnalyticsTitle>Header</AnalyticsTitle>
							<AnalyticsSubTitle>Clicks</AnalyticsSubTitle>
						</SplitView>
						<AnalyticsBucketContainer>
							<AnalyticsBucketItem center={ true }>
								<AnalyticsBucket widthDynamic={ ( analytics_header_clicks/ max ) * 80 }>Home</AnalyticsBucket>
								<AnalyticsBucketCount>{ analytics_header_clicks }</AnalyticsBucketCount>
							</AnalyticsBucketItem>
							<AnalyticsBucketItem center={ true }>
								<AnalyticsBucket widthDynamic={ ( analytics_search_clicks/ max ) * 80 }>Search Bar</AnalyticsBucket>
								<AnalyticsBucketCount>{ analytics_search_clicks }</AnalyticsBucketCount>
							</AnalyticsBucketItem>
							<AnalyticsBucketItem center={ true }>
								<AnalyticsBucket widthDynamic={ ( analytics_bag_clicks/ max ) * 80 }>Bag</AnalyticsBucket>
								<AnalyticsBucketCount>{ analytics_bag_clicks }</AnalyticsBucketCount>
							</AnalyticsBucketItem>
							<AnalyticsBucketItem center={ true }>
								<AnalyticsBucket widthDynamic={ ( analytics_profile_clicks/ max ) * 80 }>Profile</AnalyticsBucket>
								<AnalyticsBucketCount>{ analytics_profile_clicks }</AnalyticsBucketCount>
							</AnalyticsBucketItem>
						</AnalyticsBucketContainer>
					</AnalyticsContainerHalf>
					<AnalyticsContainerHalf>
						<SplitView center={ true }>
							<AnalyticsTitle>Products</AnalyticsTitle>
							<AnalyticsSubTitle>{ analytics_products_count }</AnalyticsSubTitle>
						</SplitView>
						<AnalyticsBucketContainer>
							{

								analytics_products === null &&
								<AnalyticsActionUnderway>
									<AnalyticsActionText>loading..</AnalyticsActionText>
								</AnalyticsActionUnderway>

							}
							{

								analytics_products !== null && analytics_products.length === 0 &&
								<AnalyticsActionUnderway>
									<AnalyticsActionText>no analytics found</AnalyticsActionText>
								</AnalyticsActionUnderway>

							}
							{

								analytics_products !== null && analytics_products.length > 0 && analytics_products.map( ( value, index ) => {

									if( index < 4 )
										return(
											<AnalyticsBucketItem center={ true } key={ "analytics-product-"+index }>
												<AnalyticsBucket widthDynamic={ ( value.count/ max_products ) * 80 }><div>{ value.product }</div></AnalyticsBucket>
												<AnalyticsBucketCount>{ value.count }</AnalyticsBucketCount>
											</AnalyticsBucketItem>
										)

								})

							}
						</AnalyticsBucketContainer>
					</AnalyticsContainerHalf>
				</AlignView>
				<AlignView>
					<AnalyticsContainerHalf marginRight={ true }>
						<SplitView center={ true }>
							<AnalyticsTitle>Cart</AnalyticsTitle>
							<AnalyticsSubTitle>{ analytics_cart_count }</AnalyticsSubTitle>
						</SplitView>
						<AnalyticsBucketContainer>
							{

								analytics_cart === null &&
								<AnalyticsActionUnderway>
									<AnalyticsActionText>loading..</AnalyticsActionText>
								</AnalyticsActionUnderway>

							}
							{

								analytics_cart !== null && analytics_cart.length === 0 &&
								<AnalyticsActionUnderway>
									<AnalyticsActionText>no analytics found</AnalyticsActionText>
								</AnalyticsActionUnderway>

							}
							{

								analytics_cart !== null && analytics_cart.length > 0 && analytics_cart.map( ( value, index ) => {

									if( index < 4 )
										return(
											<AnalyticsBucketItem center={ true } key={ "analytics-product-"+index }>
												<AnalyticsBucket widthDynamic={ ( value.count / max_cart ) * 80 }><div>{ value.product }</div></AnalyticsBucket>
												<AnalyticsBucketCount>{ value.count }</AnalyticsBucketCount>
											</AnalyticsBucketItem>
										)

								})
							}
						</AnalyticsBucketContainer>
					</AnalyticsContainerHalf>
					<AnalyticsContainerHalf>
						<SplitView center={ true }>
							<AnalyticsTitle>Vendors</AnalyticsTitle>
							<AnalyticsSubTitle>{ analytics_vendors_count }</AnalyticsSubTitle>
						</SplitView>
						<AnalyticsBucketContainer>
							{

								analytics_vendors !== null && analytics_vendors.map( ( value, index ) => {

									if( index < 4 )
										return(
											<AnalyticsBucketItem center={ true } key={ "analytics-product-"+index }>
												<AnalyticsBucket widthDynamic={ ( value.count / max_vendors ) * 80 }><div>{ value.vendor }</div></AnalyticsBucket>
												<AnalyticsBucketCount>{ value.count }</AnalyticsBucketCount>
											</AnalyticsBucketItem>
										)

								})
							}
						</AnalyticsBucketContainer>
					</AnalyticsContainerHalf>
				</AlignView>
			</Container>
		</>

	)

}

const mapStateToProps = ( state ) => {

	const {

		analytics_bag_clicks,
		analytics_cart_count,
		analytics_cart,
		analytics_header_clicks,
		analytics_products,
		analytics_products_count,
		analytics_profile_clicks,
		analytics_search_clicks,
		analytics_vendors_count,
		analytics_vendors,

	} = state.variables

	return{

		analytics_bag_clicks,
		analytics_cart_count,
		analytics_cart,
		analytics_header_clicks,
		analytics_products,
		analytics_products_count,
		analytics_profile_clicks,
		analytics_search_clicks,
		analytics_vendors_count,
		analytics_vendors,

	}

}

const mapActionsToProps = {

	bagAnalytics,
	cartAnalytics,
	headerAnalytics,
	productAnalytics,
	profileAnalytics,
	searchAnalytics,
	vendorAnalytics,

}

export default connect( mapStateToProps, mapActionsToProps )( Analytics )
