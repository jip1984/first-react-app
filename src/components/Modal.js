import React from 'react';
import './Modal.css'

function Modal({ children, isSalesModal }) {
  return <div className="modal-backdrop">
    <div className="modal" style={{
      border: '4px solid',
      borderColor: isSalesModal ? '#fff' : '#555',
      textAlign: 'center',
    }}>
      {children}
      {/* <button
        className={isSalesModal ? 'sales-btn' : ''}>Close</button> */}
    </div>
  </div>;
}

export default Modal;
