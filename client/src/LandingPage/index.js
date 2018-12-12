import React from 'react';
import { Menu, Icon } from 'antd';
import HeaderNav from './HeaderNav';
import LandingBody from './LandingBody';
export default class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <HeaderNav />
                <LandingBody />
                 {/*{this.props.children}*/}
                {/*<img className="stats"
                     src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4605/original/are-coding-bootcamps-worth-it-infographic.png"
                     alt="notes"/>*/}
            </div>
        );
    }
}
