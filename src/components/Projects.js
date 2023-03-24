import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Bibler.png";
import projImg2 from "../assets/img/Inc.png";
import projImg3 from "../assets/img/Covid1.png";
import projImg4 from "../assets/img/Remi.png";
import projImg5 from "../assets/img/Seochu.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Seochu",
      description: "SEO web service made with Natural Language Processing",
      imgUrl: projImg5,
      desc: "SEOCHU is a dynamic NLP powered web service which revamp your website’s SEO by crawling through your website pages individually, offering keyword suggestions and backlink recommendations to help your website reach new heights in SEO ranking."
    },
 
    {
      title: "Inception",
      description: "Social Media platform for startup aspirants and investors",
      imgUrl: projImg2,
      desc: "Inception is a dynamic online platform that empowers startup enthusiasts to bring their ideas to life. Through collaboration with like-minded individuals, Inception provides a supportive community to transform ideas into reality. With a built-in feature for seeking investors, startups can take their business to the next level directly from the platform."
    },
    {
      title: "Bibler",
      description: "Cross platform mobile application with React Native",
      imgUrl: projImg1,
      desc: "Bibler, a React Native-based cross-platform mobile application, empowers users to navigate the library and easily locate their desired books. With its availability check feature, Bibler informs users whether the book is present in the library or not, and even guides them to its location. Additionally, if the book is not available at the moment, Bibler displays the expected date of arrival, making it an all-in-one solution for book search and library navigation."
    },
    {
      title: "Reminiscence",
      description: "MERN Stack",
      imgUrl: projImg4,
      desc: "Reminiscence is a MERN stack application that encourages users to share and relive their memorable life events.",
    },
    {
      title: "Covid Fighters",
      description: "React.js first mini project",
      imgUrl: projImg3,
      desc: "I was intrigued by the React library and decided to learn it out of sheer curiosity. What started as a fun experiment turned into an exciting journey of discovery. To showcase my newly acquired skills, I created a Covid-19 web app that displays global and country-wise data on the number of patients fighting the virus. The app features interactive data visualizations that provide clear and concise statistics."
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{"<Projects />"}</h2>
                <p>Crafting impactful projects that range from social media platforms to cross-platform apps and advanced data analysis, delivering high quality results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
