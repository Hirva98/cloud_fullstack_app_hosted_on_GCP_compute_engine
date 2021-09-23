import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Row, Col, Carousel, Divider, Typography,} from 'antd';
import Axios from 'axios'
import './Homepage.css'


const { Title } = Typography

const Homepage = () => {

    const history = useHistory()
    function onChange(a, b, c) {
        console.log(a, b, c);
      }
    const contentStyle = {
        height: '160px',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

return (
    
        <Fragment >
            <Title level={3} className="page-title-bar-title" >Student Information Application</Title>
      
           <Divider/>
         <Row>
            <Col className="place">
                <Button  className="button-placement"  onClick={()=>{history.push('/upload')}}>Upload a new Student</Button>
            </Col>
        </Row>

           
        <Row>
            <Col className="place">
                <Button className="button-placement" onClick={()=>{history.push('/search')}}>Search for Students</Button>
            </Col>
        </Row>
           
        <Row>
            <Col className="place">
                <Button className="button-placement" onClick={()=>{history.push('/display')}}>Display all Students</Button>
            </Col>
        </Row> 
        </Fragment>
   

    );

}
export default Homepage;
