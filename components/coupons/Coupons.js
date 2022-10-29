import React from "react"

import CouponPatchModal from "../modal/coupon/Patch"

const CouponsList = ( props ) => {

    const {

        coupons,
        processing,
        modalFlag,
        postCoupon,

        couponPATCH,
        couponPOST,
        couponDELETE,
        changeVariable,

    } = props

    const [ state, updateState ] = React.useState({

        is_open: false,
        is_patch_open: false,
        is_post_open: false,
        data: {}

    })

    React.useEffect( () => {

        updateState({

            ...state,
            is_open: modalFlag,

        })
        

    }, [ modalFlag ])

    React.useEffect( () => {

        if( postCoupon ){

            updateState({

                ...state,
                is_post_open: postCoupon,
                is_open: true
    
            })
            // changeVariable( "modal_flag", true )

        }

    }, [ postCoupon ])

    const closeModal = ( coupon ) => {

        updateState({

            ...state,
            is_open: false,
            is_patch_open: false,
            is_post_open: false,

        })
        changeVariable( "modal_flag", false )

    }

    const openModal = ( coupon ) => {

        updateState({

            ...state,
            data: coupon,
            is_patch_open: true,

        })
        changeVariable( "modal_flag", true )

    }

    return (

        <>
            <div className="mt-2.5">
                <h1 className="font-bold text-2xl text-slate-900">Coupons</h1>
            </div>
            <div className="grid grid-cols-3 mt-2.5 gap-5">
                {
            
                    coupons.map( ( couponsValue, couponsIndex ) => {

                        return (
                            
                            <div
                                key={ "coupon-" + couponsValue.uuid }
                                className="bg-slate-100 rounded p-5 border border-slate-400 cursor-pointer"
                                onClick={ () => openModal( couponsValue ) }
                            >
                                <div className="flex justify-between">
                                    <p className="text-sm text-slate-700 font-semibold">{ couponsValue.code } </p>
                                    <p className="text-xs text-slate-500">{ couponsValue.quantity + "/" + couponsValue.total_quantity } </p>
                                </div>
                                <div className="mt-2.5">
                                <p className="text-sm text-slate-500">{ couponsValue.description } </p>
                                </div>
                            </div>

                        )

                    })
                
                }
            </div>
            <CouponPatchModal
                data={ state }
                processing={ processing }
                couponPATCH={ couponPATCH }
                couponDELETE={ couponDELETE }
                closeModal={ closeModal }
            />
        </>

    )

}

export default CouponsList
