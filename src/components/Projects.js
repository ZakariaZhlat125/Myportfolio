import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import NeedJob from "../assets/img/NeedJob.png";
import Hotil from "../assets/img/hotil.png";
import ModrenBank from "../assets/img/ModrenBank.png";
import SocialApp from "../assets/img/SocialApp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

import React, { useState } from "react";
const Projects = (props) => {
  const fullprojects = [
    {
      title: "Need job project",
      description: "Using Django  and Bootstrap",
      imgUrl: NeedJob,
      url: "#",
      urlInGithub: "https://github.com/ZakariaZhlat125/NeedJobProject",
      totalDescription:
        "An open source online job portable using Django Using this project, you can search for jobs if you are a researcher and you can post job opportunities and the system proposes job opportunities similar to those you searched for and send notifications of job opportunities similar to the skills you added to your profile",
    },
  ];

  const frontprojects = [
    {
      title: "Hotil",
      description: "Using React js",
      imgUrl: SocialApp,
      url: "#",
      urlInGithub: "https://github.com/ZakariaZhlat125/Social-App",
      totalDescription: "An Socialmedia Project using vite react js  ",
    },
    {
      title: "Hotil",
      description: "Using React js",
      imgUrl: Hotil,
      url: "#",
      urlInGithub: "https://github.com/ZakariaZhlat125/Hotil",
      totalDescription:
        "An Hotil App Project using vite react js you can see rooms and details  this room and Search to Find the room that suits you ",
    },
    {
      title: "Hotil",
      description: "Using React js and Tailwind",
      imgUrl: ModrenBank,
      url: "#",
      urlInGithub: "https://github.com/ZakariaZhlat125/modrenBank",
      totalDescription: "Home back ModernBack using React and Tailwind js",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            {/* <p></p> */}
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills md-5 mb-5 justfiy-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">FullStack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Backend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Front End</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {fullprojects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project} pro={project} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>No Project in Backend</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {frontprojects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project} pro={project} />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
