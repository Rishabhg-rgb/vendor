import styled from "styled-components"

export const ModalContainer = styled.div`
	
	align-items: center;
	background-color: rgba( 255,255,255, 0.7 );
	display: flex;
	height: 100vh;
	justify-content: center;
	left: 0;
	position: fixed;
	top: 0;
	width: 100vw;

`

export const ModalView = styled.div`
	
	background: #fff;
	height: 90vh;
	padding: 20px;
	position: relative;
	width: 90vw;
	border: 1px solid #dedede;
	border-radius: 4px;
	overflow-y: scroll;

`
export const ModalCloseIconContainer = styled.div`
	
	align-items: center;
	cursor: pointer;
	display: flex;
	height: 30px;
	justify-content: center;
	margin-right: 10px;
	width: 30px;

`

export const ProductModalDetailsByThree = styled.div`
	
	width: calc( (100% - 40px) / 3);
	margin-right: 20px;
	${
		props => props.noRight && `

			margin-right: 0px;

		`
	}

`

export const ProductModalDetailsAlign = styled.div`
	
	display: flex;
	flex-direction: row;

`