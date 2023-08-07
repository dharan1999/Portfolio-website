import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import arrow from "../assets/img/down-arrow.svg";
import projImg1 from "../assets/img/OnePrism.png";
import projImg2 from "../assets/img/Charusat University.png";
import projImg3 from "../assets/img/lovemyskool.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {

  const projects = [
    {
      title: "OnePrism",
      description: "Jr. Full Stack Developer",
      imgUrl: projImg1,
      companyName: "ONEPRISM",
      period: "April 2019 - July 2021",
      desc: "Developed an Astrology web app with React.js, PHP, and MySQL for personalized insights, managed incidents for system stability, crafted a dynamic social media platform using HTML, CSS, JavaScript, PHP, and MySQL, extended RESTful API, optimized deployment via Docker, integrated backend/frontend seamlessly, and resolved 100+ bugs for enhanced system robustness.", 
    },
    {
      title: "Charusat University",
      description: "Machine Learning Intern",
      imgUrl: projImg2,
      companyName: "CHARUSAT UNIVERSITY",
      period: "Dec 2018 - Feb 2019",
      desc: "Created an Email SPAM-HAM detector and explored 5 different classifiers generated through techniques like TF-IDF, MultinomialDB, ANN,RNN and LR-SVM."
    },
    {
      title: "LoveMySkool",
      description: "Web Developer / SEO expert / Digital Marketer",
      imgUrl: projImg3,
      companyName: "LOVEMYSKOOL",
      period: "June 2018 - Oct 2018",
      desc:"Redesigned the front end of the website and did its search engine optimization, along with writing blogs, creating graphics and running paid social media campaigns."
    },

  ];

  return (
    <section className="experience background-tint" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2> {"<Experience />"}</h2>
                <p><b>3 years </b>in software development with a strong foundation in web dev, software dev, and big data.<p> From concept to delivery, I can be your <b>Software Development Partner.</b></p></p>
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
                  {/* <Row>
                  <div><img src={arrow} style={{height:"50px", width:"70px" , textAlign:"center"}}/></div>
                  </Row> */}
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">OnePrism</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Charusat University</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">LoveMySkool</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane >
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
                </Tab.Container> */} 
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
