import styled from "styled-components"

export const ModalTabsContainer = styled.div`
	
	display: flex;
	flex-direction: row;
	margin-top: 10px;
`
export const ModalTab = styled.div`
	
	background-color: #dedede;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	margin-right: 2px;
	padding: 10px 20px;
	${

		props => props.isActive && `

			background-color: #aaa;

		`

	}

`
