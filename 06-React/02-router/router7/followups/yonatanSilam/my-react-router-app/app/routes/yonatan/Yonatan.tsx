import { Link, Outlet } from "react-router";

function Yonatan() {
  return (
    <div style={{
        backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', flex: 1, height: "100vh", padding:
            "10px"
    }}>
        <h1>yonatan</h1>
        <Link to="">home</Link>
        <Link to="about">about</Link>
        
        <br></br>
        <Link to="noy">noy</Link>
        <br></br>
        <Outlet />
    </div>
)
}
export default Yonatan;
