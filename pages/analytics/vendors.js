import React from "react"

import Link from "next/link"

import { connect } from "react-redux"

import Navigation  from "../../components/navigation-new"
import Head from "../../components/head"
import Header from "../../components/header"

// IMPORT IMAGES
import analytics_icon from "../../assets/icons/analytics.png"


const {

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

} = require("../../styled/analytics")

const {

	NavigationContainerParent,
	NavigationSubNavigationContainer,
	NavigationSubNavigationItem,

} = require("../../styled/navigation")

const AnalyticsVendors = ({

	analytics_vendors,
	analytics_vendors_count,

	vendorAnalytics,

	}) => {

	React.useEffect( () => {

		vendorAnalytics()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	var max = 0
	analytics_vendors !== null && analytics_vendors.map( ( value, index ) => {

		if( max < value.count )
			max = value.count

	})

	return(

		<>
			<Head
				title={ "Analytics Vendors | Shophree" }
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
						<Link href="/analytics/products" passHref>
							<a>
								<NavigationSubNavigationItem>Products</NavigationSubNavigationItem>
							</a>
						</Link>
						<NavigationSubNavigationItem isActive={ true }>Vendors</NavigationSubNavigationItem>
					</NavigationSubNavigationContainer>
				</NavigationContainerParent>
				<Title>Vendor Analytics</Title>
				<AnalyticsContainerFull>
					<SplitView center={ true }>
						<AnalyticsTitle>Vendors</AnalyticsTitle>
						<AnalyticsSubTitle>{ analytics_vendors_count }</AnalyticsSubTitle>
					</SplitView>
					<AnalyticsBucketContainer>
						{

							analytics_vendors !== null && analytics_vendors.map( ( value, index ) => {

								return(
									<AnalyticsBucketItem center={ true } key={ "analytics-vendor-"+index }>
										<AnalyticsBucket widthDynamic={ ( value.count/ max ) * 80 }><div>{ value.vendor }</div></AnalyticsBucket>
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

		analytics_vendors,
		analytics_vendors_count,

	} = state.variables

	return{

		analytics_vendors,
		analytics_vendors_count,

	}

}

const mapActionsToProps = {

	vendorAnalytics,

}

export default connect( mapStateToProps, mapActionsToProps )( AnalyticsVendors )
