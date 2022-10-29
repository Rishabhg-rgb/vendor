import React from "react"
import { connect } from "react-redux"

const Notification = ({

	notification,
	notification_flag

	}) => {

	const [ display, updateDisplay ] = React.useState( false )

	// HIDE NOTIFICATION AFTER 5 SECONDS
	React.useEffect(() => {

		if( !notification_flag && display ){

			setTimeout( () => {

				updateDisplay( false )

			}, 5000 )

		}
		if( notification_flag )
			updateDisplay( true )

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[ notification_flag ])

	if( display )
		return(

			<div className="text-sm bg-primary fixed top-5 right-5 px-5 py-2.5 rounded text-slate-100 z-10 border border-slate-50">{ notification }</div>

		)
	return(

		<div/>

	)

}

const mapStateToProps = ( state ) => {

	const {

		notification,
		notification_flag,

	} = state.variables

	return{

		notification,
		notification_flag

	}

}

export default connect( mapStateToProps )( Notification )
