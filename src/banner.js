import { useState, useEffect } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg  from "./assets/mew.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); 
    const toRotate = ["Web Developer", "Software Developer", "PC Enthusiast" ]; 
    const [text, setText] = useState(''); 
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, delta )

        return () => { clearInterval(ticker)}; 
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length; 
        let fullText = toRotate[i]; 
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);

        setText(updateText); 

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true); 
            setDelta(period); 
        } else if(isDeleting && updateText === '') {
            setIsDeleting(false); 
            setLoopNum(loopNum+1); 
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    {/*<span className="tagline"> Hello There! </span>*/}
                        <h1>{`I'm Namman Shukla `} <span className="wrap">{text}{'|'}</span></h1>
                        <p>
                            an IT Graduate from New Delhi with a B.Tech/Bachelor's of Information Technology, I have strong experience in Python programming, building custom PCs, exploring tech projects ! I'm seeking IT opportunities where I can apply my skills, solve problems, and continue to learn.
                        </p>
                        <button onClick={() => window.open('https://drive.google.com/file/d/1Au64E5vJMfVEs53FHuN3STQqrvxWm3B_/view?usp=sharing', '_blank')}>My Resume <ArrowRightCircle size={25} /> </button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headerimg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}