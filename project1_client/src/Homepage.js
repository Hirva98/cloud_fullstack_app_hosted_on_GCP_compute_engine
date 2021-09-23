import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import Axios from 'axios'

const Homepage = () => {

    const history = useHistory()

return (
    <div>
        <Button onClick={()=>{history.push('/upload')}}>Upload a new Student</Button>
        <Button onClick={()=>{history.push('/search')}}>Search </Button>
        <Button onClick={()=>{history.push('/display')}}>Display</Button>
    </div>
    );

}
export default Homepage;
