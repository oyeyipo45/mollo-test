import React, { useEffect } from 'react';

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };


  return (
      <div className='modal' >
        <div className='modal-content' >
          <div className='modal-header'>
            <h4 className='modal-title'> picture</h4>
          </div>
          <div className='modal-body'>artist name</div>
          <div className='modal-footer'>
            <button  className='button'>
              Close
            </button>
          </div>
        </div>
      </div>
  );
};

export default Modal;
