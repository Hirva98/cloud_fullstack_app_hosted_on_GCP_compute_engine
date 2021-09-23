import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { AutoComplete, Button, Card, Col, Dropdown, Row, Typography,Menu, Divider,Input, Space ,} from 'antd'
import { DownOutlined, SearchOutlined,AudioOutlined  } from "@ant-design/icons";
import { serverPath }from './path'
import './Display.css'

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
  
  


return (
    <div>
        <Fragment>
        <Row>
          <Col xs={12}>
            <div class="main">
              <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>
                {" "}
                Search for Student information here
              </h2>
            </div>
          </Col>
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
        
        <Space direction="vertical">
    <Search placeholder="Search by id, fname or lname" onSearch={()=>{searchAll()}} onChange={(e) => {setSearchValue(e.target.value)}} style={{ width: 100 }} />
    
 
   
  </Space>
        {searchedData && searchedData.length > 0 && (
          <div>
            <Row>
              <Col xs={24}>
                <div class="main">
                  <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
                    {'Searched Students by  "' + searchValue + '"'}
                  </h4>
                </div>
              </Col>

              <Col xs={24}>
                <Row gutter={[40, 16]}>
                  {searchedData &&
                    searchedData.map((d, index) => (
                      <Col className="gutter-row" span={6} key={index}>
                        <Card
                          hoverable
                          bordered
                          style={{ width: "80%", marginLeft: "30px" }}
                          //cover={<img alt="example" src={d.roomImageUrl} />}
                          className="join_cards"
                        >
                          <Row>
                            <Col xs={24} className="join_text">
                             Student ID:
                              <Typography.Text
                                className="join_text"
                                style={{ float: "right" }}
                                level={5}
                              >
                                {d.Student_ID}
                              </Typography.Text>
                            </Col>
                            <Col xs={24} className="join_text">
                              Firstname:{" "}
                              <Typography.Text
                                className="join_text"
                                style={{ float: "right" }}
                              >
                                {d.Firstname}
                              </Typography.Text>
                            </Col>
                            <Col xs={24} className="join_text">
                              Lastname:{" "}
                              <Typography.Text
                                className="join_text"
                                style={{ float: "right" }}
                              >
                                {d.Lastname}
                              </Typography.Text>
                            </Col><Col xs={24} className="join_text">
                              Email:{" "}
                              <Typography.Text
                                className="join_text"
                                style={{ float: "right" }}
                              >
                                {d.Email}
                              </Typography.Text>
                            </Col><Col xs={24} className="join_text">
                              Mailing Address:{" "}
                              <Typography.Text
                                className="join_text"
                                style={{ float: "right" }}
                              >
                                {d.Address}
                              </Typography.Text>
                            </Col><Col xs={24} className="join_text">
                              GPA:{" "}
                              <Typography.Text
                                className="join_text"
                                style={{ float: "right" }}
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
            <Divider />
          </div>
        )}
        </Fragment>

    </div>
    );

}
export default Search;
