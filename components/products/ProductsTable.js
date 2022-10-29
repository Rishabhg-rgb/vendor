import React from "react"
import Link from "next/link"
import Image from "next/image"

// IMPORT IMAGE/S
import edit from "../../assets/edit.png"

// STYLED COMPONENTS
const {

	Heading,
	AlignView,

} = require("../../styled/common")

const {

	AddButton

} = require("../../styled/input")

// MAIN COMPONENT
const ProductsTable = ( props ) => {

	const {

		allowAdd,
		data,
		highlightedUUID,
		title,

	} = props

	if( typeof data !== "undefined" && data !== null ){

		const table = []
		data.map((value,index) => {

			table.push(
				<tr key={ "vendor-"+value.uuid } className={ highlightedUUID === value.uuid ? "row-highlight" : "" }>
					<td>{ value.title }</td>
					<td>₹{ value.full_price }</td>
					<td>₹{ value.price }</td>
					<td>{ value.off_percentage }%</td>
					<td>{ value.views }</td>
					<td>{ value._category.name }</td>
					<td>{ value._sub_category.name }</td>
					<td>{ value._sub_sub_category.name }</td>
					<td>{ value._vendor.name }</td>
					<Link href={ "/product/" + value.uuid } passHref>
						<td className="cursor">
							<Image
			        			src={ edit }
			        			alt="edit icon"
			        			width={ 15 }
			        			height={ 15 }
			        		/>
						</td>
					</Link>
				</tr>
			)

		})

		return(
			<>
				<AlignView>
					<Heading>{ title }</Heading>
					{
						allowAdd &&
						<Link href="/product/add" passHref>
							<AddButton>add</AddButton>
						</Link>
					}
				</AlignView>
				<table>
					<thead>
						<tr>
							<td>Title</td>
							<td>Full Price</td>
							<td>Price</td>
							<td>Off</td>
							<td>Views</td>
							<td>Category</td>
							<td>Sub Category</td>
							<td>Sub Sub Category</td>
							<td>Vendor</td>
							<td>Update</td>
						</tr>
					</thead>
					<tbody>
					{

						table

					}
					</tbody>
				</table>
			</>

		)

	}
	if( typeof data !== "undefined" && data === null )
		return(
			<>
				<Heading>{ title }</Heading>
				<div>fetching products..</div>
			</>

		)

	if( typeof data === "undefined" || data.length === 0 )
		return(

			<div>
				<AlignView>
					<Heading>{ title }</Heading>
					{
						allowAdd &&
						<Link href="/product/add" passHref>
							<AddButton>add</AddButton>
						</Link>
					}
				</AlignView>
				<div>no products found</div>
			</div>

		)

}

export default ProductsTable
