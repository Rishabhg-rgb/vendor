import styled from "styled-components"

export const AlignItem = styled.div`

	margin-right: 10px;

`
export const AlignView = styled.div`

	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ${

    	props => props.center && `

			align-items: center;

    	`
    	
    }

`
export const Anchor = styled.a`

	color: #222226;
	cursor: pointer;
	text-decoration: underline;

`
export const Container = styled.div`

	margin: 0 auto;
	position: relative;
	width: 900px;
	@media screen and (max-width: 900px) {

    	width: 100%;

  	}

`

export const ContainerHalf = styled.div`
	
	display: flex;
	flex-direction: column;
	width: 50%;
	${

		props => props.alignCenter && `

			height: calc(100vh - 151px);
			justify-content: center;

		`

	}

`

export const ContainerAdjustableHeight = styled.div`

	min-height: 500px;
	height: calc( 100vh - 151px );
	display: flex;
	flex-direction: row;
	width: 100%;

`

export const ContainerMain = styled.div`

	height: 100vh;
	width: 80vw;
	background-color: #dedede;
	padding: 20px;
	overflow-y: scroll;
	${

		props => props.hasSidebar && `

			width: 55vw;

		`
	}

`

export const ContainerSideBar = styled.div`

	height: 100vh;
	width: 25vw;
	background-color: #dedede;
	padding: 20px;
	box-shadow: inset .5px 0 0px #222226;

`

export const ErrorMessage = styled.div`
	
	font-size: 12px;
	font-style: italic;
	margin-top: 10px;
`
export const Heading = styled.h2`

	color: #222226;
	margin: unset;
	margin-bottom: 10px;
	margin-right: 10px;
	${

		props => props.marginTop && `

			margin-top: ${ props.marginTop }px;

		`
		
	}

`
export const SubHeading = styled.h4`
	
	color: #222226;
	margin: unset;
	margin-bottom: 10px;
	${

		props => props.marginTop && `

			margin-top: ${ props.marginTop }px;

		`
		
	}

`

export const DateContainer = styled.div`
	
	color: #222226;
	font-size: 12px;
	font-weight: 400;

`

export const Paragraph = styled.p`

	color: #222226;

`
export const SplitView = styled.div`

	display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    ${

    	props => props.marginTop && `


    		margin-top: ${ props.marginTop };

    	`

    }
    ${

    	props => props.center && `

			align-items: center;

    	`
    	
    }

`

export const TextInput = styled.input`
	
    border-radius: 4px;
    border: 1px solid rgb(0, 0, 0);
    color: rgb(34, 34, 38);
    font-size: 13px;
    margin-top: 20px;
    outline: none;
    padding: 15px;
    width: 300px;
    
`

export const LoginInputContainer = styled.input`
	
	background: '#fff';
	border-radius: 4px;
	border: 1px solid #dedede;
	font-size: 13px;
	margin-top: 20px;
	outline: none;
	width: 100%;
    color: #222226;
    padding: 15px;
    &:focus {

    	border: 1px solid #222226;

  	}
    &:hover {

    	border: 1px solid #222226;

  	}
  	${

  		props => props.marginTop === false && `

  			margin-top: unset;

  		`
  	}

`
export const LoginInputAreaContainer = styled.textarea`

	background: '#fff';
	border-radius: 4px;
	border: 1px solid #dedede;
	font-size: 13px;
	margin-top: 20px;
	outline: none;
	width: 100%;
    color: #222226;
    font-family: "Inter","Helvetica Neue",Helvetica,Arial,sans-serif;
    height: 120px;
    padding: 15px;
    resize: none;
    &:focus {

    	border: 1px solid #222226;

  	}
    &:hover {

    	border: 1px solid #222226;

  	}
  	${

  		props => props.marginTop === false && `

  			margin-top: unset;

  		`
  	}
	
`

export const LoginButton = styled.button`
	
	background: #444444;
    border-radius: 5px;
    border: none;
    color: #E5E5E5;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    padding: 15px;
    text-align: center;
    width: 100%;
    &:hover {

    	background: #222226;

    }

`

export const UpdateButton = styled.button`
	
	background: #444444;
    border-radius: 5px;
    border: none;
    color: #E5E5E5;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    padding: 15px;
    text-align: center;
    width: 100%;
    &:hover {

    	background: #222226;

    }
    
`

export const Underline = styled.div`

	text-decoration: underline;

`

export const Cursor = styled.div`

	cursor: pointer;

`

export const Title = styled.h2`

    margin: 0;
    ${

        props => props.noMarginBottom && `

            margin-bottom: unset;

        `

    }
    ${

        props => props.marginTop && `

            margin-top: ${ props.marginTop }px;

        `

    }

`

export const H4 = styled.h4`
	
	margin: unset;
	
`