import React, { Component } from 'react';
import style from "./Footer.module.css"
class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <h4>
Copyright ©  2010-2022 All rights reserved</h4>
            </div>
        );
    }
}

export default Footer;