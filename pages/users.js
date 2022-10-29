import React from "react"
import Head from "next/head"
import Link from "next/link"
import { connect } from "react-redux"

// IMPORT COMPONENTS
import Footer from "../components/footer"
import Header from "../components/header"
import Navigation from "../components/navigation"
import UsersTable from "../components/users"

const {

	AlignView,
	ContainerMain,
	Heading,

} = require("../styled/common")

const {

	usersFetch

} = require("../actions")

const Users = ({

	user_role,
	users_array,

	usersFetch,

	}) => {

	React.useEffect( () => {

		usersFetch()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return(

		<>
			<Head>
        		<title>Dashboard | Chota Paisa</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<meta name="robots" content="index, follow" />
				<meta name="title" content="Dashboard | Chota Paisa" />
				<meta name="description" content="Dashboard | Chota Paisa" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="" />
				<meta property="og:title" content="Dashboard | Chota Paisa" />
				<meta property="og:description" content="Dashboard | Chota Paisa" />
				<meta property="og:image" content="Dashboard | Chota Paisa" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="" />
				<meta property="twitter:title" content="Dashboard | Chota Paisa" />
				<meta property="twitter:description" content="Dashboard | Chota Paisa" />
				<meta property="twitter:image" content="Dashboard | Chota Paisa" />
      		</Head>
      		<AlignView>
	      		<Navigation />
	      		<ContainerMain>
		      		<UsersTable
		      			data={ users_array }
		      			userRole={ user_role }
		      		/>
	      		</ContainerMain>
	      	</AlignView>
		</>
	
	)

}

const mapStateToProps = ( state ) => {

	const {

		user_role,
		users_array,

	} = state.variables
	return{

		user_role,
		users_array,

	}

}

const mapActionsToProps = {

	usersFetch

}

export default connect( mapStateToProps, mapActionsToProps )( Users )
