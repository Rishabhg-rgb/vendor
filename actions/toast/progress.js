import { createStandaloneToast } from "@chakra-ui/toast"

const { toast } = createStandaloneToast()

export const createProgressToast = ( title, status ) => {

    toast({

        duration: null,
        id: "progress-toast",
        isClosable: false,
        position: "top-right",
        status: status,
        title: title,

    })

}