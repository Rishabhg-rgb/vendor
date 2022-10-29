import Link from "next/link"
import { format } from "date-fns"

// IMPORT STYLED COMPONENTS
const {

	FooterContainer

} = require("../../styled/footer")
const {

	AlignItem,
	AlignView,
	Anchor,
	Container,
	SplitView,

} = require("../../styled/common")


// FETCH VERSION
const { version } = require("../../package.json")

const Footer = () => {

	return(

		<FooterContainer>
			<Container>
				<SplitView>
					<AlignView>
						<AlignItem>
							<div>Shophree &copy; { format(new Date(), "Y") }</div>
						</AlignItem>
					</AlignView>
					<AlignView>
						<Link href="/version" passHref>
							<a>
								<div>Version { version }</div>
							</a>
						</Link>
					</AlignView>
				</SplitView>
			</Container>
		</FooterContainer>

	)

}

export default Footer
