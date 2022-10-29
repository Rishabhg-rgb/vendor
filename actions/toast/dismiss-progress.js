import { createStandaloneToast } from "@chakra-ui/toast"

const { toast } = createStandaloneToast()

export const dismissProgressToast = ( title, status ) => {

    toast.close("progress-toast")

}