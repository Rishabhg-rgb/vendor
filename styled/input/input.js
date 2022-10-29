import styled from "styled-components"

export const InputLabel = styled.div`
	
	font-size: 10px;
	font-weight: 500;
	text-transform: uppercase;
	${

		props => props.marginTop && `

			margin-top: ${ props.marginTop}px;

		`
		
	}

`
export const TextInput = styled.input`
	
    border-radius: 4px;
    border: 1px solid #dedede;
    color: rgb(34, 34, 38);
    font-size: 13px;
    margin-top: 5px;
    outline: none;
    padding: 15px;
    width: 100%;
    ${

        props => props.type === "checkbox" && `

            width: unset;
            margin-top: 20px;

        `

    }
    
`
export const AddButton = styled.button`
	
	background: #dedede;
    border-radius: 5px;
    border: 1px solid #222226;
    color: #222226;
    cursor: pointer;
    font-size: 12px;
    padding: 5px 10px;
    text-align: center;
    height: 30px;
    text-transform: uppercase;
    font-weight: 700;
    &:hover {

    	background: #222226;
    	color: #fff;

    }

`
