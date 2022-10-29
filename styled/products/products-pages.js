import styled from "styled-components"

export const ProductsPagesContainer = styled.div`

	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 20px;
	margin-top: 20px;

`
export const ProductsPageIndex = styled.div`

	color: #777;
	cursor: pointer;
	font-size: 12px;
	padding: 0 5px;
	${

		props => props.isActive && `

			color: #222226;

		`

	}

`
