import './../../assets/css/miscellaneous/spinner.css';
import React from 'react';

const Spinner: React.FC = () => {

  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-div"></div>
        <div className="spinner-div"></div>
        <div className="spinner-div"></div>
        <div className="spinner-div"></div>
      </div>
    </div>
  )
}

export default Spinner;