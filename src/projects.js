import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel"; 
import "react-multi-carousel/lib/styles.css"; 
import { Row, Col } from "react-bootstrap"; 
import id8ai from "./assets/id8-ai.svg"; 
import id8website from "./assets/id8-website.svg";
import alchemist from "./assets/alchemist-post.svg";
import solasphere from "./assets/solasphere-post.svg";

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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div>
                                <img src={id8ai} alt="image" />
                                <h5>iD8's A.I Bot</h5>
                            </div>

                            <div>
                                <img src={alchemist} alt="image" />
                                <h5>Alchemist: Reciepe Generator</h5>
                            </div>

                            <div>
                                <img src={solasphere} alt="image" />
                                <h5>Solasphere: Relaxtion Pod</h5>
                            </div>

                            <div>
                                <img src={id8website} alt="image" />
                                <h5>iD8's Website</h5>
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