import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const Dashboard = () => {

  const [totalSites, setTotalSites] = useState(0);
  const [onlineSites, setOnlineSites] = useState(0);
  const [offlineSites, setOfflineSites] = useState(0);
  const [hddNotWorking, sethddNotWorking] = useState(0);
  const [cameraNotWorking, setCameraNotWorking] = useState(0)
  const [neveron, setNeveron] = useState(0)
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hddcalllog, setHddCallLog] = useState([]);
  const [rtspNotWorking, setRtspNotWorking] = useState([]);
  const [sdkNotWorking, setSdkNotWorking] = useState([]);
  const [aiNotWorking, setAiNotWorking] = useState([]);
  const [routerNotWorking, setRouterNotWorking] = useState([]);
  const [httpNotWorking, setHttpNotWorking] = useState([]);
  const [recNotAvailable, setrecNotAvailable] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = () => {
      axios.get(`http://localhost:2001/todayshddstatuschange`)
        .then((response) => {
          // console.log('Data from API:', response.data);
          setHddCallLog(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    function updateDateTime() {
      setCurrentDate(new Date());
    }
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  useEffect(() => {
    fetch("http://localhost:2001/TotalSites")
      .then(response => response.json())
      .then(data => setTotalSites(data.atmCount))
      .catch(error => console.error('Error fetching total number of sites:', error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:2001/CameraNotWorking")
      .then(response => response.json())
      .then(data => setCameraNotWorking(data.totalCount))
      .catch(error => console.error('Error fetching total number of sites:', error));
  }, []);
 
  useEffect(() => {
    fetch("http://localhost:2001/OnlineSites")
      .then(response => response.json())
      .then(data => setOnlineSites(data.online_count))
      .catch(error => console.error('Error fetching number of online sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/OfflineSites`)
      .then(response => response.json())
      .then(data => setOfflineSites(data.offline_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/hddnotworking`)
      .then(response => response.json())
      .then(data => sethddNotWorking(data.non_ok_hdd_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/neveron`)
      .then(response => response.json())
      .then(data => setNeveron(data.neveron))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/rtsp_not_working_count`)
      .then(response => response.json())
      .then(data => setRtspNotWorking(data.record_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/sdk_not_working_count`)
      .then(response => response.json())
      .then(data => setSdkNotWorking(data.record_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);
  useEffect(() => {

    fetch(`http://localhost:2001/ai_not_working_count`)
      .then(response => response.json())
      .then(data => setAiNotWorking(data.record_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/router_not_working_count`)
      .then(response => response.json())
      .then(data => setRouterNotWorking(data.record_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/http_not_working_count`)
      .then(response => response.json())
      .then(data => setHttpNotWorking(data.record_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2001/rec_not_available_count`)
      .then(response => response.json())
      .then(data => setrecNotAvailable(data.not_available_count))
      .catch(error => console.error('Error fetching number of offline sites:', error));
  }, []);



  return (
    <div className='container-fluid center '>
      <div className='d-flex flex-row justify-content-between '>
        <span style={{ fontSize: "14px", fontWeight: "700" }}>Allocations dashboard</span>
        <p style={{ fontSize: "14px", fontWeight: "700" }}>Dashboard as on date: {formattedDate}, {formattedTime}</p>
      </div>
      <table class="table table-bordered  table2 mt-2">
        <tr>
          <th ></th>
          <th colSpan="4">Sites</th>
          <th>Checktime</th>
          <th colSpan="5">Connection Failures</th>
          <th colSpan="5">Device Failures</th>
        </tr>
        <tr>
          <td>Group</td>
          <td>Total</td>
          <td>Online</td>
          <td>Offline</td>
          <td>Never On</td>
          <td>todays date</td>
          <td>Http</td>
          <td>Rtsp</td>
          <td>Router</td>
          <td>Sdk</td>
          <td>Ai</td>
          <td>Camera</td>
          <td>Disc</td>
          <td>Hdd Call log</td>
          <td>Record</td>
          <td>Time</td>
        </tr>
        <tr>
          <td style={{ color: "darkslateblue", fontWeight: "700" }}><Link to="/DemoTable" style={{ textDecoration: "none", color: "inherit" }}>All Sites</Link></td>
          <td>{totalSites}</td>
          <td style={{ color: "green", fontWeight: "700" }}><Link to="/OnlineSites" style={{ textDecoration: "none", color: "inherit" }}>{onlineSites}</Link></td>
          <td style={{ color: "red", fontWeight: "700" }}><Link to="/OfflineSites" style={{ textDecoration: "none", color: "inherit" }}>{offlineSites}</Link></td>
          <td style={{ color: "red", fontWeight: "700" }}>
            <Link to="/NeverOnSites" style={{ textDecoration: "none", color: "inherit" }}>
              {neveron}
            </Link>
          </td>
          <td>3/4/2024</td>
          <td style={{ color: "red", fontWeight: "700" }}>
            <Link to="/HttpPortNotWorkingDetails" style={{ textDecoration: "none", color: "inherit" }}>
              {httpNotWorking}
            </Link>
          </td>

          <td style={{ color: "red", fontWeight: "700" }}>
            <Link to="/RtspPortNotWorkingDetails" style={{ textDecoration: "none", color: "inherit" }}>
              {rtspNotWorking}
            </Link>
          </td>


          <td style={{ color: "red", fontWeight: "700" }}>
            <Link to="/RouterPortNotWorkingDetails" style={{ textDecoration: "none", color: "inherit" }}>
              {routerNotWorking}
            </Link>
          </td>

          <td style={{ color: "red", fontWeight: "700" }}>
            <Link to="/SdkpPortNotWorkingDetails" style={{ textDecoration: "none", color: "inherit" }}>
              {sdkNotWorking}
            </Link>
          </td>

          <td style={{ color: "red", fontWeight: "700" }}>
            <Link to="/AiPortNotWorkingDetails" style={{ textDecoration: "none", color: "inherit" }}>
              {aiNotWorking}
            </Link>
          </td>
          <td>{cameraNotWorking}</td>
          <td style={{ color: "red", fontWeight: "700" }}><Link to="/HddNotWorkingSites" style={{ textDecoration: "none", color: "inherit" }}>{hddNotWorking}</Link></td>
          <td><p
            className='ml-3'
            style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={handleOpenModal}
          >
              view
          </p></td>
          <td style={{ color: "red", fontWeight: "700" }}>
            <Link to="/RecNotAvailable" style={{ textDecoration: "none", color: "inherit" }}>
            {recNotAvailable}
            </Link>
          </td>
          <td>88</td>
        </tr>
      </table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>HDD Call Log </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ATM ID</th>
                <th>Previous Status</th>
                <th>Current Status</th>
              </tr>
            </thead>
            <tbody>
              {hddcalllog.map((item) => (
                <tr key={item.atmid}>
                  <td style={{ color: 'darkblue', fontWeight: 'bold', fontSize: '13px' }} >{item.atmid}</td>
                  <td style={{ color: 'green', fontWeight: 'bold', fontSize: '13px' }}>{item.previous_status}</td>
                  <td style={{ color: 'red', fontWeight: 'bold', fontSize: '13px' }}>{item.current_status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Dashboard