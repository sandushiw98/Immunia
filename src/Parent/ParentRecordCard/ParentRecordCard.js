import React, { useEffect, useRef } from "react";
import "./ParentRecordCard.css";
import ParentNavbar from "../ParentNavbar/ParentNavbar";
import { Link } from "react-router-dom";
import { DownloadOutlined } from "@ant-design/icons";
import image1 from "../../assets/images/reminder.jpg";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import DownloadPDFButton from "../../components/DownloadPDFButton/DownloadPDFButton";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { useState } from "react";

import {
  Avatar,
  Col,
  Dropdown,
  Row,
  Card,
  Table,
  Divider,
  message,
  Button,
  Form,
  Input,
} from "antd";
import image2 from "../../assets/images/childprofile3.jpg";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const { Meta } = Card;

const columns = [
  {
    title: "Vaccine Type",
    dataIndex: "vaccine",
  },
  {
    title: "Dosage",
    dataIndex: "dosage",
  },

  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
];

const data = [
  {
    key: "1",
    date: "23/3/2022",
    dosage: "1st dose",
    vaccine: "Polio",
    location: "Lady Ridgway",
  },
  {
    key: "2",
    date: "9/4/2022",
    dosage: "2nd dose",
    vaccine: "Polio",
    location: "Lady Ridgway",
  },

  {
    key: "3",
    date: "3/5/2022",
    dosage: "3rd dose",
    vaccine: "Polio",
    location: "Lady Ridgway",
  },
  {
    key: "4",
    date: "14/7/2022",
    dosage: "1st dose",
    vaccine: "Sarampa",
    location: "National Hospital",
  },
];

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const data1 = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
];

const menuProps = {
  onClick: handleMenuClick,
};

const columnschild = [
  {
    title: <span class="vaccine_details">Vaccine</span>,
    dataIndex: "vaccine",
    key: "vaccine",
    width: 600,
  },
  {
    title: <span class="vaccine_details">Dosage</span>,
    dataIndex: "Dosage",
    key: "Dosage",
    width: 600,
  },
  {
    title: <span class="vaccine_details">Return Date</span>,
    dataIndex: "Return_Date",
    key: "Return_Date",
    width: 400,
  },
  {
    title: <span class="vaccine_details"></span>,
    dataIndex: "appointment",
    key: "appointment",
  },
];
const datachild = [
  {
    key: "1",
    vaccine: <span class="return">Sarampa</span>,
    Dosage: <span class="return">2nd Dose</span>,
    Return_Date: <span class="return">02/08/2022</span>,
    appointment: (
      <Link to="/parentsearch">
        <Button style={{ background: "red", color: "white" }}>
          Make Appointment
        </Button>
      </Link>
    ),
  },
];

const ParentRecordCard = () => {
  const cardRef = useRef(null); // Create a ref to the card element

  const [size, setSize] = useState("large");

  const dataweight = [
    {
      name: "January",
      One_Year: 240,
      Two_Year: 400,
      Three_Year: 600,
    },
    {
      name: "February",
      One_Year: 300,
      Two_Year: 350,
      Three_Year: 240,
    },
    {
      name: "March",
      One_Year: 500,
      Two_Year: 600,
      Three_Year: 650,
    },
    {
      name: "April",

      One_Year: 789,
      Two_Year: 400,
      Three_Year: 754,
    },
    {
      name: "May",

      One_Year: 890,
      Two_Year: 321,
      Three_Year: 678,
    },
    {
      name: "June",

      One_Year: 400,
      Two_Year: 700,
      Three_Year: 900,
    },
    {
      name: "July",

      One_Year: 690,
      Two_Year: 678,
      Three_Year: 890,
    },
    {
      name: "August",

      One_Year: 435,
      Two_Year: 678,
      Three_Year: 456,
    },
    {
      name: "September",

      One_Year: 890,
      Two_Year: 345,
      Three_Year: 567,
    },
    {
      name: "October",

      One_Year: 800,
      Two_Year: 899,
      Three_Year: 900,
    },
    {
      name: "November",

      One_Year: 1000,
      Two_Year: 289,
      Three_Year: 678,
    },
    {
      name: "December",

      One_Year: 800,
      Two_Year: 450,
      Three_Year: 800,
    },
  ];

  return (
    <div className="cover">
      <div ref={cardRef}>
      <Row>
        <ParentNavbar />
      </Row>
      <Row
        style={{
          paddingTop: "120px",
          paddingRight: "30px",
          display: "flex",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        {/* <DownloadPDFButton/> */}
     
          
        <Link to="../../ParentChildAccount" underline="none">
          <Button type="primary"> Create New + </Button>{" "}
        </Link>
      </Row>
      <Row>
        <Col span={10} style={{ paddingTop: "60px", paddingLeft: "150px" }}>
          <Card
            style={{
              width: 400,
            }}
            cover={<img alt="example" src={image2} />}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title=<span className="custom-table-header">
                Amani Wirathma Wimalaweera
              </span>
            />
          </Card>
        </Col>
        <Col span={14} className="childtable">
          <Card className="childshadow">
            <div className="childcontent">
              <table class="childclass">
                <tr>
                  <th>Vaccination Card ID:</th>
                  <td>C345</td>
                </tr>
                <tr>
                  <th>Age:</th>
                  <td>1 Year</td>
                </tr>
                <tr>
                  <th>Weight:</th>
                  <td>5kg 400g</td>
                </tr>
                <tr>
                  <th>Date Of Birth:</th>
                  <td> 2022/ 07/ 08</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td> Sulakshi, Temple Road, Colombo 8</td>
                </tr>
                <tr>
                  <th>Gender:</th>
                  <td>Female</td>
                </tr>
                <tr>
                  <th>Guardian Name:</th>
                  <td> Lakshmi Jasinghe</td>
                </tr>
                <tr>
                  <th>Contact Number:</th>
                  <td> 071-4020626</td>
                </tr>
              </table>
            </div>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          paddingTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#4281f5" }}>Child Vaccination Record Card</h1>
      </Row>

      <Row>
        <Table
          columns={columns}
          dataSource={data}
          style={{ width: 2000, padding: "30px" }}
          pagination={false}
        />
      </Row>
      <Row>
        <h2 style={{ paddingLeft: "30px" }}>Return Date</h2>
      </Row>
      <Row className="returndate">
        <Table
          columns={columnschild}
          dataSource={datachild}
          pagination={false}
          style={{
            width: "100%",
            paddingLeft: "20px",
            paddingRight: "20px",
            color: "red",
          }}
        />
        ;
      </Row>
      <Row
        style={{
          display: "flex",
          alignContent: "right",
          justifyContent: "right",
          paddingRight: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Button type="primary" icon={<DownloadOutlined />} size={size}><DownloadPDFButton cardRef={cardRef} /></Button>
      </Row>
      <Row
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          color: "#4281f5",
        }}
      >
        <h1>Your babies weight according to their first three year</h1>
      </Row>
      <Row style={{ paddingTop: "50px" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LineChart
            width={1800}
            height={500}
            data={dataweight}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{ value: "Month", position: "insideBottom" }}
            />
            <YAxis
              label={{ value: "Year", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="One_Year"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Two_Year" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Three_Year" stroke="#f5aa42" />
          </LineChart>
        </Col>
      </Row>

      <Row className="reminder">
        <Col span={10} style={{ paddingLeft: "50px" }}>
          <img
            src={image1}
            alt="girl"
            style={{ width: "70%", height: "70%", position: "fix" }}
          />
        </Col>
        <Col span={14}>
          <div class="notifications-container">
            <div class="alert">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 alert-svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>

                <div class="alert-prompt-wrap">
                  <h1>REMINDER</h1>
                  <p class="text-sm text-yellow-700">
                    Please keep this record card, it includes the medical
                    information, details and the vaccine you have received. This
                    card will show the next schedule of your vaccine. It is
                    important to show this card to the next vaccination schedule
                    for health officials to verify.
                    {/* <a class="alert-prompt-link" href="#">
                    Upgrade To Premium
                  </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default ParentRecordCard;
