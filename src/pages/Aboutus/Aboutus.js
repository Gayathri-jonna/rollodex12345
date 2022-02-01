import {Container, Row, Col} from 'react-bootstrap'
// Container gives you a marginal  space on all the sides of the border
const Aboutus =()=>{
    return(
    <>
        <h1> Aboutus Page</h1>
        <Container style={{color:'white'}}>

          {/* No scrolls are allowed from left to right or vice-versa in responsiveness*/}
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    </>
    )
}
export default Aboutus