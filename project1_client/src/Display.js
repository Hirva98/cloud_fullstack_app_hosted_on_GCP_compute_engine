import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { Button, Card, Col, Row, Typography } from 'antd';
import './Display.css';
import { serverPath }from './path'

const { Title } = Typography
const Display = () => {

    const history = useHistory();
    const [viewData, setviewData]=useState(null);
    const viewRecords = () => {

       
       Axios.get(serverPath.local +'/students/all')
       .then(res => {
           setviewData(res.data);
           console.log(res.data)
       })
        .catch(er => console.log(er))
   
   }

useEffect(() =>{
    viewRecords()
}, [])
return (
    <div>
        <Fragment>
        <Title level={3} className="page-title-bar-title" >All Students</Title>
        <Row>

        <Col xs={24} className="join_text">
                          <Button
                            type="link"
                            onClick={()=>{history.push('/')}}
                           // style={{ float: "right" }}
                          >
                            Home Page
                          </Button>
                        </Col>
          
        </Row>
        <Row>
          <Col xs={24}>
              
            <Row gutter={[40, 16]}>
            
              {viewData &&
                viewData.map((d, index) => (
                  <Col className="gutter-row" span={6} key={index}>
                    <Card
                      hoverable
                      bordered
                      style={{ width: "80%", marginLeft: "30px" }}
                     // cover={<img alt="example" src={d.roomImageUrl} />}
                      className="join_cards"
                    >
                      <Row>
                      
                        <Col xs={24} className="join_text">
                          Student ID
                          <Typography.Text
                            className="join_text"
                            style={{ float: "right" }}
                            level={5}
                          >
                            {d.Student_ID}
                          </Typography.Text>
                        </Col>
                        <Col xs={24} className="join_text">
                          Firstname:
                          <Typography.Text
                            className="join_text"
                            style={{ float: "right" }}
                          >
                            {d.Firstname}
                          </Typography.Text>
                        </Col>
                        <Col xs={24} className="join_text">
                           Lastname
                          <Typography.Text
                            className="join_text"
                            style={{ float: "right" }}
                            level={5}
                          >
                            {d.Lastname}
                          </Typography.Text>
                        </Col>
                        <Col xs={24} className="join_text">
                          Email
                          <Typography.Text
                            className="join_text"
                            style={{ float: "right" }}
                            level={5}
                          >
                            {d.Email}
                          </Typography.Text>
                        </Col><Col xs={24} className="join_text">
                          Mailing Address
                          <Typography.Text
                            className="join_text"
                            style={{ float: "right" }}
                            level={5}
                          >
                            {d.Address}
                          </Typography.Text>
                        </Col><Col xs={24} className="join_text">
                          GPA
                          <Typography.Text
                            className="join_text"
                            style={{ float: "right" }}
                            level={5}
                          >
                            {d.GPA}
                          </Typography.Text>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        </Fragment>
    </div>
    );
}

export default Display;
