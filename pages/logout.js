import React from "react"
import { connect } from "react-redux"
import {
    
    logout

} from "../actions"

const Logout = ({

    logout

    }) => {

    React.useEffect( () => {

        logout()

    })
    return (
        
        <div />

    )

}

const mapActionsToProps = {

    logout

}

export default connect( null, mapActionsToProps )( Logout )
