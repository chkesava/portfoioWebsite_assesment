import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import NavBar from "../Navbar";
import Footer from "../Footer"
import './about.css'


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <NavBar/>
      <h1>This is it.;)</h1>
      <hr/>
      <p>Kesava is a indian UI/UX Designer & Front End Developer with a passion for desigining beautiful and fuctional user experiences.Tipically, he's Driven & permanently Curious.He's obsesssed with desiging things and more even obsessed with desigining cool & vlean stuff for the web and mobile.he has been in the business of creating since he hung his first painting on the wall when he was 18.</p>
      <p>He Holds a bachelor degree in Computer Applications.During his Graduation.he has been activily involved in the web design comunity for the last 3 years .he has designed websites for small businesses,events,nonprofits and more .Currently he's based in Bihar,India.Where he's working as a indipendent creative </p>
      <p></p>
      <Footer/>
    </Container>
  );
}

export default About;