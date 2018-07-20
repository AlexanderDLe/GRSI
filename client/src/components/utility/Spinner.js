import React from 'react';
import Spinner from '../../img/Spinner.gif';

export default () => {
  return (
    <div>
      <img src={Spinner} alt="Loading..." className="spinner" />
    </div>
  );
};
