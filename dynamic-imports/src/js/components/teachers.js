import React, { Component } from 'react';
import Teacher from './teacher';
import '../../css/teachers.scss';

class Teachers extends Component {
  render() {
    const {
      data: {
        teachers,
      },
    } = this.props;
    return (
      <ul className="Teachers">
        {
          teachers.map((teacherData, index) => (
            <Teacher
              key={index}
              {...teacherData}
            />
          ))
        }
      </ul>
    );
  }
}

export default Teachers;
