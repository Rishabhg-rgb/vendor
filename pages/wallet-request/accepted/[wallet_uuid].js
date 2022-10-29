import React from "react"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { connect } from "react-redux"

import { format } from "date-fns"

// IMPORT COMPONENTS
import HeadMeta from "../../../components/head"
import Navigation from "../../../components/navigation"
import WalletTable from "../../../components/wallets/WalletTable"

// IMPORT IMAGE/S
import close from "../../../assets/close.png"

const {

	AlignView,
	ContainerMain,
	ContainerSideBar,
	SplitView,
	SubHeading,
	Cursor,
	UpdateButton,

} = require("../../../styled/common")

const {

	InputLabel,
	TextInput,

} = require("../../../styled/input")

// ACTIONS
const {

	walletGETAccepted,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,

} = require("../../../actions")

const WalletAcceptRequests = ({

	wallet_accepted_requests,
	wallet_request_data,

	walletGETAccepted,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,
	
	}) => {

	// FETCH VENDOR UUID FROM URL
	const router = useRouter()
  	const wallet_uuid = router.query.wallet_uuid

	React.useEffect(() => {

		if( wallet_accepted_requests === null ){

			walletGETAccepted()

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ wallet_accepted_requests ])

	React.useEffect(() => {

		if( typeof wallet_uuid !== "undefined" ){

			const data = {

				wallet_uuid

			}
			walletGETByUUID( data )

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ wallet_uuid ])


	const walletAcceptRequestButton = (e) => {

		e.preventDefault()
		walletAcceptRequest( state )

	}

	const walletRejectRequestButton = (e) => {

		e.preventDefault()
		walletRejectRequest( state )

	}
	return(

		<>
			<HeadMeta
				title = "Wallet Accepted Requests | Shophree"
			/>
			<AlignView>
				<Navigation />
				<ContainerMain hasSidebar={ true }>	
		      		<WalletTable
		      			title="Wallet Accepted Requests"
		      			textLoading="fetching accepted requests..."
		      			textNoData="no accepted requests."
		      			data={ wallet_accepted_requests }
		      			allowAdd={ true }
		      			tableLink={ "accepted" }
		      		/>
		      	</ContainerMain>
		      	<ContainerSideBar>
	      			<SplitView>
		      			<SubHeading>Respond Wallet Request</SubHeading>
		      			<Link href={ "/wallets" } passHref>
							<Cursor>
								<Image
				        			src={ close }
				        			alt="close icon"
				        			width={ 15 }
				        			height={ 15 }
				        		/>
				        	</Cursor>
			        	</Link>
			        </SplitView>
	      			<InputLabel marginTop={ 10 }>User Name</InputLabel>
	      			<div>{ wallet_request_data !== null ? wallet_request_data.user_information.name : "-" }</div>
	      			<InputLabel marginTop={ 10 }>User Mobile</InputLabel>
	      			<div>{ wallet_request_data !== null ? wallet_request_data.user_information.mobile : "-" }</div>
	      			<InputLabel marginTop={ 10 }>User Balance</InputLabel>
	      			<div>₹{ wallet_request_data !== null ? wallet_request_data.user_information.wallet.amount : "0" }</div>
	      			<InputLabel marginTop={ 10 }>Request Amount</InputLabel>
	      			<div>₹{ wallet_request_data !== null ? wallet_request_data.amount : "0" }</div>
	      			<InputLabel marginTop={ 10 }>Requested By</InputLabel>
	      			<div>{ wallet_request_data !== null ? wallet_request_data.request_added_by.name : "-" }</div>
	      			<InputLabel marginTop={ 10 }>Request Time</InputLabel>
	      			<div>{ format( wallet_request_data !== null ? new Date( wallet_request_data.createdAt) : new Date(), "d-MM-y hh:mm")}</div>
	      			<InputLabel marginTop={ 10 }>Update Time</InputLabel>
	      			<div>{ format( wallet_request_data !== null ? new Date( wallet_request_data.updatedAt) : new Date(), "d-MM-y hh:mm")}</div>
	      			{

	      				wallet_request_data !== null &&
	      					( wallet_request_data.is_approved ||
	      						wallet_request_data.is_rejected ) &&
	      							<>
	      								<InputLabel marginTop={ 10 }>Response</InputLabel>
	      								<div>{ wallet_request_data !== null ? wallet_request_data.is_approved ? "Accepted" : "Rejected" : "-" }</div>
	                				</>

	      			}
	      		</ContainerSideBar>
	      	</AlignView>
		</>
	
	)

}

const mapStateToProps = ( state ) => {

	const {

		wallet_accepted_requests,
		wallet_request_data,

	} = state.variables
	return{

		wallet_accepted_requests,
		wallet_request_data,

	}

}

const mapActionsToProps = {

	walletGETAccepted,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,

}

export default connect( mapStateToProps, mapActionsToProps )( WalletAcceptRequests )
