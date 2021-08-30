import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import "./About.css";
import Card from "react-bootstrap/Card";

function About(){
  return(
   <>
<Navbar/>
  <Card  className="mb-2">
  <Card.Img  className="mb-2-img" variant="top" src="https://pbs.twimg.com/profile_images/1176589994145832961/OUvw6LKW_400x400.jpg" alt="profile"/>
  <Card.Body>
    <Card.Title className="title">
      Zaklina Radivojevic
      </Card.Title>

    <Card.Text>
      I started studying Web Design last year. When we were hit by the crisis caused by Covid19, I was bored.
Thanks to the wonderful people from freecodecamp who share their knowledge with us, who want to learn something new. Now I can be proud of my first Portfolio. Thank you ...
    </Card.Text>

    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
   <a href="https://mobile.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
  </Card.Body>
</Card>
   </> 
    
  );
}
export default About;