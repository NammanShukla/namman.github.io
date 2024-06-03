import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel"; 
import modal from "./modal";
import "react-multi-carousel/lib/styles.css"; 
import { Row, Col } from "react-bootstrap"; 
import id8ai from "./assets/id8-ai.svg"; 
import id8website from "./assets/id8-website.svg";
import alchemist from "./assets/alchemist-post.svg";
import solasphere from "./assets/solasphere-post.svg";
import { ArrowUpRightSquare } from "react-bootstrap-icons";

export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max:4000, min:3000},
            items: 5
        }, 
        desktop: {
            breakpoint: {max:3000, min:1024}, 
            items: 3
        }, 
        tablet: {
            breakpoint: {max:1024, min:464}, 
            item: 2
        }, 
        mobile: {
            breakpoint: {max:464, min:0}, 
            item: 1
        }
    }; 

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <div className="project-bx">
                        <h2>
                            Projects
                        </h2>
                        <p>
                            Here are all the projects that I've been involved in throughout my career !<br></br>
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div>
                                <img src={id8ai} alt="image" />
                                <h4>iD8's A.I Bot</h4>
                                <h5> Using a Locally hosted LLM with an integrated Speech to Text transcription process written in Python</h5>
                                <button className="project-button"> <h6><ArrowUpRightSquare size={15}  className="arrow-more"  />  Show More </h6> </button>
                            </div>

                            <div>
                                <img src={alchemist} alt="image" />
                                <h4>Alchemist: Reciepe Generator</h4>
                                <h5> Using Object Recognition (Python) and a Language Model, developed an application that will recognise ingredients in the fridge and give you a random recipe you can make. </h5>
                                <button className="project-button"> <h6><ArrowUpRightSquare size={15}  className="arrow-more" /> Show More</h6> </button>
                            </div>

                            <div>
                                <img src={solasphere} alt="image" />
                                <h4>Solasphere: Relaxtion Pod</h4>
                                <h5> Case Study on Poor life balance offering a Japanese Style Multipurpose Isolation Pod to help aleviate the stress</h5>
                                <button className="project-button"> <h6><ArrowUpRightSquare size={15}  className="arrow-more" /> Show More</h6> </button>
                            </div>

                            <div>
                                <img src={id8website} alt="image" />
                                <h4>iD8's Website</h4>
                                <h5> Hosted a Website using AWS Lightsail and Routed the domain using Route 53 for the IT Club @JCUS </h5>
                                <button className="project-button"> <h6> <ArrowUpRightSquare size={15} className="arrow-more" /> Show More</h6> </button>
                            </div>
                        </Carousel>

                    </div>

                    </Col>
                </Row>

            </Container>

        </section>
    )
}

export default Projects;