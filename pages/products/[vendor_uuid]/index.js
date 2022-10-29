import React from "react"

import Head from "next/head"
import Link from "next/link"
import dynamic from "next/dynamic"
import Router, { useRouter } from "next/router"

import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon, XIcon } from "@heroicons/react/solid"
import { connect } from "react-redux"

import {

    useDisclosure,

} from "@chakra-ui/react"

// IMPORT COMPONENTS
import Footer from "../../../components/footer"
import Header from "../../../components/header"
import HeadMeta from "../../../components/head"
import Navigation  from "../../../components/navigation-new"
import ProductsList from "../../../components/product/ProductsList"
import Notification from "../../../components/notification"
import ProductBulkUpdateModal from "../../../components/product/ProductBulkUpdateModal"

// IMPORT IMAGES
import products_icon from "../../../assets/icons/products.png"

const ProductUpdateModal = dynamic( () => import("../../../components/product/ProductUpdateModal") )

const {

	AlignView,
	ContainerMain,
	Container

} = require("../../../styled/common")

const {

	NavigationContainerParent,
	NavigationSubNavigationContainer,
	NavigationSubNavigationItem,

} = require("../../../styled/navigation")

const {

	VendorName,
	VendorsNameContainer

} = require("../../../styled/vendor")

const {

	ProductsPagesContainer,
	ProductsPageIndex

} = require("../../../styled/products")

const {

	bulkUpdateProductsUpload,
	productsFetchByVendor,
	vendorsFetch,
	productsSearchByVendor,
	changeVariable,

} = require("../../../actions")

const RenderPages = ( props ) => {

	const {

		product_search_flag,
		productsPages,
		vendorUUID,

	} = props
	var response = []
	for( var i = 1; i <= productsPages; i++ ){

		response.push(

			<Link href={ "/products/" + vendorUUID + "/"+ i } passHref key={ "pages-key-"+ i }>
				<ProductsPageIndex isActive={ i === 1 ? true : false }>{ i }</ProductsPageIndex>
			</Link>

		)

	}

	if( !product_search_flag )
		return(

			<ProductsPagesContainer>
				{ response }
			</ProductsPagesContainer>

		)
	return (
		
		<div className="mb-5"/>

	)

}

const ProductsVendor = ({

	product_search_flag,
	products_array,
	products_pages,
	products_search_array,
	vendors_array,

	productsFetchByVendor,
	vendorsFetch,

	bulkUpdateProductsUpload,
	productsSearchByVendor,
	changeVariable,

	}) => {

	const router = useRouter()
  	const vendor_uuid = router.query.vendor_uuid

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [ state, updateState ] = React.useState({

		file: [],
		vendor_name: "",

	})
	React.useEffect( () => {

		if( vendors_array === null )
			vendorsFetch()
		else if( vendors_array !== null && vendors_array.length > 0 ){

			vendors_array.map( ( value, index ) => {

				if( value.uuid === vendor_uuid ){

					updateState({

						...state,
						vendor_name: value.name

					})

				}

			})
		}

	}, [ products_array, vendors_array ])

	React.useEffect( () => {

		productsFetchByVendor( vendor_uuid, 1 )

	}, [ vendor_uuid ])

	const clearVariables = () => {

		// console.log("clear variables")

	}

	const changeVendor = ( vendor ) => {

		Router.push("/products/" + vendor.uuid )
		updateState({

			...state,
			vendor_name: vendor.name

		})

	}

	return(

		<div className="bg-background">
			<HeadMeta
				title = "Products | Shophree"
			/>
			<Header/>
			<div className="container mx-auto px-5">
				{/* <NavigationContainerParent>
					<Navigation
						activeTab="Products"
						activeTabIcon={ products_icon }
					/>
					<NavigationSubNavigationContainer>
						<NavigationSubNavigationItem isActive={ true }>Overview</NavigationSubNavigationItem>
						<NavigationSubNavigationItem>Search</NavigationSubNavigationItem>
						<NavigationSubNavigationItem>Add New</NavigationSubNavigationItem>
						<div className="cursor-pointer" onClick={ () => onOpen() }>Bulk Update</div>
					</NavigationSubNavigationContainer>
				</NavigationContainerParent> */}
				<div className="flex justify-between">
					{/* <h1 className="text-2xl text-slate-900 font-semibold">Products</h1> */}
					{/* <Listbox onChange={ ( vendor ) => changeVendor( vendor ) } className="w-96">
						<div className="relative mt-1 w-96">
							<Listbox.Button className="relative w-96 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
								<span className="block truncate">{ state.vendor_name === "" ? "Select Vendor" : state.vendor_name }</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
									<SelectorIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</span>
							</Listbox.Button>
							<Transition
								as={ React.Fragment }
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Listbox.Options className="absolute mt-1 max-h-48 w-96 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20">
								{

									vendors_array !== null && vendors_array.length > 0 && vendors_array.map(( value, index ) => (
										<Listbox.Option
											key={index}
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
												}`
											}
											value={ value }
										>
											{({ selected }) => (
												<>
													<span
														className={`block truncate ${
															selected ? 'font-medium' : 'font-normal'
														}`}
													>
														{ value.name }
													</span>
													{selected ? (
														<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
															<CheckIcon className="h-5 w-5" aria-hidden="true" />
														</span>
													) : null}
												</>
											)}
										</Listbox.Option>
								))}
								</Listbox.Options>
							</Transition>
						</div>
					</Listbox> */}
				</div>
				{/* <VendorsNameContainer>
				{


					false && vendors_array !== null && vendors_array.length > 0 && vendors_array.map( ( value,index ) => {

						return(

							<Link href={ "/products/"+ value.uuid } passHref key={ "vendors-" + index }>
								<a>
									<VendorName>{ value.name }</VendorName>
								</a>
							</Link>

						)

					})

				}
				</VendorsNameContainer> */}
				<ProductsList
	      			productsData={ products_array }
					productsSearchByVendor={ productsSearchByVendor }
					vendor_uuid={ vendor_uuid }
					products_search_array={ products_search_array }
					changeVariable={ changeVariable }
	      		/>
	      		<RenderPages
	      			productsPages={ products_pages }
	      			vendorUUID={ vendor_uuid }
					product_search_flag={ product_search_flag }
	      		/>
			</div>
			<ProductUpdateModal />
			<Notification />
			<ProductBulkUpdateModal
				state={ state }
				isOpen={ isOpen }
				onClose={ onClose }
				onOpen={ onOpen }
				is_processing={ false }
				clearVariables={ clearVariables }
				bulkUpdateProductsUpload={ bulkUpdateProductsUpload }
			/>
		</div>
	
	)

}

const mapStateToProps = ( state ) => {

	const {

		product_search_flag,
		products_array,
		products_pages,
		products_search_array,
		vendors_array,

	} = state.variables

	return{

		product_search_flag,
		products_array,
		products_pages,
		products_search_array,
		vendors_array,

	}

}

const mapActionsToProps = {

	bulkUpdateProductsUpload,
	changeVariable,
	productsFetchByVendor,
	productsSearchByVendor,
	vendorsFetch,

}

export default connect( mapStateToProps, mapActionsToProps )( ProductsVendor )
