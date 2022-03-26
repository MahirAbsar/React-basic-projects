import React, { useEffect } from 'react';

function Alert({ msg, type, showAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <>
      <span className={`alert alert-${type}`}>{msg}</span>
    </>
  );
}

export default Alert;
