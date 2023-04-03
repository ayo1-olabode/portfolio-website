import React from "react";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import { Grid, GridItem, Container, SimpleGrid } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Heading, Text, Button } from "@chakra-ui/react";
import ProjectCard from "../Components/project-cards/ProjectCard";

function Projects() {
  return (
    <div>
      <Navbar />
      <section>
        <Container maxW="container.xl" centerContent>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          ></SimpleGrid>
          <ProjectCard
            link="https://github.com/ayo1-olabode/SENG401ChatApp"
            info="Rattle.io is a messaging application that facilitates efficient communication through text, voice, and video messaging. Developed using the MERN stack, it incorporates Socket.IO and WebRTC technologies to enable real-time interactions. The app ensures secure user authentication with JWT and employs Amazon S3 and Google Cloud Platform for reliable storage and performance. Rattle.io is suitable for both personal and professional communication, offering a user-friendly experience within a secure and robust platform."
            name="Rattle.io"
            demo="https://rattlechat.netlify.app/"
          />
          <ProjectCard
            info="The Heart Disease Predictor is a project aimed at identifying the risk of heart disease in patients using a machine learning model. Built with Python, this program is trained with data sourced from Kaggle.com to analyze various health statistics. By incorporating essential libraries such as Pandas, NumPy, and Matplotlib, the project enables efficient data visualization and manipulation. The machine learning algorithm is powered by the sci-kit-learn library, employing the k-means clustering method to group patients with similar health characteristics. This approach results in an impressive 87% accuracy rate for heart disease prediction. This project demonstrates the potential of leveraging data and machine learning techniques, such as k-means clustering, in identifying and addressing critical health risks."
            name="Heart Disease Predictor"
          />
          <ProjectCard info=" Fee-fi-fo-fum" name="Will Update Soon" />
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
