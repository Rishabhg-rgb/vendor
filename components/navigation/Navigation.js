import React from "react"
import Link from "next/link"
import Image from "next/image"

import { connect } from "react-redux"
import io from "socket.io-client"

import Notification from "../notification"

import { can_settle_wallets } from "../../actions"

// IMPORT IMAGE/S
import arrow from "../../assets/arrow.webp"

// FETCH VERSION
const { version } = require("../../package.json")

const {

	NavigationCollapseIcon,
	NavigationContainer,
	NavigationItem,
	NavigationItems,
	NavigationSubItem,
	NavigationSubMenu,

} = require("../../styled/navigation")

const {

	SplitView,
	Underline,

} = require("../../styled/common")

const {

	logout,
	navigationFetch,
	navigationUpdate,
	userDetails,
	walletGETPendingCount,

} = require("../../actions")

const Navigation = ({

	navigation_expand,
	navigation_expand_type,
	user_name,
	user_role,
	wallet_pending_requests_count,

	logout,
	navigationFetch,
	navigationUpdate,
	userDetails,
	walletGETPendingCount,

	}) => {

	React.useEffect( () => {

		userDetails()
		navigationFetch()
		walletGETPendingCount()

	})

	// SOCKET CONNECTION
	React.useEffect( () => {

		// SOCKET CONNECTION
        const socket = io("http://localhost:3022")
        socket.on("connect", function() {

            console.log("Client is Connected");

        })
        socket.on("wallet-pending-update", msg => {

        	console.log("update wallet pending request")
            
            // FETCH WALLET PENDING COUNT
            walletGETPendingCount()
            
        })

        return () => {

        	socket.disconnect()

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	const [ expand, updateExpand ] = React.useState( false )
	const [ expand_item, updateExpandItem ] = React.useState( 0 )

	const expandMenu = ( item ) => {

		updateExpandItem( item )
		updateExpand( expand_item !== item ? true : !expand )
		const data = {

			state: expand_item !== item ? true : !expand,
			type: item,

		}
		navigationUpdate( data )

	}

	React.useEffect(() => {

		updateExpand( navigation_expand )
		updateExpandItem( navigation_expand_type )

	}, [ navigation_expand, navigation_expand_type ])

	return(

		<NavigationContainer>
			
		</NavigationContainer>

	)

}

const mapStateToProps = ( state ) => {

	const {

		navigation_expand,
		navigation_expand_type,
		projects,
		user_name,
		user_role,
		wallet_pending_requests_count,

	} = state.variables
	return{

		navigation_expand,
		navigation_expand_type,
		projects,
		user_name,
		user_role,
		wallet_pending_requests_count,

	}

}

const mapActionsToProps = {

	logout,
	navigationFetch,
	navigationUpdate,
	userDetails,
	walletGETPendingCount,

}

export default connect( mapStateToProps, mapActionsToProps )( Navigation )
