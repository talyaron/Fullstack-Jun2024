import React from 'react'
import { Link, Outlet } from 'react-router'


const Dashbord = () => {
  return (
    <div style={{
        backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', flex: 1, height: "100vh", padding:
            "10px"
    }}>
      <h1>The main dashbord</h1>
      <br /><br />
      <div style={{margin: '2rem', display: 'grid'}}>
      <Link to="" style={{backgroundColor:'yellow'}}>Cart new new 2029</Link>
      <br /><br />
      <Link to="chatBot" style={{backgroundColor:'pink'}}>Chat Bot 2025</Link>
      
      <br /><br />
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashbord