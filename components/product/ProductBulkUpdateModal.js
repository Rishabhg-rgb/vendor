import React from "react"
import {
    
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,

} from "@chakra-ui/react"

// X ICON
import { XIcon } from "@heroicons/react/solid"

import ProcessingButton from "../processing/Button"

const ProductBulkUpdateModal = ({

    is_processing,
    isOpen,
    onClose,
    onOpen,
    state,

    clearVariables,
    bulkUpdateProductsUpload,

    }) => {


    // UPLOAD IMAGE
	const uploadFileFunction = ( event, onClose ) => {

	    bulkUpdateProductsUpload( event.target.files, onClose )

	}

    return (
        <Modal isOpen={ isOpen } onClose={ onClose } closeOnOverlayClick={ false } onCloseComplete= { () => clearVariables() }>
            <ModalOverlay />
            <ModalContent>
                <ModalBody className="!p-5">
                    <div className="flex items-center">
                        <XIcon
                            className="h-6 w-6 cursor-pointer mr-2.5"
                            onClick={ onClose }
                        />
                        <div className="text-xl font-bold text-slate-900">Bulk Update</div>
                    </div>
                    <div>
                        {

                            state.file.length === 0 &&
                            <label className="flex flex-col block mt-2.5">
                                <span className="text-xs text-grey uppercase font-medium mt-5">Bulk Update Products File</span>
                                <input type="file" onChange={ ( files ) => uploadFileFunction( files, onClose ) } multiple={ true } className="mt-5" />
                            </label>

                        }
                        {

                            is_processing &&
                            <ProcessingButton />

                        }
                        {
                            !is_processing &&
                            <button className="w-full bg-purple-700 cursor-pointer mt-5 px-8 py-4 rounded select-none text-center text-white text-xs uppercase hover:bg-purple-900"  onClick={ () => propertyMealPlanPOST( state, onClose ) }>Add Meal Plan</button>

                        }
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>

    )

}

export default ProductBulkUpdateModal
