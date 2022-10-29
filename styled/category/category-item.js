import styled from "styled-components"

export const CategoryContainer = styled.div`

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

export const CategoryName = styled.div`
	
	color: #222226;
	font-size: 14px;

`

export const CategoryID = styled.div`
	
	color: #555;
	font-size: 12px;
	margin-top: 5px;

`
