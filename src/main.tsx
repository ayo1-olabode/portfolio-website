import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { ChakraProvider } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Contact from "./Pages/Contact";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
