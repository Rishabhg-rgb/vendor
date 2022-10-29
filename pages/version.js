import Head from "next/head"

// IMPORT COMPONENTS
import Footer from "../components/footer"
import Header from "../components/header"

const {

	Container,
	Heading,
	Paragraph,
	SubHeading,
	DateContainer,

} = require("../styled/common")

const Version = () => {

	return(

		<>
			<Head>
        		<title>Version | Shophree</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
        		<meta name="robots" content="index, follow" />
				<meta name="title" content="Version | Shophree" />
				<meta name="description" content="Version | Shophree" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="" />
				<meta property="og:title" content="Version | Shophree" />
				<meta property="og:description" content="Version | Shophree" />
				<meta property="og:image" content="Version | Shophree" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="" />
				<meta property="twitter:title" content="Version | Shophree" />
				<meta property="twitter:description" content="Version | Shophree" />
				<meta property="twitter:image" content="Version | Shophree" />
      		</Head>
			<Header displayLoginButton={ true }/>
				<Container>
					<Heading marginTop={ 20 }>Versions</Heading>
					<>
						<SubHeading>v0.6.0</SubHeading>
						<DateContainer>March 21th, 2022</DateContainer>
						<ul>
							<li>Wallet.</li>
						</ul>
					</>
					<>
						<SubHeading>v0.5.0</SubHeading>
						<DateContainer>March 8th, 2022</DateContainer>
						<ul>
							<li>Products list.</li>
						</ul>
					</>
					<>
						<SubHeading>v0.4.0</SubHeading>
						<DateContainer>March 7th, 2022</DateContainer>
						<ul>
							<li>Vendor add, patch, get.</li>
							<li>Product Images upload.</li>
						</ul>
					</>
					<>
						<SubHeading>v0.3.0</SubHeading>
						<DateContainer>March 5th, 2022</DateContainer>
						<ul>
							<li>Category add, patch, get.</li>
							<li>Sub category add, patch, get.</li>
							<li>Sub sub category add, patch, get.</li>
						</ul>
					</>
					<>
						<SubHeading>v0.2.0</SubHeading>
						<DateContainer>February 28th, 2022</DateContainer>
						<ul>
							<li>Login.</li>
						</ul>
					</>
					<>
						<SubHeading>v0.1.0</SubHeading>
						<DateContainer>February 28th, 2022</DateContainer>
						<ul>
							<li>Project init.</li>
						</ul>
					</>
				</Container>
			<Footer />
		</>
	
	)

}

export default Version
