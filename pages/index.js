import React from "react"
import Head from "next/head"
import { connect } from "react-redux"

// IMPORT COMPONENTS
import Footer from "../components/footer"
import Header from "../components/header"

const {

	Container,
	ContainerAdjustableHeight,
	ContainerHalf,
	ErrorMessage,
	Heading,
	LinkUnderline,
	LoginButton,
	LoginInputContainer,
	SplitView,

} = require("../styled/common")

const {

	login,
	changeVariable,

} = require("../actions")

const RenderError = ( props ) => {
	
	const {

		errorFlag,
		errorMessage,

	} = props
	if( errorFlag )
		return(
			<ErrorMessage>{ errorMessage }</ErrorMessage>
		)
	return(
		<div />
	)

}
const Home = ({

	error,
	error_message,

	changeVariable,
	login

	}) => {

	React.useEffect(() => {

		return () => {
			
			changeVariable( "error", false )
			changeVariable( "error_message", "" )

		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	const [ state, updateState ] = React.useState({

		email: "",
		password: "",

	})
	const updateValue = (event) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }
    const loginButton = (e) => {

		e.preventDefault()
		login( state )

	}

	return(

		<div className="bg-background">
			<Head>
        		<title>Login | Shophree</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<meta name="robots" content="index, follow" />
				<meta name="title" content="Login | Shophree" />
				<meta name="description" content="Login | Shophree" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="Login | Shophree" />
				<meta property="og:title" content="Login | Shophree" />
				<meta property="og:description" content="Login | Shophree" />
				<meta property="og:image" content="Login | Shophree" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="Login | Shophree" />
				<meta property="twitter:title" content="Login | Shophree" />
				<meta property="twitter:description" content="Login | Shophree" />
				<meta property="twitter:image" content="Login | Shophree" />
      		</Head>
			<Header
				displayLoginButton={ false }
			/>
			<Container>
				<ContainerAdjustableHeight>
					<SplitView>
						<ContainerHalf />
			    		<ContainerHalf alignCenter={ true }>
			    			<Heading>Log into Shophree</Heading>
			    			<form>
			        			<LoginInputContainer placeholder="Email" onChange={ (event) => updateValue(event) } name="email"/>
			        			<LoginInputContainer placeholder="password" type="password" onChange={ (event) => updateValue(event) } name="password"/>
			        			<LoginButton onClick={ (e) => loginButton(e) }>Login</LoginButton>
			        		</form>
			        		<RenderError
			        			errorFlag={ error }
			        			errorMessage={ error_message }
		        			/>
			    		</ContainerHalf>
			    	</SplitView>
		    	</ContainerAdjustableHeight>
	    	</Container>
			<Footer/>
		</div>
	
	)

}

const mapStateToProps = ( state ) => {

	const {

		error,
		error_message,

	} = state.variables
	return{

		error,
		error_message,

	}

}

const mapActionsToProps = {

	changeVariable,
	login,

}

export default connect( mapStateToProps, mapActionsToProps )( Home )
