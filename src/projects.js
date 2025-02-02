import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel"; 
import Modal from "./modal.js";
import "react-multi-carousel/lib/styles.css"; 
import { Row, Col } from "react-bootstrap"; 
import id8ai from "./assets/id8-ai.svg"; 
import id8website2 from "./assets/id8-website-2.png"; 
import id8website from "./assets/id8-website.svg";
import alchemist from "./assets/alchemist-post.svg";
import solasphere from "./assets/solasphere-post.svg";
import homeserver from "./assets/home-server.svg";
import homeserver2 from "./assets/home-server-2.svg";
import { ArrowUpRightSquare, Github } from "react-bootstrap-icons";
import { useState } from "react"; 
import 'react-awesome-slider/dist/styles.css';
import solasphere2 from "./assets/solasphere.png";
import Aitest from "./assets/AI-test.png";
import alchemist2 from "./assets/alchemist-modal.png"

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
                                    <img src={Aitest} className="modal-images" />
                                    <h4>iD8's A.I Bot</h4> <a href="https://github.com/iD8-SP53-22/AI-Assistant" target="blank"><button className="link-button"><Github></Github> Github </button></a>
                                    <p>
                                        This project was solely build using free assets online, to begin with the actual Large Language Model or LLM is being hosted locally on the system while the 3D model is an import on VTube Studio. 
                                        Both Programs are connect using a Virtual Cable which is using my Python Script to transcribe speech into text, sending over the transcription to the language model in a txt file which is then processed by the LLM in a response file.
                                        For the response file, the Python Script makes an API call to Eleven Labs which is a text to speech service used to send the speech over to the 3D model in VTube Studio via the virtual cable connected to Python.
                                    </p>
                                    

                                    <h6>Skills: Python, API Integration, LLMs, Git </h6>
                                </Modal>
                            </div>

                            <div>
                                <img src={alchemist} alt="image" />
                                <h4>Alchemist: Recipe Generator</h4>
                                <h5> Built an app using Object Recognition (Python) and a Language Model to identify fridge ingredients and suggest random recipes. </h5>
                                <button className="project-button" onClick={() => handleOpenModal('alchemist')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'alchemist'} onClose={handleCloseModal}>
                                <img src={alchemist2} className="modal-images"/>
                                <h4>Alchemist Recipe Generator</h4> <a href="https://github.com/Albert-Alvaro/CP3407_RecipeApp" target="blank"><button className="link-button-4"><Github></Github> Github </button></a>
                                <h5>Project Score: High Distinction</h5>

                                <p>
                                    Alchemist, using Object Recognition and Locally Hosted LLM outputs is able to bring the user recipes using an image of their refrigerator. Upload an image to the Web Application which will then call for the object recognition model (trained specifically for culinary/food items). 
                                    The results from the recognition model will be converted to a TXT file which will be sent over to the locally hosted LLM (speficially trained for recipe generation). The response from the LLM would be sent over the Web Application. 
                                    Django Framework was used to make the Web Application.
                                </p>
                                <h6> Skills: Object Recognition, Natural Language Processing, Web Developement (Django), API Integration, Git </h6>
                                    
                                </Modal>
                            </div>

                            <div>
                                <img src={solasphere} alt="image" />
                                <h4>Solasphere: Relaxtion Pod</h4>
                                <h5> Case Study on Poor life balance offering a Japanese Style Multipurpose Isolation Pod to help aleviate the stress</h5>
                                <button className="project-button" onClick={() => handleOpenModal('solasphere')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'solasphere'} onClose={handleCloseModal}>
                                    <img src={solasphere2}  className="modal-images"/>
                                    <h4>Solasphere: Relaxtion Pods</h4> <a href="https://drive.google.com/file/d/1MJ7AF2n8OuAmhBA58z_GNOpsGcziiIqb/view?resourcekey" target="blank"><button className="link-button-2"><ArrowUpRightSquare></ArrowUpRightSquare> Render </button></a>
                                    <a href="https://docs.google.com/document/d/1fLJogvRN_YPuxccRocAHi2gVwFQ2XJE0h3sz9m8VtRk/edit?usp=sharing" target="blank"><button className="link-button-3"><ArrowUpRightSquare></ArrowUpRightSquare> Docs </button></a>
                                    <h5>Project Score: High Distinction / First Prize in the JCU 29th Convergence Conference</h5>

                                    <p>
                                        To discover the significance of work-life balance, this case study delves deep in the concept of workplace-stress and referrences relaxation techniques.
                                        Solasphere aims to provide a futuristic solution for escaping stress of work routines by combining elements of japanese public pods and sleeping capsules.
                                        The 3D render for this project was done on Blender along with the animation which was done on Adobe After Effects. 
                                    </p>

                                    <h6>Skills: Blender, Adobe After Effects, Documentation, Public Speaking, Ideation</h6>
                                </Modal>
                            </div>

                            <div>
                                <img src={id8website} alt="image" />
                                <h4>iD8's Website</h4>
                                <h5> Hosted a Website using AWS Lightsail and Routed the domain using Route 53 for the IT Club @JCUS </h5>
                                <button className="project-button" onClick={() => handleOpenModal('id8website')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'id8website'} onClose={handleCloseModal} className='modal'>
                                    <img src={id8website2} className="modal-images"/>
                                     <h4>iD8's Website</h4> <a href="https://id8labs.org" target="blank"><button className="link-button-5"><ArrowUpRightSquare className="arrow-link"></ArrowUpRightSquare> Visit The Site</button></a>
                                    <p>
                                        A lightsail hosted website for the official IT Club of JCUS (James Cook University), The goal for this website was to spread information and make announcement for the club!
                                        We used wordpress as the choice of CMS as it was convinient for most people in the team and utilizing Amazon's Web Services namely Lightsail, to publish this site. 
                                        The Domain Name was decided and bought by the whole team "iD8labs.org" which is a tribute to the predeccesors of the club as well as the logo mirage behind the homepage which was render by me in blender, this address was then routed to the static IP in a DNS zone to lead visitors to the site.
                                    
                                    </p>

                                    <h6>Skills: Lightsail, Route 53, Wordpress, Blender </h6>

                                    
                                </Modal>
                            </div>

                            <div>
                                <img src={homeserver} alt="image" />
                                <h4>DIY Home server</h4>
                                <h5> Repurposed old gaming pc into a home server with Plex, Minecraft, Tailscale for secure access, and a Raspberry Pi for remote power control. </h5>
                                <button className="project-button" onClick={() => handleOpenModal('home-server')}><h6>Show More</h6></button>
                                <Modal open={openModal === 'home-server'} onClose={handleCloseModal} className='modal'>
                                    <img src={homeserver2} className="modal-images"/>
                                     <h4>DIY Home Server</h4> <a href="https://docs.google.com/document/d/1xg9mhcLzwKbfeAWEiFaJPRWCs-vPFomKNE2vJUJYcnI/edit?usp=sharing" target="blank"><button className="link-button-6"><ArrowUpRightSquare className="arrow-link"></ArrowUpRightSquare> Docs</button></a>
                                    <p>
                                        This project documents the tranformation of an old gaming PC into a powerful home server. It runs Ubuntu 24.04 LTS, hosting a Plex media server and a Minecraft Server. Overcoming Double NAT restrictions, it uses Playit.gg 
                                        for public access and Tailscale for secure remote access. A Raspberry Pi enables remote management.
                                    
                                    </p>

                                    <h6>Skills: Networking, Shell Scripting and Automation, Server Management </h6>

                                    
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