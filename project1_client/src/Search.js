import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { AutoComplete, Button, Card, Col, Dropdown, Row, Typography,Menu, Divider,Input, Space ,Table} from 'antd'
import { DownOutlined, SearchOutlined,AudioOutlined  } from "@ant-design/icons";
import { serverPath }from './path'
import './Search.css'


const { Title } = Typography
const Search = () => {

    const { Search } = Input;
    const history = useHistory()
      
    
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  
  const onSearch = value => setSearchValue(value);
  
  useEffect(() => {
    if (searchValue === "") {
      setSearchedData([]);
    }
  }, [searchValue]);

  {
    /* For searching all the rooms with roomname or genre*/
  }
  const searchAll = () => {  
        Axios.post(serverPath.local + '/api/all/' , {
          
          searchValue :searchValue
        })
         
          .then((res) => {
            
            setSearchedData(res.data);
          })
          .catch((er) => {
            console.log("get failed");
            console.log(er);
          });
    
  };
  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'Student_ID',
      key: 'Student_ID',
     
    },
    {
      title: 'Firstname',
      dataIndex: 'Firstname',
      key: 'Firstname',
    },
    {
      title: 'Lastname',
      dataIndex: 'Lastname',
      key: 'Lastname',
    },
    {
      title: 'Email',
      key: 'Email',
      dataIndex: 'Email',
    },
    {
      title: 'Mailing Address',
      key: 'Mailing Address',
      dataIndex: 'Address',
    },
    {
      title: 'GPA',
      key: 'GPA',
      dataIndex: 'GPA',
    },
  ];

  


return (
    <div>
        <Fragment>
        <Title level={3} className="page-title-bar-title" >Search for a Student here</Title>
        <Row>
            <Col className="place">
                <Button  className="button-placement"  onClick={()=>{history.push('/')}}>Home Page</Button>
            </Col>
        </Row>
        
        <Space className="search_bar" direction="vertical">
          <Search placeholder="Search by id, fname or lname" onSearch={()=>{searchAll()}} onChange={(e) => {setSearchValue(e.target.value)}} style={{ width: 100 }} />
    
 
   
       </Space>
      <Row>
          <Col xs={24}>
          <Table columns={columns} dataSource={searchedData} />
          </Col>
        </Row>
          
       
        </Fragment>

    </div>
    );

}
export default Search;
