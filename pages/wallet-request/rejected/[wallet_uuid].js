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

	walletGETRejected,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,

} = require("../../../actions")

const WalletAcceptRequests = ({

	wallet_rejected_requests,
	wallet_request_data,

	walletGETRejected,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,
	
	}) => {

	// FETCH VENDOR UUID FROM URL
	const router = useRouter()
  	const wallet_uuid = router.query.wallet_uuid

	React.useEffect(() => {

		if( wallet_rejected_requests === null ){

			walletGETRejected()

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ wallet_rejected_requests ])

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
				title = "Wallet Rejected Requests | Shophree"
			/>
			<AlignView>
				<Navigation />
				<ContainerMain hasSidebar={ true }>	
		      		<WalletTable
		      			title="Wallet Rejected Requests"
		      			textLoading="fetching rejected requests..."
		      			textNoData="no rejected requests."
		      			data={ wallet_rejected_requests }
		      			allowAdd={ true }
		      			tableLink={ "rejected" }
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

		wallet_rejected_requests,
		wallet_request_data,

	} = state.variables
	return{

		wallet_rejected_requests,
		wallet_request_data,

	}

}

const mapActionsToProps = {

	walletGETRejected,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,

}

export default connect( mapStateToProps, mapActionsToProps )( WalletAcceptRequests )
