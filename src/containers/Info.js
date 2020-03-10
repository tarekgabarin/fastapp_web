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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reprehenderit a, ipsum officia doloremque omnis quasi laborum voluptatum ipsam quae possimus alias maiores rem perspiciatis mollitia ea magni, autem, nemo id. Amet, quia placeat? Id illo voluptatem repellat mollitia, magnam atque velit natus officia doloribus quos at expedita nulla ullam laudantium, dolorum quibusdam labore, cumque enim fuga reprehenderit consectetur nihil. Distinctio pariatur ab cumque maiores, repellendus eaque eveniet laborum maxime exercitationem suscipit quas veniam totam debitis eum tempora quae veritatis corrupti aliquid minima. Iste amet ut quasi ex nemo exercitationem. Animi cupiditate expedita exercitationem officiis ipsa. Magni adipisci eligendi tempore!
                </p>
            </Container>
        </Flex>
    )
}
