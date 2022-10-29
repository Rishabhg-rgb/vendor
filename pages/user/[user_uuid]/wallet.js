import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { connect } from "react-redux"

import Select from "react-select"

// IMPORT COMPONENTS
import Footer from "../../../components/footer"
import Header from "../../../components/header"
import Navigation from "../../../components/navigation"
import UsersTable from "../../../components/users"

// IMPORT IMAGE/S
import close from "../../../assets/close.png"

// STYLED COMPONENTS
const {

	AlignView,
	ContainerMain,
	ContainerSideBar,
	Cursor,
	Heading,
	SplitView,
	SubHeading,
	UpdateButton,

} = require("../../../styled/common")

const {

	InputLabel,
	TextInput,

} = require("../../../styled/input")

const {

	UserInformation

} = require("../../../styled/user")


// ACTIONS
const {

	addAmountToWallet,
	usersFetch,

} = require("../../../actions")

const checkUserRole = ( role ) => {

	if( role === 99 )
		return({

			label: "Root",
            value: role,

		})
	if( role === 98 )
		return({

			label: "Administrator",
            value: role,

		})
	if( role === 0 )
		return({

			label: "User",
            value: role,

		})

}

// MAIN COMPONENT
const User = ({

	user_role,
	users_array,

	addAmountToWallet,
	usersFetch,

	}) => {

	const router = useRouter()
  	const user_uuid = router.query.user_uuid

	React.useEffect( () => {

		usersFetch()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	React.useEffect( () => {

		if( users_array !== null && users_array.length > 0 ){

			users_array.map( ( value, index ) => {

				if( value.uuid === user_uuid ){

					updateState({

						...state,
						user_uuid: user_uuid,

					})
				}
				return true

			})
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ users_array, user_uuid ])

	const [ state, updateState ] = React.useState({

		user_uuid: null,
		wallet_amount: "",

	})

    const addAmountToWalletButton = (e) => {

    	e.preventDefault()
    	console.log( state )
    	addAmountToWallet( state )

    }
    const updateValue = (event) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }

	return(

		<>
			<Head>
        		<title>User Update | Chota Paisa</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<meta name="robots" content="index, follow" />
				<meta name="title" content="User Update | Chota Paisa" />
				<meta name="description" content="User Update | Chota Paisa" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="" />
				<meta property="og:title" content="User Update | Chota Paisa" />
				<meta property="og:description" content="User Update | Chota Paisa" />
				<meta property="og:image" content="User Update | Chota Paisa" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="" />
				<meta property="twitter:title" content="User Update | Chota Paisa" />
				<meta property="twitter:description" content="User Update | Chota Paisa" />
				<meta property="twitter:image" content="User Update | Chota Paisa" />
      		</Head>
      		<AlignView>
	      		<Navigation />
	      		<ContainerMain hasSidebar={ true }>
		      		<UsersTable
		      			data={ users_array }
		      			highlightedUUID={ user_uuid }
		      			userRole={ user_role }
		      		/>
	      		</ContainerMain>
	      		<ContainerSideBar>
	      			<SplitView>
		      			<SubHeading>Add Amount</SubHeading>
		      			<Link href={ "/users" } passHref>
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
	      			<InputLabel marginTop={ 10 }>Amount</InputLabel>
	      			<TextInput placeholder="amount to be added to wallet" onChange={ (event) => updateValue(event) } name="wallet_amount" />
	                <UpdateButton onClick={ (e) => addAmountToWalletButton(e) }>Update</UpdateButton>
	      		</ContainerSideBar>
	      	</AlignView>
		</>
	
	)

}

const mapStateToProps = ( state ) => {

	const {

		user_role,
		users_array

	} = state.variables
	return{

		user_role,
		users_array,

	}

}

const mapActionsToProps = {

	addAmountToWallet,
	usersFetch,

}

export default connect( mapStateToProps, mapActionsToProps )( User )
