import React from 'react'
import {Box, Text, Stack, Button} from '@chakra-ui/core'

function Jumbotron(props) {
    return (
        <Box
        width='100%'
        h={[270, 340, 450]}
        bgImage="linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url('https://shawglobalnews.files.wordpress.com/2018/12/GettyImages-1006125552.jpg?quality=70&strip=all')" 
        bgRepeat="no-repeat"
        padding={[2, 4, 6, 8]}
        >
            <Stack justify="center" >
            <Text fontFamily="logo" fontSize="6xl" color="veryPaleOrange" textAlign={ 'center'}>FastApp</Text> 

            <Text fontFamily="logo" fontSize="5xl" color="veryPaleOrange" textAlign={ 'center'}>An app to keep track of intermitten fasting</Text> 


            </Stack>

        </Box>
    )
}

export default Jumbotron
