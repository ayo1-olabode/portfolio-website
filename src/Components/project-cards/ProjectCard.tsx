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
  const isLOL = props.demo == "LOL";

  return (
    <div className="card">
      <Card
        dropShadow="lg"
        borderRadius="lg"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody>
            <Heading size="md">{props.name}</Heading>

            <Text py="2">{props.info}</Text>
          </CardBody>

          <CardFooter>
            {githubExists && (
              <Button
                marginRight={2}
                leftIcon={<FaGithub color="black" />}
                onClick={handleClick}
                variant="solid"
                bg="#00adb5"
              >
                View Github
              </Button>
            )}
            {demoExists && !isLOL && (
              <Button
                className="button"
                onClick={handleDemo}
                variant="solid"
                bg="#00adb5"
              >
                Live Demo
              </Button>
            )}
            {demoExists && isLOL && (
              <Button
                className="button"
                disabled={true}
                variant="solid"
                bg="gray"
              >
                Pusblished Soon
              </Button>
            )}
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default ProjectCard;
