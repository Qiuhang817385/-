import React, { Component } from 'react'
import "./IQOO.scss";
import WrappedRegistrationForm from "../public/form/NormalLoginForm"
export default class IQOO extends Component {
   
    render() {
        const style={
            width:'300px',
            position:'absolute',
            margin:'0 auto',
            left:'0',
            right:'0',
            top:'100px'
        };
        return (
            <div className="wrapper">
                    <WrappedRegistrationForm style={style}></WrappedRegistrationForm>
            </div>
        )
    }
}