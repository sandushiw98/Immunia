import { Col, Row } from "antd";
import "./ParentCenter.css";
import { Button, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import {PlusOutlined} from "@ant-design/icons"
import ParentNavbar from "../ParentNavbar/ParentNavbar";


const ViewCenter = () => {
  const [dataSource, setDataSource] = useState([
    {
      id: "0",
      mobile: "32",
      location: "London, Park Lane no. 0",
      name0fDirector : "R.J.Perera",
      type : "MOH"

    },
    {
      id: "1",
      mobile: "32",
      location: "London, Park Lane no. 1",
      name0fDirector : "R.J.Perera",
      type : "MOH"
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const columns = [
    {
      title: "Center ID",
      dataIndex: "id",
       filters: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
      ],
      filteredValue: filteredInfo.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
     
    },
    {
      title: "Location",
      dataIndex: "location",
      filters: [
        {
          text: "Boralla",
          value: "Boralla",
        },
        {
          text: "Maradana",
          value: "Maradana",
        },
      ],
      filteredValue: filteredInfo.location || null,
      onFilter: (value, record) => record.location.includes(value),
      sorter: (a, b) => a.location.length - b.location.length,
      sortOrder: sortedInfo.columnKey === "location" ? sortedInfo.order : null,
      ellipsis: true,
     
      
    },
    {
      title: "Contact Numner",
      dataIndex: "mobile",
      orter: (a, b) => a.mobile - b.mobile,
      sortOrder: sortedInfo.columnKey === "mobile" ? sortedInfo.order : null,
      ellipsis: true,
      
    },
    {
      title: "Director's Name",
      dataIndex: "name0fDirector",
      orter: (a, b) => a.name0fDirector - b.name0fDirector,
      sortOrder: sortedInfo.columnKey === "name0fDirector" ? sortedInfo.order : null,
      ellipsis: true,
      
    },
    {
      title: "Center Type",
      dataIndex: "type",
      filters: [
        {
          text: "MOH",
          value: "BMOH",
        },
        {
          text: "Hospital",
          value: "Hospital",
        },
      ],
      filteredValue: filteredInfo.location || null,
      onFilter: (value, record) => record.type.includes(value),
      sorter: (a, b) => a.type.length - b.type.length,
      sortOrder: sortedInfo.columnKey === "type" ? sortedInfo.order : null,
      ellipsis: true,
      
    },
    
  ];

  
  return (
    <>
     <ParentNavbar />
      <Row style={{paddingTop:'100px'}}>
        <Col span={24}>
          <h1 className="heading"> Vaccination Centers</h1>
        </Col>
      </Row>
      <Row style={{ padding:'20px', display: 'flex', justifyContent: 'right', alignContent: 'right' }}>
        <Col  className="center-searchbar">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search Centers" type="search" class="input" />
          </div>
        </Col>
      </Row>
      <Row style={{ padding:'20px 20px 105px 20px' }} >
        <Col  span={24}>

          <Table
            
            
            bordered 
            pagination = {false}
            dataSource={dataSource}
            columns={columns}
          />
        </Col>
      </Row>
    </>
  );
};

export default ViewCenter;
