import Image from "next/image"
import Link from "next/link"

// IMPORT STYLED COMPONENTS
const {

	HeaderContainer,
	HeaderLogoContainer,
	LoginButton,

} = require("../../styled/header")
const {

	AlignView,
	Container,
	Heading,
	SplitView,

} = require("../../styled/common")

// IMPORT IMAGE/S
import logo from "../../assets/logo.webp"
import logo_text from "../../assets/logo_text.webp"

const renderLoginButton = ( display ) => {

	if( display )
		return(

			<Link href="/login" passHref>
    			<a>
    				<LoginButton>Login</LoginButton>
    			</a>
    		</Link>

		)

}

const Header = ( props ) => {

	const {

		displayLoginButton

	} = props

	return(

		<HeaderContainer>
			<div className="container mx-auto px-5">
				<Link href="/" passHref>
					<a>
						<AlignView center={ true }>
							<HeaderLogoContainer>
								<Image
									src={ logo }
									alt="logo icon"
									width={ 30 }
									height={ 50 }
									unoptimized={ true }
								/>
							</HeaderLogoContainer>
							<Image
								src={ logo_text }
								alt="logo text icon"
								width={ 120 }
								height={ 16 }
								unoptimized={ true }
							/>
						</AlignView>
					</a>
	        	</Link>
			</div>
		</HeaderContainer>

	)

}

export default Header
