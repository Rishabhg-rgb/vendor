import styled from "styled-components"

export const ProductContainer = styled.div`

	padding: 20px 0;
	border-bottom: 1px solid #dedede;
	cursor: pointer;
	user-select: none;
	${

		props => props.isLast && `

			border-bottom: unset;
			padding-bottom: unset;

		`

	}

`

export const ProductName = styled.div`
	
	color: #222226;
	font-size: 14px;

`

export const ProductVendorName = styled.div`
	
	color: #777;
	font-size: 12px;
	text-transform: uppercase;

`

export const ProductPriceContainer = styled.div`

	display: flex;
	flex-direction: row;

`
export const ProductPrice = styled.div`

	font-size: 12px;
	color: #555;
	${

		props => props.marginRight && `

			margin-right: 10px;

		`

	}
	${

		props => props.strike && `

			text-decoration: line-through;

		`

	}

`
export const ProductImageContainer = styled.div`
	
	display: flex;
	flex-direction: row;
	margin-top: 20px;

`

export const ProductImageView = styled.div`
	
	background-color: #dedede;
	display: block;
	height: 200px;
	margin-right: 20px;
	margin-top: 10px;
	position: relative;
	width: 200px;

`
