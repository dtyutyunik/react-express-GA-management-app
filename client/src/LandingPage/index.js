import React from 'react';

export default function LandingPage(props){
  return(
    <div>
      <div>

        <button onClick={()=>console.log('clicked')}>Courses</button>
        <button onClick={props.changeRegistration}>{props.info==="Register"?"Register":"Signed In" }</button>

      </div>
  <img className="stats" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4605/original/are-coding-bootcamps-worth-it-infographic.png" alt="notes"/>


    </div>
  )


}
