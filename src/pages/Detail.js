
import { Container,Card,CardGroup } from 'react-bootstrap'
import Header from './Header'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link,useParams} from 'react-router-dom'
import React, {useState, useEffect } from 'react'
import axios from "axios"
function Detail() {

    const [detailjob,setDetailJob] = useState([])

    const {id} = useParams();
    const detailJob = async () => {
        const detail = await axios.get(
            'http://dev3.dansmultipro.co.id/api/recruitment/positions/'+id
        )
    
        return detail.data
        ;
    };

   useEffect( ()=>{
    detailJob().then((result)=>{
     
       setDetailJob(result)
       console.log(result)
     })
   },[])
  
  return (
  <Container>
      <Header/>
      <br/>
      <Link to={'/'}>{"<--"} &nbsp; &nbsp;Back</Link>
      <br/>
      <br/>
      <Row className="justify-content-md-center">
        <Col md={8} >

      <Card >
          <Card.Body>
          {detailjob.type} / {detailjob.location}
            <Card.Title>{detailjob.title}</Card.Title>
            <Card.Text>
             
            </Card.Text>
            
          </Card.Body>
          <Card.Body>
          <p dangerouslySetInnerHTML={{__html:detailjob.description}} />
          </Card.Body>
        </Card>   
        </Col>
        <Col >
        <Card  >
        
        <Card.Body>
          <Card.Title>{detailjob.company}</Card.Title>
          <img src={detailjob.company_logo} alt="Logo" />
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><a href={detailjob.url}>{detailjob.url}</a></small>
        </Card.Footer>
      </Card>
      <br/>
      <Card>
        <Card.Body>
          <Card.Title>How to apply</Card.Title>
          <Card.Text>
            <p dangerouslySetInnerHTML={{__html:detailjob.how_to_apply}} />
          </Card.Text>
        </Card.Body>
      
      </Card>
      </Col>
      </Row>
      
        </Container>
   
  )
}

export default Detail