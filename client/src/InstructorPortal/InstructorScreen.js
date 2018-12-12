import React from 'react';
import InstructorPortal from './index'

 function InstructorScreen(props) {
  return (
    <div>
      <h3>Instructor Students</h3>
      {props.students.map(eachStudent => (
        <PlacesItemsLook
          key={eachStudent.id}
          id={eachStudent.id}
          name={eachStudent.name}
        />
      ))}
    </div>
  );
}
 export default InstructorScreen;
