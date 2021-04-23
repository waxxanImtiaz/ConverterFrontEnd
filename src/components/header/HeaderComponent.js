import React, {Component} from "react";
import '../style/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./NavigationBar";
import LeftNavBar from "../LeftNavBar/LeftNavBar";

class HeaderComponent extends Component{

    render() {
        return (<div className="mainDiv">
            {/*<h1 className='primary'>This is header component</h1>*/}
            <div>
            <NavigationBar />
            <LeftNavBar />
            </div>
        </div>)
    }
}

export default HeaderComponent;