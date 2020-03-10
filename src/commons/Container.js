import React from 'react'
import {Box} from "@chakra-ui/core"

function Container({children}) {

    return (
        <Box p={[2, 4, 6, 8]}>
        {children}
        </Box>
    )
}

export default Container
