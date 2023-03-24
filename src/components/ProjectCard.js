import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, period,desc,companyName }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br /><br />
          <span>{period}</span>
        </div>
      </div>
     <div> <h4>{"> "}{title}</h4><h7> {desc}  </h7></div>
      {/* <div style={{textAlign:"center",fontWeight:"bold" ,fontSize:"30x"}}> <h4> {companyName} </h4> </div> */}
    </Col>
    
  )
}
