import {

    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from "@chakra-ui/react"

// X ICON
import { XIcon } from "@heroicons/react/solid"
import React from "react"

import ProcessingButton from "../../processing/Button"

const CouponPatchModal = ( props ) => {

    const {

        data,
        processing,
        couponPATCH,
        couponDELETE,

        closeModal,

    } = props

    const [ state, updateState ] = React.useState({

        code: "",
        quantity: "",
        amount: "",
        description: "",
        uuid: ""

    })

    React.useEffect( () => {

        updateState({

            code: data.data.code,
            quantity: data.data.quantity,
            amount: data.data.amount,
            description: data.data.description,
            uuid: data.data.uuid,

        })

    }, [ data ])

    const updateValue = ( event ) => {

        const variable = event.target.name
        const value = event.target.value
        updateState({ ...state, [variable]: value })

    }

    return(

        <Modal isOpen={ data.is_open && data.is_patch_open } couponPATCH={ couponPATCH }>
            <ModalOverlay />
            <ModalContent>
                <div className="p-5 bg-white border rounded border-slate-300 shadow-md">
                    <div className="flex items-center">
                        <XIcon
                            className="h-6 w-6 cursor-pointer mr-2.5"
                            onClick={ () => closeModal() }
                        />
                        <div className="text-xl font-bold text-slate-900">Update Coupon</div>
                    </div>

                    <label className="block mt-2.5">
                        <span className="text-xs text-grey uppercase font-medium mt-5">Coupon Code</span>
                        <input
                            type="text"
                            className="rounded text-black-500 mt-1.5 w-full text-sm h-12"
                            placeholder="enter coupon code"
                            onChange={ (event) => updateValue(event) }
                            name="code"
                            value={ state.code }
                        />
                    </label>

                    <label className="block mt-2.5">
                        <span className="text-xs text-grey uppercase font-medium mt-5">Coupon Discount Amount</span>
                        <input
                            type="text"
                            className="rounded text-black-500 mt-1.5 w-full text-sm h-12"
                            placeholder="enter coupon amount"
                            onChange={ (event) => updateValue(event) }
                            name="amount"
                            value={ state.amount }
                        />
                    </label>

                    <label className="block mt-2.5">
                        <span className="text-xs text-grey uppercase font-medium mt-5">Coupon Quantity</span>
                        <input
                            type="text"
                            className="rounded text-black-500 mt-1.5 w-full text-sm h-12"
                            placeholder="enter coupon quantity"
                            onChange={ (event) => updateValue(event) }
                            name="quantity"
                            value={ state.quantity }
                        />
                    </label>

                    <label className="block mt-2.5">
                        <span className="text-xs text-grey uppercase font-medium mt-5">Coupon Description</span>
                        <textarea
                            type="text"
                            className="rounded text-black-500 mt-1.5 w-full text-sm h-36 resize-none"
                            placeholder="enter coupon description"
                            onChange={ (event) => updateValue(event) }
                            name="description"
                            value={ state.description }
                            >
                        </textarea>
                    </label>

                    {

                        processing &&
                        <ProcessingButton />

                    }
                    {

                        !processing &&
                        <>
                            <button className="w-full bg-primary cursor-pointer mt-5 px-8 py-4 rounded select-none text-center text-white text-xs uppercase"  onClick={ () => couponPATCH( state ) }>Update Coupon</button>
                            <button className="w-full bg-white cursor-pointer mt-2.5 px-8 py-1 rounded select-none text-center text-slate-900 text-xs uppercase"  onClick={ () => couponDELETE( state ) }>Delete</button>
                        </>

                    }

                </div>
            </ModalContent>
        </Modal>

    )
}

export default CouponPatchModal
