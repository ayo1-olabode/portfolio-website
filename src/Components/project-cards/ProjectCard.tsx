import React from "react";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Heading, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import "./projectcards.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard(props: any) {
  const handleClick = () => {
    window.open(props.link);
  };

  const handleDemo = () => {
    window.open(props.demo);
  };

  const [demoExists, setDemoExists] = useState(props.demo != null);
  const [githubExists, setGithubExists] = useState(props.link != null);

  return (
    <div className="card">
      <Card
        dropShadow="lg"
        borderRadius="lg"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{props.name}</Heading>

            <Text py="2">{props.info}</Text>
          </CardBody>

          <CardFooter>
            {githubExists && (
              <Button
                leftIcon={<FaGithub color="black" />}
                onClick={handleClick}
                variant="solid"
                bg="#00adb5"
              >
                View Github
              </Button>
            )}
            {demoExists && (
              <Button onClick={handleDemo} variant="solid" bg="#00adb5">
                Live Demo
              </Button>
            )}
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default ProjectCard;
