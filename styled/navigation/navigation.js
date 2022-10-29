import styled from "styled-components"

export const NavigationContainer = styled.div`
	
	position: relative;
	width: 300px;
	padding-bottom: 5px;

`

export const NavigationCurrentLocation = styled.div`
	
	align-items: center;
	background-color: #fff;
	border-radius: 20px;
	cursor: pointer;
	display: flex;
	font-size: 16px;
	padding: 15px 20px;
	user-select: none;
	width: 300px;

`

export const NavigationCurrentLocationImage = styled.div`
	
	height: 20px;
	margin-right: 20px;
	width: 20px;
	
`

export const NavigationExpand = styled.div`

	background-color: #fff;
	border-radius: 4px;
	border: 1px solid #dedede;
	box-shadow: 1px 1px 4px #eee;
	margin-top: 5px;
	padding: 20px;
	position: absolute;
	width: 300px;
	z-index: 1;
	&:after {

		background: #fff;
		box-shadow: -2px -2px 2px -1px rgba(0,0,0,.15);
		content: "";
		height: 16px;
		position: absolute;
		right: 10%;
		top: 0;
		transform: translate(-50%,-50%) rotate(45deg);
		width: 16px;

	}


`
export const NavigationItemText = styled.div`

	background-color: #eee;
	cursor: pointer;
	margin-top: 10px;
	padding: 10px 30px;
	user-select: none;
	margin-left: 12.5px;
	width: 100%;
	color: #777;
	&:hover {

		color: #222226;

	}
	${

		props => props.isActive && `

			color: #222226;

		`

	}

`
export const NavigationItem = styled.div`
	
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;

`

export const NavigationItemImage = styled.div`

	position: absolute;
	top: 15px;

`

export const NavigationContainerParent = styled.div`

	display: flex;
	flex-direction: row;
	margin: 20px 0;

`
export const NavigationSubNavigationContainer = styled.div`

	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 30px;
	border-bottom: 1px solid #dedede;

`

export const NavigationSubNavigationItem = styled.div`

	font-size: 16px;
	color: #777;
	margin-right: 30px;
	cursor: pointer;
	${

		props => props.isActive && `

			color: #222226;
			font-weight: 500;

		`

	}

`