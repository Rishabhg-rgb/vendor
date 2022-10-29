import React from "react"
import Link from "next/link"
import Image from "next/image"

// IMPORT IMAGE/S
import edit from "../../assets/edit.png"

// STYLED COMPONENTS
const {

	Heading,
	SplitView,

} = require("../../styled/common")

const {

	AddButton

} = require("../../styled/input")

// MAIN COMPONENT
const CategoriesTable = ( props ) => {

	const {

		data,
		categoryUUID,
		allowAdd,

	} = props

	if( data !== null && data.length > 0 ){

		const table = []
		data.map((value,index) => {

			table.push(

				<tr key={ "user-"+value.uuid } className={ categoryUUID === value.uuid ? "row-highlight" : "" }>
					<td>{ value.name }</td>
					<Link href={ "/category/" + value.uuid } passHref>
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
				<SplitView>
					<Heading>Categories</Heading>
				</SplitView>
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Update</td>
						</tr>
					</thead>
					<tbody>
						{ table }
					</tbody>
				</table>
			</>

		)

	}
	if( data === null )
		return(

			<div>fetching catgeories..</div>

		)

	if( data.length === 0 )
		return(
			<>
				<Heading>Categories</Heading>
				<div>no catgeories found</div>
			</>

		)

}

export default CategoriesTable
