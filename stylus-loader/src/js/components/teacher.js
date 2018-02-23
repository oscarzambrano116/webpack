import React from 'react';
import '../../css/teacher.styl';

function Teacher(props) {
  const {
    name,
    twitter,
  } = props;
  return (
    <li className="Teacher">
      {name} <a href={`https://twitter.com/${twitter}`} target="_blank" >{twitter}</a>
    </li>
  );
}

export default Teacher;
