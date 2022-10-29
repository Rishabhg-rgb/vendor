import Head from "next/head"

const HeadMeta = ( props ) => {

	const {

		title

	} = props

	return(

		<Head>
    		<title>{ title }</title>
    		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
    		<meta name="robots" content="index, follow" />
			<meta name="title" content={ title } />
			<meta name="description" content={ title } />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="" />
			<meta property="og:title" content={ title } />
			<meta property="og:description" content={ title } />
			<meta property="og:image" content={ title } />
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="" />
			<meta property="twitter:title" content={ title } />
			<meta property="twitter:description" content={ title } />
			<meta property="twitter:image" content={ title } />
  		</Head>

	)

}

export default HeadMeta
