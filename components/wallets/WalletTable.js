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
const WalletTable = ( props ) => {

	const {

		allowAdd,
		data,
		highlightedUUID,
		tableLink,
		textLoading,
		textNoData,
		title,

	} = props

	if( typeof data !== "undefined" && data !== null ){

		const table = []
		data.map((value,index) => {

			table.push(
				<tr key={ "wallet-request-"+value.uuid } className={ highlightedUUID === value.uuid ? "row-highlight" : "" }>
					<td>{ index + 1 }</td>
					<td>{ value.user_information.name }</td>
					<td>{ value.user_information.mobile }</td>
					<td>₹{ value.user_information.wallet.amount }</td>
					<td>₹{ value.amount }</td>
					<td>{ value.request_added_by.name }</td>
					<Link href={ "/wallet-request/" + tableLink + "/" + value.uuid } passHref>
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
				<Heading>{ title }</Heading>
				<table>
					<thead>
						<tr>
							<td>Serial</td>
							<td>Name</td>
							<td>Mobile</td>
							<td>Wallet Balance</td>
							<td>Request Amount</td>
							<td>Requested By</td>
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
				<div>{ textLoading }</div>
			</>

		)

	if( typeof data === "undefined" || data.length === 0 )
		return(

			<div>
				<div>{ textNoData }</div>
			</div>

		)

}

export default WalletTable
