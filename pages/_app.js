import "../styles/globals.css"
import Head from "next/head"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers" 
import thunk from "redux-thunk"
import { ChakraProvider } from "@chakra-ui/react"
import { createStandaloneToast } from "@chakra-ui/toast"

const { ToastContainer } = createStandaloneToast()

const store = createStore(reducers, applyMiddleware(thunk))

export default function MyApp({ Component, pageProps }) {

	return (

	  	<Provider store={ store }>
			<Head>
				<link rel="shortcut icon" href="/shophree-favicon.png" />
		  	</Head>
			<ChakraProvider>
		  		<Component {...pageProps} />
				<ToastContainer />
			</ChakraProvider>
	  	</Provider>

	)

}
