import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";

class NavigationBar extends Component{

    render() {
        const customStyle = {
            marginTop: "10px",
        };
       return <React.Fragment>

           <Navbar  bg="dark" variant="dark">
               <Navbar.Brand href="#home">Online Decompiler</Navbar.Brand>
           </Navbar>

       </React.Fragment>

    }
}
export default NavigationBar;