import { useState, useEffect } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg  from "./assets/mew.png";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); 
    const toRotate = ["Web Developer", "Software Developer", "AI Enthusiast" ]; 
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
                        <span className="tagline"> Hello There! </span>
                        <h1>{`I'm Namman Shukla `} <span className="wrap">{text}</span></h1>
                        <p>
                            20 years old IT Fresh Graduate with a Bachelor of Information Technology from JCU Singapore. With over five years of experience in Python and background in Software Engineering, Web Development, Database Management and Agile Frameworks.
                        </p>
                        <button onClick={() => window.open('https://drive.google.com/file/d/1I0T_tmvOit3H8NpYwYK2MJVyL4QJWuUe/view?usp=sharing', '_blank')}>My Resume <ArrowRightCircle size={25} /> </button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headerimg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}