import React, {Component} from 'react';
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import {Button, Form} from "react-bootstrap";
import FormFileInput from "react-bootstrap/FormFileInput";
import '../style/body.css'

class  Body extends Component{

    render() {

        const uploadFileButton = {

        };

        const chooseFile = {
            marginTop: '10px',
            marginLeft: '100px'
        };


        return (
            <React.Fragment >
                    <p className='h3'>Choose and Upload file for decompilation</p>
                    <ul >
                        <li> <input type='file' style={chooseFile}/></li>
                        <li><Button >Upload and Decompile</Button></li>
                    </ul>


            </React.Fragment>
        );
    }

}

export default Body;