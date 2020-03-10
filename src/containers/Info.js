import React from 'react';
import { Heading, Image, Box, Flex } from "@chakra-ui/core";
import Container from './../commons/Container';
import Jumbotron from './../commons/Jumbotron'

export default function Info() {
    return (
        <Flex flexDirection="column" flexGrow={1} bg="veryPaleOrange">
            <Jumbotron>
            </Jumbotron>
            <Container>
            </Container>
        </Flex>
    )
}
