import logo from './logo.svg';
import './UploadPage.css';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import Axios from 'axios'
import { serverPath }from './path'

const { Title } = Typography
const UploadPage = () => {

  const history = useHistory()

  const [Student_ID,setStudentId] = useState('')
  const [Firstname,setFirstname] = useState('')
  const [Lastname,setLastname] = useState('')
  const [Email,setEmail] = useState('')
  const[Address,setAddress] = useState('')
  const[GPA,setGpa] = useState('')
  const [error, setError] = useState('')

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  const filldata = () => {
    var data ={
      Student_ID : Student_ID,
      Firstname : Firstname,
      Lastname : Lastname,
      Email: Email,
      Address: Address,
      GPA: GPA
    }
    console.log(data)
        
        Axios.post(serverPath.local +'/students/signup', {
          Student_ID : Student_ID,
          Firstname : Firstname,
          Lastname : Lastname,
          Email: Email,
          Address: Address,
          GPA: GPA
        })
        .then(res => {
            // if (res.data.success) {                    
            //    console.log('done')
              
            // } else {
            //     setError(res.data.msg)
            // }
		console.log('hi')            
		console.log(res)
        })
        .catch(er => console.log(er))
  }
  
  return (
    <div>
      <Title level={3} className="page-title-bar-title" >Upload a Student here</Title>
      <Row>
      <Col className="join_text">
                          <Button
                            type="link"
                            onClick={()=>{history.push('/')}}
                           // style={{ float: "right" }}
                          >
                            Home Page
                          </Button>
                        </Col>
                        </Row>
      <Form 
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="StudentID"
        name="StudentID"
        className="form_component"
        rules={[{ required: true, message: 'Please input your StudentID!' }]}
      >
        <Input onChange={(e)=>{setStudentId(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="Firstname"
        name="Firstname"
        className="form_component"
        rules={[{ required: true, message: 'Please input your Firstname!' }]}
      >
        <Input onChange={(e) => {setFirstname(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="Lastname"
        className="form_component"
        rules={[{ required: true, message: 'Please input your Lastname!' }]}
      >
        <Input onChange={(e) => {setLastname(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="Email"
        className="form_component"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input onChange={(e) => {setEmail(e.target.value)}}/>
      </Form.Item>

      <Form.Item
        label="Mailing Address"
        name="Mailingaddress"
        className="form_component"
        rules={[{ required: true, message: 'Please input your Mailingaddress!' }]}
      >
        <Input.TextArea onChange={(e) => {setAddress(e.target.value)}}/>
      </Form.Item>
    </Form>

    <Form.Item
        label="GPA"
        name="Gpa"
        rules={[{ required: true, message: 'Please input your Gpa!' }]}
        className="form_component"
      >
        <Input onChange={(e) => {setGpa(e.target.value)}}/>
      </Form.Item>

      <Form.Item 
        className="form_submit"
        >
          <Button type="primary" onClick={()=>{filldata()}}>Submit</Button>
        </Form.Item>

    </div>
  );
}

export default UploadPage;
