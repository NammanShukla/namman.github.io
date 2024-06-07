import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel"; 
import Modal from "./Modal";
import "react-multi-carousel/lib/styles.css"; 
import { Row, Col } from "react-bootstrap"; 
import id8ai from "./assets/id8-ai.svg"; 
import id8website2 from "./assets/id8-website-2.svg"; 
import id8website3 from "./assets/id8-website-3.svg";
import id8website from "./assets/id8-website.svg";
import alchemist from "./assets/alchemist-post.svg";
import solasphere from "./assets/solasphere-post.svg";
import { ArrowUpRightSquare } from "react-bootstrap-icons";
import { useState } from "react"; 

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

    const [openModal, setOpenModal] = useState(null);
    const handleOpenModal = (modalid) => {
        setOpenModal(modalid);
    }; 

    const handleCloseModal = () => {
        setOpenModal(null);
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
                            Here are some of the projects that I've been a part of during my studies <br></br>
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div>
                                <img src={id8ai} alt="image" />
                                <h4>iD8's A.I Bot</h4>
                                <h5> Using a Locally hosted LLM with an integrated Speech to Text transcription process written in Python</h5>
                                <button className="project-button" onClick={() => handleOpenModal('id8ai')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'id8ai'} onClose={handleCloseModal}>
                                </Modal>
                            </div>

                            <div>
                                <img src={alchemist} alt="image" />
                                <h4>Alchemist: Reciepe Generator</h4>
                                <h5> Using Object Recognition (Python) and a Language Model, developed an application that will recognise ingredients in the fridge and give you a random recipe you can make. </h5>
                                <button className="project-button" onClick={() => handleOpenModal('alchemist')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'alchemist'} onClose={handleCloseModal}>
                                    This Should be a pop up for this project
                                </Modal>
                            </div>

                            <div>
                                <img src={solasphere} alt="image" />
                                <h4>Solasphere: Relaxtion Pod</h4>
                                <h5> Case Study on Poor life balance offering a Japanese Style Multipurpose Isolation Pod to help aleviate the stress</h5>
                                <button className="project-button" onClick={() => handleOpenModal('solasphere')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'solasphere'} onClose={handleCloseModal}>
                                    This Should be a pop up for this project
                                </Modal>
                            </div>

                            <div>
                                <img src={id8website} alt="image" />
                                <h4>iD8's Website</h4>
                                <h5> Hosted a Website using AWS Lightsail and Routed the domain using Route 53 for the IT Club @JCUS </h5>
                                <button className="project-button" onClick={() => handleOpenModal('id8website')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'id8website'} onClose={handleCloseModal}>
                                    <img src={id8website2} className="website-image"></img>
                                    <h4>iD8's Website</h4>
                                    <p>
                                        A lightsail hosted website for the official IT Club of JCUS (James Cook University), The goal for this website was to spread information and make announcement for the club!
                                        We used wordpress as the choice of CMS as it was convinient for most people in the team and utilizing Amazon's Web Services namely Lightsail, to publish this site. 
                                        The Domain Name was decided and bought by the whole team "iD8labs.org" which is a tribute to the predeccesors of the club as well as the logo mirage behind the homepage which was render by me in blender, this address was then routed to the static IP in a DNS zone to lead visitors to the site.
                                    
                                    </p>

                                    <h6>Skills: Lightsail, Route 53, Wordpress, Blender </h6>
                                </Modal>
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