import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import DemoTable from './Pages/DemoTable';
import OnlineSites from './Pages/OnlineSites';
import OfflineSites from './Pages/OfflineSites';
import HddNotWorkingSites from './Pages/HddNotWorkingSites';
import NeverOnSites from './Pages/NeverOnSites';
import Hdd from './Pages/Hdd';
import DistributedHddData from './Pages/DistributedHddData';
import NotExist from './Pages/NotExist';
import NoDisk from './Pages/NoDisk';
import NoDiscIdle from './Pages/NoDiscIdle';
import Unformatted from './Pages/Unformatted';
import Abnormal from './Pages/Abnormal';
import Null from './Pages/Null';
import HttpPortNotWorkingDetails from './Pages/HttpPortNotWorkingDetails';
import SdkPortNotWorkingDetails from './Pages/SdkPortNotWorkingDetails';
import RouterPortNotWorkingDetails from './Pages/RouterPortNotWorkingDetails';
import AiPortNotWorkingDetails from './Pages/AiPortNotWorkingDetails';
import RtspPortNotWorkingDetails from './Pages/RtspPortNotWorkingDetails';
import RecNotAvailable from './Pages/RecNotAvailable';
import DeviceHistory from './Pages/DeviceHistory';




const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/DemoTable' element={<DemoTable />} />
        <Route path='/OnlineSites' element={<OnlineSites />} />
        <Route path='/OfflineSites' element={<OfflineSites />} />
        <Route path='/HddNotWorkingSites' element={<HddNotWorkingSites />} />
        <Route path='/NeverOnSites' element={<NeverOnSites />} />
        <Route path='/Hdd' element={<Hdd />} />
        <Route path='/DistributedHddData' element={<DistributedHddData />} />
        <Route path="NotExist" element={<NotExist />} />
        <Route path="NoDisk" element={<NoDisk />} />
        <Route path="NoDiscIdle" element={<NoDiscIdle />} />
        <Route path="Unformatted" element={<Unformatted />} />
        <Route path="Abnormal" element={<Abnormal />} />
        <Route path="Error" element={<Error />} />
        <Route path="Null" element={<Null />} />
        <Route path="HttpPortNotWorkingDetails" element={<HttpPortNotWorkingDetails />} />
        <Route path="SdkPortNotWorkingDetails" element={<SdkPortNotWorkingDetails />} />
        <Route path="RouterpPortNotWorkingDetails" element={<RouterPortNotWorkingDetails />} />
        <Route path="AipPortNotWorkingDetails" element={<AiPortNotWorkingDetails />} />
        <Route path="RtspPortNotWorkingDetails" element={<RtspPortNotWorkingDetails />} />
        <Route path="RecNotAvailable" element={<RecNotAvailable />} />
        <Route path="DeviceHistory/:atmId" element={<DeviceHistory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App