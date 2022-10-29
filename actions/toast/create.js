import { createStandaloneToast } from "@chakra-ui/toast"

const { toast } = createStandaloneToast()

export const createToast = ( title, status ) => {

    toast({

        title: title,
        status: status,
        duration: 5000,
        isClosable: false,
        position: "top-right"

    })

}