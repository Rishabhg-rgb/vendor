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

	walletAcceptRequest,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,

} = require("../../../actions")

const Wallet = ({

	wallet_pending_requests,
	wallet_request_data,

	walletAcceptRequest,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,
	
	}) => {

	// FETCH VENDOR UUID FROM URL
	const router = useRouter()
  	const wallet_uuid = router.query.wallet_uuid

 //  	const [ state, updateState ] = React.useState({

	// 	wallet_request_amount: "",
	// 	wallet_request_requested_by_name: "",
	// 	wallet_request_user_name: "",
	// 	wallet_request_user_mobile: "",
	// 	wallet_request_uuid: "",

	// })

	React.useEffect(() => {

		if( wallet_pending_requests === null ){

			walletGetPending()

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ wallet_pending_requests ])

	React.useEffect(() => {

		if( typeof wallet_uuid !== "undefined" ){

			const data = {

				wallet_uuid

			}
			walletGETByUUID( data )

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ wallet_uuid ])

	// UPDATE RECORD IF DATA IS NOT EMPTY
	// React.useEffect( () => {

	// 	if( wallet_pending_requests !== null && wallet_pending_requests.length > 0 ){

	// 		wallet_pending_requests.map( ( value, index ) => {

	// 			if( value.uuid === wallet_uuid ){

	// 				updateState({

	// 					...state,
	// 					wallet_request_amount: value.amount,
	// 					wallet_request_requested_by_name: value.request_added_by.name,
	// 					wallet_request_user_name: value.user_information.name,
	// 					wallet_request_user_mobile: value.user_information.mobile,
	// 					wallet_request_uuid: wallet_uuid,

	// 				})
	// 			}
	// 			return true

	// 		})
			
	// 	}

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [ wallet_pending_requests, wallet_uuid ])


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
				title = "Wallet Pending Request | Shophree"
			/>
			<AlignView>
				<Navigation />
				<ContainerMain hasSidebar={ true }>	
		      		<WalletTable
		      			title="Wallet Pending Requests"
		      			textLoading="fetching pending requests..."
		      			textNoData="no pending requests."
		      			data={ wallet_pending_requests }
		      			allowAdd={ true }
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
	      					!wallet_request_data.is_approved &&
	      						!wallet_request_data.is_rejected &&
	      							<>
	      								<UpdateButton onClick={ (e) => walletAcceptRequestButton(e) }>Accept Request</UpdateButton>
	                					<UpdateButton onClick={ (e) => walletRejectRequestButton(e) }>Reject Request</UpdateButton>
	                				</>

	      			}
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

		wallet_pending_requests,
		wallet_request_data,

	} = state.variables
	return{

		wallet_pending_requests,
		wallet_request_data,

	}

}

const mapActionsToProps = {

	walletAcceptRequest,
	walletGETByUUID,
	walletGetPending,
	walletRejectRequest,

}

export default connect( mapStateToProps, mapActionsToProps )( Wallet )
