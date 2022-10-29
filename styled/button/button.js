import styled from "styled-components"

export const ButtonSave = styled.div`
	
	background: #444444;
    border-radius: 5px;
    border: none;
    color: #E5E5E5;
    cursor: pointer;
    font-size: 12px;
    padding: 10px 25px;
    text-align: center;
    text-transform: uppercase;
    &:hover {

    	background: #222226;

    }
    ${

    	props => props.marginLeft && `

    		margin-left: 20px;

    	`

    }

`
