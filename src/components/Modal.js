import React, { useEffect } from 'react';
import './modal.css';

const Modal = (props) => {
//   const closeOnEscapeKeyDown = (e) => {
//     if ((e.charCode || e.keyCode) === 27) {
//       props.onClose();
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener('keydown', closeOnEscapeKeyDown);
//     return function cleanup() {
//       document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
//     };
//   }, []);

  return (
      <div className='modal' >
        <div className='modal-content' >
          <div className='modal-header'>
            <h4 className='modal-title'> modal title</h4>
          </div>
          <div className='modal-body'>this is the modal content</div>
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
