import React from 'react';

 function FullTimeDetails(props) {
  return (

    <div className="item">
    hey
      <div>{props.title}, {props.description}, {props.details}, {props.price}</div>
    </div>
  )
}
 export default FullTimeDetails;
