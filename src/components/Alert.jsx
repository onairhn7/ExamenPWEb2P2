import React from 'react';

function Alert({ mensaje }) {
  return (
    <div className="alert alert-info" role="alert">
      {mensaje}
    </div>
  );
}

export default Alert;
