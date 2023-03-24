import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo21.png'
import navIcon1 from '../assets/img/github.svg';
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <h3>Dharan Thaker</h3>
            
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
   
         
              <a href="https://www.linkedin.com/in/dharan-thaker/"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/dharan1999"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/dharan_12__/"><img src={navIcon3} alt="" /></a>
            
         
       
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
