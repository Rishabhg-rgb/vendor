import React from "react"

import { useRouter } from "next/router"

import ProductItem from "./ProductItem"
import { XIcon } from "@heroicons/react/solid"

const ProductsList = ( props ) => {

	const router = useRouter()
  	const page_id = router.query.page_id

	const {

		vendor_uuid,
		productsData,
		products_search_array,

		productsSearchByVendor,
		changeVariable,

	} = props

	const [ state, updateState ] = React.useState({

		search_product: "",
		search: false,

	})

	React.useEffect( () => {

		if( state.search_product.length >= 3 ){

			productsSearchByVendor( vendor_uuid, state.search_product )
			updateState({

				...state,
				search: true

			})

			changeVariable("product_search_flag", true )

		}

	}, [ state.search_product ] )

	const clearSearch = () => {

		changeVariable("product_search_flag", false )
		updateState({

			...state,
			search_product: "",
			search: false,

		})

	}

	return(

		<div className="bg-white rounded border border-slate-300 p-5 shadow">
			<div className="flex justify-between">
				<div className="text-black text-xl font-bold">Products</div>
				{

					typeof page_id === "undefined" &&
					<div className="relative">
						<input
							className="rounded border border-slate-300 text-sm"
							placeholder="search product.."
							type="text"
							value={ state.search_product }
							onChange={ ( event ) => updateState({ ...state, search_product : event.target.value })}
						/>
						{

							state.search &&
							<XIcon
								className="w-5 h-5 absolute right-2.5 top-2.5 cursor-pointer"
								onClick={ () => clearSearch() }
							/>

						}
					</div>

				}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2.5 mt-2.5 px-5 md:px-0">
			{
				!state.search && productsData !== null && productsData.map( ( value, index ) => {

					return(

						<ProductItem
							productData={ value }
							isLast={ index === productsData.length - 1 }
							key={ "product-item-" +index }
							pageID={ page_id }
						/>

					)

				})

			}
			{
				state.search && products_search_array !== null && products_search_array.map( ( value, index ) => {

					return(

						<ProductItem
							productData={ value }
							isLast={ 0 }
							key={ "product-item-" +index }
							pageID={ 0 }
						/>

					)

				})

			}
			</div>
			{
				// productsData !== null &&
				// <div className="px-5 md:p-0 mt-2.5">
				// 	<table>
				// 		<thead className="bg-slate-700">
				// 			<tr>
				// 				<th className="text-sm">
				// 					Title
				// 				</th>
				// 				<th className="text-sm">
				// 					Full Price
				// 				</th>
				// 				<th className="text-sm">
				// 					Price
				// 				</th>
				// 				<th className="text-sm">
				// 					Off Percentage
				// 				</th>
				// 				<th className="text-sm">
				// 					SKU
				// 				</th>
				// 				<th className="text-sm">
				// 					Stock
				// 				</th>
				// 				<th className="text-sm">
				// 					Select
				// 				</th>
				// 			</tr>
				// 		</thead>
				// 		<tbody>
				// 			{

				// 				productsData.map( ( value, index ) => {

				// 					return(

				// 						<tr key={ "rate-"+value.uuid }>
				// 							<td className="text-sm">{ value.title }</td>
				// 							<td className="text-sm">{ value.full_price }</td>
				// 							<td className="text-sm">{ value.price }</td>
				// 							<td className="text-sm">{ value.off_percentage }%</td>
				// 							<td className="text-sm">{ value.sku }</td>
				// 							<td className="text-sm">{ value.stock_available }</td>
				// 							<td className="text-sm">
				// 								<div className="underline cursor-pointer" onClick={ () => updateMealPlan( value ) }>update</div>
				// 							</td>
				// 						</tr>
				// 					)

				// 				})

				// 			}
				// 		</tbody>
				// 	</table>
				// </div>
			}
		</div>

	)

}

export default ProductsList
