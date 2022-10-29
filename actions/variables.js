import { CHANGE_VARIABLE } from "./type"
export const production_flag = ( process.env.NEXT_PUBLIC_ENVIRONMENT_PRODUCTION ) === "true" ? true : false
export const base_url = process.env.NEXT_PUBLIC_ENVIRONMENT_ENDPOINT
export const web_url = process.env.NEXT_PUBLIC_ENVIRONMENT_ENDPOINT_WEB
export const earth_base_url = ( production_flag ) ? "https://earth.shophree.dev" : "http://localhost:3026"
export const can_view_wallets = [ 99, 98 ]
export const can_settle_wallets = [ 99 ]
export const changeVariable = (key, value) => {
	
  	return ({

    	type: CHANGE_VARIABLE,
    	payload: {

    		key,
    		value

    	}

  	})
  	
}
