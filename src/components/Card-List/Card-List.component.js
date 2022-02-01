import Card from '../Card/Card.component'
import './Card-List.styles.css'
import { Col } from 'react-bootstrap'

const CardList = (props)  => {
    
    const {monsters} = props
   return(
       <div className='card-list'>
            {
                monsters.map(
                    (monster,index) => (
                       // <Col md={12} xs={6} >
                        <Card key={index} monster={monster} />
                       // </Col>
                    )
                )
            }
       </div>
   )
}
export default CardList